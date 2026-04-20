/* =====================================================
   DNW APP v2.0 – Animacje i interakcje
   ===================================================== */
(function () {
  'use strict';

  let currentLang = localStorage.getItem('dnw_lang') || 'pl';

  /* ──────────────────────────────────────────────────
     i18n
  ────────────────────────────────────────────────── */
  function t(key) { return (DNW.i18n[currentLang] || DNW.i18n.pl)[key] || key; }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-value]').forEach(el => { el.value = t(el.dataset.i18nValue); });
    document.querySelectorAll('select option[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.documentElement.lang = currentLang;
  }

  window.setLang = function(lang) {
    currentLang = lang;
    localStorage.setItem('dnw_lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    applyTranslations();
    renderPosts();
    renderMaterials();
  };

  /* ──────────────────────────────────────────────────
     CUSTOM CURSOR
  ────────────────────────────────────────────────── */
  function initCursor() {
    if (window.matchMedia('(hover:none)').matches) return;

    const dot  = document.createElement('div'); dot.className  = 'cursor-dot';
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = -100, my = -100, rx = -100, ry = -100;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    // Ring follows with lag
    function animateCursor() {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverEls = 'a, button, .card, .mat-item, .btn, .lang-btn, .filter-btn';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverEls)) ring.classList.add('hovered');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverEls)) ring.classList.remove('hovered');
    });

    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
  }

  /* ──────────────────────────────────────────────────
     SCROLL PROGRESS BAR
  ────────────────────────────────────────────────── */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress') || (() => {
      const b = document.createElement('div'); b.id = 'scroll-progress'; document.body.prepend(b); return b;
    })();

    window.addEventListener('scroll', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ──────────────────────────────────────────────────
     SCROLL REVEAL
  ────────────────────────────────────────────────── */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => el.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
  }

  /* ──────────────────────────────────────────────────
     HERO PARALLAX (image scrolls slower)
  ────────────────────────────────────────────────── */
  function initHeroParallax() {
    const img = document.querySelector('.hero-img');
    if (!img) return;

    // Reveal on load
    img.addEventListener('load', () => img.classList.add('loaded'));
    if (img.complete) img.classList.add('loaded');

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          img.style.transform = `scale(1) translateY(${y * 0.22}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }

  /* ──────────────────────────────────────────────────
     HEADER — shrink + hide on scroll
  ────────────────────────────────────────────────── */
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    let lastY = 0;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 80) header.classList.add('scrolled'); else header.classList.remove('scrolled');
      lastY = y;
    }, { passive: true });
  }

  /* ──────────────────────────────────────────────────
     MOBILE NAV
  ────────────────────────────────────────────────── */
  function initMobileNav() {
    const btn = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ──────────────────────────────────────────────────
     BACK TO TOP
  ────────────────────────────────────────────────── */
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Powrót na górę');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ──────────────────────────────────────────────────
     ABOUT SECTION — in-view class + animated counters
  ────────────────────────────────────────────────── */
  function initAbout() {
    const img = document.querySelector('.about-img');
    const footer = document.querySelector('.site-footer');

    if (!('IntersectionObserver' in window)) {
      if (img) img.classList.add('in-view');
      if (footer) footer.classList.add('in-view');
      return;
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in-view'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.2 });

    if (img) obs.observe(img);
    if (footer) obs.observe(footer);
  }

  /* ──────────────────────────────────────────────────
     ANIMATED COUNTERS
  ────────────────────────────────────────────────── */
  function animateCounter(el, target, duration) {
    const start = performance.now();
    const isFloat = String(target).includes('.');
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      el.textContent = isFloat ? val.toFixed(1) : Math.floor(val).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString();
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const target = parseFloat(en.target.dataset.count);
          animateCounter(en.target, target, 1600);
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => obs.observe(el));
  }

  /* ──────────────────────────────────────────────────
     RENDER POSTS
  ────────────────────────────────────────────────── */
  function svgPlaceholder(id) {
    const map = {
      'droga-bez-kompromisow':     `<svg width="100" height="100" viewBox="0 0 100 100" fill="none"><polygon points="50,10 90,85 10,85" stroke="#c0392b" stroke-width="2.5" fill="none" opacity=".5"/><circle cx="50" cy="57" r="7" fill="#c0392b" opacity=".7"/></svg>`,
      'zasady-zelaznej-dyscypliny':`<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="14" y="18" width="52" height="6" rx="1" fill="#c0392b" opacity=".6"/><rect x="14" y="30" width="38" height="4" rx="1" fill="#888" opacity=".4"/><rect x="14" y="40" width="45" height="4" rx="1" fill="#888" opacity=".4"/><rect x="11" y="12" width="4" height="56" rx="1" fill="#c0392b" opacity=".8"/></svg>`,
      'mistrzostwo-czasu':         `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="28" stroke="#c0392b" stroke-width="2" fill="none" opacity=".5"/><line x1="40" y1="14" x2="40" y2="40" stroke="#c0392b" stroke-width="2"/><line x1="40" y1="40" x2="56" y2="40" stroke="#888" stroke-width="1.5"/><circle cx="40" cy="40" r="3" fill="#c0392b"/></svg>`,
      'kodeks-wojownika':          `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M40 14 L48 34 L68 34 L53 46 L59 66 L40 54 L21 66 L27 46 L12 34 L32 34 Z" stroke="#c0392b" stroke-width="2" fill="none" opacity=".6"/></svg>`,
      'jak-mierzyc-postep':        `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="18" y="50" width="8" height="20" fill="#c0392b" opacity=".7"/><rect x="32" y="36" width="8" height="34" fill="#c0392b" opacity=".85"/><rect x="46" y="24" width="8" height="46" fill="#c0392b" opacity=".9"/><rect x="60" y="14" width="8" height="56" fill="#c0392b"/></svg>`,
      'wewnetrzny-ogien':          `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M40 18 Q55 28 58 40 Q55 55 40 62 Q25 55 22 40 Q25 28 40 18 Z" stroke="#c0392b" stroke-width="2" fill="none" opacity=".5"/><circle cx="40" cy="40" r="5" fill="#c0392b" opacity=".9"/></svg>`,
    };
    return map[id] || `<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="25" stroke="#c0392b" stroke-width="1.5" fill="none" opacity=".4"/></svg>`;
  }

  function renderPosts() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    const posts = DNW.posts.slice(0, 6);
    grid.innerHTML = posts.map((p, i) => {
      const isFirst = i === 0;
      const imgHtml = p.image
        ? `<img src="${p.image}" alt="${p.title[currentLang]}" loading="${isFirst ? 'eager' : 'lazy'}">`
        : `<div class="card-no-thumb">${svgPlaceholder(p.id)}</div>`;
      return `
        <article class="card${isFirst ? ' featured' : ''} reveal delay-${Math.min(i+1,6)}" style="background:${p.bg};">
          <a href="post.html?id=${p.id}" style="display:contents;">
            ${imgHtml}
            <div class="card-body">
              <div class="card-cat">${p.category[currentLang] || ''}</div>
              <div class="card-title">${p.title[currentLang]}</div>
              <p class="card-excerpt">${p.excerpt[currentLang]}</p>
              <span class="card-arrow">${t('read_more') || 'Czytaj dalej'}</span>
            </div>
          </a>
        </article>`;
    }).join('');

    // Re-observe new cards
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); } });
      }, { threshold: 0.1 });
      grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    } else {
      grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  }

  /* ──────────────────────────────────────────────────
     RENDER MATERIALS
  ────────────────────────────────────────────────── */
  function renderMaterials() {
    const grid = document.getElementById('mat-grid');
    if (!grid) return;
    grid.innerHTML = DNW.materials.map((m, i) => `
      <a href="${m.link}" class="mat-item reveal delay-${Math.min(i+1,6)}">
        <span class="mat-icon">${m.icon}</span>
        <div class="mat-type">${m.type[currentLang]}</div>
        <div class="mat-name">${m.title[currentLang]}</div>
        <p class="mat-desc">${m.desc[currentLang]}</p>
      </a>`).join('');

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); } });
      }, { threshold: 0.1 });
      grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    } else {
      grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  }

  /* ──────────────────────────────────────────────────
     CONTACT FORM — validation + loading + char counter
  ────────────────────────────────────────────────── */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Char counter on textarea
    const textarea = form.querySelector('textarea[name="message"]');
    if (textarea) {
      const counter = document.createElement('span');
      counter.className = 'char-count';
      counter.textContent = '0 / 800';
      textarea.parentElement.style.position = 'relative';
      textarea.parentElement.appendChild(counter);
      textarea.addEventListener('input', () => {
        const len = textarea.value.length;
        counter.textContent = `${len} / 800`;
        counter.classList.toggle('warn', len > 720);
        if (len > 800) textarea.value = textarea.value.slice(0, 800);
      });
    }

    // Inline validation on blur
    form.querySelectorAll('input[required], textarea[required]').forEach(el => {
      el.addEventListener('blur', () => {
        el.classList.toggle('invalid', !el.value.trim());
      });
      el.addEventListener('input', () => {
        if (el.value.trim()) el.classList.remove('invalid');
      });
    });

    const btn = document.getElementById('submit-btn');
    if (btn && !btn.querySelector('.btn-text')) {
      const text = btn.textContent;
      btn.innerHTML = `<span class="btn-text">${text}</span><span class="btn-spinner"></span>`;
    }

    const ok  = document.getElementById('form-success');
    const err = document.getElementById('form-error');

    form.addEventListener('submit', async e => {
      e.preventDefault();

      // Validate
      let valid = true;
      form.querySelectorAll('input[required], textarea[required]').forEach(el => {
        if (!el.value.trim()) { el.classList.add('invalid'); valid = false; }
      });
      if (!valid) return;

      btn.classList.add('loading');
      if (ok) { ok.classList.remove('show'); ok.style.display = 'none'; }
      if (err) { err.classList.remove('show'); err.style.display = 'none'; }

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          if (ok) { ok.style.display = 'block'; requestAnimationFrame(() => ok.classList.add('show')); }
          form.reset();
          if (textarea) { const c = form.querySelector('.char-count'); if(c) c.textContent = '0 / 800'; }
        } else throw new Error();
      } catch {
        if (err) { err.style.display = 'block'; requestAnimationFrame(() => err.classList.add('show')); }
      } finally {
        btn.classList.remove('loading');
      }
    });
  }

  /* ──────────────────────────────────────────────────
     SINGLE POST PAGE — reading progress + render
  ────────────────────────────────────────────────── */
  function renderPost() {
    const container = document.getElementById('post-container');
    if (!container) return;

    const params = new URLSearchParams(location.search);
    const post   = DNW.posts.find(p => p.id === params.get('id'));

    if (!post) { container.innerHTML = '<p style="padding:6rem 2rem;color:var(--muted)">Nie znaleziono wpisu.</p>'; return; }

    document.title = post.title[currentLang] + ' – DNW';
    const content  = post.content[currentLang] || post.content.pl;

    container.innerHTML = `
      <div class="post-header">
        <span class="post-cat">${post.category[currentLang]}</span>
        <h1 class="post-title">${post.title[currentLang]}</h1>
        <p class="post-meta">${post.date} &nbsp;·&nbsp; <span>Wiktor Karpowicz</span></p>
      </div>
      ${post.image ? `<div class="post-featured"><img src="${post.image}" alt="${post.title[currentLang]}"></div>` : ''}
      <div class="post-body">${content}</div>`;

    // Reading progress bar
    const bar = document.createElement('div'); bar.id = 'post-progress'; document.body.prepend(bar);
    const body = container.querySelector('.post-body');
    window.addEventListener('scroll', () => {
      if (!body) return;
      const rect = body.getBoundingClientRect();
      const total = body.offsetHeight - window.innerHeight;
      const progress = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0;
      bar.style.width = (progress * 100) + '%';
    }, { passive: true });
  }

  /* ──────────────────────────────────────────────────
     BLOG ARCHIVE
  ────────────────────────────────────────────────── */
  function renderBlogArchive() {
    const grid = document.getElementById('blog-archive-grid');
    if (!grid) return;

    const cat      = new URLSearchParams(location.search).get('cat');
    const filtered = cat ? DNW.posts.filter(p => p.category.pl.toLowerCase().includes(cat)) : [...DNW.posts];

    grid.innerHTML = filtered.map((p, i) => {
      const imgHtml = p.image
        ? `<img src="${p.image}" alt="${p.title[currentLang]}" loading="lazy">`
        : `<div class="card-no-thumb">${svgPlaceholder(p.id)}</div>`;
      return `
        <article class="card reveal delay-${Math.min(i%3+1,6)}" style="background:${p.bg};">
          <a href="post.html?id=${p.id}" style="display:contents;">
            ${imgHtml}
            <div class="card-body">
              <div class="card-cat">${p.category[currentLang]}</div>
              <div class="card-title">${p.title[currentLang]}</div>
              <p class="card-excerpt">${p.excerpt[currentLang]}</p>
              <span class="card-arrow">${t('read_more') || 'Czytaj dalej'}</span>
            </div>
          </a>
        </article>`;
    }).join('');

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); } });
      }, { threshold: 0.08 });
      grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    } else {
      grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }

    // Filter buttons
    const filtersEl = document.getElementById('blog-filters');
    if (filtersEl) {
      const cats = [...new Set(DNW.posts.map(p => p.category.pl))];
      filtersEl.innerHTML =
        `<button class="filter-btn${!cat ? ' active' : ''}" onclick="filterBlog('')">${t('blog_title') || 'Wszystkie'}</button>` +
        cats.map(c => `<button class="filter-btn${cat === c.toLowerCase() ? ' active' : ''}" onclick="filterBlog('${c.toLowerCase()}')">${c}</button>`).join('');
    }
  }

  window.filterBlog = function(cat) {
    const url = new URL(location.href);
    if (cat) url.searchParams.set('cat', cat); else url.searchParams.delete('cat');
    history.pushState({}, '', url);
    renderBlogArchive();
  };

  /* ──────────────────────────────────────────────────
     ADD REVEAL CLASSES to static HTML elements
  ────────────────────────────────────────────────── */
  function addRevealClasses() {
    // Section labels & titles
    document.querySelectorAll('.section-label').forEach(el => el.classList.add('reveal'));
    document.querySelectorAll('.section-title').forEach(el => el.classList.add('reveal','delay-1'));

    // Quote band text
    const qb = document.querySelector('.quote-band blockquote');
    if (qb) qb.classList.add('reveal-scale');
    const qc = document.querySelector('.quote-band cite');
    if (qc) qc.classList.add('reveal','delay-2');

    // About content paragraphs
    document.querySelectorAll('.about-content p').forEach((el, i) => el.classList.add('reveal', `delay-${i+1}`));
    const aboutBtn = document.querySelector('.about-content .btn');
    if (aboutBtn) aboutBtn.classList.add('reveal','delay-3');

    // Form groups
    document.querySelectorAll('.form-group').forEach((el, i) => el.classList.add('reveal', `delay-${Math.min(i+1,6)}`));
    const submitArea = document.querySelector('#submit-btn');
    if (submitArea) submitArea.closest('.form-group, div')?.classList.add('reveal','delay-4');

    // Footer items
    document.querySelectorAll('.footer-inner > *').forEach((el, i) => el.classList.add('reveal', `delay-${i+1}`));

    // About stats
    document.querySelectorAll('.about-stats .stat').forEach((el, i) => el.classList.add('reveal-scale', `delay-${i+1}`));
  }

  /* ──────────────────────────────────────────────────
     INIT
  ────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    // Set active lang button
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));

    applyTranslations();
    addRevealClasses();
    initReveal();
    initCursor();
    initScrollProgress();
    initHeroParallax();
    initHeader();
    initMobileNav();
    initBackToTop();
    initAbout();
    initCounters();
    initContactForm();

    renderPosts();
    renderMaterials();

    if (document.getElementById('post-container'))    renderPost();
    if (document.getElementById('blog-archive-grid')) renderBlogArchive();
  });

})();
