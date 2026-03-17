from scholarly import scholarly
import json

scholar_id = "n26K8XoAAAAJ"

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
