# N&C Living Website – Anleitung

## Kostenlos online stellen (GitHub Pages)
Es gibt KEINE Ordner. Alle Dateien liegen direkt nebeneinander, das geht auch am iPad.
1. Auf github.com kostenlos registrieren, "New repository" (z. B. `nc-living`, Public).
2. "uploading an existing file" wählen, dann alle Dateien auf einmal auswählen (im Auswahlfenster mehrere markieren) und "Commit changes".
3. Settings > Pages > Source: "Deploy from a branch", Branch `main`, Ordner `/ (root)`, Save.
4. Nach 1-2 Minuten ist die Seite unter `https://DEINNAME.github.io/nc-living` erreichbar.

## Neues Produktfoto hinzufügen
- Foto über "Add file > Upload files" zu den anderen Dateien hochladen (kurzer Name ohne Leerzeichen/Umlaute, z. B. `herzkette-1.jpg`).
- Öffne `config.js` (Stift-Symbol zum Bearbeiten) und trage den Dateinamen bei `bilder:` ein.

## Ein Produkt mit mehreren Fotos zeigen
Trag einfach mehrere Dateinamen hintereinander ein, zum Beispiel:
```
bilder: ["herzkette-1.jpg","herzkette-2.jpg","herzkette-3.jpg"],
```
Auf der Seite erscheint dann automatisch ein Zähler auf dem Foto (z. B. "1 / 3"), und
im vergrößerten Bild kann man mit Pfeiltasten links/rechts durch alle Fotos blättern.
Ein Produkt ganz ohne Foto zeigt "Foto folgt" - kein Problem, einfach später ergänzen.

## Neues Produkt hinzufügen
In `config.js` im Bereich `produkte` einen kompletten Block kopieren und anpassen:
```
{
  titel: "Blumen-Girlande",
  kategorie: "Blumen",
  bilder: ["blumen-1.jpg"],
  text: "Filigrane Blüten für Fenster und Wand.",
  link: ""
},
```
Die `kategorie` erscheint automatisch als neuer Filter-Button auf der Seite.

## Shop-Links
In `config.js` bei `plattformen` die Adresse eures eBay-, Kleinanzeigen- und Etsy-Profils bei `url:` eintragen.
Leere Links werden nicht angezeigt.

## Hinweis
Es werden keine externen Dienste geladen (keine Google Fonts, kein Tracking).
