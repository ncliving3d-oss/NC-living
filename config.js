/* ====== HIER PFLEGST DU DEINE SEITE ======
   Bilder: Datei einfach zu den anderen Dateien hochladen (kurzer Name ohne
   Leerzeichen/Umlaute, z. B. herzkette-1.jpg) und unten den Dateinamen eintragen.
   Ein Produkt kann mehrere Bilder haben - dann erscheinen im Shop Pfeile zum Durchklicken.

   Neues Produkt hinzufügen: einen kompletten Block { ... } kopieren, ein Komma
   dahinter setzen und die Werte anpassen. Produkt entfernen: den Block löschen.
   Link leer lassen ("") = Button wird automatisch ausgeblendet. */
window.NC = {
  whatsapp: "4915679824183",           // Nummer ohne + und ohne Nullen am Anfang
  email: "nc.living3d@gmail.com",
  plattformen: [
    { name: "eBay",         url: "", text: "Unsere Artikel bei eBay" },
    { name: "Kleinanzeigen", url: "", text: "Direkt aus der Region" },
    { name: "Etsy",         url: "", text: "Handgemachtes bei Etsy" }
  ],
  produkte: [
    {
      titel: "Herzkette",
      kategorie: "Herzen",
      // Beispiel mit mehreren Fotos: bilder: ["herzkette-1.jpg","herzkette-2.jpg","herzkette-3.jpg"]
      bilder: ["Herz1.jpg", "Herz2.jpg"],
      text: "Gedruckte Herzen, Schicht für Schicht aufgereiht.",
      link: ""
    }
  ]
};
