export default function GetWord() {
  const words = [
    "Trumset",
    "Brännässla",
    "Läkare",
    "Jordklot",
    "Skräp",
    "Rakhyvel",
    "Cykel",
    "Åtta",
    "Sol",
    "Häst",
    "Stark",
    "Ikea",
    "Lekpark",
    "Dator",
    "Höghus",
    "Amerika",
    "Arg",
    "Dimma",
    "Coca cola",
    "Diskmaskin",
    "Blå",
    "Rollspel",
    "Julafton",
    "Sex",
    "Lilja",
    "Sur",
    "Skumbanan",
    "Noll",
    "Umeå",
    "Fyra",
    "Fängelse",
    "Fjäder",
    "Pannkaka",
    "Lägenhet",
    "Slips",
    "Öra",
    "Brons",
    "Maskros",
    "Finland",
    "Glögg",
    "Labyrint",
    "Spegel",
    "Flyttlåda",
    "Brandsläckare",
    "Raket",
    "Hund",
    "Noshörning",
    "Saltapinnar",
    "Blockljus",
    "Star wars",
    "Markis",
    "Glasögon",
    "Ost",
    "Vardagsrum",
    "Tangentbord",
    "Skratt",
    "Ung",
    "Orange",
    "Dill",
    "Telefonladdare",
    "Vodka",
    "Iskub",
    "Fotölj",
    "Öl",
    "Lok",
    "Ladugård",
    "Nagel",
    "Hud",
    "Trumpet",
    "Tåg",
    "Björk",
    "Får",
    "Flod",
    "Träd",
    "Prinskorv",
    "Hiss",
    "Flagga",
    "Tillbringare",
    "Byxor",
    "Hus",
    "Älg",
    "Kock",
    "Soffa",
    "Papegoja",
    "Wienerbröd",
    "Flaska",
    "Snäll",
    "Ben",
    "Katt",
    "Hjärna",
    "Element",
    "Gevär",
    "Lång",
    "Två",
    "Sverige",
    "Choklad",
    "Gitarr",
    "Socionom",
    "Gröna lund",
    "Chips",
    "TV",
    "Hjärta",
    "Blåklocka",
    "Väska",
    "Svag",
    "Abborre",
    "Kråka",
    "Puss",
    "Ishockey",
    "Tennis",
    "Svart",
    "Reklam",
    "Liten",
    "Mamma",
    "Utlandsresa",
    "Flygplan",
    "Kalsonger",
    "Skifnyckel",
    "Badring",
    "Fönster",
    "Willys",
    "Biograf",
    "Stockholm",
    "Hyvel",
    "Kanot",
    "Norge",
    "Poker",
    "Brädspel",
    "Regn",
    "Symaskin",
    "Vatten",
    "Skola",
    "Trosor",
    "Prinsesstårta",
    "Ostboll",
    "Gräsmatta",
    "Glass",
    "BH",
    "Danmark",
    "Visp",
    "Kontorsstol",
    "Stege",
    "Limpa",
    "Frisbee",
    "Hår",
    "Blyertspenna",
    "Dagis",
    "Facebook",
    "Partyspel",
    "Ögon",
    "Tvättmaskin",
    "Snö",
    "Is",
    "Torkskåp",
    "Näsa",
    "Guld",
    "Vind",
    "Rosa",
    "Klocka",
    "Motorcykel",
    "Brunett",
    "Skärp",
    "Huvud",
    "Värmeljus",
    "Tall",
    "Säng",
    "Rubiks kub",
    "Pepsi",
    "Taxi",
    "Buljong",
    "Husmans",
    "Rutschkana",
    "Glad",
    "Pappa",
    "Älv",
    "Sovrum",
    "Smör",
    "Drink",
    "Spis",
    "Ljusstake",
    "Spik",
    "Lila",
    "Mässing",
    "Loppis",
    "Sju",
    "Skellefteå",
    "Ett",
    "Silver",
    "Vissla",
    "Tre",
    "Kristallglas",
    "Båt",
    "Gul",
    "Handfat",
    "Sushi",
    "Bilskrot",
    "Spel",
    "Mjölk",
    "Sop",
    "Ica",
    "Citron",
    "Ko",
    "Ambulans",
    "Sommarstuga",
    "Lejon",
    "Blond",
    "Dumle",
    "Dörrhandtag",
    "Skruvdragare",
    "Gran",
    "Lampa",
    "Golfbana",
    "Springa",
    "Månen",
    "Klänning",
    "Polis",
    "Hand",
    "Kamera",
    "Primtal",
    "Moped",
    "Mun",
    "Vindruva",
    "Sandstrand",
    "Vetemjöl",
    "Stjärna",
    "Syster",
    "Potatis",
    "Star trek",
    "Vinter",
    "Vit",
    "Såg",
    "Penna",
    "Toalett",
    "Stekspade",
    "Mage",
    "Ledsen",
    "Bläckpenna",
    "Gädda",
    "Tårta",
    "Navel",
    "Golf",
    "Prästkrage",
    "Nio",
    "Pariserhjul",
    "Kök",
    "Blåval",
    "Stor",
    "Fem",
    "Broder",
    "Smärta",
    "Sugrör",
    "Boll",
    "Slägga",
    "Sminkspegel",
    "Väderkvarn",
    "Kvadrat",
    "Vattenkokare",
    "Njure",
    "Färja",
    "Balkong",
    "Pilbåge",
    "Gammal",
    "Badkar",
    "Råtta",
    "Bajamaja",
    "Persilja",
    "Hatt",
    "Vispgrädde",
    "Röd",
    "Stekpanna",
    "Resväska",
    "Lärare",
    "Julbord",
    "Telefon",
    "Sova",
    "Pistol",
    "Gardin",
    "Sjukhus",
    "Hunddagis",
    "Köttbulle",
    "Brandman",
    "Rund",
    "Påsk",
    "Förskola",
    "Google",
    "Motorväg",
    "Triangel",
    "Bord",
    "Burk",
    "Hammare",
    "Sovsäck",
    "Kram",
    "Fanta",
    "Ostkrok",
    "Marknad",
    "Fis",
    "Pjamas",
    "Segelbåt",
    "Näsduk",
    "Hoppborg"
  ];

  const w = words[Math.floor(Math.random() * words.length)];
  console.log(w);
  return w;
}
