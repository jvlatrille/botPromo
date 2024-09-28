# Utiliser une image de base compatible ARM (pour Raspberry Pi 5, architecture ARM64)
FROM python:3.11-slim-bullseye

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier requirements.txt dans le conteneur
COPY requirements.txt .

# Installer les dépendances listées dans le requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copier tout le reste du projet dans le conteneur
COPY . .

# Exposer un port si nécessaire
EXPOSE 8000

# Spécifier la commande de lancement de ton bot botPromo
CMD ["python", "main.py"]
  