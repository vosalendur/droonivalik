/* Auto-generated from drones.json. Edit the JSON file, then run tools/build-data-js.py. */
window.DRONE_CATALOG = {
  "catalog_version": "2026-09-v6",
  "last_reviewed": "2026-09-10",
  "locale_assumption": "EU/Estonia consumer/prosumer selector; professional models allowed when the user enables them or selects special/night/thermal use cases",
  "data_status_label": "Andmed 2026-09 seisuga · v6",
  "catalog_note_et": "Mudelite, komplektide ja hinnaklasside andmed avalike allikate põhjal seisuga 2026-09. V6 lisab kasutajasõbraliku kaameratüübi valiku: EO lainurk, kvaliteetne EO, zoom, thermal, 360° panoraamkaamera ja N / Night Vision hämarakaamera.",
  "price_bands": [
    {
      "id": "under_350",
      "label_et": "kuni 350 €",
      "min_eur": 0,
      "max_eur": 350
    },
    {
      "id": "350_700",
      "label_et": "350–700 €",
      "min_eur": 350,
      "max_eur": 700
    },
    {
      "id": "700_1500",
      "label_et": "700–1500 €",
      "min_eur": 700,
      "max_eur": 1500
    },
    {
      "id": "1500_5000",
      "label_et": "1500–5000 €",
      "min_eur": 1500,
      "max_eur": 5000
    },
    {
      "id": "over_5000",
      "label_et": "üle 5000 €",
      "min_eur": 5000,
      "max_eur": null
    }
  ],
  "weight_classes": [
    {
      "id": "under_250g",
      "label_et": "kuni 250 g"
    },
    {
      "id": "over_250g",
      "label_et": "üle 250 g"
    },
    {
      "id": "250_900g",
      "label_et": "250–900 g"
    },
    {
      "id": "900g_4kg",
      "label_et": "900 g – 4 kg"
    },
    {
      "id": "over_4kg",
      "label_et": "üle 4 kg"
    }
  ],
  "wind_classes": [
    {
      "id": "T0",
      "label_et": "siseruum / väga vaikne õu",
      "max_wind_ms": 3
    },
    {
      "id": "T1",
      "label_et": "õues kuni 8 m/s",
      "max_wind_ms": 8
    },
    {
      "id": "T2",
      "label_et": "kuni 10 m/s",
      "max_wind_ms": 10
    },
    {
      "id": "T3",
      "label_et": "kuni 12 m/s",
      "max_wind_ms": 12
    },
    {
      "id": "T4",
      "label_et": "üle 12 m/s",
      "max_wind_ms": null
    }
  ],
  "camera_classes": [
    {
      "id": "K0",
      "label_et": "Kaamerata või lihtne FPV-pilt"
    },
    {
      "id": "K1",
      "label_et": "EO lainurkkaamera"
    },
    {
      "id": "K2",
      "label_et": "Kvaliteetsem EO foto/video kaamera"
    },
    {
      "id": "K3",
      "label_et": "EO lainurk + zoom/detailvaatlus"
    },
    {
      "id": "K4",
      "label_et": "EO + termokaamera"
    },
    {
      "id": "N",
      "label_et": "N / Night Vision hämarakaamera"
    }
  ],
  "use_cases": [
    {
      "id": "child_learning",
      "label_et": "lapsele mänguasi / käsitsi lendama õppimine"
    },
    {
      "id": "fpv_beginner",
      "label_et": "FPV algõpe ja harjutamine"
    },
    {
      "id": "fpv_sport",
      "label_et": "FPV ralli või sport"
    },
    {
      "id": "family_video",
      "label_et": "kodu ja pere sündmuste foto/video"
    },
    {
      "id": "travel",
      "label_et": "reisile kaasa võtmiseks sobiv foto/video droon"
    },
    {
      "id": "youtube",
      "label_et": "YouTuber / influencer tüüpi videomaterjal"
    },
    {
      "id": "property_monitoring",
      "label_et": "oma kinnistu/valduste jälgimine"
    },
    {
      "id": "mapping_hobby",
      "label_et": "oma kinnistu või maastiku hobikaardistus"
    },
    {
      "id": "thermal_inspection",
      "label_et": "termokaameraga soojalekete tuvastamine"
    },
    {
      "id": "night_observation",
      "label_et": "öine või hämaras õhuvaatlus"
    },
    {
      "id": "hiking_nature",
      "label_et": "loodus, matkamine, mereäär, mäed"
    },
    {
      "id": "subject_tracking",
      "label_et": "auto, paadi, ratta või inimese jälgimine"
    },
    {
      "id": "real_estate_hobby",
      "label_et": "kinnisvara või ehitise hobikorras dokumenteerimine"
    },
    {
      "id": "stem_programming",
      "label_et": "programmeerimine / STEM / tööpõhimõtete õppimine"
    },
    {
      "id": "indoor_practice",
      "label_et": "siseruumis harjutamine"
    },
    {
      "id": "search_private_land",
      "label_et": "objektide või loomade otsing oma maa-alal"
    },
    {
      "id": "360_video",
      "label_et": "360°/immersiivne video",
      "description_et": "360° kaameraga droonid, kus kaader valitakse järeltootmises või lennatakse immersiivsete prillidega."
    }
  ],
  "drones": [
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-neo-no-rc",
      "brand": "DJI",
      "model": "Neo",
      "kit": "Standard / No RC",
      "scope": "consumer",
      "public_price": {
        "amount": 139,
        "currency": "EUR",
        "price_band": "under_350",
        "basis": "public_price_seen",
        "note": "DJI Store AT soodushind; tavahind 169 €"
      },
      "weight_g": 135,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 8.0,
      "wind_class": "T1",
      "camera_class": "K1",
      "camera_summary": "4K/30 stabiliseeritud video; lihtne selfie/family kaamera",
      "has_zoom": false,
      "zoom_summary": "sisulist vaatlus- või optilist zoomi ei ole",
      "has_thermal": false,
      "flight_time_min": 18,
      "obstacle_avoidance": "none",
      "fpv_type": "casual_fpv_optional",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "child_learning",
        "family_video",
        "travel",
        "subject_tracking",
        "indoor_practice"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation",
        "property_monitoring"
      ],
      "pros_et": [
        "väga kerge ja odav",
        "sobib algajale ning käest startimiseks",
        "hea lihtsate pere- ja reisiklippide jaoks"
      ],
      "cons_et": [
        "puudub tõsisem takistuste vältimine",
        "tuulevaru on piiratud",
        "ei sobi tõsiseks FPV-spordiks ega vaatlusdrooni rolli"
      ],
      "source_refs": [
        {
          "label": "DJI Store AT",
          "url": "https://store.dji.com/at/product/dji-neo",
          "accessed": "2026-09-10",
          "note": "Neo baashind ja komplektid"
        },
        {
          "label": "DJI Support / specs",
          "url": "https://www.dji.com/neo/specs",
          "accessed": "2026-09-10",
          "note": "kaal, C0 ja tuuleandmed"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K1",
        "T1",
        "child_learning",
        "consumer",
        "family_video",
        "indoor_practice",
        "subject_tracking",
        "travel",
        "under_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-neo-2-drone-only",
      "brand": "DJI",
      "model": "Neo 2",
      "kit": "Standard / Drone Only",
      "scope": "consumer",
      "public_price": {
        "amount": 199,
        "currency": "EUR",
        "price_band": "under_350",
        "basis": "official_store_price_seen",
        "note": "DJI Store EU/DE nähtud droon-only baashind; pult ja lisatarvikud ei kuulu komplekti."
      },
      "weight_g": 151,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K1",
      "camera_summary": "1/2-inch CMOS, 4K/60; lihtne jälgimine ja käest lendamine",
      "has_zoom": false,
      "zoom_summary": "sisulist vaatlus- või optilist zoomi ei ole",
      "has_thermal": false,
      "flight_time_min": 19,
      "obstacle_avoidance": "forward_and_downward_or_basic_obstacle_sensing",
      "fpv_type": "casual_fpv_optional",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "child_learning",
        "family_video",
        "travel",
        "subject_tracking",
        "hiking_nature"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation"
      ],
      "pros_et": [
        "Neo 2 seeria kõige odavam sissepääs",
        "alla 250 g",
        "sobib käest stardiks ja automaatseks jälgimiseks"
      ],
      "cons_et": [
        "juhtpult ei ole komplektis",
        "ei ole sport-FPV droon",
        "kaameraklass jääb Mini Pro seeriale alla"
      ],
      "source_refs": [
        {
          "label": "DJI Store DE",
          "url": "https://store.dji.com/de/product/dji-neo-2",
          "accessed": "2026-09-10",
          "note": "Neo 2 droon-only variant, kaal 151 g ja kuni 19 min lennuaeg"
        },
        {
          "label": "DJI Neo 2 announcement",
          "url": "https://www.dji.com/no/media-center/announcements/dji-release-neo-2",
          "accessed": "2026-09-10",
          "note": "4K/60, level 5 tuulekindlus, kuni 19 min lennuaeg"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K1",
        "T2",
        "child_learning",
        "consumer",
        "family_video",
        "fpv_beginner",
        "hiking_nature",
        "subject_tracking",
        "travel",
        "under_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-lito-1-rc-n3-standard",
      "brand": "DJI",
      "model": "Lito 1",
      "kit": "Standardkomplekt DJI RC-N3",
      "scope": "consumer",
      "public_price": {
        "amount": 339,
        "currency": "EUR",
        "price_band": "under_350",
        "basis": "official_store_price_seen",
        "note": "DJI Store EU / Eesti jaemüüja standardvariant RC-N3 puldiga."
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K1",
      "camera_summary": "1/2-inch CMOS, kuni 8K fotod ja 4K video; algajasõbralik kaameradroon.",
      "has_zoom": false,
      "zoom_summary": "sisulist optilist vaatluszoomi ei ole",
      "has_thermal": false,
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/starlight/thermal võime puudub; kasutatav pigem tavaliseks foto/video hobiks.",
      "flight_time_min": 36,
      "obstacle_avoidance": "omnidirectional_or_enhanced_sensing",
      "has_obstacle_avoidance": true,
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "child_learning",
        "family_video",
        "travel",
        "youtube",
        "hiking_nature",
        "subject_tracking"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation",
        "property_monitoring"
      ],
      "pros_et": [
        "odav algajasõbralik DJI kaameradroon",
        "alla 250 g / C0",
        "standardkomplektis RC-N3 pult"
      ],
      "cons_et": [
        "kaameravõime jääb Mini Pro ja Air seeriale alla",
        "ei ole termokaamera ega FPV spordidroon",
        "ei sobi tõsiseks vaatlus- või kaardistustööks"
      ],
      "source_refs": [
        {
          "label": "DJI Store",
          "url": "https://store.dji.com/es/product/dji-lito-1",
          "accessed": "2026-09-10",
          "note": "DJI Lito 1 hind 339 €, RC-N3 pult komplektis ja C0 märge"
        },
        {
          "label": "DJI Europe press release",
          "url": "https://www.mynewsdesk.com/uk/dji/pressreleases/dji-launches-beginner-friendly-camera-drone-series-with-lito-x1-and-lito-1-3444590",
          "accessed": "2026-09-10",
          "note": "Lito seeria kuni 36 min lennuaeg ja 10,7 m/s tuulekindlus"
        }
      ],
      "controller_included": true,
      "controller_note_et": "DJI RC-N3 juhtpult on komplektis",
      "price_band_label_et": "kuni 350 €",
      "selector_tags": [
        "K1",
        "T2",
        "child_learning",
        "consumer",
        "family_video",
        "hiking_nature",
        "subject_tracking",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-lito-x1-rc-n3-standard",
      "brand": "DJI",
      "model": "Lito X1",
      "kit": "Standardkomplekt DJI RC-N3",
      "scope": "consumer",
      "public_price": {
        "amount": 419,
        "currency": "EUR",
        "price_band": "350_700",
        "basis": "official_store_price_seen",
        "note": "DJI Store EU ja Eesti jaemüüjate standardvariant RC-N3 puldiga."
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "1/1.3-inch CMOS, kuni 4K/60fps HDR ja 4K/100fps aegluup; algajasõbralik premium mini-kaameradroon.",
      "has_zoom": false,
      "zoom_summary": "sisulist optilist vaatluszoomi ei ole",
      "has_thermal": false,
      "has_night_vision": true,
      "night_vision_type": "low_light_nightscape",
      "night_vision_summary": "1/1.3-inch sensor ja f/1.7 ava sobivad hämarate linnavaadete/fotode jaoks; ei ole N/starlight valvekaamera ega thermal.",
      "flight_time_min": 36,
      "obstacle_avoidance": "omnidirectional_with_forward_lidar",
      "has_obstacle_avoidance": true,
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "family_video",
        "travel",
        "youtube",
        "hiking_nature",
        "subject_tracking",
        "real_estate_hobby"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "tugevam kaamera kui Lito 1",
        "alla 250 g / C0 standardakuga",
        "standardkomplektis RC-N3 pult"
      ],
      "cons_et": [
        "ei ole termokaamera",
        "pole päris optilist zoomi",
        "öövaatlus on foto/video low-light, mitte valve- või otsingusensor"
      ],
      "source_refs": [
        {
          "label": "DJI Store",
          "url": "https://store.dji.com/ph/product/dji-lito-x1",
          "accessed": "2026-09-10",
          "note": "Lito X1 kaamera, O4 ülekanne, kuni 36 min standardaku ja ühilduvad puldid"
        },
        {
          "label": "DJI Hasselblad EU",
          "url": "https://dji-retail.eu/products/dji-lito-x1-drone-with-rc-n3-controller",
          "accessed": "2026-09-10",
          "note": "Lito X1 RC-N3 standardvariandi EU hind"
        }
      ],
      "controller_included": true,
      "controller_note_et": "DJI RC-N3 juhtpult on komplektis",
      "price_band_label_et": "350–700 €",
      "selector_tags": [
        "K2",
        "N",
        "T2",
        "consumer",
        "family_video",
        "hiking_nature",
        "real_estate_hobby",
        "subject_tracking",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_dedicated_night_camera": true,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "night_vision"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; N / Night Vision hämarakaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-mini-3-rc-n1-standard",
      "brand": "DJI",
      "model": "Mini 3",
      "kit": "Standardkomplekt DJI RC-N1",
      "scope": "consumer",
      "public_price": {
        "amount": 339,
        "currency": "EUR",
        "price_band": "under_350",
        "basis": "official_store_price_seen",
        "note": "DJI Store EU võrdlusplokis alates 339 €; Eesti jaemüüjate hinnad võivad erineda."
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": "C0_or_legacy",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K1",
      "camera_summary": "1/1.3-inch sensor, 4K HDR video, dual native ISO, True Vertical Shooting; algtaseme reisikaamera.",
      "has_zoom": false,
      "zoom_summary": "sisulist optilist zoomi ei ole",
      "has_thermal": false,
      "has_night_vision": true,
      "night_vision_type": "low_light_basic",
      "night_vision_summary": "1/1.3-inch sensor ja dual native ISO aitavad hämaras foto/videos, kuid see ei ole sihtotstarbeline öövaatluse droon.",
      "flight_time_min": 38,
      "obstacle_avoidance": "downward_or_basic",
      "has_obstacle_avoidance": false,
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "child_learning",
        "family_video",
        "travel",
        "hiking_nature"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation",
        "property_monitoring"
      ],
      "pros_et": [
        "odav ja kerge reisidroon",
        "alla 250 g",
        "standardkomplektis RC-N1 pult"
      ],
      "cons_et": [
        "takistuste vältimine on piiratud",
        "ei ole zoomi ega thermalit",
        "sisulooja jaoks Mini Pro seeria on tugevam"
      ],
      "source_refs": [
        {
          "label": "DJI Mini 3 Store",
          "url": "https://store.dji.com/product/dji-mini-3-rc",
          "accessed": "2026-09-10",
          "note": "Mini 3 RC-komplekt, karbi sisu ja standardpult"
        },
        {
          "label": "DJI Mini 3 Store / No RC",
          "url": "https://store.dji.com/product/dji-mini-3-no-rc",
          "accessed": "2026-09-10",
          "note": "Mini 3 alla 249 g, 4K HDR, 1/1.3-inch sensor ja no-RC karbi sisu"
        },
        {
          "label": "DJI Store comparison",
          "url": "https://store.dji.com/de/product/dji-mini-4-pro",
          "accessed": "2026-09-10",
          "note": "DJI võrdlusplokk: Mini 3 alates 339 €"
        }
      ],
      "controller_included": true,
      "controller_note_et": "DJI RC-N1 juhtpult on komplektis",
      "price_band_label_et": "kuni 350 €",
      "selector_tags": [
        "K1",
        "N",
        "T2",
        "child_learning",
        "consumer",
        "family_video",
        "hiking_nature",
        "travel",
        "under_250g"
      ],
      "has_dedicated_night_camera": true,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "night_vision"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; N / Night Vision hämarakaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-mini-4k",
      "brand": "DJI",
      "model": "Mini 4K",
      "kit": "standard / baaskomplekt",
      "scope": "consumer",
      "public_price": {
        "amount": 264.99,
        "currency": "EUR",
        "price_band": "under_350",
        "basis": "price_comparison_seen",
        "note": "Idealo DE alates-hind 2026-09; komplektide hinnad võivad olla kõrgemad"
      },
      "weight_g": 246,
      "weight_class": "under_250g",
      "ce_class": null,
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K1",
      "camera_summary": "4K/30, 1/2.3-inch CMOS, 3-teljeline gimbal",
      "has_zoom": false,
      "zoom_summary": "digitaalne zoom ei ole vaatluszoom",
      "has_thermal": false,
      "flight_time_min": 31,
      "obstacle_avoidance": "none_or_limited",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "family_video",
        "travel",
        "hiking_nature",
        "child_learning"
      ],
      "avoid_if": [
        "youtube",
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "odav DJI reisidroon",
        "alla 250 g",
        "stabiliseeritud 4K kaamera"
      ],
      "cons_et": [
        "takistuste vältimine on piiratud",
        "sisulooja jaoks pigem algtase",
        "ei sobi zoomi ega thermali vajadusega"
      ],
      "source_refs": [
        {
          "label": "DJI Mini 4K specs",
          "url": "https://www.dji.com/mini-2-se/specs",
          "accessed": "2026-09-10",
          "note": "kaal ja tehnilised andmed"
        },
        {
          "label": "DJI Mini 4K FAQ",
          "url": "https://www.dji.com/mini-2-se/faq",
          "accessed": "2026-09-10",
          "note": "tuulekindlus"
        },
        {
          "label": "idealo DE",
          "url": "https://www.idealo.de/preisvergleich/OffersOfProduct/204266290_-mini-4k-dji.html",
          "accessed": "2026-09-10",
          "note": "2026-09 alates-hind"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K1",
        "T2",
        "child_learning",
        "consumer",
        "family_video",
        "hiking_nature",
        "travel",
        "under_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-flip-rc-n3-standard",
      "brand": "DJI",
      "model": "Flip",
      "kit": "Standardkomplekt DJI RC-N3",
      "scope": "consumer",
      "public_price": {
        "amount": 439,
        "currency": "EUR",
        "price_band": "350_700",
        "basis": "official_store_price_seen",
        "note": "DJI Store EU standardvariant; Eesti hinnavõrdluses võib hind olla madalam."
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "1/1.3-inch CMOS, 4K/60 HDR, 4K/100 slow motion, volditavad propellerikaitsed",
      "has_zoom": false,
      "zoom_summary": "sisulist vaatlus- või optilist zoomi ei ole",
      "has_thermal": false,
      "flight_time_min": 31,
      "obstacle_avoidance": "front_and_downward_or_basic",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "family_video",
        "travel",
        "youtube",
        "subject_tracking",
        "hiking_nature",
        "indoor_practice"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "alla 250 g klass",
        "propellerikaitsega algajasõbralikum vorm",
        "standardkomplektis RC-N3 pult"
      ],
      "cons_et": [
        "ei ole termokaamera",
        "suurem/eripärasema kujuga kui Mini seeria",
        "ei sobi FPV spordidrooniks"
      ],
      "source_refs": [
        {
          "label": "DJI Store",
          "url": "https://store.dji.com/hu/product/dji-flip",
          "accessed": "2026-09-10",
          "note": "Standardne DJI Flip RC-N3 puldiga"
        },
        {
          "label": "Hind.ee",
          "url": "https://www.hind.ee/p/dji-flip/",
          "accessed": "2026-09-10",
          "note": "Eesti hinnavõrdlus DJI Flip standardvariandile"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K2",
        "T2",
        "consumer",
        "family_video",
        "hiking_nature",
        "indoor_practice",
        "subject_tracking",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "DJI RC-N3 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-mini-4-pro-rc-n2-standard",
      "brand": "DJI",
      "model": "Mini 4 Pro",
      "kit": "Standardkomplekt DJI RC-N2",
      "scope": "consumer",
      "public_price": {
        "amount": 679,
        "currency": "EUR",
        "price_band": "350_700",
        "basis": "official_store_price_seen",
        "note": "DJI Store EU/CH standardvariant RC-N2 puldiga; saadavus võib kõikuda."
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": "C0_or_C1_by_region",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "4K/60 HDR, 10-bit D-Log M/HLG, vertikaalvideo, omnidirectional obstacle sensing",
      "has_zoom": false,
      "zoom_summary": "digitaalne zoom; mitte tõsine vaatluszoom",
      "has_thermal": false,
      "flight_time_min": 34,
      "obstacle_avoidance": "omnidirectional",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "family_video",
        "travel",
        "youtube",
        "hiking_nature",
        "subject_tracking",
        "real_estate_hobby"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation"
      ],
      "pros_et": [
        "väga tugev alla 250 g reisidroon",
        "hea takistuste vältimine",
        "standardkomplektis RC-N2 pult"
      ],
      "cons_et": [
        "pole thermalit ega päris optilist vaatluszoomi",
        "kaamera jääb Mini 5 Pro suuremale sensorile alla"
      ],
      "source_refs": [
        {
          "label": "DJI Store",
          "url": "https://store.dji.com/de/product/dji-mini-4-pro",
          "accessed": "2026-09-10",
          "note": "Mini 4 Pro standardvariant RC-N2 puldiga, 679 €, alla 249 g, 4K/60 HDR ja omnidirectional obstacle sensing"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K2",
        "T2",
        "consumer",
        "family_video",
        "hiking_nature",
        "real_estate_hobby",
        "subject_tracking",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "DJI RC-N2 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-mini-5-pro-rc-n3-standard",
      "brand": "DJI",
      "model": "Mini 5 Pro",
      "kit": "Standardkomplekt DJI RC-N3",
      "scope": "consumer",
      "public_price": {
        "amount": 651,
        "currency": "EUR",
        "price_band": "350_700",
        "basis": "price_comparison_seen",
        "note": "Hind.ee Eesti alates-hind 2026-09 Mini 5 Pro RC-N3 standardvariandile; DJI ametliku hinna ja saadavuse kontroll soovitatav."
      },
      "weight_g": 249.9,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "1-inch CMOS 50 MP, C0, 4K/creator-klassi reisivideo",
      "has_zoom": false,
      "zoom_summary": "digitaalne või piiratud; mitte thermal/zoom vaatluseks",
      "has_thermal": false,
      "flight_time_min": 36,
      "obstacle_avoidance": "omnidirectional_or_advanced",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "travel",
        "family_video",
        "youtube",
        "hiking_nature",
        "subject_tracking",
        "real_estate_hobby"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation"
      ],
      "pros_et": [
        "väga hea alla 250 g reisidroon",
        "tugev kaamera sisuloojale",
        "standardkomplektis RC-N3 pult"
      ],
      "cons_et": [
        "ei ole termokaamera",
        "hind võib kõikuda ja sõltub regioonist",
        "puldil puudub sisseehitatud ekraan"
      ],
      "source_refs": [
        {
          "label": "Hind.ee",
          "url": "https://www.hind.ee/p/dji-mini-5-pro/",
          "accessed": "2026-09-10",
          "note": "Eesti hinnavõrdlus Mini 5 Pro RC-N3 standardvariandile"
        },
        {
          "label": "DJI Europe press release",
          "url": "https://www.mynewsdesk.com/uk/dji/pressreleases/dji-brings-world-first-to-the-sky-with-mini-5-pro-3404777",
          "accessed": "2026-09-10",
          "note": "Mini 5 Pro konfiguratsioonid ja hinnainfo alates-hindadega"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K2",
        "T2",
        "consumer",
        "family_video",
        "hiking_nature",
        "real_estate_hobby",
        "subject_tracking",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "DJI RC-N3 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": "C1/üle 250 g klass; kasutaja peab arvestama avatud kategooria pädevuse ja käitaja registreerimise nõuetega.",
      "image_path": null,
      "id": "dji-air-3-rc-n2-standard",
      "brand": "DJI",
      "model": "Air 3",
      "kit": "Standardkomplekt DJI RC-N2",
      "scope": "prosumer",
      "public_price": {
        "amount": 879,
        "currency": "EUR",
        "price_band": "700_1500",
        "basis": "official_store_price_seen",
        "note": "DJI Store DE standardvariant RC-N2 puldiga; lehel märgitud väljamüüduna."
      },
      "weight_g": 720,
      "weight_class": "250_900g",
      "ce_class": "C1",
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K3",
      "camera_summary": "Kaks 1/1.3-inch CMOS 48 MP kaamerat: 24 mm lainurk + 70 mm keskmine tele; 4K/60 HDR ja 10-bit D-Log M/HLG.",
      "has_zoom": true,
      "zoom_summary": "3x keskmine telekaamera ja digitaalne zoom kuni 9x annavad parema detailivaate kui lainurk-mini droonidel.",
      "has_thermal": false,
      "has_night_vision": true,
      "night_vision_type": "low_light_night_video",
      "night_vision_summary": "Night video ISO kuni 12800 ja f/1.7 lainurk sobivad hämaras foto/video kasutuseks; ei ole thermal ega starlight-valvekaamera.",
      "flight_time_min": 46,
      "obstacle_avoidance": "omnidirectional",
      "has_obstacle_avoidance": true,
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": false,
      "recommended_use_cases": [
        "family_video",
        "youtube",
        "property_monitoring",
        "real_estate_hobby",
        "hiking_nature",
        "subject_tracking",
        "night_observation"
      ],
      "avoid_if": [
        "child_learning",
        "indoor_practice",
        "fpv_sport",
        "thermal_inspection"
      ],
      "pros_et": [
        "tugev hinna/kaamera/tuuletaluvuse suhe",
        "3x telekaamera detailsemaks vaatlus- ja videosisuks",
        "standardkomplektis RC-N2 pult"
      ],
      "cons_et": [
        "üle 250 g",
        "ei ole termokaamera",
        "Air 3S pakub uuemat kaamerasüsteemi"
      ],
      "source_refs": [
        {
          "label": "DJI Air 3 specs",
          "url": "https://www.dji.com/air-3/specs",
          "accessed": "2026-09-10",
          "note": "kaal 720 g, kuni 46 min lend, 12 m/s tuulekindlus, C1, kaks 1/1.3-inch kaamerat ja 3–9x zoom"
        },
        {
          "label": "DJI Store DE",
          "url": "https://store.dji.com/de/product/dji-air-3-combo",
          "accessed": "2026-09-10",
          "note": "Air 3 standardvariant RC-N2 puldiga 879 € ja komplekti sisu"
        }
      ],
      "controller_included": true,
      "controller_note_et": "DJI RC-N2 juhtpult on komplektis",
      "price_band_label_et": "700–1500 €",
      "selector_tags": [
        "250_900g",
        "K3",
        "N",
        "T3",
        "family_video",
        "hiking_nature",
        "night_observation",
        "property_monitoring",
        "prosumer",
        "real_estate_hobby",
        "subject_tracking",
        "youtube"
      ],
      "has_dedicated_night_camera": true,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "night_vision"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; N / Night Vision hämarakaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-air-3s-rc-n3-standard",
      "brand": "DJI",
      "model": "Air 3S",
      "kit": "Standardkomplekt DJI RC-N3",
      "scope": "prosumer",
      "public_price": {
        "amount": 989,
        "currency": "EUR",
        "price_band": "700_1500",
        "basis": "price_comparison_seen",
        "note": "Hind.ee Eesti alates-hind / DJI Store EU standardvariant RC-N3 puldiga."
      },
      "weight_g": 724,
      "weight_class": "250_900g",
      "ce_class": "C1",
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K3",
      "camera_summary": "1-inch põhisensor + telekaamera, dual-camera 4K/60 HDR",
      "has_zoom": true,
      "zoom_summary": "telekaamera ja digitaalne/hübriidne suum vaatlus- ja detailvõteteks",
      "has_thermal": false,
      "flight_time_min": 45,
      "obstacle_avoidance": "nightscape_omnidirectional",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": false,
      "recommended_use_cases": [
        "youtube",
        "family_video",
        "property_monitoring",
        "real_estate_hobby",
        "hiking_nature",
        "subject_tracking"
      ],
      "avoid_if": [
        "child_learning",
        "fpv_sport",
        "thermal_inspection"
      ],
      "pros_et": [
        "palju parem tuule- ja kaameravaru kui mini-klassis",
        "sobib sisuloojale ja kinnistu vaatlemiseks",
        "standardkomplektis RC-N3 pult"
      ],
      "cons_et": [
        "üle 250 g",
        "ei ole termokaamera",
        "reisile tülikam kui Mini-seeria"
      ],
      "source_refs": [
        {
          "label": "DJI Store",
          "url": "https://store.dji.com/de/product/dji-air-3s",
          "accessed": "2026-09-10",
          "note": "Air 3S standardvariant RC-N3 puldiga"
        },
        {
          "label": "Hind.ee",
          "url": "https://www.hind.ee/p/dji-air-3s/",
          "accessed": "2026-09-10",
          "note": "Eesti hinnavõrdlus Air 3S RC-N3 variandile"
        }
      ],
      "price_band_label_et": "700–1500 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K3",
        "T3",
        "family_video",
        "hiking_nature",
        "property_monitoring",
        "prosumer",
        "real_estate_hobby",
        "subject_tracking",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "DJI RC-N3 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": "Prosumer-klassi üle 250 g droon; öövaatluse puhul käsitleda pigem hämaras foto/video või detailvaatluse droonina, mitte termilise otsingu vahendina.",
      "image_path": null,
      "id": "dji-mavic-3-pro-dji-rc-standard",
      "brand": "DJI",
      "model": "Mavic 3 Pro",
      "kit": "Standardkomplekt DJI RC",
      "scope": "prosumer",
      "public_price": {
        "amount": 1889,
        "currency": "EUR",
        "price_band": "1500_5000",
        "basis": "official_store_or_price_comparison_seen",
        "note": "DJI Store DE võrdlusplokk / Eesti hinnavõrdlus: Mavic 3 Pro alates 1889 €."
      },
      "weight_g": 958,
      "weight_class": "900g_4kg",
      "ce_class": "C2",
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K3",
      "camera_summary": "Kolmekaameraline Mavic 3 seeria droon: 4/3 CMOS Hasselblad, 70 mm ja 166 mm telekaamerad; Night Shots / Night video võime.",
      "has_zoom": true,
      "zoom_summary": "Mitme fookuskaugusega optiline/tele võime sobib detailsemaks kaadriks ja vaatluslikuks kasutuseks paremini kui ainult lainurk.",
      "has_thermal": false,
      "has_night_vision": true,
      "night_vision_type": "low_light_night_video",
      "night_vision_summary": "Night Shots / night video režiim ja 4/3 CMOS annavad hea hämaras video võime; ei ole termokaamera ega starlight-valvekaamera.",
      "flight_time_min": 43,
      "obstacle_avoidance": "omnidirectional obstacle sensing",
      "has_obstacle_avoidance": true,
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "youtube",
        "family_video",
        "property_monitoring",
        "real_estate_hobby",
        "hiking_nature",
        "subject_tracking",
        "night_observation"
      ],
      "avoid_if": [
        "child_learning",
        "indoor_practice",
        "fpv_sport",
        "fpv_beginner",
        "thermal_inspection"
      ],
      "pros_et": [
        "peamine Mavic 3 klassi valik kvaliteetseks hämaraks foto/video kasutuseks",
        "hea zoom/detailvaatlus",
        "standardkomplektis DJI RC pult"
      ],
      "cons_et": [
        "ei ole termokaamera",
        "suurem ja raskem kui Mini seeria",
        "algajale kallis ja regulatiivselt koormavam"
      ],
      "source_refs": [
        {
          "label": "DJI Mavic 3 Pro specs",
          "url": "https://www.dji.com/mavic-3-pro/specs",
          "accessed": "2026-09-10",
          "note": "kaamerad, kaal ja tehnilised andmed"
        },
        {
          "label": "DJI Store DE",
          "url": "https://store.dji.com/de/product/dji-mavic-4-pro",
          "accessed": "2026-09-10",
          "note": "DJI võrdlusplokk: Mavic 3 Pro alates 1889 €, kaal 958 g, 43 min lend"
        },
        {
          "label": "Hind.ee",
          "url": "https://www.hind.ee/p/dji-mavic-3-pro/",
          "accessed": "2026-09-10",
          "note": "Eesti avalik hinnatase"
        }
      ],
      "price_band_label_et": "1500–5000 €",
      "selector_tags": [
        "900g_4kg",
        "K3",
        "Mavic 3",
        "N",
        "T3",
        "family_video",
        "hiking_nature",
        "low_light",
        "night_observation",
        "property_monitoring",
        "prosumer",
        "real_estate_hobby",
        "subject_tracking",
        "youtube"
      ],
      "controller_included": true,
      "controller_note_et": "DJI RC juhtpult on komplektis",
      "has_dedicated_night_camera": true,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "night_vision"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; N / Night Vision hämarakaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-mavic-4-pro-rc-2-standard",
      "brand": "DJI",
      "model": "Mavic 4 Pro",
      "kit": "Standardkomplekt DJI RC 2",
      "scope": "prosumer",
      "public_price": {
        "amount": 2099,
        "currency": "EUR",
        "price_band": "1500_5000",
        "basis": "official_store_price_seen",
        "note": "DJI Store DE standardvariant DJI RC 2 puldiga."
      },
      "weight_g": 1063,
      "weight_class": "900g_4kg",
      "ce_class": "C2",
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K3",
      "camera_summary": "tipptasemel creator-foto/video, 6K/10-bit/telekaamerad olenevalt režiimist",
      "has_zoom": true,
      "zoom_summary": "mitme kaameraga zoomi- ja teleulatus",
      "has_thermal": false,
      "flight_time_min": 51,
      "obstacle_avoidance": "advanced_night_omnidirectional",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "youtube",
        "property_monitoring",
        "real_estate_hobby",
        "hiking_nature",
        "subject_tracking"
      ],
      "avoid_if": [
        "child_learning",
        "indoor_practice",
        "fpv_sport",
        "thermal_inspection"
      ],
      "pros_et": [
        "kõrge foto- ja videokvaliteet",
        "zoom/tele võimalused",
        "standardkomplektis DJI RC 2 ekraaniga pult"
      ],
      "cons_et": [
        "kallis ja üle 250 g",
        "ei sobi algajale mänguasjaks",
        "thermal puudub"
      ],
      "source_refs": [
        {
          "label": "DJI Store DE",
          "url": "https://store.dji.com/de/product/dji-mavic-4-pro",
          "accessed": "2026-09-10",
          "note": "Mavic 4 Pro standardvariant RC 2 puldiga, 2099 €, 51 min lend, kolmekordne kaamerasüsteem"
        }
      ],
      "price_band_label_et": "1500–5000 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "900g_4kg",
        "K3",
        "T3",
        "hiking_nature",
        "property_monitoring",
        "prosumer",
        "real_estate_hobby",
        "subject_tracking",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "DJI RC 2 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus"
    },
    {
      "id": "dji-avata-standard-fpv-kit",
      "brand": "DJI",
      "model": "Avata",
      "kit": "Standard FPV komplekt Goggles + Motion Controller",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 518,
        "currency": "EUR",
        "price_band": "350_700",
        "basis": "price_comparison_low_old_stock",
        "note": "Vanema Avata platvormi avalik hind 2026-09 hinnavõrdluses; mitte Fly More lisavarustusega komplekt."
      },
      "weight_g": 410,
      "weight_class": "250_900g",
      "ce_class": "legacy_or_unknown",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K1",
      "camera_summary": "1/1.7-tolline CMOS, 48 MP, kuni 4K/60; stabiliseeritud FPV/cinewhoop video",
      "has_zoom": false,
      "zoom_summary": "zoom puudub; fookus on lähivõtetel ja FPV-vaatel",
      "has_thermal": false,
      "flight_time_min": 18,
      "obstacle_avoidance": "downward_visual_positioning_basic_safety",
      "fpv_type": "fpv_cinewhoop",
      "beginner_friendly": true,
      "travel_friendly": false,
      "recommended_use_cases": [
        "fpv_beginner",
        "family_video",
        "youtube",
        "content_creation",
        "indoor_practice"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring",
        "mapping_hobby",
        "night_observation"
      ],
      "pros_et": [
        "klassikaline DJI cinewhoop/FPV algõppe platvorm",
        "sisseehitatud propellerikaitsed",
        "Turtle mode ja DJI FPV ökosüsteem"
      ],
      "cons_et": [
        "vanem mudel kui Avata 2",
        "üle 250 g",
        "ei ole FPV-ralli droon ega vaatlusplatvorm",
        "vana mudeli komplektide saadavus ja hind võivad tugevalt kõikuda"
      ],
      "source_refs": [
        {
          "label": "DJI Avata specs / support",
          "url": "https://www.dji.com/avata/specs",
          "accessed": "2026-09-10",
          "note": "kaal, lennuaeg, tuulekindlus, kiirused"
        },
        {
          "label": "DJI Europe press release",
          "url": "https://www.mynewsdesk.com/uk/dji/pressreleases/dji-unveils-dji-avata-the-ultimate-immersive-drone-experience-3199681",
          "accessed": "2026-09-10",
          "note": "sensor, video, FPV ökosüsteem ja algne komplektiinfo"
        },
        {
          "label": "Hind.ee",
          "url": "https://www.hind.ee/p/dji-avata/",
          "accessed": "2026-09-10",
          "note": "Eesti hinnavõrdluse madalaim nähtud hind"
        }
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Eraldi N/starlight/thermal võime puudub; sobib pigem päevaseks või hästi valgustatud keskkonna FPV-videoks.",
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K1",
        "T2",
        "consumer_fpv",
        "content_creation",
        "family_video",
        "fpv_beginner",
        "indoor_practice",
        "youtube"
      ],
      "controller_included": true,
      "controller_note_et": "komplektis on FPV juhtseade/prillid; tavaline kahe kangiga juhtpult ei pruugi põhikomplektis olla",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-avata-2-standard-fpv-kit",
      "brand": "DJI",
      "model": "Avata 2",
      "kit": "Standard FPV komplekt Goggles 3 + RC Motion 3, 1 aku",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 789,
        "currency": "EUR",
        "price_band": "700_1500",
        "basis": "official_store_price_seen",
        "note": "DJI Store DE madalam Avata 2 komplekti hind; mitte Fly More lisavarustusega komplekt."
      },
      "weight_g": 377,
      "weight_class": "250_900g",
      "ce_class": "C1",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K1",
      "camera_summary": "1/1.3-tolline sensor, 155° ülilainurk, kuni 4K/60 HDR ja 10-bit D-Log M; cinewhoop/FPV-stiilis video",
      "has_zoom": false,
      "zoom_summary": "zoom puudub",
      "has_thermal": false,
      "flight_time_min": 23,
      "obstacle_avoidance": "downward_and_basic_safety",
      "fpv_type": "fpv_cinewhoop",
      "beginner_friendly": true,
      "travel_friendly": false,
      "recommended_use_cases": [
        "fpv_beginner",
        "family_video",
        "youtube"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "Avata platvormi küpsem FPV/cinewhoop valik",
        "parem kaamera ja O4 ülekanne võrreldes algse Avataga",
        "komplektis prillid ja motion-tüüpi juhtseade"
      ],
      "cons_et": [
        "üle 250 g",
        "ei ole klassikaline FPV ralli droon",
        "öövaatluseks puudub eraldi N/starlight või thermal sensor"
      ],
      "source_refs": [
        {
          "label": "DJI Avata 2 specs",
          "url": "https://www.dji.com/avata-2/specs",
          "accessed": "2026-09-10",
          "note": "kaal, C1, lennuaeg, tuulekindlus, kaamera ja videoandmed"
        },
        {
          "label": "DJI Store DE",
          "url": "https://store.dji.com/de/product/dji-avata-2",
          "accessed": "2026-09-10",
          "note": "avalikud EU hinnad ja komplektid"
        }
      ],
      "price_band_label_et": "700–1500 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K1",
        "T2",
        "consumer_fpv",
        "family_video",
        "fpv_beginner",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Kaamera on parem hämaras kui algsel Avatal, kuid kataloogis ei käsitleta seda sihtotstarbelise N/starlight/thermal öövaatluse platvormina.",
      "controller_included": true,
      "controller_note_et": "komplektis on DJI RC Motion 3 juhtseade ja DJI Goggles 3; tavaline kahe kangiga pult ei ole põhikomplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera"
    },
    {
      "id": "dji-avata-360-drone-only",
      "brand": "DJI",
      "model": "Avata 360",
      "kit": "Standard / Drone Only",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 459,
        "currency": "EUR",
        "price_band": "350_700",
        "basis": "official_store_price_seen",
        "note": "DJI Store EU baashind drone-only variandile; pult/prillid tuleb arvestada eraldi."
      },
      "weight_g": 455,
      "weight_class": "250_900g",
      "ce_class": "C1",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "kahe 1/1.1-tollise sensoriga 360° kaamera, kuni 8K/60 HDR 360° video; ühe objektiivi režiimis kuni 4K/60",
      "has_zoom": false,
      "zoom_summary": "optilist vaatluszoomi ei ole; väärtus on 360° salvestuses ja järelkadreerimises",
      "has_thermal": false,
      "flight_time_min": 23,
      "obstacle_avoidance": "omnidirectional_in_360_mode_forward_in_single_lens_mode",
      "fpv_type": "fpv_cinewhoop",
      "beginner_friendly": true,
      "travel_friendly": false,
      "recommended_use_cases": [
        "fpv_beginner",
        "youtube",
        "travel",
        "family_video",
        "360_video"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring",
        "mapping_hobby"
      ],
      "pros_et": [
        "360°/FPV sisulooja platvorm",
        "madalam baashind kui komplektidel",
        "sobib olemasolevate ühilduvate DJI juhtseadmetega kasutajale"
      ],
      "cons_et": [
        "juhtpult ei ole komplektis",
        "FPV-prillid ei ole komplektis",
        "ei ole thermal ega zoom-vaatlusdroon"
      ],
      "source_refs": [
        {
          "label": "DJI Store",
          "url": "https://store.dji.com/uk/product/dji-avata-360",
          "accessed": "2026-09-10",
          "note": "Avata 360 drone-only ja komplektide hinnad ning 8K/360 kirjelduse võrdlus"
        }
      ],
      "has_night_vision": true,
      "night_vision_type": "low_light_360_video",
      "night_vision_summary": "Mitte thermal ega N/starlight vaatluskaamera, kuid 360° sensorite ja f/1.9 optikaga sobib hämaras loominguliseks FPV/360° videoks; takistuste tuvastuse öötoetus sõltub 360° režiimist ja valgusoludest.",
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "360",
        "360_video",
        "K2",
        "N",
        "T2",
        "consumer_fpv",
        "content_creation",
        "family_video",
        "fpv_beginner",
        "hiking_nature",
        "night_observation",
        "night_vision",
        "panorama_360",
        "subject_tracking",
        "travel",
        "youtube"
      ],
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": true,
      "has_360_camera": true,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "night_vision",
        "panorama_360"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; N / Night Vision hämarakaamera; 360° vaatenurgaga panoraamkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-mavic-3t-worry-free-basic-combo",
      "brand": "DJI",
      "model": "Mavic 3T",
      "kit": "Worry-Free Basic Combo",
      "scope": "specialist_hobby_or_enterprise",
      "public_price": {
        "amount": 5454,
        "currency": "EUR",
        "price_band": "over_5000",
        "basis": "public_price_seen",
        "note": "DJI Store/enterprise hinnataseme ja 2026-09 hinnavõrdluste põhjal; mudeli saadavus võib olla piiratud"
      },
      "weight_g": 920,
      "weight_class": "900g_4kg",
      "ce_class": "C2",
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K4",
      "camera_summary": "48 MP lainurk + tele + 640×512 thermal",
      "has_zoom": true,
      "zoom_summary": "kuni 56× hübriidsuum allikate põhjal",
      "has_thermal": true,
      "flight_time_min": 45,
      "obstacle_avoidance": "omnidirectional",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "thermal_inspection",
        "night_observation",
        "property_monitoring",
        "search_private_land"
      ],
      "avoid_if": [
        "child_learning",
        "travel",
        "fpv_beginner",
        "fpv_sport"
      ],
      "pros_et": [
        "thermal + zoom ühes kompaktses platvormis",
        "sobib soojalekete ja öövaatluse erivajaduseks"
      ],
      "cons_et": [
        "enterprise-klassi hind ja kasutusloogika",
        "ei ole tavapärane tavatarbija reisidroon",
        "kontrolli saadavust ja hooldustuge"
      ],
      "source_refs": [
        {
          "label": "DJI Support Mavic 3 Enterprise",
          "url": "https://www.dji.com/support/product/mavic-3-enterprise",
          "accessed": "2026-09-10",
          "note": "Mavic 3T sensorid ja MTOW"
        },
        {
          "label": "DJI Mavic 3E/3T user manual",
          "url": "https://dl.djicdn.com/downloads/DJI_Mavic_3_Enterprise/20230404/DJI_Mavic_3E_3T_User_Manual_EN.pdf",
          "accessed": "2026-09-10",
          "note": "kaal, tuul, lennuaeg"
        },
        {
          "label": "Hind.ee / Idealo",
          "url": "https://www.hind.ee/s/dji-mavic-3t/",
          "accessed": "2026-09-10",
          "note": "2026-09 hinnavahemiku kontroll"
        }
      ],
      "price_band_label_et": "üle 5000 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "900g_4kg",
        "K4",
        "N",
        "T3",
        "night_observation",
        "property_monitoring",
        "search_private_land",
        "specialist_hobby_or_enterprise",
        "thermal_inspection"
      ],
      "has_night_vision": true,
      "night_vision_type": "thermal_low_light",
      "night_vision_summary": "640×512 termokaamera + Mavic 3 Enterprise seeria low-light režiim; sobib öiseks soojuskontrasti ja hämaravaatluseks.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": true,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "thermal",
        "night_vision"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; EO + termokaamera; N / Night Vision hämarakaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": "Professionaalsem C1/enterprise-klassi droon; tavatarbija puhul kuva eelkõige öövaatluse, kinnistu, kaardistuse või professionaalsemate valikute lubamisel.",
      "image_path": null,
      "id": "dji-mavic-3e-worry-free-basic-combo",
      "brand": "DJI",
      "model": "Mavic 3E",
      "kit": "EU-C1 Worry-Free Basic Combo",
      "scope": "specialist_hobby_or_enterprise",
      "public_price": {
        "amount": 3490,
        "currency": "EUR",
        "price_band": "1500_5000",
        "basis": "public_price_seen",
        "note": "Hind.ee nähtud Eesti hind alates 3490 €; hinnad võivad muutuda."
      },
      "weight_g": 899,
      "weight_class": "250_900g",
      "ce_class": "C1",
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K3",
      "camera_summary": "20 MP 4/3 CMOS lainurk + tele/zoom; Intelligent Low-Light Mode hämarates tingimustes.",
      "has_zoom": true,
      "zoom_summary": "Enterprise-seeria telekaamera/zoom sobib detailvaatluseks paremini kui Mini/Air klass.",
      "has_thermal": false,
      "has_night_vision": true,
      "night_vision_type": "low_light",
      "night_vision_summary": "Hea hämaravõime: 4/3 CMOS, suured 3,3 μm pikslid ja Intelligent Low-Light Mode. Ei ole termokaamera ega täis-starlight/NV sensor.",
      "flight_time_min": 45,
      "obstacle_avoidance": "omnidirectional / APAS enterprise",
      "has_obstacle_avoidance": true,
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "night_observation",
        "property_monitoring",
        "mapping_hobby",
        "real_estate_hobby",
        "search_private_land",
        "youtube"
      ],
      "avoid_if": [
        "child_learning",
        "indoor_practice",
        "fpv_sport",
        "fpv_beginner"
      ],
      "pros_et": [
        "väga sobiv hämarates tingimustes EO-vaatluseks",
        "Mavic 3 klassi suur sensor ja enterprise-töövoog",
        "zoom/detailvaatlus ja kaardistusvõimekus"
      ],
      "cons_et": [
        "ei ole alla 250 g droon",
        "ei sisalda termokaamerat",
        "professionaalsem ja kallim kui tavaline reisidroon"
      ],
      "source_refs": [
        {
          "label": "DJI Enterprise specs",
          "url": "https://enterprise.dji.com/mavic-3-enterprise/specs",
          "accessed": "2026-09-10",
          "note": "MTOW, Mavic 3E/3T EU-C1 ja tehnilised andmed"
        },
        {
          "label": "DJI Enterprise launch/news",
          "url": "https://enterprise.dji.com/news/detail/dji-mavic3-enterprise-released",
          "accessed": "2026-09-10",
          "note": "4/3 CMOS, 3,3 μm pikslid ja Intelligent Low-Light Mode"
        },
        {
          "label": "Hind.ee",
          "url": "https://www.hind.ee/p/dji-mavic-3e/",
          "accessed": "2026-09-10",
          "note": "Eesti avalik hinnatase alates 3490 €"
        }
      ],
      "price_band_label_et": "1500–5000 €",
      "selector_tags": [
        "250_900g",
        "K3",
        "Mavic 3",
        "N",
        "T3",
        "enterprise",
        "low_light",
        "mapping_hobby",
        "night_observation",
        "property_monitoring",
        "real_estate_hobby",
        "search_private_land",
        "specialist_hobby_or_enterprise",
        "youtube"
      ],
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": true,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "night_vision"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; N / Night Vision hämarakaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "dji-matrice-4t",
      "brand": "DJI",
      "model": "Matrice 4T",
      "kit": "Enterprise thermal/search kit",
      "scope": "enterprise_reference",
      "public_price": {
        "amount": 6400,
        "currency": "EUR",
        "price_band": "over_5000",
        "basis": "price_comparison_seen",
        "note": "2026-09 EL/Eesti hinnavõrdluste alates-hind; ettevõttepaketi lõpphind sõltub varustusest"
      },
      "weight_g": null,
      "weight_class": "over_250g",
      "ce_class": null,
      "wind_resistance_ms": null,
      "wind_class": "T3",
      "camera_class": "K4",
      "camera_summary": "wide + medium tele + tele + thermal + NIR light + laser rangefinder",
      "has_zoom": true,
      "zoom_summary": "mitu telekaamerat ja laserkaugusmõõtja",
      "has_thermal": true,
      "flight_time_min": null,
      "obstacle_avoidance": "enterprise_obstacle_sensing",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "thermal_inspection",
        "night_observation",
        "search_private_land",
        "property_monitoring"
      ],
      "avoid_if": [
        "child_learning",
        "travel",
        "family_video",
        "fpv_sport"
      ],
      "pros_et": [
        "väga tugev thermal/otsingu/vaatluse platvorm",
        "palju sensoreid"
      ],
      "cons_et": [
        "selgelt väljaspool tavatarbija tavavalikut",
        "kõrge hind",
        "võib eeldada erikoolitust ja põhjalikumat regulatiivset teadmist"
      ],
      "source_refs": [
        {
          "label": "DJI Matrice 4 Series",
          "url": "https://enterprise.dji.com/matrice-4-series",
          "accessed": "2026-09-10",
          "note": "4T sensorid"
        },
        {
          "label": "Hind.ee / Idealo",
          "url": "https://www.hind.ee/s/dji-matrice-4t/",
          "accessed": "2026-09-10",
          "note": "2026-09 hinnavõrdluse suurusjärk"
        }
      ],
      "price_band_label_et": "üle 5000 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K4",
        "N",
        "T3",
        "enterprise_reference",
        "night_observation",
        "over_250g",
        "property_monitoring",
        "search_private_land",
        "thermal_inspection"
      ],
      "has_night_vision": true,
      "night_vision_type": "thermal",
      "night_vision_summary": "Termokaamera ja enterprise-klassi vaatlussensorid; sobib öövaatluseks, kuid on erakasutaja rakenduses professionaalse eriotstarbelise valikuna.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "thermal"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; EO + termokaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": "Enterprise-/eriotstarbeline N+thermal vaatlusdroon; kuvada tavatarbija rakenduses ainult professionaalsemate valikute, öövaatluse, termilise vaatluse või otsingu kasutusjuhul.",
      "image_path": null,
      "id": "autel-evo-max-4n-v2-standard-bundle",
      "brand": "Autel Robotics",
      "model": "EVO Max 4N V2",
      "kit": "Standard Bundle / EU stock",
      "scope": "specialist_hobby_or_enterprise",
      "public_price": {
        "amount": 8999,
        "currency": "EUR",
        "price_band": "over_5000",
        "basis": "public_price_seen",
        "note": "Autelpilot.eu nähtud hind 8999 €; komplekt ja soodustus võivad muutuda."
      },
      "weight_g": 1666,
      "weight_class": "900g_4kg",
      "ce_class": "C2",
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K4",
      "camera_summary": "Fusion 4N: starlight/N-öökaamera, 50 MP wide, 640×512 thermal ja laser rangefinder.",
      "has_zoom": true,
      "zoom_summary": "Starlight kaameral kuni 8× digital zoom; thermal 16×; sobib öiseks sihtmärkide leidmiseks, mitte Mavic 4T 160× zoomi asenduseks.",
      "has_thermal": true,
      "has_night_vision": true,
      "night_vision_type": "starlight_thermal_lrf",
      "night_vision_summary": "N/starlight öökaamera kuni 0,0001 lux klassis, thermal 640×512 ja LRF; kõige selgem N-kaamera haru kataloogis.",
      "flight_time_min": 42,
      "obstacle_avoidance": "720° obstacle avoidance / millimeter-wave radar + vision",
      "has_obstacle_avoidance": true,
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "night_observation",
        "thermal_inspection",
        "search_private_land",
        "property_monitoring",
        "real_estate_hobby"
      ],
      "avoid_if": [
        "child_learning",
        "indoor_practice",
        "travel",
        "fpv_sport",
        "fpv_beginner"
      ],
      "pros_et": [
        "eraldi N/starlight öökaamera",
        "ühendab öökaamera, thermal'i ja laser-kaugusmõõtja",
        "tugev enterprise-klassi vaatlusplatvorm"
      ],
      "cons_et": [
        "väga kallis",
        "erakasutaja jaoks tavaliselt üledimensioneeritud",
        "ei ole kompaktne reisidroon"
      ],
      "source_refs": [
        {
          "label": "Autel Robotics EVO Max 4N",
          "url": "https://www.autelrobotics.com/productdetail/evo-max-4n/",
          "accessed": "2026-09-10",
          "note": "starlight camera, 5 km night vision reconnaissance, 42 min flight time"
        },
        {
          "label": "Autel 4N Starlight Camera specs",
          "url": "https://shop.autelrobotics.com/pages/evo-max-4n-starlight-camera",
          "accessed": "2026-09-10",
          "note": "2.3 MP, 0.0001 lux, ISO kuni 440000, 1920×1200 P30"
        },
        {
          "label": "Autelpilot.eu",
          "url": "https://www.autelpilot.eu/products/autel-robotics-evo-max-4n",
          "accessed": "2026-09-10",
          "note": "EU hinnatase 8999 €, payload: starlight/50MP/thermal/LRF"
        }
      ],
      "price_band_label_et": "üle 5000 €",
      "selector_tags": [
        "900g_4kg",
        "Autel Max 4N",
        "K4",
        "LRF",
        "N",
        "T3",
        "enterprise",
        "night_observation",
        "property_monitoring",
        "real_estate_hobby",
        "search_private_land",
        "specialist_hobby_or_enterprise",
        "starlight",
        "thermal",
        "thermal_inspection"
      ],
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": true,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "thermal",
        "night_vision"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; EO + termokaamera; N / Night Vision hämarakaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": "Antigravity on Insta360 poolt inkubeeritud droonibränd; kontrolli enne kasutamist EL/EE klassimärgist, Remote ID ja kindlustuse nõudeid.",
      "image_path": null,
      "id": "antigravity-a1-standard-bundle",
      "brand": "Antigravity / Insta360",
      "model": "A1",
      "kit": "Standard Bundle",
      "scope": "consumer_fpv_360",
      "public_price": {
        "amount": 1599,
        "currency": "USD",
        "price_band": "1500_5000",
        "basis": "official_store_price_seen",
        "note": "Antigravity Store US standardpaketi hind; EU lõpphind võib erineda."
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": "C0_or_region_dependent",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "8K 360° kaameradroon; filmitakse kõik suunad ja kaader valitakse järeltootmises.",
      "has_zoom": false,
      "zoom_summary": "360° reframing/digitaalne kadreerimine; mitte optiline vaatluszoom",
      "has_thermal": false,
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Ei ole sihtotstarbeline N/starlight ega thermal öövaatluse droon.",
      "flight_time_min": 24,
      "obstacle_avoidance": "omnidirectional_or_vision_based",
      "has_obstacle_avoidance": true,
      "fpv_type": "fpv_360_motion",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "youtube",
        "travel",
        "family_video",
        "fpv_beginner",
        "hiking_nature",
        "360_video"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring",
        "night_observation"
      ],
      "pros_et": [
        "unikaalne 8K 360° droon sisuloojale",
        "alla 250 g standardakuga",
        "standardkomplektis Vision Goggles ja Grip Motion Controller"
      ],
      "cons_et": [
        "kallis võrreldes DJI Mini/Air klassiga",
        "ei ole thermal ega zoom-vaatlusdroon",
        "EU hinnastus ja saadavus tuleb ostuhetkel üle kontrollida"
      ],
      "source_refs": [
        {
          "label": "Antigravity Store",
          "url": "https://www.antigravity.tech/us/drone/antigravity-a1/buy",
          "accessed": "2026-09-10",
          "note": "Standard Bundle hind $1599 ning komplektis A1, Vision Goggles ja Grip Motion Controller"
        },
        {
          "label": "Insta360 Store EE",
          "url": "https://store.insta360.com/ee/product/antigravity-a1",
          "accessed": "2026-09-10",
          "note": "A1 standardpaketi koosseis ja Insta360 seos"
        },
        {
          "label": "Antigravity specs",
          "url": "https://www.antigravity.tech/de/drone/antigravity-a1/specs",
          "accessed": "2026-09-10",
          "note": "249 g standardakuga, 10,7 m/s tuulekindlus ja kuni 24 min lend"
        }
      ],
      "controller_included": true,
      "controller_note_et": "komplektis on Antigravity Grip Motion Controller ja Vision Goggles",
      "price_band_label_et": "1500–5000 €",
      "selector_tags": [
        "360",
        "360_video",
        "K2",
        "T2",
        "consumer_fpv_360",
        "family_video",
        "fpv_beginner",
        "hiking_nature",
        "panorama_360",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_dedicated_night_camera": false,
      "has_360_camera": true,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "panorama_360"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; 360° vaatenurgaga panoraamkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "potensic-atom-standard",
      "brand": "Potensic",
      "model": "ATOM",
      "kit": "Standard Kit",
      "scope": "consumer",
      "public_price": {
        "amount": 319,
        "currency": "EUR",
        "price_band": "under_350",
        "basis": "public_price_seen",
        "note": "Potensic ametliku info / EU hinnataseme põhjal"
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K1",
      "camera_summary": "4K UHD, 3-teljeline gimbal; eelarveklassi reisidroon",
      "has_zoom": false,
      "zoom_summary": "vaatluszoom puudub",
      "has_thermal": false,
      "flight_time_min": 32,
      "obstacle_avoidance": "none_or_limited",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "family_video",
        "travel",
        "hiking_nature",
        "child_learning"
      ],
      "avoid_if": [
        "youtube",
        "thermal_inspection",
        "fpv_sport"
      ],
      "pros_et": [
        "odav DJI alternatiiv",
        "alla 250 g",
        "hea algajale"
      ],
      "cons_et": [
        "ökosüsteem ja sensori-/ohutusvõimekus jääb DJI Pro mudelitele alla"
      ],
      "source_refs": [
        {
          "label": "Potensic ATOM",
          "url": "https://store.potensic.com/en-eu/products/atom",
          "accessed": "2026-09-10",
          "note": "hind ja tehnilised põhiandmed"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K1",
        "T2",
        "child_learning",
        "consumer",
        "family_video",
        "hiking_nature",
        "travel",
        "under_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "potensic-atom-3",
      "brand": "Potensic",
      "model": "ATOM 3",
      "kit": "Standard Kit",
      "scope": "consumer",
      "public_price": {
        "amount": 432.99,
        "currency": "USD",
        "price_band": "350_700",
        "basis": "public_price_seen",
        "note": "Potensic ametlik hind USD; EL hinnaklassis 350–700 €"
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "1/1.3-inch CMOS, 4K/60 HDR, 50 MP, P-Log, AI Track 2.0",
      "has_zoom": false,
      "zoom_summary": "sisulist optilist zoomi ei ole",
      "has_thermal": false,
      "flight_time_min": 40,
      "obstacle_avoidance": "none_or_limited",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "travel",
        "family_video",
        "youtube",
        "hiking_nature",
        "subject_tracking"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation"
      ],
      "pros_et": [
        "tugev hinna ja kaamera suhe",
        "alla 250 g",
        "DJI alternatiiv"
      ],
      "cons_et": [
        "vähem levinud ökosüsteem",
        "takistuste vältimine tagasihoidlikum"
      ],
      "source_refs": [
        {
          "label": "Potensic ATOM 3",
          "url": "https://store.potensic.com/en-eu/products/atom-3",
          "accessed": "2026-09-10",
          "note": "hind, C0/alla 249 g, 4K/60 ja lennuaeg"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K2",
        "T2",
        "consumer",
        "family_video",
        "hiking_nature",
        "subject_tracking",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "autel-evo-ii-dual-640t-v3-rugged",
      "brand": "Autel Robotics",
      "model": "EVO II Dual 640T V3",
      "kit": "Rugged Bundle",
      "scope": "specialist_hobby_or_enterprise",
      "public_price": {
        "amount": 3899,
        "currency": "EUR",
        "price_band": "1500_5000",
        "basis": "public_price_seen",
        "note": "Autel EU avalik soodushind; tavahind kõrgem"
      },
      "weight_g": null,
      "weight_class": "over_250g",
      "ce_class": null,
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K4",
      "camera_summary": "8K EO + 640×512 thermal 30 fps",
      "has_zoom": true,
      "zoom_summary": "thermal 16× digital zoom; EO/thermal vaatlus",
      "has_thermal": true,
      "flight_time_min": 38,
      "obstacle_avoidance": "omnidirectional",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "thermal_inspection",
        "night_observation",
        "search_private_land",
        "property_monitoring"
      ],
      "avoid_if": [
        "child_learning",
        "travel",
        "fpv_sport"
      ],
      "pros_et": [
        "tugev thermal ja pikk lennuaeg",
        "kuni 12 m/s tuuleklass",
        "omnidirectional obstacle avoidance"
      ],
      "cons_et": [
        "raske/kallis ja tavatarbijale pigem erivajaduse toode",
        "kontrolli saadavust, hooldust ja tarkvara"
      ],
      "source_refs": [
        {
          "label": "Autel EU Store",
          "url": "https://www.autelpilot.eu/products/autel-evo-ii-dual-640t-v3-rugged-bundle",
          "accessed": "2026-09-10",
          "note": "hind, thermal, tuul ja lennuaeg"
        }
      ],
      "price_band_label_et": "1500–5000 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K4",
        "N",
        "T3",
        "night_observation",
        "over_250g",
        "property_monitoring",
        "search_private_land",
        "specialist_hobby_or_enterprise",
        "thermal_inspection"
      ],
      "has_night_vision": true,
      "night_vision_type": "thermal",
      "night_vision_summary": "Termokaamera toetab pimedas soojuskontrasti põhist vaatlust.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "thermal"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; EO + termokaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "autel-evo-lite-640t-enterprise",
      "brand": "Autel Robotics",
      "model": "EVO Lite 640T Enterprise",
      "kit": "Standard / Basic Bundle",
      "scope": "specialist_hobby_or_enterprise",
      "public_price": {
        "amount": 2999,
        "currency": "EUR",
        "price_band": "1500_5000",
        "basis": "public_price_seen",
        "note": "Autel EU avalik alates-hind; Premium Bundle 3599 €"
      },
      "weight_g": null,
      "weight_class": "over_250g",
      "ce_class": null,
      "wind_resistance_ms": null,
      "wind_class": "T2",
      "camera_class": "K4",
      "camera_summary": "640×512 thermal + 6K optical, 3-suunaline takistuste vältimine",
      "has_zoom": true,
      "zoom_summary": "digitaalne/kaamera suum olenevalt konfiguratsioonist",
      "has_thermal": true,
      "flight_time_min": 40,
      "obstacle_avoidance": "three_way",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "thermal_inspection",
        "night_observation",
        "search_private_land",
        "property_monitoring"
      ],
      "avoid_if": [
        "child_learning",
        "travel",
        "fpv_sport"
      ],
      "pros_et": [
        "odavam thermal-alternatiiv kui paljud DJI enterprise lahendused",
        "sobib soojalekete ja öise vaatluse harusse"
      ],
      "cons_et": [
        "siiski specialist/enterprise laadne toode",
        "kaal ja CE/EU staatuse detailid vajavad enne ostu kontrolli"
      ],
      "source_refs": [
        {
          "label": "Autel EU Store",
          "url": "https://www.autelpilot.eu/products/evo-lite-640t-enterprise",
          "accessed": "2026-09-10",
          "note": "hind ja thermal-komplektid"
        }
      ],
      "price_band_label_et": "1500–5000 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K4",
        "N",
        "T2",
        "night_observation",
        "over_250g",
        "property_monitoring",
        "search_private_land",
        "specialist_hobby_or_enterprise",
        "thermal_inspection"
      ],
      "has_night_vision": true,
      "night_vision_type": "thermal",
      "night_vision_summary": "Termokaamera toetab pimedas soojuskontrasti põhist vaatlust.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "thermal"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; EO + termokaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "autel-evo-nano-plus",
      "brand": "Autel Robotics",
      "model": "EVO Nano+",
      "kit": "Standard Bundle",
      "scope": "consumer",
      "public_price": {
        "amount": 679,
        "currency": "USD",
        "price_band": "350_700",
        "basis": "public_price_seen",
        "note": "Autel ametlik USD hind; EU premium-komplektid võivad liikuda 700–1500 € klassi"
      },
      "weight_g": 249,
      "weight_class": "under_250g",
      "ce_class": null,
      "wind_resistance_ms": 10.5,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "1/1.28-inch 50 MP RYYB, 4K/30, takistuste vältimine",
      "has_zoom": false,
      "zoom_summary": "vaatluszoom puudub",
      "has_thermal": false,
      "flight_time_min": 28,
      "obstacle_avoidance": "tri_directional",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "travel",
        "family_video",
        "youtube",
        "hiking_nature"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation"
      ],
      "pros_et": [
        "alla 250 g DJI alternatiiv",
        "hea hämaravõimega sensor",
        "takistuste vältimine"
      ],
      "cons_et": [
        "4K/30, mitte 4K/60",
        "EU hind sõltub komplektist ja saadavusest"
      ],
      "source_refs": [
        {
          "label": "Autel Robotics Store",
          "url": "https://store.autelrobotics.com/products/evo-nano-plus",
          "accessed": "2026-09-10",
          "note": "hind, kaal, kaamera ja tuuleandmed"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K2",
        "T2",
        "consumer",
        "family_video",
        "hiking_nature",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "fimi-mini-3",
      "brand": "FIMI",
      "model": "MINI 3",
      "kit": "standard / Pro Combo",
      "scope": "consumer",
      "public_price": {
        "amount": 299,
        "currency": "USD",
        "price_band": "under_350",
        "basis": "public_price_seen",
        "note": "FIMI ametlik alates-hind USD; EU müügikanalid võivad erineda"
      },
      "weight_g": 245,
      "weight_class": "under_250g",
      "ce_class": null,
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "1/2-inch 48 MP, 4K/60, 3-axis gimbal, 12× digital zoom",
      "has_zoom": true,
      "zoom_summary": "12× digitaalne; pigem abi detaili nägemiseks, mitte optiline vaatluszoom",
      "has_thermal": false,
      "flight_time_min": 32,
      "obstacle_avoidance": "none_or_limited",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "travel",
        "family_video",
        "hiking_nature",
        "property_monitoring",
        "mapping_hobby"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection"
      ],
      "pros_et": [
        "soodne alla 250 g alternatiiv",
        "4K/60 ja hea lennuaeg",
        "waypoint/flight-plan tugi"
      ],
      "cons_et": [
        "takistuste vältimine puudub või on piiratud",
        "digitaalne zoom ei asenda optilist telekaamerat"
      ],
      "source_refs": [
        {
          "label": "FIMI Official Store",
          "url": "https://store.fimi.com/en-gb/products/fimimini3-camera-drone",
          "accessed": "2026-09-10",
          "note": "hind, omadused, lennuaeg"
        },
        {
          "label": "FIMI specs/FAQ",
          "url": "https://www.fimi.com/fimi-mini-3.html",
          "accessed": "2026-09-10",
          "note": "kaal ja tuuleklass"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K2",
        "T2",
        "consumer",
        "family_video",
        "hiking_nature",
        "mapping_hobby",
        "property_monitoring",
        "travel",
        "under_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "fimi-x8-tele",
      "brand": "FIMI",
      "model": "X8 Tele",
      "kit": "standard",
      "scope": "prosumer",
      "public_price": {
        "amount": 409,
        "currency": "USD",
        "price_band": "350_700",
        "basis": "public_price_seen",
        "note": "FIMI ametlik hind USD; komplekti ja regiooni hind võib erineda"
      },
      "weight_g": 780,
      "weight_class": "250_900g",
      "ce_class": null,
      "wind_resistance_ms": 12.0,
      "wind_class": "T3",
      "camera_class": "K3",
      "camera_summary": "48 MP wide + 13 MP 5× tele, 30× hybrid zoom, 4K/60",
      "has_zoom": true,
      "zoom_summary": "30× hübriidsuum, 5× telekaamera",
      "has_thermal": false,
      "flight_time_min": 38,
      "obstacle_avoidance": "basic_downward",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "property_monitoring",
        "real_estate_hobby",
        "hiking_nature",
        "search_private_land",
        "youtube"
      ],
      "avoid_if": [
        "child_learning",
        "travel",
        "fpv_sport",
        "thermal_inspection"
      ],
      "pros_et": [
        "soodne zoomiga alternatiiv",
        "kuni 12 m/s tuuleklass",
        "hea oma kinnistu vaatlemiseks"
      ],
      "cons_et": [
        "üle 250 g",
        "ei ole thermal",
        "vähem levinud tugi kui DJI-l"
      ],
      "source_refs": [
        {
          "label": "FIMI Official Store",
          "url": "https://store.fimi.com/en-gb/products/fimi-x8-tele-camera-drone",
          "accessed": "2026-09-10",
          "note": "hind, zoom, kaamera, tuul ja lennuaeg"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K3",
        "T3",
        "hiking_nature",
        "property_monitoring",
        "prosumer",
        "real_estate_hobby",
        "search_private_land",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "hoverair-x1-combo-plus",
      "brand": "HOVERAir",
      "model": "X1",
      "kit": "Standardpakett",
      "scope": "consumer",
      "public_price": {
        "amount": 339,
        "currency": "EUR",
        "price_band": "under_350",
        "basis": "public_price_seen",
        "note": "HOVERAir EU avalik hind"
      },
      "weight_g": 125,
      "weight_class": "under_250g",
      "ce_class": null,
      "wind_resistance_ms": 7.9,
      "wind_class": "T1",
      "camera_class": "K1",
      "camera_summary": "käest starditav automaatne selfie/follow-me kaamera",
      "has_zoom": false,
      "zoom_summary": "zoom puudub",
      "has_thermal": false,
      "flight_time_min": 11,
      "obstacle_avoidance": "none_or_basic",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "family_video",
        "travel",
        "subject_tracking",
        "child_learning",
        "indoor_practice"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring",
        "hiking_nature"
      ],
      "pros_et": [
        "väga lihtne käest kasutamine",
        "hea selfie/follow-me klippideks",
        "väga kerge"
      ],
      "cons_et": [
        "tuulevaru ja lennukaugus on piiratud",
        "ei sobi klassikaliseks kaardistus- või vaatlusdrooniks"
      ],
      "source_refs": [
        {
          "label": "HOVERAir EU Store",
          "url": "https://eu.hoverair.com/products/hoverair-x1",
          "accessed": "2026-09-10",
          "note": "hind ja kasutusomadused"
        },
        {
          "label": "HOVERAir X1 specs",
          "url": "https://hoverair.com/pages/hoverair-x1-specs",
          "accessed": "2026-09-10",
          "note": "kaal ja tuulekindlus"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K1",
        "T1",
        "child_learning",
        "consumer",
        "family_video",
        "indoor_practice",
        "subject_tracking",
        "travel",
        "under_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "hoverair-x1-promax-basic-combo",
      "brand": "HOVERAir",
      "model": "X1 PROMAX",
      "kit": "Standard / Basic pakett",
      "scope": "consumer",
      "public_price": {
        "amount": 784,
        "currency": "EUR",
        "price_band": "700_1500",
        "basis": "public_price_seen",
        "note": "OX.ee avalik hind; Idealo alates-hindu on nähtud madalamana"
      },
      "weight_g": 192.5,
      "weight_class": "under_250g",
      "ce_class": "C0",
      "wind_resistance_ms": 10.7,
      "wind_class": "T2",
      "camera_class": "K2",
      "camera_summary": "edasijõudnud automaatne jälgimis-/selfie droon, ProMax kaameraklass",
      "has_zoom": false,
      "zoom_summary": "vaatluszoom puudub",
      "has_thermal": false,
      "flight_time_min": 16,
      "obstacle_avoidance": "advanced_for_self_flying_category",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": true,
      "recommended_use_cases": [
        "travel",
        "youtube",
        "family_video",
        "subject_tracking",
        "hiking_nature"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "väga hea automaatseks jälgimiseks",
        "alla 250 g",
        "lihtne jagatav sisu"
      ],
      "cons_et": [
        "ei asenda universaalset kaameradrooni",
        "lennuaeg on lühem kui DJI Mini/Air klassil"
      ],
      "source_refs": [
        {
          "label": "HOVERAir X1 PRO/PROMAX",
          "url": "https://eu.hoverair.com/products/hoverair-x1-promax",
          "accessed": "2026-09-10",
          "note": "kaal, C0 ja lennuaeg"
        },
        {
          "label": "OX.ee",
          "url": "https://www.ox.ee/en/product/hoverair-x1-promax-basic-combo/",
          "accessed": "2026-09-10",
          "note": "2026-09 hind"
        }
      ],
      "price_band_label_et": "700–1500 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "K2",
        "T2",
        "consumer",
        "family_video",
        "hiking_nature",
        "subject_tracking",
        "travel",
        "under_250g",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "parrot-anafi-standard-skycontroller3",
      "brand": "Parrot",
      "model": "ANAFI",
      "kit": "Standardkomplekt Parrot Skycontroller 3",
      "scope": "prosumer",
      "public_price": {
        "amount": 699,
        "currency": "EUR",
        "price_band": "350_700",
        "basis": "public_price_seen",
        "note": "Euroopa jaemüüja avalik hind u 699 €; saadavus võib olla piiratud, sest tegemist on vanema ANAFI platvormiga."
      },
      "weight_g": 320,
      "weight_class": "250_900g",
      "ce_class": null,
      "wind_resistance_ms": 13.9,
      "wind_class": "T4",
      "camera_class": "K2",
      "camera_summary": "1/2.4\" 21 MP CMOS, 4K HDR / 4K Cinema, 3-teljeline hübriidstabiliseerimine ja 180° kallutatav gimbal.",
      "has_zoom": true,
      "zoom_summary": "kuni 3× digitaalzoom; kuni 2.8× lossless FHD, kuni 1.4× lossless 4K; ei täida K3 6× zoomi nõuet.",
      "has_thermal": false,
      "flight_time_min": 25,
      "obstacle_avoidance": "vertical_camera_and_ultrasound_only",
      "fpv_type": "none",
      "beginner_friendly": true,
      "travel_friendly": false,
      "recommended_use_cases": [
        "family_video",
        "travel",
        "youtube",
        "real_estate_hobby",
        "hiking_nature"
      ],
      "avoid_if": [
        "thermal_inspection",
        "night_observation",
        "fpv_sport",
        "indoor_practice"
      ],
      "pros_et": [
        "Parroti kerge ja kompaktne DJI alternatiiv",
        "4K HDR ning ülespoole vaatav gimbal",
        "Skycontroller 3 juhtpult on komplektis"
      ],
      "cons_et": [
        "üle 250 g",
        "vanem platvorm ja saadavus võib olla piiratud",
        "takistuste vältimine on piiratud võrreldes uuemate DJI/Autel mudelitega"
      ],
      "source_refs": [
        {
          "label": "Parrot ANAFI technical specifications",
          "url": "https://www.parrot.com/en/drones/anafi/technical-specifications",
          "accessed": "2026-09-10",
          "note": "kaal, lennuaeg, kaamera, zoom, tuul ja Skycontroller 3"
        },
        {
          "label": "MediaMarkt DE",
          "url": "https://www.mediamarkt.de/de/product/_parrot-anafi-4k-hdr-kamera-2437000.html",
          "accessed": "2026-09-10",
          "note": "avalik hind 699 € ja komplekt Skycontroller 3-ga"
        },
        {
          "label": "PcComponentes",
          "url": "https://www.pccomponentes.com/parrot-anafi-drone-4k-skycontroller-3",
          "accessed": "2026-09-10",
          "note": "avalik hind 698,99 €; saadavus täpsustamata"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K2",
        "T4",
        "family_video",
        "hiking_nature",
        "prosumer",
        "real_estate_hobby",
        "travel",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "Parrot Skycontroller 3 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": "FPV-prillidega lennates tuleb säilitada VLOS või kasutada vaatlejat ning järgida kohalikke reegleid.",
      "image_path": null,
      "id": "parrot-anafi-fpv-standard-kit",
      "brand": "Parrot",
      "model": "ANAFI FPV",
      "kit": "Standard FPV komplekt Skycontroller 3 + Cockpitglasses 3",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 799.99,
        "currency": "EUR",
        "price_band": "700_1500",
        "basis": "public_price_seen",
        "note": "Euroopa jaemüüja avalik hind u 799,99 €; saadavus võib varieeruda."
      },
      "weight_g": 315,
      "weight_class": "250_900g",
      "ce_class": null,
      "wind_resistance_ms": 13.9,
      "wind_class": "T4",
      "camera_class": "K2",
      "camera_summary": "1/2.4\" 21 MP CMOS, 4K HDR / 4K Cinema, 3-teljeline hübriidstabiliseerimine; FPV-kogemuseks prillidega komplekt.",
      "has_zoom": true,
      "zoom_summary": "kuni 3× digitaalzoom; ei ole 6× vaatluszoom.",
      "has_thermal": false,
      "flight_time_min": 26,
      "obstacle_avoidance": "vertical_camera_and_ultrasound_only",
      "fpv_type": "casual_fpv_with_goggles",
      "beginner_friendly": true,
      "travel_friendly": false,
      "recommended_use_cases": [
        "fpv_beginner",
        "family_video",
        "travel",
        "hiking_nature",
        "youtube"
      ],
      "avoid_if": [
        "fpv_sport",
        "thermal_inspection",
        "night_observation",
        "indoor_practice"
      ],
      "pros_et": [
        "lihtsam FPV-kogemuse haru kui ise ehitatav FPV-racer",
        "4K HDR kaamera",
        "Skycontroller 3 ja Cockpitglasses 3 on komplektis"
      ],
      "cons_et": [
        "ei ole FPV sport/racer",
        "üle 250 g",
        "vanem platvorm ja varuosade/saadavuse kontroll on vajalik"
      ],
      "source_refs": [
        {
          "label": "Parrot ANAFI FPV technical specifications",
          "url": "https://www.parrot.com/en/drones/technical-specifications-anafi-fpv",
          "accessed": "2026-09-10",
          "note": "kaal, lennuaeg, tuul, kaamera, zoom, Skycontroller 3 ja Cockpitglasses 3"
        },
        {
          "label": "Worten PT",
          "url": "https://www.worten.pt/produtos/drone-parrot-anafi-fpv-4k-autonomia-ate-26-min-preto-6993752",
          "accessed": "2026-09-10",
          "note": "avalik hind 799,99 €"
        }
      ],
      "price_band_label_et": "700–1500 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K2",
        "T4",
        "consumer_fpv",
        "family_video",
        "fpv_beginner",
        "hiking_nature",
        "travel",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "Parrot Skycontroller 3 juhtpult ja Cockpitglasses 3 prillid on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "parrot-anafi-thermal-standard-kit",
      "brand": "Parrot",
      "model": "ANAFI Thermal",
      "kit": "Standard thermal komplekt Skycontroller 3",
      "scope": "specialist_hobby_or_enterprise",
      "public_price": {
        "amount": 2280,
        "currency": "EUR",
        "price_band": "1500_5000",
        "basis": "public_price_seen",
        "note": "Avalikes allikates esinenud hinnatase u 2280 €; enne ostu kontrollida saadavust ja komplekti sisu."
      },
      "weight_g": 315,
      "weight_class": "250_900g",
      "ce_class": null,
      "wind_resistance_ms": 13.9,
      "wind_class": "T4",
      "camera_class": "K4",
      "camera_summary": "EO + FLIR Lepton 3.5 radiomeetriline thermal; 4K + thermal fusion, -10° kuni +400° mõõtevahemik.",
      "has_zoom": true,
      "zoom_summary": "EO kaameral kuni 3× digitaalzoom; thermal-haru kasutab pigem soojuskontrasti, mitte 6× optilist zoomi.",
      "has_thermal": true,
      "flight_time_min": 26,
      "obstacle_avoidance": "vertical_camera_and_ultrasound_only",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "thermal_inspection",
        "night_observation",
        "search_private_land",
        "property_monitoring",
        "mapping_hobby",
        "real_estate_hobby"
      ],
      "avoid_if": [
        "child_learning",
        "indoor_practice",
        "fpv_sport",
        "travel"
      ],
      "pros_et": [
        "väike ja kerge thermal-droon",
        "sobib soojalekete ja öise soojusvaatluse harusse",
        "Skycontroller 3 juhtpult on komplektis"
      ],
      "cons_et": [
        "vanem thermal-platvorm",
        "thermal resolutsioon jääb uuematele 640×512 klassi lahendustele alla",
        "ei ole alla 250 g ega reisidroon"
      ],
      "source_refs": [
        {
          "label": "Parrot ANAFI Thermal overview",
          "url": "https://www.parrot.com/en/drones/anafi-thermal",
          "accessed": "2026-09-10",
          "note": "4K + thermal fusion ja FLIR Lepton 3.5"
        },
        {
          "label": "Parrot ANAFI Thermal technical specifications",
          "url": "https://www.parrot.com/en/drones/anafi-thermal/technical-specifications",
          "accessed": "2026-09-10",
          "note": "kaal, lennuaeg, tuulekindlus ja Skycontroller 3"
        },
        {
          "label": "profi.de",
          "url": "https://www.profi.de/technisch/elektronik/parrot-anafi-thermal-drohne-mit-warmebildkamera-leicht-aber-oho-28604.html",
          "accessed": "2026-09-10",
          "note": "avalik hinnaviide 2280 € koos käibemaksuga"
        }
      ],
      "price_band_label_et": "1500–5000 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K4",
        "N",
        "T4",
        "mapping_hobby",
        "night_observation",
        "property_monitoring",
        "real_estate_hobby",
        "search_private_land",
        "specialist_hobby_or_enterprise",
        "thermal",
        "thermal_inspection"
      ],
      "has_night_vision": true,
      "night_vision_type": "thermal",
      "night_vision_summary": "Thermal-kaamera toetab pimedas soojuskontrasti põhist vaatlust; sobib pigem soojuslekete, objektide või loomade leidmiseks kui tavalise öise video jaoks.",
      "controller_included": true,
      "controller_note_et": "Parrot Skycontroller 3 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "thermal"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; EO + termokaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "parrot-anafi-ai-standard-skycontroller4",
      "brand": "Parrot",
      "model": "ANAFI Ai",
      "kit": "Standardkomplekt Parrot Skycontroller 4",
      "scope": "specialist_hobby_or_enterprise",
      "public_price": {
        "amount": 4840,
        "currency": "EUR",
        "price_band": "1500_5000",
        "basis": "public_price_seen",
        "note": "GeoNovus Latvia avalik hind 4840 € koos KM-ga / 4000 € KM-ta; hinnaviite kehtivus allikas kuni 22.07.2026."
      },
      "weight_g": 898,
      "weight_class": "250_900g",
      "ce_class": null,
      "wind_resistance_ms": 14.0,
      "wind_class": "T4",
      "camera_class": "K3",
      "camera_summary": "1/2\" 48 MP CMOS, 4K HDR10, P-log, 6× zoom; 4G ühendus ja fotogramm-meetria töövood.",
      "has_zoom": true,
      "zoom_summary": "6× zoom; lossless kuni 4× 1080p ja 2× 4K UHD.",
      "has_thermal": false,
      "flight_time_min": 32,
      "obstacle_avoidance": "stereoscopic_obstacle_avoidance_rotating_gimbal",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "mapping_hobby",
        "property_monitoring",
        "real_estate_hobby",
        "youtube",
        "subject_tracking"
      ],
      "avoid_if": [
        "child_learning",
        "indoor_practice",
        "fpv_sport",
        "thermal_inspection"
      ],
      "pros_et": [
        "4G ühendusega professionaalsem ANAFI platvorm",
        "6× zoom ja fotogramm-meetria funktsioonid",
        "Skycontroller 4 juhtpult on komplektis"
      ],
      "cons_et": [
        "ei ole thermal-droon",
        "väga kallis tavatarbija jaoks",
        "kaardistus/4G/BVLOS-laadsed kasutused võivad eeldada täiendavaid regulatiivseid eeldusi"
      ],
      "source_refs": [
        {
          "label": "Parrot ANAFI Ai technical specifications",
          "url": "https://www.parrot.com/en/drones/anafi-ai/technical-documentation/technical-specifications",
          "accessed": "2026-09-10",
          "note": "kaal, lennuaeg, tuul, 4G, kaamera, 6× zoom ja Skycontroller 4"
        },
        {
          "label": "GeoNovus Latvia",
          "url": "https://www.geonovus.lv/en/geo/bezpilota-lidaparati-droni-sensori/fotogrammetrijas-droni/bezpilota-lidaparati/1278/parrot-anafi-ai-bezpilota-lidaparats",
          "accessed": "2026-09-10",
          "note": "avalik hind 4840 € koos KM-ga ja tehnilised põhiandmed"
        }
      ],
      "price_band_label_et": "1500–5000 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K3",
        "T4",
        "mapping_hobby",
        "property_monitoring",
        "real_estate_hobby",
        "specialist_hobby_or_enterprise",
        "subject_tracking",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "Parrot Skycontroller 4 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": false,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "parrot-anafi-usa-standard-skycontroller4",
      "brand": "Parrot",
      "model": "ANAFI USA",
      "kit": "Standard / USA SE komplekt Skycontroller 4",
      "scope": "specialist_hobby_or_enterprise",
      "public_price": {
        "amount": 10375,
        "currency": "EUR",
        "price_band": "over_5000",
        "basis": "public_price_seen",
        "note": "Spy Shop Europe avalik hind 10 375 € koos KM-ga / 8 300 € KM-ta; Parrot ametlikult suunab edasimüüjale/pakkumisele."
      },
      "weight_g": 500,
      "weight_class": "250_900g",
      "ce_class": null,
      "wind_resistance_ms": 14.7,
      "wind_class": "T4",
      "camera_class": "K4",
      "camera_summary": "4K HDR EO + 32× zoom + FLIR BOSON 320 thermal; IP53, kiire kasutuselevõtt ja turvalisusele suunatud platvorm.",
      "has_zoom": true,
      "zoom_summary": "32× digitaalne vaatluszoom; sobib detailvaatluseks ja otsinguks.",
      "has_thermal": true,
      "flight_time_min": 32,
      "obstacle_avoidance": "vertical_camera_and_ultrasound_only",
      "fpv_type": "none",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "thermal_inspection",
        "night_observation",
        "search_private_land",
        "property_monitoring",
        "mapping_hobby"
      ],
      "avoid_if": [
        "child_learning",
        "travel",
        "family_video",
        "fpv_sport",
        "fpv_beginner"
      ],
      "pros_et": [
        "tugev EO + thermal + zoom vaatluse haru",
        "500 g klassis väga võimekas professionaalne platvorm",
        "Skycontroller 4 ja mitu akut on ametlikus pack’is komplektis"
      ],
      "cons_et": [
        "väga kallis",
        "selgelt professionaalse/asutusliku kasutuse klass",
        "tavatarbijale tavaliselt üledimensioneeritud"
      ],
      "source_refs": [
        {
          "label": "Parrot ANAFI USA buy page",
          "url": "https://www.parrot.com/en/drones/anafi-usa/buy",
          "accessed": "2026-09-10",
          "note": "ametliku pack’i sisu: ANAFI USA, 3 akut, Skycontroller 4 ja hard case"
        },
        {
          "label": "Parrot ANAFI USA technical specifications",
          "url": "https://www.parrot.com/en/drones/anafi-usa/technical-specifications",
          "accessed": "2026-09-10",
          "note": "tehnilised andmed"
        },
        {
          "label": "Spy Shop Europe",
          "url": "https://www.spyshopeurope.com/en/anafi-usa-professional-thermal-drone/1522/231",
          "accessed": "2026-09-10",
          "note": "avalik hind, mass, 32× zoom, thermal ja tehniline ülevaade"
        }
      ],
      "price_band_label_et": "üle 5000 €",
      "has_obstacle_avoidance": true,
      "selector_tags": [
        "250_900g",
        "K4",
        "N",
        "T4",
        "mapping_hobby",
        "night_observation",
        "property_monitoring",
        "search_private_land",
        "specialist_hobby_or_enterprise",
        "thermal",
        "thermal_inspection"
      ],
      "has_night_vision": true,
      "night_vision_type": "thermal",
      "night_vision_summary": "Thermal-kaamera ja 32× EO-zoom toetavad öist/halva nähtavusega vaatlust soojuskontrasti ja detailvaatluse kaudu.",
      "controller_included": true,
      "controller_note_et": "Parrot Skycontroller 4 juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "wide_eo",
        "quality_eo",
        "zoom_eo",
        "thermal"
      ],
      "camera_type_summary_et": "EO lainurkkaamera; Kvaliteetne EO foto/video kaamera; EO lainurk + zoom/detailvaatlus; EO + termokaamera"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "betafpv-air65-ii",
      "brand": "BETAFPV",
      "model": "Air65 II",
      "kit": "BNF tiny whoop",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 99.99,
        "currency": "USD",
        "price_band": "under_350",
        "basis": "public_price_seen",
        "note": "BETAFPV ametlik hind sõltub versioonist"
      },
      "weight_g": 20,
      "weight_class": "under_250g",
      "ce_class": null,
      "wind_resistance_ms": null,
      "wind_class": "T0",
      "camera_class": "K0",
      "camera_summary": "tiny whoop FPV-kaamera; siselennu ja raja harjutamiseks",
      "has_zoom": false,
      "zoom_summary": "zoom puudub",
      "has_thermal": false,
      "flight_time_min": 3,
      "obstacle_avoidance": "none",
      "fpv_type": "fpv_tiny_whoop",
      "beginner_friendly": false,
      "travel_friendly": true,
      "recommended_use_cases": [
        "fpv_beginner",
        "fpv_sport",
        "indoor_practice",
        "stem_programming"
      ],
      "avoid_if": [
        "family_video",
        "travel",
        "youtube",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "väga odav ja remonditav FPV harjutusplatvorm",
        "sobib siseruumis raja harjutamiseks"
      ],
      "cons_et": [
        "eeldab FPV ökosüsteemi ja remonti",
        "ei sobi tavatarbija kaameradrooniks"
      ],
      "source_refs": [
        {
          "label": "BETAFPV Store",
          "url": "https://betafpv.com/products/air65-ii-brushless-whoop-quadcopter",
          "accessed": "2026-09-10",
          "note": "hind ja versioonid"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K0",
        "T0",
        "consumer_fpv",
        "fpv_beginner",
        "fpv_sport",
        "indoor_practice",
        "stem_programming",
        "under_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "no_camera_or_fpv"
      ],
      "camera_type_summary_et": "Kaamerata või lihtne FPV-pilt"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "betafpv-cetus-x-fpv-kit",
      "brand": "BETAFPV",
      "model": "Cetus X",
      "kit": "FPV Kit",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 259.99,
        "currency": "USD",
        "price_band": "under_350",
        "basis": "public_price_seen",
        "note": "BETAFPV ametlik tooteloend; saadavus võib kõikuda"
      },
      "weight_g": null,
      "weight_class": "under_250g",
      "ce_class": null,
      "wind_resistance_ms": null,
      "wind_class": "T0",
      "camera_class": "K0",
      "camera_summary": "lihtne FPV-kaamera õppeks; mitte foto/video kaameradroon",
      "has_zoom": false,
      "zoom_summary": "zoom puudub",
      "has_thermal": false,
      "flight_time_min": null,
      "obstacle_avoidance": "none",
      "fpv_type": "fpv_beginner_kit",
      "beginner_friendly": true,
      "travel_friendly": false,
      "recommended_use_cases": [
        "fpv_beginner",
        "indoor_practice",
        "child_learning",
        "stem_programming"
      ],
      "avoid_if": [
        "family_video",
        "travel",
        "youtube",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "valmis FPV õppekomplekt",
        "odav kukkumisriskiga harjutamiseks",
        "sobib simulaatori/algõppe loogikaga"
      ],
      "cons_et": [
        "ei sobi kvaliteetseks foto- või videodrooniks",
        "vajab FPV ohutusreeglite selgitust"
      ],
      "source_refs": [
        {
          "label": "BETAFPV Store",
          "url": "https://betafpv.com/products/cetus-x-fpv-kit",
          "accessed": "2026-09-10",
          "note": "hind ja FPV kit"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K0",
        "T0",
        "child_learning",
        "consumer_fpv",
        "fpv_beginner",
        "indoor_practice",
        "stem_programming",
        "under_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": true,
      "controller_note_et": "juhtpult on komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "no_camera_or_fpv"
      ],
      "camera_type_summary_et": "Kaamerata või lihtne FPV-pilt"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "geprc-cinelog25-v2-o3",
      "brand": "GEPRC",
      "model": "CineLog25 V2",
      "kit": "O3 / BNF cinewhoop",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 239.99,
        "currency": "USD",
        "price_band": "350_700",
        "basis": "public_price_seen",
        "note": "baasmudel $199.99–239.99; O3/HD komplekt võib minna kõrgemasse klassi"
      },
      "weight_g": 148,
      "weight_class": "under_250g",
      "ce_class": null,
      "wind_resistance_ms": null,
      "wind_class": "T1",
      "camera_class": "K0",
      "camera_summary": "FPV cinewhoop; HD-kaamera sõltub versioonist",
      "has_zoom": false,
      "zoom_summary": "zoom puudub",
      "has_thermal": false,
      "flight_time_min": 6,
      "obstacle_avoidance": "none",
      "fpv_type": "fpv_cinewhoop",
      "beginner_friendly": false,
      "travel_friendly": true,
      "recommended_use_cases": [
        "fpv_beginner",
        "youtube",
        "indoor_practice"
      ],
      "avoid_if": [
        "family_video",
        "travel",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "remonditav FPV cinewhoop",
        "alla 250 g versioone",
        "sobib loovaks FPV-videoks"
      ],
      "cons_et": [
        "vajab FPV teadmisi ja eraldi varustust",
        "lühike lennuaeg"
      ],
      "source_refs": [
        {
          "label": "GEPRC Store",
          "url": "https://geprc.com/product/geprc-cinelog25-v2-hd-o3-fpv-drone/",
          "accessed": "2026-09-10",
          "note": "hind, kaal ja lennuaeg"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K0",
        "T1",
        "consumer_fpv",
        "fpv_beginner",
        "indoor_practice",
        "under_250g",
        "youtube"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "no_camera_or_fpv"
      ],
      "camera_type_summary_et": "Kaamerata või lihtne FPV-pilt"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "iflight-nazgul-dc5-o4-eco-v11",
      "brand": "iFlight",
      "model": "Nazgul DC5 O4 ECO V1.1",
      "kit": "6S HD BNF",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 564.1,
        "currency": "EUR",
        "price_band": "350_700",
        "basis": "public_price_seen",
        "note": "iFlight Europe avalik alates-hind"
      },
      "weight_g": null,
      "weight_class": "over_250g",
      "ce_class": null,
      "wind_resistance_ms": null,
      "wind_class": "T2",
      "camera_class": "K0",
      "camera_summary": "5-tolline HD FPV sport/freestyle platvorm DJI O4 ökosüsteemis",
      "has_zoom": false,
      "zoom_summary": "zoom puudub",
      "has_thermal": false,
      "flight_time_min": null,
      "obstacle_avoidance": "none",
      "fpv_type": "fpv_sport",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "fpv_sport",
        "fpv_beginner"
      ],
      "avoid_if": [
        "family_video",
        "travel",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "sport-FPV jaoks asjakohane valik",
        "HD-videoülekanne",
        "remonditav"
      ],
      "cons_et": [
        "ei sobi tavalise pere-/reisivideo drooniks",
        "vajab FPV varustust ja remondioskust"
      ],
      "source_refs": [
        {
          "label": "iFlight Europe",
          "url": "https://iflight-rc.eu/collections/nazgul-series",
          "accessed": "2026-09-10",
          "note": "2026-09 hinnad Nazgul seeriale"
        }
      ],
      "price_band_label_et": "350–700 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K0",
        "T2",
        "consumer_fpv",
        "fpv_beginner",
        "fpv_sport",
        "over_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "no_camera_or_fpv"
      ],
      "camera_type_summary_et": "Kaamerata või lihtne FPV-pilt"
    },
    {
      "data_status": "2026-09",
      "status_note_et": "Avalike allikate põhjal; kontrolli enne ostu üle hind, saadavus ja komplekti sisu.",
      "include_by_default": true,
      "regulatory_note_et": null,
      "image_path": null,
      "id": "iflight-nazgul-xl5-eco-v11-analog",
      "brand": "iFlight",
      "model": "Nazgul XL5 ECO V1.1",
      "kit": "6S Analog BNF",
      "scope": "consumer_fpv",
      "public_price": {
        "amount": 272.7,
        "currency": "EUR",
        "price_band": "under_350",
        "basis": "public_price_seen",
        "note": "iFlight Europe avalik alates-hind"
      },
      "weight_g": null,
      "weight_class": "over_250g",
      "ce_class": null,
      "wind_resistance_ms": null,
      "wind_class": "T2",
      "camera_class": "K0",
      "camera_summary": "5-tolline FPV-ralli/freestyle platvorm, analog video",
      "has_zoom": false,
      "zoom_summary": "zoom puudub",
      "has_thermal": false,
      "flight_time_min": null,
      "obstacle_avoidance": "none",
      "fpv_type": "fpv_sport",
      "beginner_friendly": false,
      "travel_friendly": false,
      "recommended_use_cases": [
        "fpv_sport",
        "fpv_beginner"
      ],
      "avoid_if": [
        "family_video",
        "travel",
        "youtube",
        "thermal_inspection",
        "property_monitoring"
      ],
      "pros_et": [
        "odav sport-FPV alus",
        "remonditav ja varuosadega",
        "sobib ralli/freestyle harjutuseks"
      ],
      "cons_et": [
        "ei ole algaja kaameradroon",
        "vajab akusid, laadijat, prille/pulti ja FPV oskusi",
        "üle 250 g klass võib lisada regulatiivset koormust"
      ],
      "source_refs": [
        {
          "label": "iFlight Europe",
          "url": "https://iflight-rc.eu/collections/nazgul-series",
          "accessed": "2026-09-10",
          "note": "2026-09 hinnad Nazgul seeriale"
        }
      ],
      "price_band_label_et": "kuni 350 €",
      "has_obstacle_avoidance": false,
      "selector_tags": [
        "K0",
        "T2",
        "consumer_fpv",
        "fpv_beginner",
        "fpv_sport",
        "over_250g"
      ],
      "has_night_vision": false,
      "night_vision_type": "none",
      "night_vision_summary": "Öövaatluseks eraldi N/low-light/thermal võime puudub või ei ole kataloogis märgitud.",
      "controller_included": false,
      "controller_note_et": "juhtpult ei ole komplektis",
      "has_dedicated_night_camera": false,
      "has_360_camera": false,
      "camera_types": [
        "no_camera_or_fpv"
      ],
      "camera_type_summary_et": "Kaamerata või lihtne FPV-pilt"
    }
  ],
  "camera_type_options": [
    {
      "id": "no_camera_or_fpv",
      "label_et": "Kaamerata või lihtne FPV-pilt",
      "description_et": "Sobib mänguasjaks, siseruumis harjutamiseks või FPV-lennu algõppeks; foto/video kvaliteet ei ole peamine."
    },
    {
      "id": "wide_eo",
      "label_et": "EO lainurkkaamera",
      "description_et": "Tavaline stabiliseeritud foto- ja videokaamera ilma olulise zoomita."
    },
    {
      "id": "quality_eo",
      "label_et": "Kvaliteetne EO foto/video kaamera",
      "description_et": "Parem sensor, 4K/HDR/log/10-bit või sisulooja jaoks sobivam pildikvaliteet."
    },
    {
      "id": "zoom_eo",
      "label_et": "EO lainurk + zoom/detailvaatlus",
      "description_et": "Sobib kinnistu, ehitise või kaugema objekti detailsemaks vaatlemiseks."
    },
    {
      "id": "thermal",
      "label_et": "EO + termokaamera",
      "description_et": "Soojuseleke, loomade/objektide leidmine ja soojuskontrasti põhine vaatlus."
    },
    {
      "id": "night_vision",
      "label_et": "N / Night Vision hämarakaamera",
      "description_et": "Low-light, Night Mode või starlight-tüüpi öö-/hämaras kasutatav kaamera; ei tähenda automaatselt termokaamerat."
    },
    {
      "id": "panorama_360",
      "label_et": "360° vaatenurgaga panoraamkaamera",
      "description_et": "360° video/panoraamkaamera, kus kaader valitakse sageli järeltootmises või immersiivses vaaterežiimis."
    }
  ]
};
