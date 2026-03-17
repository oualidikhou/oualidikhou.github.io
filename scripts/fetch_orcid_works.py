import requests
import json
import os

# Ton ORCID
ORCID_ID = "0009-0006-7864-8298"

# Crée le dossier _data s'il n'existe pas
os.makedirs("_data", exist_ok=True)

# Appel API publique ORCID pour récupérer les works (publications)
url = f"https://pub.orcid.org/v3.0/{ORCID_ID}/works"
headers = {"Accept": "application/json"}

publications = []

try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    data = response.json()
    # Extraction des publications
    for group in data.get("group", []):
        work_summary = group.get("work-summary", [])[0]
        title = work_summary.get("title", {}).get("title", {}).get("value", "")
        year = work_summary.get("publication-date", {}).get("year", {}).get("value", "")
        journal = work_summary.get("journal-title", {}).get("value", "")
        # Essayer d'extraire un DOI si disponible
        link = ""
        ext_ids = work_summary.get("external-ids", {}).get("external-id", [])
        for ext in ext_ids:
            if ext.get("external-id-type", "").lower() == "doi":
                doi = ext.get("external-id-value", "")
                if doi:
                    link = f"https://doi.org/{doi}"
        publications.append({
            "title": title,
            "venue": journal,
            "year": year,
            "link": link
        })
except Exception as e:
    print("Erreur ORCID API:", e)

# Écris le JSON pour Jekyll
with open("_data/publications.json", "w") as f:
    json.dump(publications, f, indent=2)

print(f"Saved {len(publications)} publications")
