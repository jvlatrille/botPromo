import sys, os
import keep_alive

# On recupere le dotenv
from dotenv import load_dotenv

# keep_alive.keep_alive()

load_dotenv()
TOKEN = 'MTE5OTY4NzQ0NDU4NTUyMTE3Mg.GBphih.itGCYyoQcpOgIMdBkQAMCOY5F2xl_9PEU920VI'

if TOKEN is None:
    print("[Main] TOKEN non trouvé")
    exit()

import interactions

intents = interactions.Intents.DEFAULT | interactions.Intents.MESSAGE_CONTENT
client = interactions.Client(intents=intents, send_command_tracebacks=False)

sys.path.append('Cogs')
sys.path.append('Cogs/src')

# On charge les extensions
client.load_extension("Cogs.Salles")


@interactions.listen()
async def on_ready():
    # Fonction qui s'exécute quand le bot est prêt
    print("[Main] Bot prêt")
    pass


@interactions.slash_command(name="kill", description='Tue le bot')
async def kill(ctx: interactions.SlashContext):
    """Kill le bot"""
    # Si c'est moi qui lance la commande, il le fait sinon il répond par un gif plus ou moins approprié
    if str(ctx.author.id) == "583268098983985163":
        await ctx.send("Je dégage!")
        await client.stop()
        exit()
    else:
        print("[Main] L'utilisateur " + ctx.author.username +
              " a tenté de kill le bot")
        await ctx.send(
            "https://tenor.com/view/chut-ferme-la-tg-puceau-puceau-de-merde-gif-20903914",
            ephemeral=True)


print('Wallah ça fonctionne')
client.start(TOKEN)
