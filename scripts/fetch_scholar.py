from scholarly import scholarly
import json

scholar_id = "n26K8XoAAAAJ"

try:
    author = scholarly.search_author_id(scholar_id)
    author = scholarly.fill(author, sections=['publications'])

    publications = []

    for pub in author['publications']:
        bib = pub['bib']
        publications.append({
            "title": bib.get("title",""),
            "authors": bib.get("author",""),
            "venue": bib.get("venue",""),
            "year": bib.get("pub_year","")
        })

    with open("_data/publications.json","w") as f:
        json.dump(publications,f,indent=2)

except Exception as e:
    print("Error fetching Scholar data:", e)
    # créer un fichier vide pour ne pas bloquer Jekyll
    with open("_data/publications.json","w") as f:
        json.dump([],f)
