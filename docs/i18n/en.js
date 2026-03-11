window.i18n_en = {
    "head": {
        "title": "BotPromo Documentation \u2014 IUT Bayonne",
        "description": "Installation and usage guide for the IUT Bayonne Discord Bot."
    },
    "ui": {
        "themeToggleTitle": "Toggle Theme",
        "copy": "Copy",
        "copied": "Copied!"
    },
    "sidebar": {
        "doc": "Documentation",
        "campus": "IUT Bayonne - Anglet"
    },
    "nav": {
        "intro": "Introduction",
        "prerequis": "Requirements",
        "config": "Configuration",
        "installation": "Install & Run",
        "commandes": "Commands",
        "autresCommandes": "Other Commands",
        "troubleshoot": "Troubleshooting"
    },
    "intro": {
        "titre": "Introduction",
        "p1": "Welcome to the <strong>BotPromo</strong> documentation. This Discord bot is a tool developed specifically to facilitate student life at IUT Bayonne.",
        "p2": "It centralizes essential information in real-time: timetable synchronization (via ICS files), computer lab and tutorial room availability checks, and teacher schedule consultations.",
        "alertIntelligent": "<strong>Smart:</strong> The bot automatically manages even/odd weeks and IT/TD groups to display relevant information."
    },
    "prerequis": {
        "titre": "Technical Requirements",
        "p1": "Before starting the installation, make sure you have the following elements:",
        "liToken": "<strong>Discord Token:</strong> You must have created an application and a bot on the <a href=\"https://discord.com/developers/applications\" target=\"_blank\">Discord Developer Portal</a> to obtain this token.",
        "liSources": "<strong>Source Files:</strong> The entire project folder (including the <code>Cogs</code>, <code>EDT</code> folders, etc.).",
        "liEnvStrong": "Execution Environment:",
        "liDocker": "Recommended: <strong>Docker</strong> and <strong>Docker Compose</strong>.",
        "liPython": "Alternative: <strong>Python 3.9</strong> or higher and <strong>pip</strong>."
    },
    "config": {
        "titre": "Initial Configuration (Required)",
        "p1": "This step is crucial for the bot to function properly, regardless of the chosen installation method.",
        "h3Secret": "1. Creating the confidential file",
        "pSecret": "For security reasons, the bot's token must never be shared. Create a file named <code>confidentiel.py</code> at the root of the project.",
        "h3Semestre": "2. Semester Configuration",
        "pSemestre1": "The bot needs to know the current semester to load the correct timetables (S1/S3 vs S2/S4).",
        "pSemestre2": "You must define an environment variable named <code>SEMESTER</code>:",
        "liSem1": "Value <code>1</code>: For an odd semester (Fall).",
        "liSem2": "Value <code>2</code>: For an even semester (Spring)."
    },
    "install": {
        "titre": "Installation and Execution",
        "p1": "Choose one of the two methods below. The Docker method is highly recommended for its simplicity and stability.",
        "methodeA": "Method A: Via Docker (Recommended)",
        "pA1": "The <code>docker-compose.yaml</code> file is already prepared. Simply configure the environment variables directly in this file or in an <code>.env</code> file.",
        "pA2": "<strong>1. Configuration in docker-compose.yaml:</strong>",
        "pA3": "<strong>2. Execution:</strong>",
        "pA4": "Open a terminal in the project folder and run:",
        "methodeB": "Method B: Manual Installation (Python)",
        "liB1": "Install dependencies: <code>pip install -r requirements.txt</code>",
        "liB2": "Set the <code>SEMESTER</code> environment variable on your system (e.g., <code>export SEMESTER=1</code> on Linux).",
        "liB3": "Start the bot: <code>python main.py</code>"
    },
    "cmds": {
        "titre": "Available Commands",
        "p1": "The bot uses modern Discord \"Slash Commands\". Type <code>/</code> in an authorized channel to see the list.",
        "p2": "Here are the usage details and results for each command.",
        "salles": {
            "p1": "This command analyzes the timetables in real time to find unoccupied classrooms.",
            "li1": "Displays a list of currently free rooms.",
            "li2": "Sorts the results: the rooms free for the longest time appear first.",
            "li3": "Indicates the time until which the room remains free.",
            "caption": "Example: The command shows that room 124 is free until 3:30 PM."
        },
        "infosalle": {
            "p1": "Get detailed status for a specific room. You must provide the room number or name as a parameter (e.g., <code>124</code>, <code>15</code>, <code>Info 1</code>).",
            "li1": "Indicates whether the room is currently occupied or free.",
            "li2": "If occupied: specifies which class is taking place and until what time.",
            "li3": "If free: specifies when the next class begins.",
            "li4": "Displays the schedule for upcoming slots of the day.",
            "caption": "Example: Request for information on the \"Info 3\" room."
        },
        "infoprof": {
            "p1": "Locate a teacher at the IUT according to their schedule.",
            "li1": "Partial search: typing \"Dondi\" will find \"M. Dondin\".",
            "li2": "Indicates whether the teacher is currently in class.",
            "li3": "If yes, specifies the subject, the room, and the end time.",
            "li4": "Indicates the time and room for their next class.",
            "caption": "Example: Checking the current status of Mr. Roose."
        },
        "edt": {
            "p1": "Displays your personal timetable for the day.",
            "warn": "This command requires you to have the correct roles on the Discord server (Year + TD/TP Group, e.g., \"1\", \"TD1\", \"TP2\") to filter your schedule.",
            "li1": "Displays the classes of the day based on your groups.",
            "li2": "Automatically manages even and odd weeks.",
            "caption": "Example: Timetable generated for a 1st-year student, TD2."
        },
        "autres": {
            "titre": "Other / Utilities",
            "p1": "Some utility commands are also available:",
            "ping": "Checks if the bot is online and displays its latency in ms.",
            "ball": "Ask a question, the magic 8-ball will answer you.",
            "clear": "(Admin/Mod) Deletes the specified number of messages."
        }
    },
    "faq": {
        "titre": "Troubleshooting / FAQ",
        "note": "<strong>Important Note:</strong> The bot is configured to restrict certain commands to specific Discord channels.",
        "msg1Titre": "Message: \"Use the right channels I said\"",
        "msg1Texte": "If you receive this response, it means you are attempting to use a command in a channel not authorized by the bot's configuration. Try again in the dedicated bot commands channel.",
        "msg2Titre": "The bot starts and stops immediately",
        "msg2Texte": "The most common error is the absence of the <code>SEMESTER</code> environment variable. The bot cannot function without knowing whether to load even or odd timetables. Check your <code>docker-compose.yaml</code> or your system variables.",
        "msg3Titre": "/emploi_du_temps does not work for me",
        "msg3Texte": "This command depends on your Discord roles. Make sure you have the roles corresponding to your year (e.g., \"1\" or \"2\") AND your groups (e.g., \"TD1\", \"TP2\"). The bot uses these exact names to filter the global ICS file."
    },
    "footer": {
        "text": "\u00a9 2023 - BotPromo Documentation IUT Bayonne | Generated for GitHub Pages"
    }
};
