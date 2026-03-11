document.addEventListener('DOMContentLoaded', () => {
    // =========================
    // i18n (FR / EN / EU)
    // =========================
    const languesDisponibles = ['fr', 'en', 'es', 'eu'];
    let traductions = {};
    let langueActuelle = 'fr';

    const langDropdown = document.getElementById('langDropdown');
    const langDropBtn = document.getElementById('langDropBtn');
    const langOptionsList = document.querySelectorAll('.lang-option');
    const currentLangIcon = document.getElementById('currentLangIcon');
    const currentLangText = document.getElementById('currentLangText');

    const drapeauMap = {
        fr: '🇫🇷',
        en: '🇬🇧',
        es: '🇪🇸',
        eu: '<img src="images/drapeauBasque.svg" class="svg-flag">'
    };

    function lireLangueURL() {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        return lang ? lang.toLowerCase() : null;
    }

    function lireLangueNavigateur() {
        const brut = (navigator.language || 'fr').toLowerCase();
        return brut.split('-')[0];
    }

    function valeurPourCle(obj, cle) {
        return cle.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
    }

    async function chargerDico(langue) {
        const varName = `i18n_${langue}`;
        if (window[varName]) {
            return window[varName];
        } else {
            throw new Error(`Dictionnaire i18n/${langue}.js non chargé`);
        }
    }

    function appliquerTraductions(dico) {
        // Texte / HTML
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const cle = el.getAttribute('data-i18n');
            const val = valeurPourCle(dico, cle);
            if (val === undefined) return;

            const veutHtml = el.hasAttribute('data-i18n-html');
            if (veutHtml) el.innerHTML = val;
            else el.textContent = val;
        });

        // Titres (title="")
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const cle = el.getAttribute('data-i18n-title');
            const val = valeurPourCle(dico, cle);
            if (val !== undefined) el.setAttribute('title', val);
        });

        // head
        const titleEl = document.querySelector('title[data-i18n="head.title"]');
        if (titleEl) {
            const valTitle = valeurPourCle(dico, 'head.title');
            if (valTitle) titleEl.textContent = valTitle;
        }

        const metaDesc = document.getElementById('metaDescription');
        if (metaDesc) {
            const valDesc = valeurPourCle(dico, 'head.description');
            if (valDesc) metaDesc.setAttribute('content', valDesc);
        }

        // lang html
        document.documentElement.setAttribute('lang', langueActuelle);

        // optionnel : met à jour le texte des boutons copy déjà présents (si tu veux)
        document.querySelectorAll('.copy-btn[data-i18n="ui.copy"]').forEach(btn => {
            const valCopy = valeurPourCle(dico, 'ui.copy');
            if (valCopy) btn.textContent = valCopy;
        });
    }

    function majUIBoutonsLangue(langue) {
        langOptionsList.forEach(b => b.classList.toggle('active', b.dataset.lang === langue));
        if (drapeauMap[langue]) {
            currentLangIcon.innerHTML = drapeauMap[langue];
            currentLangText.textContent = langue.toUpperCase();
        }
    }

    function majURLLangue(langue) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', langue);
        history.replaceState({}, '', url);
    }

    async function definirLangue(langue, { syncURL = false } = {}) {
        const cible = languesDisponibles.includes(langue) ? langue : 'fr';

        try {
            const dico = await chargerDico(cible);
            traductions = dico;
            langueActuelle = cible;

            localStorage.setItem('langue_site', langueActuelle);
            appliquerTraductions(traductions);
            majUIBoutonsLangue(langueActuelle);
            if (syncURL) majURLLangue(langueActuelle);
        } catch (e) {
            console.error(e);
            // fallback safe
            if (langueActuelle !== 'fr') {
                langueActuelle = 'fr';
                majUIBoutonsLangue('fr');
            }
        }
    }

    // init langue
    const urlLang = lireLangueURL();
    const memLang = (localStorage.getItem('langue_site') || '').toLowerCase();
    const navLang = lireLangueNavigateur();

    const langueInitiale =
        (urlLang && languesDisponibles.includes(urlLang) && urlLang) ||
        (memLang && languesDisponibles.includes(memLang) && memLang) ||
        (languesDisponibles.includes(navLang) ? navLang : 'fr');

    // Toggle dropdown
    langDropBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    // Fermer le dropdown si on clique ailleurs
    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });

    // click options langue
    langOptionsList.forEach(btn => {
        btn.addEventListener('click', () => {
            definirLangue(btn.dataset.lang, { syncURL: true });
        });
    });

    // lance i18n
    definirLangue(langueInitiale, { syncURL: !!urlLang });

    // =========================
    // Menu mobile
    // =========================
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');

        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // =========================
    // Dark mode
    // =========================
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // init préférence système
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

    // =========================
    // Active link au scroll
    // =========================
    const sections = document.querySelectorAll('section, .command-detail');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + current) {
                a.classList.add('active');

                const parentUl = a.closest('.nav-sub-links');
                if (parentUl) {
                    parentUl.closest('li').querySelector('a').classList.add('active');
                }
            }
        });
    });

    // =========================
    // Bouton Copier (i18n)
    // =========================
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.closest('pre')?.querySelector('code');
            if (!codeBlock) return;

            const code = codeBlock.innerText;

            navigator.clipboard.writeText(code).then(() => {
                const originalText = btn.innerText;

                const texteCopie = (traductions.ui && traductions.ui.copied) ? traductions.ui.copied : 'Copié !';
                btn.innerText = texteCopie;
                btn.style.background = 'rgba(16, 185, 129, 0.2)';

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                }, 2000);
            });
        });
    });
});
