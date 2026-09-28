# N&C Living Website – Anleitung

## Kostenlos online stellen (GitHub Pages)
1. Auf github.com kostenlos registrieren, oben rechts "New repository" (z. B. `nc-living`, Public).
2. "uploading an existing file" klicken, den GESAMTEN Inhalt dieses Ordners hineinziehen, "Commit changes".
3. Settings > Pages > Source: "Deploy from a branch", Branch `main`, Ordner `/ (root)`, Save.
4. Nach 1–2 Minuten ist die Seite unter `https://DEINNAME.github.io/nc-living` erreichbar.

## Bilder und Produkte ändern
- Foto in den Ordner `produkte` hochladen (Repository > produkte > Add file > Upload files).
- In `config.js` den Dateinamen bei `bild:` eintragen. Fertig.
- Neues Produkt: eine Zeile kopieren. Löschen: Zeile entfernen.

## Shop-Links
In `config.js` bei `plattformen` die Adresse eures eBay-, Kleinanzeigen- und Etsy-Profils bei `url:` eintragen.
Leere Links werden nicht angezeigt.

## Hinweis
Es werden keine externen Dienste geladen (keine Google Fonts, kein Tracking).
