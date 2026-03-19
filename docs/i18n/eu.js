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
    "hero": {
        "start": "Irakurtzen hasi",
        "tech": "Dokumentazio Teknikoa"
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
        "p1": "Ongi etorri <strong>BotPromo Jinx</strong>-en dokumentaziora. Discord-eko bot hau Baionako eta Euskal Herriko IUT-ko ikasle-bizitza errazteko bereziki garatutako tresna da.",
        "p2": "Proiektua aurreko urteetan garatutako antzeko proiektu baten hobekuntza eta jarraipena da. Ordutegiei eta gelen erabilgarritasunari buruzko informazioa, baita irakasleen ordutegiak ere, eskuragarriago izateko sortu zen.",
        "p3": "Funtsezko informazioa denbora errealean zentralizatzen du: ordutegien sinkronizazioa (ICS fitxategien bidez), informatika eta TD gelen erabilgarritasuna egiaztatzea, eta irakasleen ordutegiak kontsultatzea.",
        "alertIntelligent": "<strong>Inteligentea:</strong> Bot-ak automatikoki kudeatzen ditu aste bikoitiak/bakoitiak eta TD/TP taldeak informazio garrantzitsua erakusteko."
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
        "msg2Texte": "Errakuntza arruntena <code>SEMESTER</code> ingurune-aldagaia ez egotea da. Bot-ak ezin du funtzionatu ordutegi bikoitiak edo bakoitiak kargatu behar dituen jakin gabe. Egiaztatu zure <code>docker-compose.yaml</code> edo sistemaren aldagaiak."
    },
    "footer": {
        "text": "\u00a9 2023 - BotPromo IUT Bayonne Dokumentazioa | GitHub Pageserako Sortua"
    },
    "tech": {
        "head": {
            "title": "Dokumentazio Teknikoa - BotPromo"
        },
        "sidebar": {
            "doc": "Dokumentazio Teknikoa"
        },
        "nav": {
            "retour": "Itzuli Tutorialera",
            "architecture": "Arkitektura Globala",
            "moteur": "EDT Motorra",
            "interface": "Discord Interfazea",
            "main": "Sarrera"
        },
        "architecture": {
            "titre": "Sarrera eta Testuinguru Teknikoa",
            "desc": "Ongi etorri <strong>BotPromo</strong> Jinx-en dokumentazio teknikora. Dokumentu hau garatzaileei, kolaboratzaileei eta ikasle bitxiei zuzenduta dago.",
            "choixTitre": "Aukera Teknologikoak eta Arkitektura",
            "choixDesc": "Proiektua hainbat oinarri teknikotan funtsatzen da:",
            "liPython": "<strong>Python 3 eta <code>interactions.py</code>:</strong> Bota guztiz Pythonen programatuta dago. <code>interactions.py</code> liburutegi modernoak Discord-eko <em>Slash Komandoen</em> kudeaketa asinkrono eta optimizatua bermatzen du.",
            "liModulaire": "<strong>Arkitektura Modularra (Cogs):</strong> Kodea ardura bakunaren printzipioaren arabera banatuta dago. Discord interfazea eta komandoak <code>Cogs/</code> karpetan isolatuta daude (ad. <code>Salles.py</code>), eta datuen prozesamendua <code>Cogs/src/</code> karpetan dago (ad. <code>TrouveTaSalle.py</code>).",
            "liAsync": "<strong>Programazio Konkurrentea (Multithreading):</strong> Ordutegiak eguneratzean latentzia ekiditeko, IUTko zerbitzarietara eskaerak hari sekundarioen talde baten esku uzten dira (<code>concurrent.futures.ThreadPoolExecutor</code>-ren bidez).",
            "liDocker": "<strong>Kontenedorizazioa:</strong> Bota <code>Docker</code> bidez paketatuta dago, makina ostalaritik independente den exekuzio ingurune egonkorra bermatuz."
        },
        "moteur": {
            "titre": "EDT Motorra",
            "desc": "Fitxategi honek bot-aren muin logikoa du. Baionako IUTko ordutegiak lortu eta aztertzeaz arduratzen da.",
            "recupTitre": "Datuen Eskuratzea (ICS)",
            "recupDesc": "Botak GET eskaerak egiten ditu IUTko ordutegien helbidera datuak (.ics) formatu estandarrean deskargatzeko. Gelak bi kategoriatan banatzen dira: <code>listeSallesPC</code> (ordenagailudun gelak) eta <code>listeSallesTD</code> (gela klasikoak).",
            "algoTitre": "Prozesamendu Algoritmoa",
            "algo1": "<strong>Paralelizazioa:</strong> <code>refresh()</code> metodoak hari talde bat erabiltzen du ordutegi guztiak aldi berean deskargatzeko.",
            "algo2": "<strong>Denbora Iragazketa:</strong> Igarotako gertaerak edo hurrengo egunetakoak alde batera uzten dira memoria eta errendimendua optimizatzeko.",
            "algo3": "<strong>Bikoiztasunak Ezabatzea:</strong> Hainbat taldek aldi berean klasea badute gela berean (ad. baterako eskolak), algoritmoak gertaerak modu asmatuan batzen ditu.",
            "algo4": "<strong>Tarte Libreen Detekzioa:</strong> <code>detecter_creneaux_libres_salle()</code> metodoak klaseen arteko 'hutsuneak' kalkulatzen ditu egun osoan zehar aske dauden gelak aurkitzeko.",
            "algo5": "<strong>Irakasleen Bilaketa:</strong> <code>get_prof()</code> metodoak irakasle bat ICS gertaeren azalpenetan bilatzen du kokaleku zehatza aurkitzeko."
        },
        "interface": {
            "titre": "Discord Interfazea",
            "desc": "Luzapen honek gelak eta irakasleen inguruko komandoak kargatzen ditu. Seihileko akademikoaren arabera (bikoitia/bakoitia) konfigurazioa kudeatzen du ere.",
            "configTitre": "Seihilekoaren Konfigurazioa (<code>SEMESTER</code>)",
            "configDesc": "<code>SEMESTER</code> ingurune-aldagaiak <code>ID_PROMOS</code> zein hiztegi erabiliko den zehazten du. ICS egutegiaren IDak seihileko bakoitien (S1/S3) eta bikoitien (S2/S4) artean aldatzen dira.",
            "taskTitre": "Aztarnako Zeregina",
            "taskDesc": "Moduluak Hari independente bat abiarazten du <code>setup()</code> funtzioan, <code>refresh_edt()</code> exekutatzeko. Hari honek ordutegia 10 minutuz behin eguneratzen du egunez. Gauez, lo geratzen da eskaerak baliabideak aurrezteko."
        },
        "main": {
            "titre": "Sarrera Gunea",
            "desc": "Fitxategi nagusiak bot-aren abiaraztea koordinatzen du:",
            "liToken": "Tokenaren karga segurua ingurune-aldagaietatik <code>dotenv</code> edo bertako <code>confidentiel.py</code> fitxategitik.",
            "liIntents": "Discord-eko <em>Intents</em>en definizioa (soilik beharrezkoak direnak: zerbitzariko mezuak eta partaideak).",
            "liCogs": "<code>Cogs.Salles</code> luzapen nagusiaren karga dinamikoa.",
            "liCmds": "Oinarrizko komando orokorren definizioa (<code>/ping</code>, <code>/clear</code>, <code>/8ball</code>)."
        },
        "footer": {
            "text": "\u00a9 2026 - BotPromo IUT Bayonne Dokumentazioa"
        }
    }
};
