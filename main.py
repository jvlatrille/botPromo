import sys, os
from dotenv import load_dotenv
import interactions
from interactions import Embed
import random

# Chargement des variables d'environnement
load_dotenv()
TOKEN = os.environ['TOKEN']

if not TOKEN:
    print("[Main] TOKEN non trouvé")
    exit()

# Initialisation des intentions du bot avec moins d'intentions pour réduire la charge si certaines ne sont pas nécessaires
intents = interactions.Intents.DEFAULT | interactions.Intents.MESSAGE_CONTENT | interactions.Intents.GUILD_MEMBERS
client = interactions.Client(intents=intents, send_command_tracebacks=False)

# On utilise les dossiers contenant les extensions du bot
sys.path.extend(['Cogs', 'Cogs/src'])

client.load_extension("Cogs.Salles")


@interactions.listen()
async def on_ready():
    """Fonction exécutée quand le bot est prêt"""
    print("[Main] Bot prêt")

    # Définir le statut et l'activité du bot avec les bonnes méthodes
    await client.change_presence(
        status=interactions.Status.ONLINE,  # Statut en ligne
        activity=interactions.Activity.create(
            type=interactions.ActivityType.GAME,  # Type d'activité : jouer
            name="PING FOR HELP"))


@interactions.slash_command(name="ping",
                            description="Vérifie si le bot répond")
async def ping(ctx):
    await ctx.send(f"Pong fdp. {round(client.latency * 1000)}ms")


@interactions.listen()
async def on_message_create(event):
    try:
        message = event.message
        # Vérification si le bot est mentionné en utilisant son ID
        if f"<@{client.user.id}>" in message.content:
            # Création de l'embed pour l'affichage des commandes
            embed = interactions.Embed(
                title="📋 Liste des commandes disponibles",
                description=
                "Voici toutes les commandes que tu peux utiliser avec ce bot",
                color=0x2980b9,
            )
            # Ajout d'un footer à l'embed
            embed.set_footer(
                text="Mentionne le bot pour afficher cette liste à nouveau.")

            # Ajout des commandes à l'embed
            for command in client.application_commands:
                embed.add_field(name=f"/{command.name}",
                                value=command.description
                                or "Pas de description disponible",
                                inline=False)

            # Envoi de l'embed dans le canal
            await message.channel.send(embeds=embed)

    except Exception as e:
        # Log de l'erreur pour mieux comprendre ce qui plante
        print(f"Erreur dans on_message_create : {e}")


@interactions.slash_command(
    name="clear",
    description="Supprime un certain nombre de messages dans le canal",
)
@interactions.slash_option(name="amount",
                           description="Nombre de messages à supprimer",
                           required=True,
                           opt_type=interactions.OptionType.INTEGER,
                           min_value=1,
                           max_value=25)
async def clear(ctx: interactions.SlashContext, amount: int):
    # Vérification que le contexte a bien un canal associé
    if not ctx.channel:
        await ctx.send(
            "Impossible d'accéder au canal pour supprimer les messages.",
            ephemeral=True)
        return

    try:
        # Fetch les messages dans le canal
        messages = await ctx.channel.fetch_messages(limit=amount)
        # Suppression des messages
        for message in messages:
            await message.delete()

        await ctx.send(f"🗑️ {amount} messages ont été supprimés.",
                       ephemeral=True)
    except Exception as e:
        # Gérer l'erreur si quelque chose se passe mal
        await ctx.send(f"Erreur lors de la suppression des messages : {e}",
                       ephemeral=True)
        print(f"Erreur dans /clear : {e}")


# Liste des réponses de la boule magique
r8ball = [
    "C'est certain.", "Surement (j'y crois moyen).", "Sans aucun doute.",
    "Oui, absolument.", "Pas vraiment.", "Comme je le vois, oui.",
    "Il semble que oui.", "Probablement.", "Les signes pointent vers oui.",
    "Oui.", "Réponse floue, essayez à nouveau.", "Demandez plus tard.",
    "Mieux vaut ne pas vous dire maintenant.", "Impossible à prédire.",
    "Concentrez-vous et demandez à nouveau.", "Ne comptez pas dessus.",
    "Ma réponse est non.", "Mes sources disent non.",
    "Les perspectives ne sont pas si bonnes.", "Très douteux."
]


@interactions.slash_command(
    name="8ball",
    description='Posez une question à la "boule magique (tkt on y crois)"')
@interactions.slash_option(name="question",
                           description="Votre question pour la boule magique",
                           required=True,
                           opt_type=interactions.OptionType.STRING)
async def eight_ball(ctx: interactions.SlashContext, question: str):
    """Commande 8ball qui répond aux questions"""
    # Vérifie si la question se termine par un point d'interrogation
    if question.endswith("?"):
        # Sélection d'une réponse aléatoire dans la liste des réponses
        response = random.choice(r8ball)

        # Création de l'embed pour la réponse
        embed = interactions.Embed(
            title="Boule Magique (Wallah c'est vrai)",
            color=0x2980b9  # Couleur violette pour la boule magique
        )
        embed.add_field(name=f"Question de {ctx.author.username}",
                        value=question,
                        inline=False)
        embed.add_field(name="Réponse", value=response, inline=False)

        # Envoi de l'embed
        await ctx.send(embeds=embed)
    else:
        # Si la question ne se termine pas par un point d'interrogation
        await ctx.send(
            "Apprend à écrire :/\nGénéralement on met un point d'interrogation à la fin des questions.\nSi tu ne sais pas comment faire, voila un exemple :\n```Est tu débile ???????????```"
        )


# Démarrage du client
print('Wallah ça fonctionne')
client.start(TOKEN)
