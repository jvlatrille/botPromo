import requests
from bs4 import BeautifulSoup as bs


def majMenu():
    """Récupère les menus du site du Crous"""
    url = 'https://www.crous-bordeaux.fr/restaurant/resto-u-pierre-bidart/'
    try:
        r = requests.get(url)
        r.raise_for_status()  # Vérifie que la requête est réussie
    except requests.RequestException as e:
        print(f"Erreur lors de la récupération du menu : {e}")
        return {}

    soup = bs(r.text, 'html.parser')
    element = soup.select_one('div[id="menu-repas"]')

    if not element:
        print("Aucun menu trouvé.")
        return {}

    jours = element.find_all('h3')
    sElement = element.select('div[class="content clearfix"]')

    dico = {}
    for i in range(len(sElement)):
        plats = sElement[i].select_one('ul[class="liste-plats"]')
        if plats:
            dico[jours[i].text] = [
                plat.text for plat in plats.select('li')
                if plat.text not in ["DESSERT", "ENTREE", ""]
            ]

    return dico


def menuDuJour(dico):
    """Retourne le menu du jour"""
    if dico:
        jour = list(dico.keys())[0]
        return jour, dico[jour]
    return None, None


if __name__ == "__main__":
    menu = majMenu()
    print(menu)
