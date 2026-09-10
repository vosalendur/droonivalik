# PRD: Eraisiku multirootor-drooni valija

## Eesmärk

Luua jagatav veebirakendus, mis aitab eraisikust tavatarbijal valida kasutusviisi, hinnaklassi, kaalu, tuuletaluvuse ja kaamera järgi sobivaid multirootor-droone.

## Skoop

Skoopi kuuluvad:

- mänguasja- ja algajadroonid;
- reisidroonid;
- perefoto ja -video droonid;
- sisulooja/YouTube taseme droonid;
- FPV algõppe ja FPV spordi droonid;
- hobikorras kinnistu jälgimine või dokumenteerimine;
- piiratud erijuhuna termokaameraga droonid.

Skoobist väljas on:

- äriline teenuseosutus;
- ametkondlik/riiklik UAS käitamine;
- fikstiib-UAS;
- autonoomsed tööstusplatvormid;
- ostu- või õigusalane lõplik nõuanne.

## Kasutajateekond

1. Kasutaja valib ühe või mitu kasutusviisi.
2. Kasutaja määrab hinnalae või täpse hinnavahemiku.
3. Kasutaja määrab kaalueelistuse.
4. Kasutaja määrab soovi korral tuule- ja kaameraklassi.
5. Kasutaja märgib, kas thermal, zoom või takistuste vältimine on oluline.
6. Rakendus kuvab põhisoovitused, lisasoovitused ja välja jäetud mudelite põhjused.
7. Kasutaja saab tulemuse lingina jagada või JSON-failina alla laadida.

## Soovitusmootor

### 1. Välistavad filtrid

- Kui thermal on nõutud, jäävad alles ainult `has_thermal = true` mudelid.
- Kui hinnalagi on valitud, jäävad alles ainult selle hinnaklassi või odavamad mudelid.
- Kui valitud on täpne hinnavahemik, jäävad alles ainult selle vahemiku mudelid.
- Kui kasutaja nõuab kuni 250 g klassi, jäävad alles ainult alla 250 g mudelid.
- Kui kaamera miinimumnõue on kõrgem kui mudeli kaameraklass, mudel välistatakse.
- Vaikimisi peidetud enterprise/eriotstarbelised mudelid kuvatakse ainult thermal/öövaatluse/otsingu vajaduse korral.

### 2. Skoorimine

- kasutusviisi sobivus;
- hinnaklassi sobivus;
- kaameraklassi sobivus;
- kaalueelistus;
- tuuleklass;
- algajasõbralikkus;
- reisile sobivus;
- zoom;
- thermal;
- FPV-tüübi sobivus;
- takistuste vältimine.

## Andmed

Andmete põhiallikas on `data/drones.json`. Kõigil mudelitel peab olema vähemalt:

- `id`;
- `brand`;
- `model`;
- `kit`;
- `public_price.price_band`;
- `weight_g` või `weight_class`;
- `camera_class`;
- `wind_class`;
- `recommended_use_cases`;
- `pros_et` ja `cons_et`;
- `data_status`;
- `source_refs`.

## Väljalaske märkus

MVP versioon kasutab 2026-09 seisuga kureeritud kataloogi. Hinnad on hinnaklassidena, mitte kindla müüja ostusoovitusena.


## V2 täiendus 2026-09-10

- Rakendus lubab ka professionaalsemaid / enterprise-klassi droone, kui kasutaja lubab need eraldi või kui kasutusjuhtum seda eeldab.
- Öise vaatluse nõue tuleb käsitleda eraldi tunnusena `nightVisionRequired`, mitte samastada seda alati `thermalRequired` nõudega.
- Öövaatluse sobivus võib tulla low-light EO, starlight/N-kaamera või thermal võimest.
- Mavic 3E/Mavic 3 Pro tüüpi low-light droonid ning Autel EVO Max 4N tüüpi N-kaameraga droonid peavad olema kataloogis eraldi märgendatud väljadega `has_night_vision`, `night_vision_type` ja `night_vision_summary`.
