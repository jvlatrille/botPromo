# Utilise une version plus récente si possible
FROM python:3.9-slim

# Utilise des WORKDIR pour éviter les répétitions de chemins
WORKDIR /app

# Copie uniquement requirements.txt pour installer les dépendances plus rapidement en cas de modifications minimes
COPY requirements.txt .

# Installations des dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copie des autres fichiers dans le conteneur
COPY . .

# Ajoute une commande CMD pour lancer ton bot automatiquement
CMD ["python", "main.py"]
