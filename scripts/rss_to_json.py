import xml.etree.ElementTree as ET
import json

tree = ET.parse("scholar.xml")
root = tree.getroot()

publications = []

for item in root.findall(".//item"):
    publications.append({
        "title": item.find("title").text,
        "link": item.find("link").text,
        "year": ""
    })

with open("_data/publications.json", "w") as f:
    json.dump(publications, f, indent=2)
