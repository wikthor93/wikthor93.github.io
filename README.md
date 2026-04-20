# DNW Blog – Statyczna strona

## Struktura plików

```
dnw-static/
├── index.html       ← strona główna
├── blog.html        ← lista wszystkich wpisów
├── post.html        ← pojedynczy wpis
├── style.css        ← wszystkie style
├── content.js       ← WSZYSTKIE TREŚCI (edytuj tutaj lub przez admin/)
├── app.js           ← logika JS (nie trzeba edytować)
├── img/
│   ├── hero.jpg     ← zdjęcie w sekcji hero (wgraj swoje)
│   └── author.jpg   ← zdjęcie autora (wgraj swoje)
└── admin/
    └── index.html   ← panel edycji (otwórz w przeglądarce)
```

---

## Formularz kontaktowy – Formspree (BEZPŁATNY)

1. Idź na https://formspree.io → Sign Up (bezpłatne konto)
2. Kliknij **"New Form"** → podaj swój email → skopiuj ID (np. `xpzgkwqv`)
3. Otwórz `index.html` i znajdź linię:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Zamień `YOUR_FORM_ID` na swoje ID:
   ```html
   <form id="contact-form" action="https://formspree.io/f/xpzgkwqv"
   ```
5. Gotowe! Wiadomości będą trafiać na Twój email.

> Darmowy plan Formspree: do 50 wiadomości/miesiąc. Bez limitu przy weryfikacji email.

**Alternatywa:** Panel Admin → zakładka "Formularz kontakt" przeprowadzi Cię przez konfigurację.

---

## Panel edycji treści

Otwórz `admin/index.html` w przeglądarce.

**Możesz:**
- Dodawać, edytować i usuwać wpisy blogowe (PL/DE/EN)
- Edytować materiały (ikona, typ, tytuł, opis, link)
- Zmieniać tłumaczenia interfejsu
- **Eksportować** gotowy `content.js` → zastąp nim plik na serwerze

---

## Edycja wpisów ręcznie

Otwórz `content.js` w edytorze tekstu (VS Code, Notepad++).

Każdy wpis to obiekt w tablicy `posts`:
```js
{
  id: "moj-wpis",          // slug URL (bez polskich liter)
  date: "2026-04-16",
  featured: true,           // true = duży kafelek
  image: "img/wpis.jpg",    // lub "" jeśli brak
  category: { pl:"Filozofia", de:"Philosophie", en:"Philosophy" },
  title:    { pl:"Tytuł", de:"Titel", en:"Title" },
  excerpt:  { pl:"Krótki opis...", de:"...", en:"..." },
  content:  { pl:"<h2>Treść HTML</h2><p>...</p>", de:"...", en:"..." }
}
```

---

## GitHub Pages (hosting)

1. Załóż repo na github.com
2. Wgraj wszystkie pliki
3. Settings → Pages → Source: main branch / root
4. Strona będzie dostępna pod: `https://TWOJ-LOGIN.github.io/REPO/`

Formularz Formspree działa też na GitHub Pages.

---

## Zdjęcia

Wgraj do folderu `img/`:
- `hero.jpg` – zdjęcie okładki (najlepiej pionowe, min 800px szerokości)
- `author.jpg` – zdjęcie autora (min 600px)
- Zdjęcia wpisów: podaj ścieżkę `img/nazwa.jpg` w polu "URL zdjęcia" w edytorze
