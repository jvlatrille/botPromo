import interactions, sys
import threading
import time
import traceback
import datetime as datetime
import pytz
from src.TrouveTaSalle import TrouveTaSalle
import os

timezone = pytz.timezone("Europe/Paris")
os.environ['SEMESTER'] = '1'

#------------CONSTANTES------------#
if os.getenv('SEMESTER') == None:
    print("La variable d'environnement SEMESTRE n'est pas définie")
    exit(1)
SEMESTRE = os.getenv('SEMESTER')

# Si la variable d'environnement SEMESTRE est égale à 1, on utilise les ID des promos pour le semestre 1
if (SEMESTRE.isdigit() and int(SEMESTRE) % 2 != 0):
    ID_PROMOS = {
        "1-TD1-TP1": "355",
        "1-TD1-TP2": "356",
        "1-TD2-TP3": "358",
        "1-TD2-TP4": "359",
        "1-TD3-TP5": "360",
        "2-TD1-TP1": "381",
        "2-TD1-TP2": "382",
        "2-TD2-TP3": "384",
        "2-TD2-TP4": "385",
        "3-TD1-TP1": "240",
        "3-TD1-TP2": "232",
        "3-TD2-TP1": "300",
        "3-TD2-TP2": "195"
    }
# Sinon, on utilise les ID des promos pour le semestre 2
elif (SEMESTRE.isdigit() and int(SEMESTRE) % 2 == 0):
    ID_PROMOS = {
        "1-TD1-TP1": "368",
        "1-TD1-TP2": "369",
        "1-TD2-TP3": "371",
        "1-TD2-TP4": "372",
        "1-TD3-TP5": "373",
        "2-TD1-TP1": "394",
        "2-TD1-TP2": "395",
        "2-TD2-TP3": "397",
        "2-TD2-TP4": "398",
        "3-TD1-TP1": "408",
        "3-TD1-TP2": "321",
        "3-TD2-TP1": "439",
        "3-TD2-TP2": "429"
    }

# ID des rôles pour chaque TD, TP et Année sur le serveur Discord
ROLES = {
    "TD": {
        "959814970336510022": "TD1",
        "959815001642790942": "TD2",
        "959815034530324590": "TD3",
    },
    "TP": {
        "959815069665996800": "TP1",
        "959815092390752256": "TP2",
        "959815110157828147": "TP3",
        "959815124938534962": "TP4",
        "959815142038700052": "TP5",
    },
    "Année": {
        "959809924798496799": "1",
        "959809978875650108": "2",
        "959810006537093210": "3"
    },
}


def format_time(timestamp, tz=pytz.timezone("UTC")):
    """Convertit un timestamp UTC en timestamp Paris"""
    timestamp = datetime.datetime.utcfromtimestamp(timestamp).replace(
        tzinfo=pytz.utc).astimezone(tz)
    return timestamp.strftime("%H:%M")


# Fonction threadée pour mettre à jour l'emploi du temps toutes les 5 minutes
def refresh_edt(Salle):
    while True:
        try:
            out = Salle.edt.refresh()
            if out == "hour" or out == "weekend":
                delai = (24 - datetime.datetime.now().hour) * 3600
                print(
                    "[Salles] On est en dehors des heures de cours, on attend d'être le lendemain\n[Salles] On réessaie dans ",
                    delai, " secondes")
                Salle.change_state(False)
            else:
                Salle.change_state(True)
                delai = 600  # 10 minutes
        except Exception as e:
            print(
                f"[Salles] Erreur lors de la mise à jour de l'emploi du temps : {e}"
            )
            print("[Salles] On réessaie dans 30 secondes")
            print(traceback.format_exc())
            delai = 30
        time.sleep(delai)


