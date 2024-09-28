from ics import Calendar
import time
import requests
import datetime
import concurrent.futures
import pytz

timezone = pytz.timezone("Europe/Paris")


class TrouveTaSalle:

    def __init__(self, listeID: dict, refresh_on_init: bool = True):
        if type(listeID) != dict:
            raise TypeError("listeID doit être un dictionnaire")
        if len(listeID) == 0:
            raise ValueError("listeID doit contenir au moins un élément")

        self.listeID = listeID
        self.listeSallesPC = [
            "15", "17", "21", "22", "23", "24", "25", "26", "130", "128"
        ]
        self.listeSallesTD = ["124", "125", "126", "127", "129", "138"]
        self.refresh_on_init = refresh_on_init
        self.lock = False  # Lock pour les requêtes
        self.salles = {
            salle: []
            for salle in self.listeSallesPC + self.listeSallesTD
        }

        if refresh_on_init:
            self.active = self.refresh()
        else:
            self.active = True

    def get_TD_ics(self, id: str, TD: str) -> str:
        """Récupère le fichier ics de l'emploi du temps depuis l'URL."""
        url = f"https://www.iutbayonne.univ-pau.fr/outils/edt/default/export?ID={id}"
        return (requests.get(url).text, id, TD)

    def refresh(self):
        """Récupère et rafraîchit les emplois du temps."""
        self.date = datetime.datetime.now()

        if self.date.weekday() >= 5:
            return "weekend"
        if self.date.hour > 19 or (self.date.hour == 19
                                   and self.date.minute > 30):
            return "hour"

        print(
            f"[Salles] Refresh des emplois du temps : {self.date.astimezone(timezone).strftime('%d/%m/%Y %H:%M:%S')}"
        )

        self.lock = True
        tempsalle = {salle: [] for salle in self.salles}

        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = [
                executor.submit(self.get_TD_ics, self.listeID[TD], TD)
                for TD in self.listeID
            ]
            for future in concurrent.futures.as_completed(futures):
                TD = future.result()
                res_TD = self.get_TD_salle(TD)
                for salle in res_TD:
                    if salle in tempsalle:
                        tempsalle[salle] += res_TD[salle]
                    else:
                        tempsalle[salle] = res_TD[salle]

        for salle in tempsalle:
            tempsalle[salle].sort(key=lambda x: x.begin.timestamp())

            i = 0
            while i < len(tempsalle[salle]) - 1:
                if (tempsalle[salle][i].begin.timestamp()
                        == tempsalle[salle][i + 1].begin.timestamp()
                        and tempsalle[salle][i].end.timestamp()
                        == tempsalle[salle][i + 1].end.timestamp()):
                    tempsalle[salle][i + 1].url[0].append(
                        tempsalle[salle][i].url[0][0])
                    tempsalle[salle][i + 1].url[1].append(
                        tempsalle[salle][i].url[1][0])
                    tempsalle[salle].pop(i)
                else:
                    i += 1

        self.salles = tempsalle
        self.lock = False
        return "ok"

    def get_TD_salle(self, TD: list) -> dict:
        """Récupère les événements du calendrier pour un TD donné."""
        events = list(Calendar(TD[0]).events)
        events.sort(key=lambda x: x.begin.timestamp())
        salles_TD = {}

        for event in events:
            if event.begin.date().day > self.date.day:
                break
            if event.end.timestamp() > self.date.timestamp():
                if event.location:
                    event.url = [[TD[1]], [TD[2]]]
                    nds = event.location.replace("S.",
                                                 "").replace("Salle ",
                                                             "").split(",")
                    nds = [salle.lstrip("0") for salle in nds]

                    for salle in nds:
                        if salle in salles_TD:
                            salles_TD[salle].append(event)
                        else:
                            salles_TD[salle] = [event]
        return salles_TD

    def need_refresh(self):
        """Vérifie si une mise à jour est nécessaire (toutes les 10 minutes)."""
        if datetime.datetime.now() - self.date > datetime.timedelta(
                minutes=10) and self.refresh_on_init:
            print("[Salles] On refresh")
            self.refresh()

    def check_salle(self, salle: str):
        """Vérifie si la salle existe et si elle a des données disponibles."""
        if salle not in self.listeSallesTD + self.listeSallesPC:
            return "NOT FOUND"
        if salle not in self.salles:
            return "NO DATA"
        return True

    def get_prof(self, prof: str):
        """Retourne les informations des cours d'un professeur."""
        self.need_refresh()
        prof = prof.upper()
        prof_info = {
            "checked": self.date.timestamp(),
            "name": prof,
            "now": None,
            "cours": []
        }
        checker = {}

        for salle in self.salles:
            for event in self.salles[salle]:
                if event.description and prof in event.description:
                    event_info = {
                        "name": event.name,
                        "begin": event.begin.timestamp(),
                        "end": event.end.timestamp(),
                        "salle": salle
                    }
                    if event.name + str(event.begin.timestamp()) in checker:
                        checker[event.name + str(
                            event.begin.timestamp())]["salle"] += f"-{salle}"
                    else:
                        checker[event.name +
                                str(event.begin.timestamp())] = event_info

        for cours in checker.values():
            prof_info["cours"].append(cours)

        prof_info["cours"].sort(key=lambda x: x["begin"])
        if prof_info["cours"] and prof_info["cours"][0][
                "begin"] <= self.date.timestamp(
                ) <= prof_info["cours"][0]["end"]:
            prof_info["now"] = prof_info["cours"][0]

        return prof_info

    def get_salle_libre(self):
        """Retourne les salles libres actuellement."""
        self.need_refresh()
        salle_libre = {}

        for salle in self.salles:
            creneaux = self.detecter_creneaux_libres_salle(salle)
            if creneaux and creneaux[0][0] <= self.date.timestamp(
            ) <= creneaux[0][1]:
                salle_libre[salle] = creneaux

        return dict(
            sorted(salle_libre.items(),
                   key=lambda item: item[1][0][1] - item[1][0][0],
                   reverse=True))

    def detecter_creneaux_libres_salle(self, salle: str):
        """Retourne les créneaux libres pour une salle donnée."""
        creneaux_libres = []
        debut = self.date.replace(hour=7, minute=45, second=0, microsecond=0)
        fin = self.date.replace(hour=18, minute=30, second=0, microsecond=0)

        if not self.salles[salle] and self.date.timestamp() < fin.timestamp():
            creneaux_libres.append([self.date.timestamp(), fin.timestamp()])
        else:
            for i, event in enumerate(self.salles[salle]):
                if i == 0 and event.begin.timestamp() > self.date.timestamp():
                    creneaux_libres.append(
                        [self.date.timestamp(),
                         event.begin.timestamp()])
                elif i > 0 and event.begin.timestamp() > self.salles[salle][
                        i - 1].end.timestamp():
                    creneaux_libres.append([
                        self.salles[salle][i - 1].end.timestamp(),
                        event.begin.timestamp()
                    ])

                if i == len(self.salles[salle]) - 1:
                    creneaux_libres.append(
                        [event.end.timestamp(),
                         fin.timestamp()])

        return creneaux_libres

    def get_info_salle(self, salle: str):
        """Retourne les informations d'une salle."""
        self.need_refresh()
        data = {
            "checked": self.date.timestamp(),
            "salle": salle,
            "now": None,
            "cours": [],
            "free": self.detecter_creneaux_libres_salle(salle)
        }

        if self.check_salle(salle) == "NOT FOUND":
            data["error"] = "NOT FOUND"
        else:
            for event in self.salles[salle]:
                event_info = {
                    "name": event.name,
                    "begin": event.begin.timestamp(),
                    "end": event.end.timestamp()
                }
                if event.begin.timestamp() <= self.date.timestamp(
                ) <= event.end.timestamp():
                    data["now"] = event_info
                else:
                    data["cours"].append(event_info)

        return data

    def get_cours_TD(self, anneTDTP: str):
        """Retourne les cours d'un TD donné."""
        self.need_refresh()
        data = {"checked": self.date.timestamp(), "cours": []}

        for salle in self.salles:
            for event in self.salles[salle]:
                if anneTDTP in event.url[1]:
                    data["cours"].append({
                        "salle": salle,
                        "name": event.name,
                        "begin": event.begin.timestamp(),
                        "end": event.end.timestamp()
                    })

        data["cours"].sort(key=lambda x: x["begin"])
        return data
