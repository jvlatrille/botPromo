document.addEventListener('DOMContentLoaded', () => {
    // --- Gestion du menu mobile ---
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        // Change l'icône du menu
        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fermer le menu mobile lors d'un clic sur un lien
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // --- Gestion du Dark Mode ---
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Vérifier la préférence système au chargement
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

    // --- Active Link on Scroll & Sub-link handling ---
    const sections = document.querySelectorAll('section, .command-detail');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        // Logique pour déterminer quelle section est visible
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Offset pour que le lien s'active un peu avant d'atteindre le haut exact
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            // Si le lien pointe vers la section courante
            if (a.getAttribute('href') === '#' + current) {
                a.classList.add('active');

                // Gestion des sous-menus : si on active un sous-lien, on active aussi le parent
                const parentLi = a.closest('.nav-sub-links');
                if (parentLi) {
                    parentLi.closest('li').querySelector('a').classList.add('active');
                }
            }
        });
    });

    // --- Bouton Copier pour les blocs de code ---
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Trouve le code à l'intérieur de la balise <pre> parente
            const codeBlock = btn.closest('pre').querySelector('code');
            const code = codeBlock.innerText;

            navigator.clipboard.writeText(code).then(() => {
                const originalText = btn.innerText;
                btn.innerText = 'Copié !';
                btn.style.background = 'rgba(16, 185, 129, 0.2)'; // Vert succès

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                }, 2000);
            });
        });
    });
});
