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
    "hero": {
        "start": "Commencer la lecture",
        "tech": "Documentation Technique"
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
        "p1": "Bienvenue sur la documentation du <strong>BotPromo Jinx</strong>. Ce bot Discord est un outil développé spécifiquement pour faciliter la vie étudiante à l'IUT de Bayonne et du Pays Basque.",
        "p2": "Le projet est une amélioration et la suite d'un projet similaire développé les années précédentes. Il a été créer pour faciliter l'accès aux informations sur les emplois du temps et la disponibilité des salles ainsi que l'emploi du temps des professeurs.",
        "p3": "Il centralise des informations essentielles en temps réel : synchronisation des emplois du temps (via fichiers ICS), vérification de la disponibilité des salles informatiques et de TD, et consultation des créneaux des enseignants.",
        "alertIntelligent": "<strong>A savoir :</strong> Le bot gère automatiquement les semaines paires/impaires et les groupes de TD/TP pour afficher les informations pertinentes."
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

    },
    "footer": {
        "text": "\u00a9 2023 - Documentation BotPromo IUT Bayonne | Généré pour GitHub Pages"
    },
    "tech": {
        "head": {
            "title": "Documentation Technique - BotPromo"
        },
        "sidebar": {
            "doc": "Documentation Technique"
        },
        "nav": {
            "retour": "Retour au Tutoriel",
            "architecture": "Architecture Globale",
            "moteur": "Moteur EDT",
            "interface": "Interface Discord",
            "main": "Point d'entrée"
        },
        "architecture": {
            "titre": "Introduction et Contexte Technique",
            "desc": "Bienvenue dans la documentation technique du <strong>BotPromo</strong> Jinx. Ce document s'adresse aux développeurs, aux contributeurs potentiels, ainsi qu'aux étudiants curieux.",
            "choixTitre": "Choix technologiques et Architecture",
            "choixDesc": "Le projet repose sur plusieurs piliers techniques :",
            "liPython": "<strong>Python 3 & <code>interactions.py</code> :</strong> Le bot est entièrement codé en Python. L'utilisation de la bibliothèque moderne <code>interactions.py</code> permet une gestion native, asynchrone et optimisée des <em>Slash Commands</em> de Discord.",
            "liModulaire": "<strong>Architecture Modulaire (Cogs) :</strong> Le code est strictement séparé selon le principe de responsabilité unique. L'interface avec Discord et la déclaration des commandes sont isolées dans le dossier <code>Cogs/</code> (ex: <code>Salles.py</code>), tandis que la logique métier et le parsing des données se trouvent dans <code>Cogs/src/</code> (ex: <code>TrouveTaSalle.py</code>).",
            "liAsync": "<strong>Programmation Concurrente (Multithreading) :</strong> Pour éviter la latence lors de la mise à jour des emplois du temps, les lourdes requêtes HTTP vers les serveurs de l'IUT et l'analyse des calendriers sont déléguées à un pool de threads secondaires (via <code>concurrent.futures.ThreadPoolExecutor</code>).",
            "liDocker": "<strong>Conteneurisation :</strong> Le bot est packagé avec <code>Docker</code>, garantissant un environnement d'exécution stable et indépendant de la machine hôte."
        },
        "moteur": {
            "titre": "Moteur EDT",
            "desc": "Ce fichier contient le cœur logique du bot. Il s'occupe de récupérer et d'analyser les emplois du temps de l'IUT de Bayonne.",
            "recupTitre": "Récupération des données (ICS)",
            "recupDesc": "Le bot fait des requêtes GET vers l'URL des emplois du temps de l'IUT pour télécharger les données au format standard iCalendar (.ics). Les salles sont divisées en deux catégories : <code>listeSallesPC</code> (salles avec ordinateurs) et <code>listeSallesTD</code> (salles classiques).",
            "algoTitre": "Algorithme de traitement",
            "algo1": "<strong>Parallélisation :</strong> La méthode <code>refresh()</code> utilise un pool de threads pour télécharger les EDT de toutes les promos simultanément.",
            "algo2": "<strong>Filtrage Temporel :</strong> Les événements passés de la journée ou ceux des jours suivants sont ignorés pour optimiser la mémoire et les performances.",
            "algo3": "<strong>Dédoublonnage :</strong> Si plusieurs groupes ont cours en même temps dans la même salle (ex: CM partagé), l'algorithme fusionne intelligemment les événements.",
            "algo4": "<strong>Détection des créneaux libres :</strong> La méthode <code>detecter_creneaux_libres_salle()</code> calcule les \"trous\" entre les cours de la journée (généralement entre 7h45 et 18h30) pour déterminer les disponibilités exactes d'une salle.",
            "algo5": "<strong>Recherche de professeurs :</strong> La méthode <code>get_prof()</code> parcourt les descriptions des événements ICS pour localiser un professeur spécifique (matière, salle, horaire)."
        },
        "interface": {
            "titre": "Interface Discord",
            "desc": "Cette extension charge les commandes liées aux salles et aux professeurs. Elle gère également la configuration selon le semestre universitaire (pair/impair).",
            "configTitre": "Configuration du Semestre (<code>SEMESTER</code>)",
            "configDesc": "Une variable d'environnement <code>SEMESTER</code> dicte le dictionnaire <code>ID_PROMOS</code> qui est utilisé. Les identifiants (ID) des calendriers ICS changent entre les semestres impairs (S1/S3) et les semestres pairs (S2/S4).",

            "taskTitre": "Tâche de fond (Background Task)",
            "taskDesc": "Le module initialise un Thread détaché dans la fonction <code>setup()</code> exécutant <code>refresh_edt()</code>. Ce thread appelle la mise à jour des emplois du temps toutes les 10 minutes en journée. La nuit, le thread se met en sommeil prolongé pour économiser les requêtes (plusieurs heures)."
        },
        "main": {
            "titre": "Point d'entrée",
            "desc": "Le fichier principal orchestre l'initialisation du bot :",
            "liToken": "Chargement sécurisé du Token depuis les variables d'environnement via <code>dotenv</code> ou un fichier <code>confidentiel.py</code> local.",
            "liIntents": "Définition des <em>Intents</em> Discord (limités au strict nécessaire : messages du serveur et membres).",
            "liCogs": "Chargement dynamique de l'extension principale <code>Cogs.Salles</code>.",
            "liCmds": "Définition des commandes globales utilitaires de base (<code>/ping</code>, <code>/clear</code>, <code>/8ball</code>)."
        },
        "footer": {
            "text": "\u00a9 2026 - Documentation BotPromo IUT Bayonne"
        }
    }
};
