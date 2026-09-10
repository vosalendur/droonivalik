# Droonivalija — eraisiku ja edasijõudnud harrastaja multirootor-drooni valik

Staatiline veebirakendus, mis aitab eraisikul ja edasijõudnud harrastajal valida sobivat multirootor-drooni. Rakendus kasutab kaheastmelist loogikat:

1. **välistavad filtrid** — thermal, öö-/hämaras võime, hinnalagi, kuni 250 g nõue, kaamera miinimum ja professionaalsemate mudelite opt-in/special-need kontroll;
2. **sobivuse skoorimine** — kasutusviis, hinnaklass, kaamera, kaal, tuul, algajasõbralikkus, reisile sobivus, zoom, thermal, N/low-light/starlight öövaatlus, professionaalsema mudeli sobivus, FPV tüüp ja takistuste vältimine.

Mudelite ja hinnaklasside andmed on koostatud avalike allikate põhjal seisuga **2026-09**. V2 lisab Mavic 3 klassi hämaravõimega mudelid ning Autel EVO Max 4N tüüpi N/starlight öökaamera haru. Rakendus ei ole ostu-, õigus- ega lennuohutusalane lõplik nõuanne.

## Kiire käivitamine

Kõige lihtsam:

1. paki ZIP-fail lahti;
2. ava `index.html` brauseris.

Rakendus kasutab `data/drones.js` ja `data/rules.js` faile, seega töötab ka ilma veebiserverita. Kui soovid seda testida lokaalse veebiserveriga, käivita kaustas:

```bash
python -m http.server 8080
```

Seejärel ava brauseris `http://localhost:8080`.

## Failid

```text
droonivaliku-rakendus-2026-09-v6/
  index.html                 # veebirakenduse põhileht
  styles.css                 # kujundus
  app.js                     # brauseris töötav soovitusmootor ja UI-loogika
  data/
    drones.json              # kureeritud droonikataloog
    drones.js                # JSON-ist genereeritud brauseriandmed
    rules.json               # filtrite ja skoorimise reeglid
    rules.js                 # JSON-ist genereeritud brauseriandmed
  src/
    scoring.ts               # TypeScripti soovitusmootor Next.js/React arenduseks
    scoring.original.ts      # eelmine lähtefail muutmata kujul
    drone_selector_usage_example.ts
  tools/
    build-data-js.py         # genereerib JSON-ist data/*.js failid
  docs/
    PRD.md                   # lähteülesanne edasiseks arenduseks
    update-checklist.md      # andmete perioodilise uuendamise kontrollnimekiri
```

## Kataloogi uuendamine

Kui muudad `data/drones.json` või `data/rules.json`, käivita pärast seda:

```bash
python tools/build-data-js.py
```

See loob uued `data/drones.js` ja `data/rules.js` failid, mida brauserirakendus kasutab.

## Avaldamine

Staatilise rakendusena saab kogu kausta üles laadida näiteks:

- siseveebi;
- GitHub Pages’i;
- Netlifysse;
- Vercelisse;
- tavalisse veebiserverisse.

Täiendavat backend’i ei ole vaja.

## Edasised arendusideed

- Admin-vaade droonikataloogi haldamiseks.
- Mudelite piltide lisamine `public` või `assets` kausta.
- Täiendav „miks välja jäeti?” selgitus kasutajale.
- EU/Eesti regulatiivsete meeldetuletuste täpsustamine.
- AI-vabateksti sisend, mis teisendab kasutaja kirjelduse struktureeritud valikuteks.
- Hindade perioodiline uuendamine käsitsi kontrollitud allikate alusel.


## V2 loogikamuudatused

- **Öine vaatlus ei tähenda enam automaatselt termokaamerat.** Sobivaks loetakse kolm haru: hea low-light/Night Mode EO-kaamera, N/starlight kaamera või thermal.
- **Mavic 3 klassi droonid on nüüd öise/hämaras vaatluse valikus.** Kataloogis on eraldi DJI Mavic 3E ja DJI Mavic 3 Pro kirjed.
- **Professionaalsemaid droone ei välistata enam absoluutse filtriga.** Need kuvatakse, kui kasutaja lubab professionaalsemad mudelid või valib eriotstarbelise kasutuse: öövaatlus, termiline vaatlus, kinnistu jälgimine/kaardistamine või otsing oma maa-alal.
- **Lisatud N-kaamera haru.** Autel EVO Max 4N V2 on kataloogis kui starlight + thermal + LRF vaatlusdroon.


## 2026-09-v6 muudatus

- Lisatud DJI Avata platvorm: algne DJI Avata, uuendatud DJI Avata 2 kirje ning lisatud DJI Avata 360.
- DJI Avata 360 märgitud 360°/low-light video võimega FPV/cinewhoop sisulooja platvormiks, mitte thermal- või zoom-vaatlusdrooni asenduseks.
- Avata seeria puhul säilitatud hoiatus, et FPV-prillidega lennates tuleb järgida VLOS/vaatleja loogikat ja kohalikke reegleid.


## 2026-09-v6 muudatus

- Parrot DISCO on teadlikult jäetud välja, sest see on fixed-wing, mitte multirootor.
- Lisatud Parroti ANAFI multirootorid: ANAFI, ANAFI FPV, ANAFI Thermal, ANAFI Ai ja ANAFI USA.
- ANAFI ja ANAFI FPV on lisatud vanemate/saadavust vajavate DJI alternatiividena.
- ANAFI Thermal ja ANAFI USA on märgitud thermal/öövaatluse eriotstarbelisteks valikuteks.
- ANAFI Ai on märgitud professionaalsema kaardistus-/kinnistu-/vaatlusdroonina, millel on 4G ja 6× zoom, kuid puudub thermal.
- Kõigi Parrot kirjete juures on märgitud, et vastav Skycontroller juhtpult on komplektis.


## 2026-09-v6 muudatus

- Lisatud kasutajale nähtav valikukriteerium **Kaamera tüüp**.
- K1–K4 tähiseid ei kuvata enam põhivalikus; need jäävad andmebaasi sisemiseks miinimumvõime tasemeks.
- Lisatud eraldi valikud **360° vaatenurgaga panoraamkaamera** ja **N / Night Vision hämarakaamera**.
- Droonikirjetesse lisatud `camera_types`, `has_360_camera`, `has_dedicated_night_camera` ja `camera_type_summary_et`.
- 360° valik kuvab eeskätt DJI Avata 360 ja Antigravity/Insta360 A1 tüüpi mudeleid.
