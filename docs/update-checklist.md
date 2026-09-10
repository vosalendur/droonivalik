# Andmete uuendamise kontrollnimekiri

Soovituslik perioodiline kontroll: iga 1–3 kuu järel või enne avalikku kasutust.

## Kontrolli iga mudeli kohta

- Kas mudel on endiselt müügil?
- Kas komplekti sisu on muutunud?
- Kas hinnaklass on endiselt õige?
- Kas kaal, CE-klass ja akuandmed on muutunud?
- Kas tuuletaluvus või lennuaeg on tootja andmetes täpsustunud?
- Kas kaamera kirjeldus on õige?
- Kas mudelil on tegelik zoom või ainult digitaalne crop?
- Kas termokaamera mudelid on endiselt tavatarbija/hobikasutuse kontekstis mõistlikud?
- Kas uued mudelid tuleks lisada ja vanad mudelid arhiveerida?

## Pärast JSON-i muutmist

```bash
python tools/build-data-js.py
```

Seejärel ava `index.html` ja testi vähemalt neid kasutajaprofiile:

1. laps / mänguasi / kuni 350 €;
2. reis + perevideo / kuni 700 €;
3. reis + YouTube / kuni 1500 € / eelista kuni 250 g;
4. FPV algõpe;
5. FPV sport;
6. kinnistu + zoom;
7. thermal / öövaatlus.


## V2 täiendus 2026-09-10

- Rakendus lubab ka professionaalsemaid / enterprise-klassi droone, kui kasutaja lubab need eraldi või kui kasutusjuhtum seda eeldab.
- Öise vaatluse nõue tuleb käsitleda eraldi tunnusena `nightVisionRequired`, mitte samastada seda alati `thermalRequired` nõudega.
- Öövaatluse sobivus võib tulla low-light EO, starlight/N-kaamera või thermal võimest.
- Mavic 3E/Mavic 3 Pro tüüpi low-light droonid ning Autel EVO Max 4N tüüpi N-kaameraga droonid peavad olema kataloogis eraldi märgendatud väljadega `has_night_vision`, `night_vision_type` ja `night_vision_summary`.
