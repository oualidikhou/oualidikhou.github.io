import bibtexparser
import json
import os

# Crée le dossier _data s'il n'existe pas
os.makedirs("_data", exist_ok=True)

with open("scripts/publications.bib", encoding="utf-8") as bib_file:
    bib_database = bibtexparser.load(bib_file)

publications = []

for entry in bib_database.entries:
    title = entry.get("title", "")
    year = entry.get("year", "")
    journal = entry.get("journal", entry.get("booktitle", ""))
    doi = entry.get("doi", "")
    link = f"https://doi.org/{doi}" if doi else ""
    authors = entry.get("author", "")

    publications.append({
        "title": title,
        "venue": journal,
        "year": year,
        "link": link,
        "authors": authors
    })

# Écrire le JSON
with open("_data/publications.json", "w", encoding="utf-8") as f:
    json.dump(publications, f, indent=2, ensure_ascii=False)

print(f"Saved {len(publications)} publications")
