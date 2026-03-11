window.i18n_eu = {
    "head": {
        "title": "BotPromo Dokumentazioa - IUT Bayonne",
        "description": "IUT Bayonne Discord Bot-erako instalazio eta erabilera gida."
    },
    "ui": {
        "themeToggleTitle": "Gaia Aldatu",
        "copy": "Kopiatu",
        "copied": "Kopiatua!"
    },
    "sidebar": {
        "doc": "Dokumentazioa",
        "campus": "Baiona - Angelu IUTa"
    },
    "nav": {
        "intro": "Sarrera",
        "prerequis": "Baldintzak",
        "config": "Konfigurazioa",
        "installation": "Instalazioa",
        "commandes": "Komandoak",
        "autresCommandes": "Beste Komandoak",
        "troubleshoot": "Arazoak Konpontzea"
    },
    "intro": {
        "titre": "Sarrera",
        "p1": "Ongi etorri <strong>BotPromo</strong> dokumentaziora. Discord bot hau Baionako IUTko ikasle bizitza errazteko bereziki garatutako tresna da.",
        "p2": "Ezinbesteko informazioa denbora errealean zentralizatzen du: ordutegien sinkronizazioa (ICS fitxategien bidez), informatika eta tutoretza gelen erabilgarritasunaren egiaztapena eta irakasleen ordutegien kontsulta.",
        "alertIntelligent": "<strong>Adimentsua:</strong> Bot-ak automatikoki kudeatzen ditu aste bikoiti/bakoitiak eta TD/TP taldeak, informazio garrantzitsua erakusteko."
    },
    "prerequis": {
        "titre": "Baldintza Teknikoak",
        "p1": "Instalazioa hasi aurretik, ziurtatu osagai hauek dituzula:",
        "liToken": "<strong>Discord Tokena:</strong> <a href=\"https://discord.com/developers/applications\" target=\"_blank\">Discord Developer Portal</a> webgunean aplikazio bat eta bot bat sortu behar dituzu token hau lortzeko.",
        "liSources": "<strong>Iturburu fitxategiak:</strong> Proiektuaren karpeta osoa (<code>Cogs</code>, <code>EDT</code> eta abar barne).",
        "liEnvStrong": "Gauzatze ingurunea:",
        "liDocker": "Gomendatua: <strong>Docker</strong> eta <strong>Docker Compose</strong>.",
        "liPython": "Alternatiba: <strong>Python 3.9</strong> edo berriagoa eta <strong>pip</strong>."
    },
    "config": {
        "titre": "Hasierako Konfigurazioa (Derrigorrezkoa)",
        "p1": "Urrats hau ezinbestekoa da bot-ak behar bezala funtziona dezan, aukeratutako instalazio-metodoa edozein dela ere.",
        "h3Secret": "1. Fitxategi konfidentziala sortzea",
        "pSecret": "Segurtasun arrazoiak direla eta, bot-aren tokena ez da inoiz partekatu behar. Sortu <code>confidentiel.py</code> izeneko fitxategi bat proiektuaren erroan.",
        "h3Semestre": "2. Seihilekoaren Konfigurazioa",
        "pSemestre1": "Bot-ak uneko seihilekoa ezagutu behar du ordutegi egokiak kargatzeko (S1/S3 vs S2/S4).",
        "pSemestre2": "<code>SEMESTER</code> izeneko ingurune-aldagaia definitu behar duzu:",
        "liSem1": "Balioa <code>1</code>: Seihileko bakoiti batentzat (Udazkena).",
        "liSem2": "Balioa <code>2</code>: Seihileko bikoiti batentzat (Udaberria)."
    },
    "install": {
        "titre": "Instalazioa eta Abiaraztea",
        "p1": "Aukeratu beheko bi metodoetako bat. Docker metodoa oso gomendagarria da bere sinpletasun eta egonkortasunagatik.",
        "methodeA": "A Metodoa: Docker Bidez (Gomendatua)",
        "pA1": "<code>docker-compose.yaml</code> fitxategia prest dago jada. Besterik gabe, konfiguratu ingurune-aldagaiak zuzenean fitxategi honetan edo <code>.env</code> fitxategi batean.",
        "pA2": "<strong>1. Konfigurazioa docker-compose.yaml fitxategian:</strong>",
        "pA3": "<strong>2. Abiaraztea:</strong>",
        "pA4": "Ireki terminal bat proiektuaren karpetan eta exekutatu:",
        "methodeB": "B Metodoa: Eskuzko Instalazioa (Python)",
        "liB1": "Instalatu dependentziak: <code>pip install -r requirements.txt</code>",
        "liB2": "Ezarri <code>SEMESTER</code> ingurune-aldagaia zure sisteman (adib: <code>export SEMESTER=1</code> Linuxen).",
        "liB3": "Abiarazi bot-a: <code>python main.py</code>"
    },
    "cmds": {
        "titre": "Eskuragarri dauden Komandoak",
        "p1": "Bot-ak Discord \"Slash Commands\" modernoak erabiltzen ditu. Idatzi <code>/</code> baimendutako kanal batean zerrenda ikusteko.",
        "p2": "Hona hemen komando bakoitzaren erabilera xehetasunak eta emaitza.",
        "salles": {
            "p1": "Komando honek ordutegiak denbora errealean aztertzen ditu okupatu gabeko gelak aurkitzeko.",
            "li1": "Unean libre dauden gelen zerrenda erakusten du.",
            "li2": "Emaitzak ordenatzen ditu: denbora gehieneak aske dauden gelak agertzen dira lehenik.",
            "li3": "Gela libre egongo den ordua adierazten du.",
            "caption": "Adibidea: Komandoak erakusten du 124 gela 15:30 arte libre dagoela."
        },
        "infosalle": {
            "p1": "Lortu gela zehatz baten egoera xehea. Gelaren zenbakia edo izena eman behar duzu parametro gisa (adib: <code>124</code>, <code>15</code>, <code>Info 1</code>).",
            "li1": "Gela gaur egun okupatuta edo libre dagoen adierazten du.",
            "li2": "Okupatuta badago: zein klase ematen ari den eta zein ordutara arte zehazten du.",
            "li3": "Libre badago: hurrengo klasea noiz hasiko den zehazten du.",
            "li4": "Eguneko hurrengo tarteen ordutegia erakusten du.",
            "caption": "Adibidea: \"Info 3\" gelari buruzko informazio eskaera."
        },
        "infoprof": {
            "p1": "Aurkitu irakasle bat IUTan ordutegiaren arabera.",
            "li1": "Bilaketa partziala: \"Dondi\" idatziz \"M. Dondin\" aurkituko du.",
            "li2": "Irakaslea gaur egun klasean dagoen adierazten du.",
            "li3": "Baiezkoa bada, gaia, gela eta amaiera ordua zehazten du.",
            "li4": "Hurrengo klaseko gela eta ordua adierazten ditu.",
            "caption": "Adibidea: Roose jaunaren egungo egoera egiaztatzea."
        },
        "edt": {
            "p1": "Zure egunerako ordutegi pertsonala erakusten du.",
            "warn": "Komando honek Discord zerbitzarian rol egokiak edukitzea eskatzen du (Urtea + TD/TP taldea, adib: \"1\", \"TD1\", \"TP2\") zure ordutegia iragazteko.",
            "li1": "Eguneko klaseak erakusten ditu zure taldeen arabera.",
            "li2": "Automatikoki kudeatzen ditu aste bikoitiak eta bakoitiak.",
            "caption": "Adibidea: 1. mailako ikasle batentzat sortutako ordutegia, TD2."
        },
        "autres": {
            "titre": "Besteak / Erabilgarriak",
            "p1": "Hainbat utilitate-komando ere eskuragarri daude:",
            "ping": "Bot-a konektatuta dagoen egiaztatzen du eta latentzia ms-tan erakusten du.",
            "ball": "Galdetu zerbait, bola magikoak erantzungo dizu.",
            "clear": "(Admin/Mod) Zehaztutako mezu kopurua ezabatzen du."
        }
    },
    "faq": {
        "titre": "Arazoak Konpontzea / FAQ",
        "note": "<strong>Ohar garrantzitsua:</strong> Bot-a komando zehatz batzuk Discord kanal jakin batzuetara mugatzeko konfiguratuta dago.",
        "msg1Titre": "Mezua: \"Utilisez les bons salons j'ai dit\" (Erabili kanal egokiak esan dut)",
        "msg1Texte": "Erantzun hau jasotzen baduzu, bot-aren konfigurazioak baimentzen ez duen kanal batean komando bat erabiltzen saiatzen ari zarela esan nahi du. Saiatu berriro bot komandoen kanal dedikatuan.",
        "msg2Titre": "Bot-a abiarazi eta berehala gelditzen da",
        "msg2Texte": "Errakuntza arruntena <code>SEMESTER</code> ingurune-aldagaia ez egotea da. Bot-ak ezin du funtzionatu ordutegi bikoitiak edo bakoitiak kargatu behar dituen jakin gabe. Egiaztatu zure <code>docker-compose.yaml</code> edo sistemaren aldagaiak.",
        "msg3Titre": "/emploi_du_temps ez dabil niretzat",
        "msg3Texte": "Komando hau zure Discord rolen araberakoa da. Ziurtatu zure urteari (adibidez: \"1\" edo \"2\") ETA zure taldeei (adibidez: \"TD1\", \"TP2\") dagozkion rolak dituzula. Bot-ak izen zehatz horiek erabiltzen ditu ICS fitxategi globala iragazteko."
    },
    "footer": {
        "text": "\u00a9 2023 - BotPromo IUT Bayonne Dokumentazioa | GitHub Pageserako Sortua"
    }
};
