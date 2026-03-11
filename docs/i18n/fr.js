window.i18n_fr = {
    "head": {
        "title": "Documentation BotPromo IUT Bayonne",
        "description": "Notice d'installation et d'utilisation pour le Bot Discord de l'IUT de Bayonne."
    },
    "ui": {
        "themeToggleTitle": "Changer de thème",
        "copy": "Copier",
        "copied": "Copié !"
    },
    "sidebar": {
        "doc": "Documentation",
        "campus": "IUT Bayonne - Anglet"
    },
    "nav": {
        "intro": "Introduction",
        "prerequis": "Prérequis",
        "config": "Configuration",
        "installation": "Installation",
        "commandes": "Commandes",
        "autresCommandes": "Autres commandes",
        "troubleshoot": "Dépannage"
    },
    "intro": {
        "titre": "Introduction",
        "p1": "Bienvenue sur la documentation du <strong>BotPromo</strong>. Ce bot Discord est un outil développé spécifiquement pour faciliter la vie étudiante à l'IUT de Bayonne.",
        "p2": "Il centralise des informations essentielles en temps réel : synchronisation des emplois du temps (via fichiers ICS), vérification de la disponibilité des salles informatiques et de TD, et consultation des créneaux des professeurs.",
        "alertIntelligent": "<strong>Intelligent :</strong> Le bot gère automatiquement les semaines paires/impaires et les groupes de TD/TP pour afficher les informations pertinentes."
    },
    "prerequis": {
        "titre": "Prérequis techniques",
        "p1": "Avant de vous lancer dans l'installation, assurez-vous de disposer des éléments suivants :",
        "liToken": "<strong>Token Discord :</strong> Vous devez avoir créé une application et un bot sur le <a href=\"https://discord.com/developers/applications\" target=\"_blank\">Discord Developer Portal</a> pour obtenir ce token.",
        "liSources": "<strong>Fichiers sources :</strong> L'intégralité du dossier du projet (incluant les dossiers <code>Cogs</code>, <code>EDT</code>, etc.).",
        "liEnvStrong": "Environnement d'exécution :",
        "liDocker": "Recommandé : <strong>Docker</strong> et <strong>Docker Compose</strong>.",
        "liPython": "Alternatif : <strong>Python 3.9</strong> ou supérieur et <strong>pip</strong>."
    },
    "config": {
        "titre": "Configuration Initiale (Obligatoire)",
        "p1": "Cette étape est cruciale pour le bon fonctionnement du bot, quelle que soit la méthode d'installation choisie.",
        "h3Secret": "1. Création du fichier confidentiel",
        "pSecret": "Pour des raisons de sécurité, le token du bot ne doit jamais être partagé. Créez un fichier nommé <code>confidentiel.py</code> à la racine du projet.",
        "h3Semestre": "2. Configuration du Semestre",
        "pSemestre1": "Le bot a besoin de connaître le semestre actuel pour charger les bons emplois du temps (S1/S3 vs S2/S4).",
        "pSemestre2": "Vous devez définir une variable d'environnement nommée <code>SEMESTER</code> :",
        "liSem1": "Valeur <code>1</code> : Pour un semestre impair (Automne).",
        "liSem2": "Valeur <code>2</code> : Pour un semestre pair (Printemps)."
    },
    "install": {
        "titre": "Installation et Lancement",
        "p1": "Choisissez l'une des deux méthodes ci-dessous. La méthode Docker est fortement recommandée pour sa simplicité et sa stabilité.",
        "methodeA": "Méthode A : Via Docker (Recommandée)",
        "pA1": "Le fichier <code>docker-compose.yaml</code> est déjà prêt. Il vous suffit de configurer les variables d'environnement directement dans ce fichier ou dans un fichier <code>.env</code>.",
        "pA2": "<strong>1. Configuration dans docker-compose.yaml :</strong>",
        "pA3": "<strong>2. Lancement :</strong>",
        "pA4": "Ouvrez un terminal dans le dossier du projet et exécutez :",
        "methodeB": "Méthode B : Installation Manuelle (Python)",
        "liB1": "Installez les dépendances : <code>pip install -r requirements.txt</code>",
        "liB2": "Définissez la variable d'environnement <code>SEMESTER</code> sur votre système (ex: <code>export SEMESTER=1</code> sous Linux).",
        "liB3": "Lancez le bot : <code>python main.py</code>"
    },
    "cmds": {
        "titre": "Commandes Disponibles",
        "p1": "Le bot utilise les \"Slash Commands\" de Discord modernes. Tapez <code>/</code> dans un salon autorisé pour voir la liste.",
        "p2": "Voici le détail de l'utilisation et le résultat de chaque commande.",
        "salles": {
            "p1": "Cette commande analyse les emplois du temps en temps réel pour trouver les salles de cours non occupées.",
            "li1": "Affiche une liste des salles actuellement libres.",
            "li2": "Trie les résultats : les salles libres pour la plus longue durée apparaissent en premier.",
            "li3": "Indique l'heure jusqu'à laquelle la salle reste libre.",
            "caption": "Exemple : La commande affiche que la salle 124 est libre jusqu'à 15h30."
        },
        "infosalle": {
            "p1": "Obtenez le statut détaillé d'une salle spécifique. Vous devez fournir le numéro ou le nom de la salle en paramètre (ex: <code>124</code>, <code>15</code>, <code>Info 1</code>).",
            "li1": "Indique si la salle est actuellement occupée ou libre.",
            "li2": "Si occupée : précise quel cours a lieu et jusqu'à quelle heure.",
            "li3": "Si libre : précise quand commence le prochain cours.",
            "li4": "Affiche le planning des prochains créneaux de la journée.",
            "caption": "Exemple : Demande d'informations sur la salle \"Info 3\"."
        },
        "infoprof": {
            "p1": "Permet de localiser un professeur dans l'IUT selon son emploi du temps.",
            "li1": "Recherche partielle : taper \"Dondi\" trouvera \"M. Dondin\".",
            "li2": "Indique si le professeur est actuellement en cours.",
            "li3": "Si oui, précise la matière, la salle et l'heure de fin.",
            "li4": "Indique l'heure et la salle de son prochain cours.",
            "caption": "Exemple : Recherche du statut actuel de M. Roose."
        },
        "edt": {
            "p1": "Affiche votre emploi du temps personnel pour la journée.",
            "warn": "Cette commande nécessite que vous ayez les bons rôles sur le serveur Discord (Année + Groupe de TD/TP, ex: \"1\", \"TD1\", \"TP2\") pour filtrer votre emploi du temps.",
            "li1": "Affiche les cours de la journée en fonction de vos groupes.",
            "li2": "Gère automatiquement les semaines paires et impaires.",
            "caption": "Exemple : Emploi du temps généré pour un étudiant de 1ère année, TD2."
        },
        "autres": {
            "titre": "Autres / Utilitaires",
            "p1": "Quelques commandes utilitaires sont également disponibles :",
            "ping": "Vérifie si le bot est en ligne et affiche sa latence en ms.",
            "ball": "Posez une question, la boule magique vous répondra.",
            "clear": "(Admin/Modo) Supprime le nombre spécifié de messages."
        }
    },
    "faq": {
        "titre": "Dépannage / FAQ",
        "note": "<strong>Note importante :</strong> Le bot est configuré pour restreindre certaines commandes à des salons Discord spécifiques.",
        "msg1Titre": "Message : \"Utilisez les bons salons j'ai dit\"",
        "msg1Texte": "Si vous recevez cette réponse, c'est que vous tentez d'utiliser une commande dans un salon non autorisé par la configuration du bot. Réessayez dans le salon dédié aux commandes de bot.",
        "msg2Titre": "Le bot démarre puis s'arrête immédiatement",
        "msg2Texte": "L'erreur la plus fréquente est l'absence de la variable d'environnement <code>SEMESTER</code>. Le bot ne peut pas fonctionner sans savoir s'il doit charger les EDT pairs ou impairs. Vérifiez votre <code>docker-compose.yaml</code> ou vos variables système.",
        "msg3Titre": "/emploi_du_temps ne fonctionne pas pour moi",
        "msg3Texte": "Cette commande dépend de vos rôles Discord. Assurez-vous d'avoir les rôles correspondant à votre année (ex: \"1\" ou \"2\") ET à vos groupes (ex: \"TD1\", \"TP2\"). Le bot utilise ces noms exacts pour filtrer le fichier ICS global."
    },
    "footer": {
        "text": "\u00a9 2023 - Documentation BotPromo IUT Bayonne | Généré pour GitHub Pages"
    }
};