class Salles(interactions.Extension):

    def __init__(self, client):
        self.client: interactions.Client = client
        self.edt = TrouveTaSalle(ID_PROMOS, refresh_on_init=False)

    def change_state(self, state):
        self.edt.active = state

    async def check_state(self, ctx: interactions.SlashContext):
        if not self.edt.active:
            embed = interactions.Embed(
                title=":x: ERREUR :x:",
                description=
                "On est en dehors des heures de cours, réessayez demain.",
                color=0xFF0000,
            )
            await ctx.send(embeds=embed, ephemeral=True)
            return False
        if self.edt.lock:
            embed = interactions.Embed(
                title=":x: ERREUR :x:",
                description=
                "L'emploi du temps n'est pas encore chargé, attends quelques secondes.",
                color=0xFF0000,
            )
            await ctx.send(embeds=embed, ephemeral=True)
            return False
        return True

    @interactions.slash_command(
        name="salles_libres",
        description=
        "Retourne les salles libres actuellement, triées par durée de disponibilité",
    )
    async def salle_libre(self, ctx: interactions.SlashContext):
        print("[Salles] L'utilisateur ", ctx.author,
              " a demandé les salles libres")
        if not await self.check_state(ctx):
            return
        info = self.edt.get_salle_libre()
        embed = interactions.Embed(
            title=
            "Salles libres actuellement, triées par durée de disponibilité",
            description="",
            color=0x00FF00,
            footer={
                "text":
                "Dernière mise à jour: " +
                format_time(self.edt.date.timestamp(), timezone) +
                "\nLes informations peuvent être incomplètes ou inexactes"
            },
        )

        for salle in info:
            if salle in self.edt.listeSallesPC:
                strsalle = "🖥️ " + salle
                if len(salle) == 2:
                    strsalle += " "
            else:
                strsalle = "📚 " + salle
            embed.add_field(name=strsalle + "     ->     " +
                            format_time(info[salle][0][0], timezone) + " - " +
                            format_time(info[salle][0][1], timezone),
                            value="\n",
                            inline=False)
        if len(info) == 0:
            embed.title = ":x: ERREUR :x:"
            embed.description = "Soit il n'y a pas de salles libres, soit l'emploi du temps n'est pas encore chargé"
            embed.color = 0xFF0000

        await ctx.send(embeds=embed)

    @interactions.slash_command(
        name="info_salle",
        description="Retourne les informations sur une salle",
    )
    @interactions.slash_option(
        name="salle",
        description="De quelle salle veux-tu les informations ?",
        required=True,
        opt_type=interactions.OptionType.STRING,
        max_length=3,
        min_length=1)
    async def info_salle(self, ctx: interactions.SlashContext, salle: str):
        print("[Salles] L'utilisateur ", ctx.author,
              " a demandé les informations sur la salle ", salle)
        if not await self.check_state(ctx):
            return
        info = self.edt.get_info_salle(salle)
        embed = interactions.Embed(
            title="Informations sur la salle " + str(salle),
            description="",
            color=0x2980b9,
            footer={
                "text":
                "Dernière mise à jour: " +
                format_time(info["checked"], timezone) +
                "\nLes informations peuvent être incomplètes ou inexactes"
            },
        )
        if "error" in info and info["error"] == "NOT FOUND":
            embed.title = ":x: ERREUR :x:"
            embed.description = "La salle " + str(salle) + " n'existe pas"
            embed.color = 0xFF0000
            await ctx.send(embeds=embed, ephemeral=True)
            return
        if info["free"] == [] and info["cours"] == [] and not info["now"]:
            embed.title = ":x: ERREUR :x:"
            embed.description = "Problème lors de la récupération des informations"
            embed.color = 0xFF0000
            await ctx.send(embeds=embed, ephemeral=True)
            return

        else:
            if "now" in info and info["now"]:
                embed.set_thumbnail(
                    url='https://media.tenor.com/LhSUbS1MsTgAAAAC/smile-no.gif'
                )
                embed.add_field(
                    name="🔴 En cours",
                    value=info["now"]["name"] + " de **" +
                    format_time(info["now"]["begin"], timezone) + "** à  **" +
                    format_time(info["now"]["end"], timezone) + "**",
                    inline=False)
            else:
                embed.set_thumbnail(
                    url=
                    "https://media.tenor.com/QEk9IT7TRWcAAAAd/snacks-close.gif"
                )
                embed.add_field(name="🟢 Libre", value="\n", inline=False)

            if "error" not in info:
                if len(info["cours"]) > 0:
                    prochain = ""
                    for i in range(0, len(info["cours"])):
                        prochain += info["cours"][i][
                            "name"] + " de **" + format_time(
                                info["cours"][i]["begin"],
                                timezone) + "** à  **" + format_time(
                                    info["cours"][i]["end"], timezone) + "**\n"
                    embed.add_field(name=":alarm_clock: Prochain cours",
                                    value=prochain,
                                    inline=False)

                if info["free"]:
                    free = ""
                    for i in range(0, len(info["free"])):
                        free += "**" + format_time(
                            info["free"][i][0],
                            timezone) + "** à **" + format_time(
                                info["free"][i][1], timezone) + "**\n"
                    embed.add_field(name=":white_check_mark: Disponibilités",
                                    value=free,
                                    inline=False)

            await ctx.send(embeds=embed)

    @interactions.slash_command(
        name="info_prof",
        description=
        "Retourne les informations sur les disponibilités d'un professeur",
    )
    @interactions.slash_option(
        name="prof",
        description="De quel professeur veux-tu les informations ?",
        required=True,
        opt_type=interactions.OptionType.STRING,
        choices=[
            interactions.SlashCommandChoice(name="Jr. Richa", value="RICHA"),
            interactions.SlashCommandChoice(name="Y. Carpentier",
                                            value="CARPENTIER"),
            interactions.SlashCommandChoice(name="P. Etcheverry",
                                            value="ETCHEVERRY"),
            interactions.SlashCommandChoice(name="C. Marquesuzaà",
                                            value="MARQUESUZAÀ"),
            interactions.SlashCommandChoice(name="M. Bruyère",
                                            value="BRUYÈRE"),
            interactions.SlashCommandChoice(name="A. Moulin", value="MOULIN"),
            interactions.SlashCommandChoice(name="M. Borthwick",
                                            value="BORTHWICK"),
            interactions.SlashCommandChoice(name="M. Erritali",
                                            value="ERRITALI"),
            interactions.SlashCommandChoice(name="S. Sassi", value="SASSI"),
            interactions.SlashCommandChoice(name="R. Chbeir", value="CHBEIR"),
            interactions.SlashCommandChoice(name="T. Nodenot",
                                            value="NODENOT"),
            interactions.SlashCommandChoice(name="F. YESSOUFOU",
                                            value="YESSOUFOU"),
            interactions.SlashCommandChoice(name="A. Boggia", value="BOGGIA"),
            interactions.SlashCommandChoice(name="M. Capliez",
                                            value="CAPLIEZ"),
            interactions.SlashCommandChoice(name="O. Dezeque",
                                            value="DEZEQUE"),
            interactions.SlashCommandChoice(name="C. Rustici",
                                            value="RUSTICI"),
            interactions.SlashCommandChoice(name="P. Roose", value="ROOSE"),
            interactions.SlashCommandChoice(name="S. Voisin (Laplace) ",
                                            value="VOISIN"),
            interactions.SlashCommandChoice(name="N. Valles-Parlangeau",
                                            value="VALLES"),
            interactions.SlashCommandChoice(name="P. Dagorret",
                                            value="DAGORRET"),
            interactions.SlashCommandChoice(name="MA. Boudia", value="BOUDIA"),
            interactions.SlashCommandChoice(name="M. Walton", value="WALTON"),
            interactions.SlashCommandChoice(name="JM. Fiton", value="FITON"),
            interactions.SlashCommandChoice(name="Y. Dourisbourne",
                                            value="DOURISBOURE"),
            interactions.SlashCommandChoice(name="MA. Gastambide",
                                            value="GASTAMBIDE"),
        ])
    async def info_prof(self, ctx: interactions.SlashContext, prof: str):
        print("[Salles] L'utilisateur ", ctx.author,
              " a demandé les informations sur le professeur ", prof)
        if not await self.check_state(ctx):
            return
        info = self.edt.get_prof(prof)
        embed = interactions.Embed(
            title="Informations sur " + str(prof),
            description="",
            color=0x2980b9,
            footer={
                "text":
                "Dernière mise à jour: " +
                format_time(info["checked"], timezone) +
                "\nLes informations peuvent être incomplètes ou inexactes"
            },
        )
        if info['now'] != None:
            embed.add_field(
                name="🔴 En cours",
                value=info["now"]["name"] + " de **" +
                format_time(info["now"]["begin"], timezone) + "** à  **" +
                format_time(info["now"]["end"], timezone) + "** en salle **" +
                info["now"]["salle"] + "**",
                inline=False)
        else:
            embed.add_field(name="🟡 Pas en cours", value="\n", inline=False)

        if info['cours'] != []:
            prochain = ""
            for i in range(0, len(info["cours"])):
                prochain += info["cours"][i]["name"] + " de **" + format_time(
                    info["cours"][i]["begin"],
                    timezone) + "** à  **" + format_time(
                        info["cours"][i]["end"], timezone
                    ) + "** en salle **" + info["cours"][i]["salle"] + "**\n"
            if prochain != "":
                embed.add_field(name=":alarm_clock: Prochain cours",
                                value=prochain,
                                inline=False)
        else:
            embed.add_field(name=":alarm_clock: Prochain cours",
                            value="Pas de cours prévus",
                            inline=False)
        await ctx.send(embeds=embed)

    @interactions.slash_command(
        name="emploi_du_temps",
        description="Retourne ton emploi du temps par rapport à tes rôles",
    )
    async def emploi_du_temps(self, ctx: interactions.SlashContext):
        print("[Salles] L'utilisateur ", ctx.author,
              " a demandé son emploi du temps")
        if not await self.check_state(ctx):
            return
        annee, td, tp = "", "", ""

        for role in ctx.author.roles:
            if str(role) in ROLES["Année"]:
                annee = ROLES["Année"][str(role)]
            if str(role) in ROLES['TD']:
                td = ROLES["TD"][str(role)]
            if str(role) in ROLES['TP']:
                tp = ROLES["TP"][str(role)]
        info = self.edt.get_cours_TD(annee + "-" + td + "-" + tp)
        embed = interactions.Embed(
            title="Informations sur l'emploi du temps du TD :\n" + td + "-" +
            tp + " du BUT" + annee,
            description="",
            color=0x2980b9,
            footer={
                "text":
                "Dernière mise à jour: " +
                format_time(info["checked"], timezone) +
                "\nLes informations peuvent être incomplètes ou inexactes"
            },
        )
        if annee == "" or td == "" or tp == "":
            embed.title = ":x: ERREUR :x:"
            embed.add_field(
                name=
                "Tu n'as pas de rôle d'année, de TD ou de TP\nVérifie tes rôles ici : <#959813680101478470>",
                value="\n",
                inline=False)
            embed.color = 0xFF0000
            await ctx.send(embeds=embed, ephemeral=True)
            return
        else:
            for i in range(0, len(info["cours"])):
                embed.add_field(
                    name=format_time(info["cours"][i]["begin"], timezone) +
                    " - " + format_time(info["cours"][i]["end"], timezone),
                    value=info["cours"][i]["name"] + " en salle " +
                    info["cours"][i]["salle"] + " avec [none]",
                    inline=False)
            await ctx.send(embeds=embed)

    @interactions.slash_command(
        name="extension_salle_info",
        description="Retourne des informations sur le plugin salle",
    )
    async def extension_salle_info(self, ctx: interactions.SlashContext):
        print("[Salles] L'utilisateur ", ctx.author,
              " a demandé des informations sur l'extension Salles")
        embed = interactions.Embed(
            title="Informations sur l'extension [Salles]",
            description="",
            color=0x2980b9,
            footer={
                "text":
                "Extension créée par @noenic \nhttps://github.com/noenic/BotPromoInfo"
            },
        )
        embed.add_field(
            name="Semestre",
            value=
            f"{SEMESTRE} {'(pair)' if int(SEMESTRE) % 2 == 0 else '(impair)'}",
            inline=False)
        embed.add_field(name="Dernière mise à jour de l'emploi du temps",
                        value=format_time(self.edt.date.timestamp(), timezone),
                        inline=False)
        embed.add_field(name="Liste des salles PC 🖥️",
                        value=str(self.edt.listeSallesPC),
                        inline=True)
        embed.add_field(name="Liste des salles 📚",
                        value=str(self.edt.listeSallesTD),
                        inline=True)
        promo_list = "\n".join([f"{k}: {v}" for k, v in ID_PROMOS.items()])
        embed.add_field(name="Liste des ID des promos",
                        value=promo_list,
                        inline=False)
        role_list = ""
        for role_type, roles in ROLES.items():
            role_list += f"{role_type}:\n"
            for role_id, role_name in roles.items():
                role_list += f"  - {role_id}: {role_name}\n"
        embed.add_field(name="Liste des rôles", value=role_list, inline=False)

        await ctx.send(embeds=embed, ephemeral=True)


def setup(client):
    thread = threading.Thread(target=refresh_edt, args=(Salles(client), ))
    thread.setDaemon(True)
    print("[Salles] chargé")
    thread.start()
