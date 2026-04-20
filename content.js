/* =====================================================
   DNW CONTENT — edytuj tutaj treści strony
   ===================================================== */
const DNW = {

  /* ── TŁUMACZENIA ─────────────────────────────────── */
  i18n: {
    pl: {
      nav_blog:"Blog", nav_mat:"Materiały", nav_about:"O autorze", nav_contact:"Kontakt",
      hero_tag:"Wiktor Karpowicz",
      hero_title:"Droga<br><em>Nowoczesnego</em><br>Wojownika",
      hero_sub:"Siła · Umysł · Honor",
      hero_desc:"Nie jesteś gotowy — jeszcze. Ale każdy krok na tej drodze zmienia cię w kogoś, kto jest.",
      hero_cta1:"Czytaj blog", hero_cta2:"Materiały",
      blog_label:"Artykuły", blog_title:"Ostatnie wpisy", blog_more:"Wszystkie wpisy →",
      quote_text:"„Droga wojownika nie kończy się na arenie — zaczyna się w zwierciadle."",
      quote_author:"— Wiktor Karpowicz",
      mat_label:"Do pobrania i nauki", mat_title:"Materiały",
      about_label:"O autorze", about_name:"Wiktor Karpowicz",
      about_p1:"Wojownik, autor, mentor. Od ponad dekady zgłębia filozofię siły, honoru i świadomego życia — łącząc tradycje bojowe z psychologią nowoczesnego człowieka.",
      about_p2:"Jego misja: pomóc mężczyznom odzyskać cel, odwagę i wewnętrzny kręgosłup — bez kompromisów, bez usprawiedliwień.",
      about_cta:"Poznaj materiały",
      contact_label:"Napisz do mnie", contact_title:"Kontakt",
      contact_desc:"Masz pytanie? Chcesz umówić sesję coachingową? Napisz — odpiszę w ciągu 48 godzin.",
      form_name:"Imię i nazwisko", form_name_ph:"Jan Kowalski",
      form_email:"E-mail", form_email_ph:"jan@example.com",
      form_topic:"Temat", form_topic_choose:"Wybierz temat",
      form_topic_coaching:"Coaching indywidualny", form_topic_workshop:"Warsztaty",
      form_topic_book:"Książka / materiały", form_topic_other:"Inne",
      form_msg:"Wiadomość", form_msg_ph:"Napisz tutaj...",
      form_send:"Wyślij wiadomość",
      form_ok:"✓ Wiadomość wysłana! Odpiszę wkrótce.",
      form_err:"✗ Błąd wysyłania. Spróbuj ponownie lub napisz bezpośrednio.",
      form_subject:"Nowa wiadomość z DNW Blog",
      footer_copy:"© 2026 Droga Nowoczesnego Wojownika. Wszelkie prawa zastrzeżone.",
      read_more:"Czytaj dalej →",
    },
    de: {
      nav_blog:"Blog", nav_mat:"Materialien", nav_about:"Über mich", nav_contact:"Kontakt",
      hero_tag:"Wiktor Karpowicz",
      hero_title:"Der Weg des<br><em>Modernen</em><br>Kriegers",
      hero_sub:"Stärke · Geist · Ehre",
      hero_desc:"Du bist noch nicht bereit — noch nicht. Aber jeder Schritt auf diesem Weg macht dich zu dem, der es ist.",
      hero_cta1:"Blog lesen", hero_cta2:"Materialien",
      blog_label:"Artikel", blog_title:"Neueste Beiträge", blog_more:"Alle Beiträge →",
      quote_text:"„Der Weg des Kriegers endet nicht in der Arena — er beginnt im Spiegel."",
      quote_author:"— Wiktor Karpowicz",
      mat_label:"Downloads & Lernen", mat_title:"Materialien",
      about_label:"Über den Autor", about_name:"Wiktor Karpowicz",
      about_p1:"Krieger, Autor, Mentor. Seit über einem Jahrzehnt erforscht er die Philosophie von Stärke, Ehre und bewusstem Leben.",
      about_p2:"Seine Mission: Männern helfen, ihren Sinn, ihren Mut und ihr inneres Rückgrat zurückzugewinnen — ohne Kompromisse.",
      about_cta:"Materialien entdecken",
      contact_label:"Schreib mir", contact_title:"Kontakt",
      contact_desc:"Hast du eine Frage? Möchtest du ein Coaching-Gespräch vereinbaren? Schreib mir — ich antworte innerhalb von 48 Stunden.",
      form_name:"Vor- und Nachname", form_name_ph:"Max Mustermann",
      form_email:"E-Mail", form_email_ph:"max@beispiel.de",
      form_topic:"Thema", form_topic_choose:"Thema wählen",
      form_topic_coaching:"Einzelcoaching", form_topic_workshop:"Workshop",
      form_topic_book:"Buch / Materialien", form_topic_other:"Sonstiges",
      form_msg:"Nachricht", form_msg_ph:"Schreib hier...",
      form_send:"Nachricht senden",
      form_ok:"✓ Nachricht gesendet! Ich melde mich bald.",
      form_err:"✗ Fehler beim Senden. Bitte versuche es erneut.",
      form_subject:"Neue Nachricht vom DNW Blog",
      footer_copy:"© 2026 Droga Nowoczesnego Wojownika. Alle Rechte vorbehalten.",
      read_more:"Weiterlesen →",
    },
    en: {
      nav_blog:"Blog", nav_mat:"Resources", nav_about:"About", nav_contact:"Contact",
      hero_tag:"Wiktor Karpowicz",
      hero_title:"The Path of the<br><em>Modern</em><br>Warrior",
      hero_sub:"Strength · Mind · Honor",
      hero_desc:"You are not ready — not yet. But every step on this path transforms you into someone who is.",
      hero_cta1:"Read the blog", hero_cta2:"Resources",
      blog_label:"Articles", blog_title:"Latest posts", blog_more:"All posts →",
      quote_text:"\"The warrior's path doesn't end in the arena — it begins in the mirror.\"",
      quote_author:"— Wiktor Karpowicz",
      mat_label:"Downloads & Learning", mat_title:"Resources",
      about_label:"About the author", about_name:"Wiktor Karpowicz",
      about_p1:"Warrior, author, mentor. For over a decade he has explored the philosophy of strength, honor and conscious living.",
      about_p2:"His mission: to help men reclaim their purpose, courage and inner backbone — without compromise, without excuses.",
      about_cta:"Explore resources",
      contact_label:"Write to me", contact_title:"Contact",
      contact_desc:"Have a question? Want to schedule a coaching session? Write to me — I'll reply within 48 hours.",
      form_name:"Full name", form_name_ph:"John Smith",
      form_email:"Email", form_email_ph:"john@example.com",
      form_topic:"Subject", form_topic_choose:"Choose a topic",
      form_topic_coaching:"1-on-1 coaching", form_topic_workshop:"Workshop",
      form_topic_book:"Book / resources", form_topic_other:"Other",
      form_msg:"Message", form_msg_ph:"Write here...",
      form_send:"Send message",
      form_ok:"✓ Message sent! I'll reply soon.",
      form_err:"✗ Sending failed. Please try again.",
      form_subject:"New message from DNW Blog",
      footer_copy:"© 2026 Droga Nowoczesnego Wojownika. All rights reserved.",
      read_more:"Read more →",
    }
  },

  /* ── WPISY BLOGOWE ───────────────────────────────── */
  posts: [
    {
      id: "droga-bez-kompromisow",
      featured: true,
      date: "2026-04-10",
      category: { pl:"Filozofia wojownika", de:"Kriegerphilosophie", en:"Warrior philosophy" },
      title: { pl:"Droga bez kompromisów", de:"Der Weg ohne Kompromisse", en:"The path without compromise" },
      excerpt: { pl:"Nowoczesny wojownik nie szuka wygody — szuka wzrostu. Każde wyzwanie to okazja do przekroczenia własnych granic i stania się kimś więcej.", de:"Der moderne Krieger sucht keine Bequemlichkeit — er sucht Wachstum. Jede Herausforderung ist eine Chance.", en:"The modern warrior doesn't seek comfort — he seeks growth. Every challenge is a chance to exceed his own limits." },
      image: "",
      bg: "linear-gradient(150deg,#1a0805,#0d0d0d)",
      content: {
        pl: "<h2>Czym jest droga wojownika?</h2><p>Droga wojownika to nie tylko walka fizyczna. To codzienny wybór — wybór trudniejszej ścieżki, gdy łatwiejsza jest dostępna. Wybór prawdy, gdy kłamstwo byłoby wygodniejsze.</p><p>Każdy z nas stoi codziennie przed tym wyborem. I to właśnie te codzienne decyzje tworzą charakter.</p><blockquote>Charakter to nie to, co robisz na widoku. To, co robisz, gdy nikt nie patrzy.</blockquote><h2>Praktyka bez kompromisów</h2><p>Kompromis z własną słabością jest największym wrogiem wzrostu. Kiedy mówisz sobie „jutro", „może", „tym razem wystarczy" — oddajesz pole temu, kim mógłbyś się nie stać.</p><p>Zacznij od małych decyzji. Wstań o wyznaczonej porze. Wykonaj trening, nawet gdy nie masz ochoty. Dotrzymaj słowa danego sobie samemu.</p>",
        de: "<h2>Was ist der Weg des Kriegers?</h2><p>Der Weg des Kriegers ist nicht nur körperlicher Kampf. Es ist eine tägliche Wahl — die schwierigere Weg zu wählen, wenn der leichtere verfügbar ist.</p><p>Jeder von uns steht täglich vor dieser Wahl. Und genau diese täglichen Entscheidungen formen den Charakter.</p>",
        en: "<h2>What is the warrior's path?</h2><p>The warrior's path is not just physical combat. It's a daily choice — choosing the harder path when the easier one is available.</p><p>Each of us faces this choice every day. And it's these daily decisions that build character.</p><blockquote>Character is not what you do in public. It's what you do when no one is watching.</blockquote>"
      }
    },
    {
      id: "zasady-zelaznej-dyscypliny",
      featured: false,
      date: "2026-03-28",
      category: { pl:"Trening", de:"Training", en:"Training" },
      title: { pl:"5 zasad żelaznej dyscypliny", de:"5 Prinzipien eiserner Disziplin", en:"5 principles of iron discipline" },
      excerpt: { pl:"Dyscyplina nie jest darem — to nawyk budowany codziennie, krok po kroku, decyzja po decyzji.", de:"Disziplin ist kein Geschenk — sie ist eine täglich aufgebaute Gewohnheit.", en:"Discipline is not a gift — it's a habit built every single day." },
      image: "",
      bg: "linear-gradient(150deg,#0d0d0d,#1a1008)",
      content: { pl:"<h2>Zasada pierwsza: wstań wcześniej</h2><p>Pierwsze godziny dnia należą do tych, którzy je zdobędą. Wstawaj 30 minut wcześniej i przeznacz ten czas na siebie — na ciało lub umysł.</p>", de:"<h2>Prinzip eins: früher aufstehen</h2><p>Die ersten Stunden des Tages gehören denen, die sie sich verdienen.</p>", en:"<h2>Principle one: wake up earlier</h2><p>The first hours of the day belong to those who earn them.</p>" }
    },
    {
      id: "mistrzostwo-czasu",
      featured: false,
      date: "2026-03-15",
      category: { pl:"Umysł", de:"Geist", en:"Mind" },
      title: { pl:"Mistrzostwo czasu", de:"Meisterschaft der Zeit", en:"Mastery of time" },
      excerpt: { pl:"Jak wojownicy zarządzają swoją energią i koncentracją — praktyczny przewodnik.", de:"Wie Krieger ihre Energie und Konzentration verwalten.", en:"How warriors manage their energy and focus — a practical guide." },
      image: "",
      bg: "linear-gradient(150deg,#0d0d0d,#081018)",
      content: { pl:"<h2>Czas to zasób nieodnawialny</h2><p>W odróżnieniu od pieniędzy, zdrowia czy energii — czasu nie można odzyskać. Każda zmarnowana godzina to godzina, której nie będzie.</p>", de:"<h2>Zeit ist eine nicht erneuerbare Ressource</h2><p>Im Gegensatz zu Geld, Gesundheit oder Energie — Zeit kann nicht zurückgewonnen werden.</p>", en:"<h2>Time is a non-renewable resource</h2><p>Unlike money, health or energy — time cannot be recovered. Every wasted hour is an hour that won't come back.</p>" }
    },
    {
      id: "kodeks-wojownika",
      featured: false,
      date: "2026-03-02",
      category: { pl:"Honor", de:"Ehre", en:"Honor" },
      title: { pl:"Kodeks współczesnego wojownika", de:"Kodex des modernen Kriegers", en:"Code of the modern warrior" },
      excerpt: { pl:"Zasady, które odróżniają prawdziwych wojowników od tłumu.", de:"Die Grundsätze, die echte Krieger von der Masse unterscheiden.", en:"The principles that separate true warriors from the crowd." },
      image: "",
      bg: "linear-gradient(150deg,#0d0d0d,#100810)",
      content: { pl:"<h2>Kodeks to kompas</h2><p>W świecie chaosu i relatywizmu — kodeks jest kotwicą. Zbiorem zasad, do których wracasz, gdy wszystko wokół traci sens.</p>", de:"<h2>Ein Kodex ist ein Kompass</h2><p>In einer Welt des Chaos und Relativismus ist ein Kodex ein Anker.</p>", en:"<h2>A code is a compass</h2><p>In a world of chaos and relativism — a code is an anchor. A set of principles to return to when everything loses meaning.</p>" }
    },
    {
      id: "jak-mierzyc-postep",
      featured: false,
      date: "2026-02-18",
      category: { pl:"Wzrost", de:"Wachstum", en:"Growth" },
      title: { pl:"Jak mierzyć postęp", de:"Wie man Fortschritt misst", en:"How to measure progress" },
      excerpt: { pl:"Nie porównuj się do innych. Mierz się z wczorajszym sobą.", de:"Vergleiche dich nicht mit anderen. Miss dich am gestrigen Selbst.", en:"Don't compare yourself to others. Measure yourself against yesterday's self." },
      image: "",
      bg: "linear-gradient(150deg,#0d0d0d,#0d1508)",
      content: { pl:"<h2>Jedyny rywal, który się liczy</h2><p>Media społecznościowe stworzyły kulturę porównywania. Widzisz efekty czyjejś wieloletniej pracy i porównujesz je do swojego startu.</p>", de:"<h2>Der einzige Rivale, der zählt</h2><p>Soziale Medien haben eine Vergleichskultur geschaffen.</p>", en:"<h2>The only rival who matters</h2><p>Social media has created a culture of comparison. You see the results of someone's years of work and compare them to your beginning.</p>" }
    },
    {
      id: "wewnetrzny-ogien",
      featured: false,
      date: "2026-02-05",
      category: { pl:"Duchowość", de:"Spiritualität", en:"Spirituality" },
      title: { pl:"Wewnętrzny ogień", de:"Das innere Feuer", en:"The inner fire" },
      excerpt: { pl:"Źródło siły, której nie wyczerpujesz — a ją rozpalasz.", de:"Die Kraftquelle, die du nicht erschöpfst — sondern entfachst.", en:"The source of strength you don't exhaust — you ignite it." },
      image: "",
      bg: "linear-gradient(150deg,#0d0d0d,#15100a)",
      content: { pl:"<h2>Ogień, który nie gaśnie</h2><p>Jest w każdym człowieku coś, co nie umiera. Coś, co wraca nawet po upadkach. Cel. Powołanie. Wewnętrzny ogień.</p>", de:"<h2>Das Feuer, das nicht erlischt</h2><p>In jedem Menschen gibt es etwas, das nicht stirbt.</p>", en:"<h2>The fire that doesn't die</h2><p>There is something in every person that doesn't die. Something that returns even after falls. Purpose. Calling. The inner fire.</p>" }
    }
  ],

  /* ── MATERIAŁY ───────────────────────────────────── */
  materials: [
    {
      icon: "📘",
      type: { pl:"E-book · PDF", de:"E-Book · PDF", en:"E-book · PDF" },
      title: { pl:"Droga Nowoczesnego Wojownika", de:"Der Weg des modernen Kriegers", en:"The Path of the Modern Warrior" },
      desc: { pl:"Pełna wersja książki w formacie PDF. 240 stron filozofii, praktyki i kodu wojownika.", de:"Die vollständige Buchversion als PDF. 240 Seiten Philosophie, Praxis und Kriegerkodex.", en:"Complete book in PDF format. 240 pages of philosophy, practice and warrior code." },
      link: "#"
    },
    {
      icon: "▶",
      type: { pl:"Wideo · Kurs", de:"Video · Kurs", en:"Video · Course" },
      title: { pl:"Trening umysłu wojownika", de:"Training des Kriegergeistes", en:"Warrior mindset training" },
      desc: { pl:"6-tygodniowy program wideo — mindset, dyscyplina, cel. Dostęp online.", de:"6-wöchiges Videoprogramm — Mindset, Disziplin, Ziel.", en:"6-week video program — mindset, discipline, purpose. Online access." },
      link: "#"
    },
    {
      icon: "✉",
      type: { pl:"Newsletter", de:"Newsletter", en:"Newsletter" },
      title: { pl:"Tygodnik Wojownika", de:"Der Krieger-Wochenbericht", en:"The Warrior Weekly" },
      desc: { pl:"Co tydzień: 1 myśl, 1 ćwiczenie, 1 wyzwanie. Bezpłatny.", de:"Jede Woche: 1 Gedanke, 1 Übung, 1 Herausforderung. Kostenlos.", en:"Every week: 1 thought, 1 exercise, 1 challenge. Free." },
      link: "#kontakt"
    },
    {
      icon: "👤",
      type: { pl:"Coaching · 1:1", de:"Coaching · 1:1", en:"Coaching · 1:1" },
      title: { pl:"Indywidualne sesje", de:"Einzelsitzungen", en:"Private sessions" },
      desc: { pl:"Praca bezpośrednio z Wiktorem. Limitowana liczba miejsc. Aplikuj poniżej.", de:"Direkte Arbeit mit Wiktor. Begrenzte Plätze. Jetzt bewerben.", en:"Work directly with Wiktor. Limited spots. Apply below." },
      link: "#kontakt"
    },
    {
      icon: "⬡",
      type: { pl:"Warsztaty · Live", de:"Workshop · Live", en:"Workshop · Live" },
      title: { pl:"Intensyw weekendowy", de:"Wochenend-Intensivkurs", en:"Weekend intensive" },
      desc: { pl:"2 dni intensywnej pracy grupowej. Ciało, umysł, kodeks.", de:"2 Tage intensive Gruppenarbeit. Körper, Geist, Kodex.", en:"2 days of intensive group work. Body, mind, code." },
      link: "#kontakt"
    },
    {
      icon: "★",
      type: { pl:"Społeczność", de:"Gemeinschaft", en:"Community" },
      title: { pl:"Braterstwo Wojowników", de:"Bruderschaft der Krieger", en:"Brotherhood of Warriors" },
      desc: { pl:"Zamknięta grupa online. Wzajemne wsparcie, accountability, misja.", de:"Geschlossene Online-Gruppe. Gegenseitige Unterstützung, Accountability.", en:"Private online group. Mutual support, accountability, shared mission." },
      link: "#kontakt"
    }
  ]
};
