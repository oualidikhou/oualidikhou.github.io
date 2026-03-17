import xml.etree.ElementTree as ET
import json
import os

# Crée le dossier _data s'il n'existe pas
os.makedirs("_data", exist_ok=True)

try:
    tree = ET.parse("scholar.xml")
    root = tree.getroot()

    publications = []

    for item in root.findall(".//item"):
        title = item.find("title").text if item.find("title") is not None else ""
        link = item.find("link").text if item.find("link") is not None else ""
        pub_date = item.find("pubDate").text if item.find("pubDate") is not None else ""

        # Extraire juste l'année depuis pubDate
        year = ""
        if pub_date:
            year = pub_date.strip().split()[-1]  # dernière partie de pubDate

        publications.append({
            "title": title,
            "link": link,
            "year": year
        })

    # Écriture dans le fichier JSON
    with open("_data/publications.json", "w") as f:
        json.dump(publications, f, indent=2)

except Exception as e:
    print("Error parsing RSS:", e)
    # fichier vide pour ne pas bloquer Jekyll
    with open("_data/publications.json", "w") as f:
        json.dump([], f)
