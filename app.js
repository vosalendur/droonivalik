(function () {
  "use strict";

  const catalog = window.DRONE_CATALOG;
  const rules = window.DRONE_RULES;

  const appVersion = "2026-09 v6";
  const defaultAnswers = {
    useCases: ["travel", "family_video"],
    maxPriceBand: "700_1500",
    strictPriceBand: false,
    weightPreference: "prefer_under_250g",
    minWindClass: "auto",
    cameraTypePreference: "auto",
    minCameraClass: "auto",
    thermalRequired: false,
    nightVisionRequired: false,
    zoomPreferred: false,
    obstacleAvoidancePreferred: true,
    professionalAllowed: false,
    userLevel: "beginner"
  };

  const labels = {
    any: "vahet pole",
    prefer_under_250g: "eelista kuni 250 g",
    require_under_250g: "nõua kuni 250 g",
    over_250g_ok: "üle 250 g sobib",
    auto: "automaatne kasutusviisi põhjal",
    primary: "Põhisoovitused",
    secondary: "Lisasoovitused",
    excluded: "Välja jäetud"
  };

  const form = document.getElementById("selectorForm");
  const useCaseGrid = document.getElementById("useCaseGrid");
  const maxPriceBandSelect = document.getElementById("maxPriceBand");
  const strictPriceBandSelect = document.getElementById("strictPriceBand");
  const weightPreferenceSelect = document.getElementById("weightPreference");
  const minWindClassSelect = document.getElementById("minWindClass");
  const cameraTypePreferenceSelect = document.getElementById("cameraTypePreference");
  const thermalRequiredInput = document.getElementById("thermalRequired");
  const nightVisionRequiredInput = document.getElementById("nightVisionRequired");
  const zoomPreferredInput = document.getElementById("zoomPreferred");
  const obstacleAvoidancePreferredInput = document.getElementById("obstacleAvoidancePreferred");
  const professionalAllowedInput = document.getElementById("professionalAllowed");
  const userLevelSelect = document.getElementById("userLevel");
  const resetBtn = document.getElementById("resetBtn");
  const copyLinkBtn = document.getElementById("copyLinkBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const resultsList = document.getElementById("resultsList");
  const excludedList = document.getElementById("excludedList");
  const comparisonTableBody = document.querySelector("#comparisonTable tbody");
  const summaryBox = document.getElementById("summaryBox");
  const regulatoryBox = document.getElementById("regulatoryBox");
  const catalogMeta = document.getElementById("catalogMeta");
  const dataStatusBadge = document.getElementById("dataStatusBadge");
  const appVersionEl = document.getElementById("appVersion");

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function orderIndex(order, value) {
    if (!value) return -1;
    return order.indexOf(value);
  }

  function labelFrom(list, id, fallback = "") {
    const item = Array.isArray(list) ? list.find((entry) => entry.id === id) : null;
    return item?.label_et || labels[id] || fallback || id || "—";
  }

  function priceBandOrder() {
    return rules.price_band_order || ["under_350", "350_700", "700_1500", "1500_5000", "over_5000"];
  }

  function windClassOrder() {
    return rules.wind_class_order || ["T0", "T1", "T2", "T3", "T4"];
  }

  function cameraClassOrder() {
    return rules.camera_class_order || ["K0", "K1", "K2", "K3", "K4", "N"];
  }

  function cameraTypeOptions() {
    return catalog.camera_type_options || rules.camera_type_options || [
      { id: "no_camera_or_fpv", label_et: "Kaamerata või lihtne FPV-pilt" },
      { id: "wide_eo", label_et: "EO lainurkkaamera" },
      { id: "quality_eo", label_et: "Kvaliteetne EO foto/video kaamera" },
      { id: "zoom_eo", label_et: "EO lainurk + zoom/detailvaatlus" },
      { id: "thermal", label_et: "EO + termokaamera" },
      { id: "night_vision", label_et: "N / Night Vision hämarakaamera" },
      { id: "panorama_360", label_et: "360° vaatenurgaga panoraamkaamera" }
    ];
  }

  function cameraTypeLabel(type) {
    if (!type || type === "auto") return "automaatne kasutusviisi põhjal";
    return labelFrom(cameraTypeOptions(), type, type);
  }

  function cameraClassFriendlyLabel(cameraClass) {
    return labelFrom(catalog.camera_classes, cameraClass, cameraClass || "—");
  }

  function cameraTypeToMinimumClass(type) {
    switch (type) {
      case "no_camera_or_fpv": return "K0";
      case "wide_eo": return "K1";
      case "quality_eo": return "K2";
      case "zoom_eo": return "K3";
      case "thermal": return "K4";
      case "night_vision": return "K2";
      case "panorama_360": return "K2";
      default: return null;
    }
  }

  function has360Camera(drone) {
    if (drone.has_360_camera) return true;
    if (Array.isArray(drone.camera_types) && drone.camera_types.includes("panorama_360")) return true;
    const haystack = [drone.id, drone.model, drone.kit, drone.camera_summary, ...(drone.selector_tags || [])].join(" ").toLowerCase();
    return haystack.includes("360");
  }

  function hasDedicatedNightCamera(drone) {
    if (drone.has_dedicated_night_camera) return true;
    const type = String(drone.night_vision_type || "none").toLowerCase();
    return !["", "none", "false", "puudub", "thermal"].includes(type);
  }

  function droneCameraTypes(drone) {
    const types = new Set(Array.isArray(drone.camera_types) ? drone.camera_types : []);
    if (!types.size) {
      if (drone.camera_class === "K0") types.add("no_camera_or_fpv");
      if (isAtOrAboveCamera(drone.camera_class, "K1", drone)) types.add("wide_eo");
      if (isAtOrAboveCamera(drone.camera_class, "K2", drone)) types.add("quality_eo");
      if (drone.has_zoom || drone.camera_class === "K3" || drone.camera_class === "K4") types.add("zoom_eo");
      if (drone.has_thermal) types.add("thermal");
      if (hasDedicatedNightCamera(drone)) types.add("night_vision");
      if (has360Camera(drone)) types.add("panorama_360");
    }
    return Array.from(types);
  }

  function cameraTypeMatches(drone, type) {
    if (!type || type === "auto") return true;
    switch (type) {
      case "no_camera_or_fpv": return drone.camera_class === "K0" || ["fpv_tiny_whoop", "fpv_sport", "fpv_beginner_kit"].includes(drone.fpv_type);
      case "wide_eo": return isAtOrAboveCamera(drone.camera_class, "K1", drone);
      case "quality_eo": return isAtOrAboveCamera(drone.camera_class, "K2", drone);
      case "zoom_eo": return Boolean(drone.has_zoom || drone.camera_class === "K3" || drone.camera_class === "K4");
      case "thermal": return Boolean(drone.has_thermal);
      case "night_vision": return hasDedicatedNightCamera(drone);
      case "panorama_360": return has360Camera(drone);
      default: return true;
    }
  }

  function cameraTypeListLabel(drone) {
    const names = droneCameraTypes(drone).map(cameraTypeLabel);
    return names.length ? names.join("; ") : cameraClassFriendlyLabel(drone.camera_class);
  }

  function cameraRequirementLabel(derived) {
    if (derived.cameraTypePreference && derived.cameraTypePreference !== "auto") {
      return cameraTypeLabel(derived.cameraTypePreference);
    }
    return `vähemalt ${cameraClassFriendlyLabel(derived.minCameraClass)}`;
  }

  function legacyCameraClassToType(cameraClass) {
    switch (cameraClass) {
      case "K0": return "no_camera_or_fpv";
      case "K1": return "wide_eo";
      case "K2": return "quality_eo";
      case "K3": return "zoom_eo";
      case "K4": return "thermal";
      case "N": return "night_vision";
      default: return "auto";
    }
  }

  function scoreWeights() {
    return rules.score_weights || {};
  }

  function weight(key, fallback) {
    const weights = scoreWeights();
    return typeof weights[key] === "number" ? weights[key] : fallback;
  }

  function dronePriceBand(drone) {
    return drone.public_price?.price_band || drone.price_band || null;
  }

  function isAtOrBelowPrice(droneBand, maxBand) {
    if (!maxBand || maxBand === "any" || !droneBand) return true;
    return orderIndex(priceBandOrder(), droneBand) <= orderIndex(priceBandOrder(), maxBand);
  }

  function isInExactPriceBand(droneBand, band) {
    if (!band || band === "any") return true;
    return droneBand === band;
  }

  function isAtOrAboveWind(droneClass, minClass) {
    if (!minClass || minClass === "auto" || !droneClass) return true;
    return orderIndex(windClassOrder(), droneClass) >= orderIndex(windClassOrder(), minClass);
  }

  function hasNightCapability(drone) {
    if (drone.has_night_vision || drone.has_thermal) return true;
    const type = String(drone.night_vision_type || "none").toLowerCase();
    return !["", "none", "false", "puudub"].includes(type);
  }

  function isAtOrAboveCamera(droneClass, minClass, drone) {
    if (!minClass || minClass === "auto") return true;
    if (minClass === "N") return drone ? hasNightCapability(drone) : false;
    if (!droneClass) return false;
    if (droneClass === "N") return true;
    return orderIndex(cameraClassOrder(), droneClass) >= orderIndex(cameraClassOrder(), minClass);
  }

  function higherCamera(current, candidate) {
    if (!candidate) return current;
    if (!current || current === "auto") return candidate;
    if (candidate === "N" || current === "N") return "N";
    return orderIndex(cameraClassOrder(), candidate) > orderIndex(cameraClassOrder(), current) ? candidate : current;
  }

  function higherWind(current, candidate) {
    if (!candidate) return current;
    if (!current || current === "auto") return candidate;
    return orderIndex(windClassOrder(), candidate) > orderIndex(windClassOrder(), current) ? candidate : current;
  }

  function isUnder250g(drone) {
    if (typeof drone.weight_g === "number") return drone.weight_g < 250;
    return drone.weight_class === "under_250g";
  }

  function isConsumerScope(drone) {
    const scope = drone.scope || "consumer";
    return ["consumer", "consumer_fpv", "prosumer"].includes(scope);
  }

  function isProfessionalScope(drone) {
    return !isConsumerScope(drone);
  }

  function hasUsableObstacleAvoidance(drone) {
    if (typeof drone.has_obstacle_avoidance === "boolean") return drone.has_obstacle_avoidance;
    const value = String(drone.obstacle_avoidance || "").toLowerCase();
    return Boolean(value && !["none", "ei", "puudub"].includes(value));
  }

  function useCaseRequirements(useCase) {
    return rules.use_case_requirements?.[useCase] || {};
  }

  function mergeDerivedRequirements(answers) {
    const cameraTypePreference = answers.cameraTypePreference || "auto";
    let minCameraClass = answers.minCameraClass && answers.minCameraClass !== "auto" ? answers.minCameraClass : "K0";
    let minWindClass = answers.minWindClass && answers.minWindClass !== "auto" ? answers.minWindClass : undefined;
    let thermalRequired = Boolean(answers.thermalRequired);
    let nightVisionRequired = Boolean(answers.nightVisionRequired);
    let zoomPreferred = Boolean(answers.zoomPreferred);
    let panorama360Required = false;
    const preferredFpvTypes = new Set();
    let needsBeginnerFriendly = answers.userLevel === "beginner";
    let needsTravelFriendly = false;
    const derivedNotes = [];

    for (const useCase of answers.useCases) {
      const req = useCaseRequirements(useCase);
      minCameraClass = higherCamera(minCameraClass, req.camera_min);
      minWindClass = higherWind(minWindClass, req.preferred_wind);
      if (req.thermal_required) thermalRequired = true;
      if (req.night_vision_required) nightVisionRequired = true;
      if (req.zoom_preferred) zoomPreferred = true;
      if (req.beginner_friendly_required) needsBeginnerFriendly = true;
      if (req.travel_friendly_required) needsTravelFriendly = true;
      if (Array.isArray(req.preferred_fpv_types)) req.preferred_fpv_types.forEach((fpv) => preferredFpvTypes.add(fpv));
      if (req.notes_et) derivedNotes.push(req.notes_et);
    }

    const cameraTypeMinimum = cameraTypeToMinimumClass(cameraTypePreference);
    if (cameraTypeMinimum) minCameraClass = higherCamera(minCameraClass, cameraTypeMinimum);
    if (cameraTypePreference === "thermal") thermalRequired = true;
    if (cameraTypePreference === "night_vision") nightVisionRequired = true;
    if (cameraTypePreference === "zoom_eo") zoomPreferred = true;
    if (cameraTypePreference === "panorama_360") panorama360Required = true;

    return {
      thermalRequired,
      nightVisionRequired,
      zoomPreferred,
      panorama360Required,
      cameraTypePreference,
      minCameraClass,
      minWindClass,
      preferredFpvTypes,
      needsBeginnerFriendly,
      needsTravelFriendly,
      derivedNotes
    };
  }

  function hardFilter(drone, answers, derived) {
    const excluded = [];
    const selectedUseCases = new Set(answers.useCases);

    const specialNeed = derived.thermalRequired || derived.nightVisionRequired || derived.panorama360Required || ["thermal", "night_vision", "panorama_360", "zoom_eo"].includes(derived.cameraTypePreference) || selectedUseCases.has("thermal_inspection") || selectedUseCases.has("night_observation") || selectedUseCases.has("search_private_land") || selectedUseCases.has("property_monitoring") || selectedUseCases.has("mapping_hobby");

    if (isProfessionalScope(drone) && !answers.professionalAllowed && !specialNeed) {
      excluded.push("professionaalsem/enterprise-mudel; luba professionaalsemad valikud või vali eriotstarbeline kasutus");
    }

    if (drone.include_by_default === false && !specialNeed && !answers.professionalAllowed) {
      excluded.push("eriotstarbeline või enterprise-mudel, mida ei näidata vaikimisi");
    }

    if (derived.thermalRequired && !drone.has_thermal) {
      excluded.push("termokaamera on nõutud, kuid mudelil puudub thermal");
    }

    if (derived.nightVisionRequired && !hasNightCapability(drone)) {
      excluded.push("öövaatluse/hämaras vaatlusvõime on nõutud, kuid mudelil puudub N/low-light/thermal võime");
    }

    if (derived.panorama360Required && !has360Camera(drone)) {
      excluded.push("360° vaatenurgaga panoraamkaamera on nõutud, kuid mudelil puudub 360° kaamera");
    }

    if (derived.cameraTypePreference && derived.cameraTypePreference !== "auto" && !cameraTypeMatches(drone, derived.cameraTypePreference)) {
      excluded.push(`kaamera tüüp ei vasta valikule: ${cameraTypeLabel(derived.cameraTypePreference)}`);
    }

    const band = dronePriceBand(drone);
    if (answers.maxPriceBand && answers.maxPriceBand !== "any") {
      if (answers.strictPriceBand && !isInExactPriceBand(band, answers.maxPriceBand)) {
        excluded.push("ei kuulu valitud hinnavahemikku");
      }
      if (!answers.strictPriceBand && !isAtOrBelowPrice(band, answers.maxPriceBand)) {
        excluded.push("ületab kasutaja valitud hinnalage");
      }
    }

    if (answers.weightPreference === "require_under_250g" && !isUnder250g(drone)) {
      excluded.push("kasutaja nõudis kuni 250 g klassi");
    }

    if (!isAtOrAboveCamera(drone.camera_class, derived.minCameraClass, drone)) {
      excluded.push(`kaamera võime jääb alla nõude: ${cameraRequirementLabel(derived)}`);
    }

    return excluded;
  }

  function scoreDrone(drone, answers, derived) {
    let score = 0;
    const reasons = [];
    const warnings = [];
    const selectedUseCases = new Set(answers.useCases);
    const droneUseCases = new Set(drone.recommended_use_cases || []);
    const avoidIf = new Set(drone.avoid_if || []);

    const matchingUseCases = answers.useCases.filter((uc) => droneUseCases.has(uc));
    if (matchingUseCases.length > 0) {
      score += weight("use_case_match", 40);
      const labelsText = matchingUseCases.map((uc) => labelFrom(catalog.use_cases, uc)).join(", ");
      reasons.push(`sobib kasutusviisiga: ${labelsText}`);
    } else if (answers.useCases.length > 0) {
      score += weight("penalty_unsuitable_use_case", -15);
      warnings.push("mudeli soovitatud kasutus ei kattu hästi valitud kasutusviisiga");
    }

    const unsuitableUseCases = answers.useCases.filter((uc) => avoidIf.has(uc));
    if (unsuitableUseCases.length > 0) {
      score += weight("penalty_unsuitable_use_case", -15);
      const labelsText = unsuitableUseCases.map((uc) => labelFrom(catalog.use_cases, uc)).join(", ");
      warnings.push(`kataloog märgib mudeli ebasobivaks: ${labelsText}`);
    }

    const band = dronePriceBand(drone);
    const priceOk = answers.strictPriceBand ? isInExactPriceBand(band, answers.maxPriceBand) : isAtOrBelowPrice(band, answers.maxPriceBand);
    if (priceOk) {
      score += weight("budget_match", 25);
      reasons.push(answers.strictPriceBand ? "kuulub valitud hinnavahemikku" : "mahub valitud hinnalae alla");
    } else {
      score += weight("penalty_above_budget", -35);
      warnings.push("ületab valitud hinnalage või ei mahu hinnavahemikku");
    }

    if (isAtOrAboveCamera(drone.camera_class, derived.minCameraClass, drone)) {
      score += weight("camera_match", 20);
      reasons.push(`täidab kaameranõude: ${cameraRequirementLabel(derived)}`);
    } else {
      score += weight("penalty_camera_below_minimum", -25);
      warnings.push(`kaamera jääb alla nõude: ${cameraRequirementLabel(derived)}`);
    }

    if (derived.cameraTypePreference && derived.cameraTypePreference !== "auto") {
      if (cameraTypeMatches(drone, derived.cameraTypePreference)) {
        score += weight("camera_type_match", 18);
        reasons.push(`kaamera tüüp sobib: ${cameraTypeLabel(derived.cameraTypePreference)}`);
      } else {
        warnings.push(`kaamera tüüp ei ole valitud tüüp: ${cameraTypeLabel(derived.cameraTypePreference)}`);
      }
    }

    if (derived.panorama360Required) {
      if (has360Camera(drone)) {
        score += weight("panorama_360_match", 20);
        reasons.push("360° panoraamkaamera nõue on kaetud");
      } else {
        score += weight("penalty_missing_360_camera_when_required", -30);
      }
    }

    if (["prefer_under_250g", "require_under_250g"].includes(answers.weightPreference)) {
      if (isUnder250g(drone)) {
        score += weight("weight_match", 15);
        reasons.push("kuni 250 g klass lihtsustab algaja ja reisi kasutust");
      } else {
        score += weight("penalty_over_250g_when_preferred", -20);
        warnings.push("üle 250 g droon; regulatiivne ja praktiline koormus on suurem");
      }
    } else if (answers.weightPreference === "over_250g_ok") {
      score += weight("weight_match", 15);
      reasons.push("kasutaja lubas üle 250 g klassi");
    }

    if (isAtOrAboveWind(drone.wind_class, derived.minWindClass)) {
      score += weight("wind_match", 10);
      if (derived.minWindClass) reasons.push(`täidab tuuleklassi ${derived.minWindClass} või parem`);
    } else if (derived.minWindClass) {
      warnings.push(`tuuleklass ${drone.wind_class || "puudub"} võib jääda alla taseme ${derived.minWindClass}`);
    }

    if (derived.needsBeginnerFriendly && drone.beginner_friendly) {
      score += weight("beginner_friendly", 10);
      reasons.push("algajasõbralik valik");
    }

    if (derived.needsTravelFriendly && drone.travel_friendly) {
      score += weight("travel_friendly", 10);
      reasons.push("sobib reisile kaasa võtmiseks");
    }

    if (derived.zoomPreferred) {
      if (drone.has_zoom || drone.camera_class === "K3" || drone.camera_class === "K4") {
        score += weight("zoom_preferred", 8);
        reasons.push("zoom/detailvaatluse vajadus on kaetud");
      } else {
        warnings.push("zoom/detailvaatluse vajadus võib jääda nõrgaks");
      }
    }

    const thermalWantedAsPreference = answers.useCases.some((uc) => useCaseRequirements(uc).thermal_preferred);
    if (thermalWantedAsPreference && drone.has_thermal) {
      score += weight("thermal_preferred", 12);
      reasons.push("termokaamera annab otsingu või öövaatluse jaoks lisaväärtust");
    }
    if (derived.thermalRequired && !drone.has_thermal) {
      score += weight("penalty_missing_thermal_when_required", -30);
    }

    if (derived.nightVisionRequired) {
      if (hasNightCapability(drone)) {
        score += weight("night_vision_match", 18);
        reasons.push("öö-/hämaras vaatlusvõime on kaetud");
      } else {
        score += weight("penalty_missing_night_capability_when_required", -30);
        warnings.push("öövaatluse võime puudub või on kataloogis märkimata");
      }
    }

    if (answers.professionalAllowed && isProfessionalScope(drone)) {
      score += weight("professional_allowed_match", 6);
      reasons.push("kasutaja lubas professionaalsemad mudelid");
    }

    if (derived.preferredFpvTypes.size > 0) {
      if (drone.fpv_type && derived.preferredFpvTypes.has(drone.fpv_type)) {
        score += weight("fpv_type_match", 20);
        reasons.push("FPV-tüübi poolest sobiv valik");
      } else if (selectedUseCases.has("fpv_sport")) {
        score += weight("penalty_fpv_sport_non_fpv", -35);
        warnings.push("FPV spordi jaoks ei ole see põhilahendus");
      } else if (selectedUseCases.has("fpv_beginner")) {
        warnings.push("FPV algõppe jaoks võib vaja minna prille/pulti või teist platvormi");
      }
    }

    if (answers.obstacleAvoidancePreferred && hasUsableObstacleAvoidance(drone)) {
      score += weight("obstacle_avoidance_preferred", 8);
      reasons.push("takistuste vältimine toetab algaja ja jälgimisvõtete kasutust");
    }

    return { score, reasons, warnings };
  }

  function recommendationGroup(drone, answers, derived, excludedReasons) {
    if (excludedReasons.length > 0) return "excluded";

    if (answers.useCases.includes("fpv_sport")) {
      const preferred = drone.fpv_type && derived.preferredFpvTypes.has(drone.fpv_type);
      if (!preferred) return "secondary";
    }

    const matches = answers.useCases.filter((uc) => (drone.recommended_use_cases || []).includes(uc)).length;
    if (answers.useCases.length >= 3 && matches <= 1) return "secondary";

    return "primary";
  }

  function recommendAll(catalogData, answers) {
    const derived = mergeDerivedRequirements(answers);
    return catalogData.drones.map((drone) => {
      const excludedReasons = hardFilter(drone, answers, derived);
      const partial = scoreDrone(drone, answers, derived);
      const group = recommendationGroup(drone, answers, derived, excludedReasons);
      const maxReasonableScore = 190;
      const scorePercent = Math.max(0, Math.min(100, Math.round((partial.score / maxReasonableScore) * 100)));
      return {
        drone,
        group,
        score: partial.score,
        scorePercent,
        reasons: partial.reasons,
        warnings: partial.warnings,
        excludedReasons,
        derived
      };
    }).sort((a, b) => {
      const groupOrder = { primary: 0, secondary: 1, excluded: 2 };
      if (groupOrder[a.group] !== groupOrder[b.group]) return groupOrder[a.group] - groupOrder[b.group];
      return b.score - a.score;
    });
  }

  function recommendedResults(results, limit = 6) {
    const primary = results.filter((r) => r.group === "primary").slice(0, limit);
    const secondary = results.filter((r) => r.group === "secondary").slice(0, Math.max(0, limit - primary.length));
    return [...primary, ...secondary];
  }

  function getAnswersFromForm() {
    const checkedUseCases = Array.from(document.querySelectorAll('input[name="useCase"]:checked')).map((input) => input.value);
    return {
      useCases: checkedUseCases,
      maxPriceBand: maxPriceBandSelect.value,
      strictPriceBand: strictPriceBandSelect.value === "true",
      weightPreference: weightPreferenceSelect.value,
      minWindClass: minWindClassSelect.value,
      cameraTypePreference: cameraTypePreferenceSelect.value,
      minCameraClass: cameraTypeToMinimumClass(cameraTypePreferenceSelect.value) || "auto",
      thermalRequired: thermalRequiredInput.checked,
      nightVisionRequired: nightVisionRequiredInput.checked,
      zoomPreferred: zoomPreferredInput.checked,
      obstacleAvoidancePreferred: obstacleAvoidancePreferredInput.checked,
      professionalAllowed: professionalAllowedInput.checked,
      userLevel: userLevelSelect.value
    };
  }

  function setAnswersToForm(answers) {
    document.querySelectorAll('input[name="useCase"]').forEach((input) => {
      input.checked = answers.useCases.includes(input.value);
    });
    maxPriceBandSelect.value = answers.maxPriceBand || "any";
    strictPriceBandSelect.value = String(Boolean(answers.strictPriceBand));
    weightPreferenceSelect.value = answers.weightPreference || "any";
    minWindClassSelect.value = answers.minWindClass || "auto";
    cameraTypePreferenceSelect.value = answers.cameraTypePreference || legacyCameraClassToType(answers.minCameraClass) || "auto";
    thermalRequiredInput.checked = Boolean(answers.thermalRequired);
    nightVisionRequiredInput.checked = Boolean(answers.nightVisionRequired);
    zoomPreferredInput.checked = Boolean(answers.zoomPreferred);
    obstacleAvoidancePreferredInput.checked = Boolean(answers.obstacleAvoidancePreferred);
    professionalAllowedInput.checked = Boolean(answers.professionalAllowed);
    userLevelSelect.value = answers.userLevel || "beginner";
  }

  function answersToParams(answers) {
    const params = new URLSearchParams();
    if (answers.useCases.length) params.set("u", answers.useCases.join(","));
    params.set("b", answers.maxPriceBand || "any");
    params.set("strict", answers.strictPriceBand ? "1" : "0");
    params.set("w", answers.weightPreference || "any");
    params.set("wind", answers.minWindClass || "auto");
    params.set("camtype", answers.cameraTypePreference || "auto");
    params.set("thermal", answers.thermalRequired ? "1" : "0");
    params.set("night", answers.nightVisionRequired ? "1" : "0");
    params.set("zoom", answers.zoomPreferred ? "1" : "0");
    params.set("obs", answers.obstacleAvoidancePreferred ? "1" : "0");
    params.set("pro", answers.professionalAllowed ? "1" : "0");
    params.set("level", answers.userLevel || "beginner");
    return params;
  }

  function paramsToAnswers() {
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) return { ...defaultAnswers, useCases: [...defaultAnswers.useCases] };
    return {
      useCases: (params.get("u") || "").split(",").filter(Boolean),
      maxPriceBand: params.get("b") || "any",
      strictPriceBand: params.get("strict") === "1",
      weightPreference: params.get("w") || "any",
      minWindClass: params.get("wind") || "auto",
      cameraTypePreference: params.get("camtype") || legacyCameraClassToType(params.get("cam")) || "auto",
      minCameraClass: params.get("cam") || "auto",
      thermalRequired: params.get("thermal") === "1",
      nightVisionRequired: params.get("night") === "1",
      zoomPreferred: params.get("zoom") === "1",
      obstacleAvoidancePreferred: params.get("obs") !== "0",
      professionalAllowed: params.get("pro") === "1",
      userLevel: params.get("level") || "beginner"
    };
  }

  function updateUrl(answers) {
    const params = answersToParams(answers);
    const nextUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", nextUrl);
  }

  function formatPrice(drone) {
    const price = drone.public_price;
    const band = dronePriceBand(drone);
    const bandLabel = labelFrom(catalog.price_bands, band, drone.price_band_label_et || "—");
    if (price?.amount) return `${price.amount} ${price.currency || ""} · ${bandLabel}`;
    return bandLabel;
  }

  function formatWeight(drone) {
    const cls = labelFrom(catalog.weight_classes, drone.weight_class, drone.weight_class || "—");
    if (typeof drone.weight_g === "number") return `${drone.weight_g} g · ${cls}`;
    return cls;
  }

  function formatWind(drone) {
    const label = labelFrom(catalog.wind_classes, drone.wind_class, drone.wind_class || "—");
    if (typeof drone.wind_resistance_ms === "number") return `${drone.wind_resistance_ms} m/s · ${label}`;
    return label;
  }

  function formatCamera(drone) {
    return cameraTypeListLabel(drone);
  }

  function sourceSummary(drone) {
    const refs = Array.isArray(drone.source_refs) ? drone.source_refs.slice(0, 3) : [];
    if (!refs.length) return "Allikaviide puudub kataloogikirjes.";
    return refs.map((ref) => {
      const label = escapeHtml(ref.label || "allikas");
      const note = ref.note ? ` — ${escapeHtml(ref.note)}` : "";
      const accessed = ref.accessed ? `, kontrollitud ${escapeHtml(ref.accessed)}` : "";
      if (ref.url) return `<a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener noreferrer">${label}</a>${note}${accessed}`;
      return `${label}${note}${accessed}`;
    }).join("<br>");
  }

  function renderResultCard(result) {
    const { drone } = result;
    const groupClass = result.group === "secondary" ? "secondary-group" : "primary-group";
    const reasons = result.reasons.slice(0, 5).map((reason) => `<li>${escapeHtml(reason)}</li>`).join("");
    const warnings = result.warnings.slice(0, 4).map((warning) => `<li>${escapeHtml(warning)}</li>`).join("");
    const pros = (drone.pros_et || []).slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const cons = (drone.cons_et || []).slice(0, 2).map((item) => `<li>${escapeHtml(item)}</li>`).join("");

    return `
      <article class="result-card ${groupClass}">
        <div class="result-top">
          <div class="result-title">
            <h3>${escapeHtml(drone.brand)} ${escapeHtml(drone.model)}</h3>
            <p>${escapeHtml(drone.kit || "baaskomplekt")}</p>
          </div>
          <div class="score-pill">${result.scorePercent}%</div>
        </div>
        <div class="meta-grid">
          <div class="meta-item"><span class="meta-label">Hind</span><span class="meta-value">${escapeHtml(formatPrice(drone))}</span></div>
          <div class="meta-item"><span class="meta-label">Kaal</span><span class="meta-value">${escapeHtml(formatWeight(drone))}</span></div>
          <div class="meta-item"><span class="meta-label">Kaamera</span><span class="meta-value">${escapeHtml(formatCamera(drone))}</span></div>
          <div class="meta-item"><span class="meta-label">Tuul</span><span class="meta-value">${escapeHtml(formatWind(drone))}</span></div>
        </div>
        <p class="card-note"><strong>Kaamera:</strong> ${escapeHtml(drone.camera_summary || "kirjeldus puudub")}</p>
        ${hasNightCapability(drone) && drone.night_vision_summary ? `<p class="card-note"><strong>Öö/hämarus:</strong> ${escapeHtml(drone.night_vision_summary)}</p>` : ""}
        ${drone.zoom_summary ? `<p class="card-note"><strong>Zoom:</strong> ${escapeHtml(drone.zoom_summary)}</p>` : ""}
        ${drone.controller_note_et ? `<p class="card-note"><strong>Juhtpult:</strong> ${escapeHtml(drone.controller_note_et)}</p>` : ""}
        ${drone.regulatory_note_et ? `<p class="card-note"><strong>Regulatiivne märkus:</strong> ${escapeHtml(drone.regulatory_note_et)}</p>` : ""}
        ${reasons ? `<p class="card-note"><strong>Miks sobib:</strong></p><ul class="reason-list">${reasons}</ul>` : ""}
        ${warnings ? `<p class="card-note"><strong>Tähelepanu:</strong></p><ul class="warning-list">${warnings}</ul>` : ""}
        ${pros ? `<p class="card-note"><strong>Plussid:</strong></p><ul class="reason-list">${pros}</ul>` : ""}
        ${cons ? `<p class="card-note"><strong>Miinused:</strong></p><ul class="warning-list">${cons}</ul>` : ""}
        <p class="card-note"><strong>Allikad kataloogis:</strong><br>${sourceSummary(drone)}</p>
      </article>
    `;
  }

  function renderComparisonTable(results) {
    comparisonTableBody.innerHTML = results.map((r) => {
      const d = r.drone;
      const firstReason = r.reasons[0] || r.warnings[0] || "—";
      return `
        <tr>
          <td><strong>${escapeHtml(d.brand)} ${escapeHtml(d.model)}</strong></td>
          <td>${escapeHtml(d.kit || "—")}</td>
          <td>${r.scorePercent}%</td>
          <td>${escapeHtml(formatPrice(d))}</td>
          <td>${escapeHtml(formatWeight(d))}</td>
          <td>${escapeHtml(formatCamera(d))}</td>
          <td>${escapeHtml(formatWind(d))}</td>
          <td>${escapeHtml(firstReason)}</td>
        </tr>
      `;
    }).join("");
  }

  function renderExcluded(results) {
    const excluded = results.filter((r) => r.group === "excluded");
    if (!excluded.length) {
      excludedList.innerHTML = `<p class="card-note">Ühtegi mudelit ei välistatud.</p>`;
      return;
    }
    excludedList.innerHTML = excluded.map((r) => `
      <div class="excluded-item">
        <strong>${escapeHtml(r.drone.brand)} ${escapeHtml(r.drone.model)} — ${escapeHtml(r.drone.kit || "")}</strong>
        <span>${escapeHtml(r.excludedReasons.join("; "))}</span>
      </div>
    `).join("");
  }

  function renderSummary(answers, results, derived) {
    const selectedUseCases = answers.useCases.map((uc) => labelFrom(catalog.use_cases, uc)).join(", ");
    const primaryCount = results.filter((r) => r.group === "primary").length;
    const secondaryCount = results.filter((r) => r.group === "secondary").length;
    const excludedCount = results.filter((r) => r.group === "excluded").length;
    const priceLabel = labelFrom(catalog.price_bands, answers.maxPriceBand, answers.maxPriceBand === "any" ? "hinnalage ei määratud" : answers.maxPriceBand);
    summaryBox.innerHTML = `
      <strong>Valiku kokkuvõte.</strong> Kasutusviisid: ${escapeHtml(selectedUseCases || "valimata")}. Hinnapiir: ${escapeHtml(priceLabel)}. Tuletatud miinimumnõuded: kaamera ${escapeHtml(cameraRequirementLabel(derived))}, tuul ${escapeHtml(derived.minWindClass || "kasutusviisi põhjal")}${derived.thermalRequired ? ", thermal kohustuslik" : ""}${derived.nightVisionRequired ? ", öö-/hämaras vaatlus kohustuslik" : ""}${derived.panorama360Required ? ", 360° panoraamkaamera kohustuslik" : ""}${derived.zoomPreferred ? ", zoom eelistatud" : ""}${answers.professionalAllowed ? ", professionaalsemad mudelid lubatud" : ""}. Leitud: ${primaryCount} põhisoovitust, ${secondaryCount} lisasoovitust, ${excludedCount} välistatud mudelit.
    `;
  }

  function renderRegulatoryNote(answers, results) {
    const top = recommendedResults(results, 3);
    const hasOver250 = top.some((r) => !isUnder250g(r.drone));
    const hasCamera = top.some((r) => r.drone.camera_class && r.drone.camera_class !== "K0");
    const hasFpv = answers.useCases.some((uc) => uc.startsWith("fpv_"));
    const hasThermal = answers.thermalRequired || answers.useCases.includes("thermal_inspection");
    const hasNight = answers.nightVisionRequired || answers.useCases.includes("night_observation") || top.some((r) => hasNightCapability(r.drone));
    const hasProfessional = answers.professionalAllowed || top.some((r) => isProfessionalScope(r.drone));
    const notes = [];
    if (hasCamera) notes.push("kaameraga drooni puhul arvesta käitaja registreerimise ja privaatsusega");
    if (hasOver250) notes.push("üle 250 g drooniga kaasneb suurem regulatiivne koormus");
    if (hasFpv) notes.push("FPV-prillidega lennates tuleb VLOS tagada näiteks vaatlejaga");
    if (hasThermal) notes.push("termokaamera kasutus võib tõstatada täiendavaid privaatsuse ja andmetöötluse küsimusi");
    if (hasNight) notes.push("öö- või hämaras vaatlus vajab eriti hoolikat privaatsuse, VLOS-i ja õhuruumipiirangute kontrolli");
    if (hasProfessional) notes.push("professionaalsema drooniga kaasneb suurem regulatiivne, kindlustus- ja ohutusriskide hindamise vajadus");
    if (!notes.length) notes.push("kontrolli enne lendamist kohalikke õhuruumipiiranguid, VLOS-nõuet ja 120 m üldist kõrguspiiri");
    regulatoryBox.innerHTML = `<strong>Regulatiivne meeldetuletus.</strong> ${escapeHtml(notes.join("; "))}.`;
  }

  function renderResults() {
    const answers = getAnswersFromForm();
    if (!answers.useCases.length) {
      resultsList.innerHTML = `<div class="notice">Vali vähemalt üks kasutusviis, et soovitused oleksid mõistlikud.</div>`;
      comparisonTableBody.innerHTML = "";
      summaryBox.innerHTML = "Vali kasutusviisid ja nõuded.";
      regulatoryBox.innerHTML = "";
      return;
    }

    const allResults = recommendAll(catalog, answers);
    const derived = allResults[0]?.derived || mergeDerivedRequirements(answers);
    const shown = recommendedResults(allResults, 6);

    updateUrl(answers);
    renderSummary(answers, allResults, derived);
    renderRegulatoryNote(answers, allResults);

    const primary = shown.filter((r) => r.group === "primary");
    const secondary = shown.filter((r) => r.group === "secondary");
    let html = "";
    if (primary.length) html += `<div class="group-label">Põhisoovitused</div>${primary.map(renderResultCard).join("")}`;
    if (secondary.length) html += `<div class="group-label">Lisasoovitused</div>${secondary.map(renderResultCard).join("")}`;
    if (!shown.length) html = `<div class="notice">Valitud filtritega ei jäänud alles sobivaid droone. Proovi tõsta hinnalage, lubada üle 250 g droone või langetada kaameranõuet.</div>`;
    resultsList.innerHTML = html;
    renderComparisonTable(shown);
    renderExcluded(allResults);

    window.__lastDroneSelectorResult = { answers, derived, shown, allResults, generatedAt: new Date().toISOString() };
  }

  function populateSelects() {
    maxPriceBandSelect.innerHTML = `<option value="any">hinnalage ei määra</option>` + catalog.price_bands.map((band) => `<option value="${escapeHtml(band.id)}">${escapeHtml(band.label_et)}</option>`).join("");
    minWindClassSelect.innerHTML = `<option value="auto">automaatne kasutusviisi põhjal</option>` + catalog.wind_classes.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.id)} — ${escapeHtml(item.label_et)}</option>`).join("");
    cameraTypePreferenceSelect.innerHTML = `<option value="auto">automaatne kasutusviisi põhjal</option>` + cameraTypeOptions().map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label_et)}</option>`).join("");
  }

  function populateUseCases() {
    useCaseGrid.innerHTML = catalog.use_cases.map((useCase) => {
      const req = useCaseRequirements(useCase.id);
      const noteParts = [];
      if (req.camera_min) noteParts.push(`kaamera: vähemalt ${cameraClassFriendlyLabel(req.camera_min)}`);
      if (req.preferred_wind) noteParts.push(`tuul ${req.preferred_wind}`);
      if (req.thermal_required) noteParts.push("thermal kohustuslik");
      if (req.night_vision_required) noteParts.push("öö-/hämarvõime");
      if (req.zoom_preferred) noteParts.push("zoom eelistatud");
      const note = noteParts.join(" · ") || "eritingimusi ei lisandu";
      return `
        <label class="choice-card">
          <input type="checkbox" name="useCase" value="${escapeHtml(useCase.id)}" />
          <span>
            <span class="choice-title">${escapeHtml(useCase.label_et)}</span>
            <span class="choice-note">${escapeHtml(note)}</span>
          </span>
        </label>
      `;
    }).join("");
  }

  function initMeta() {
    const count = Array.isArray(catalog.drones) ? catalog.drones.length : 0;
    const status = catalog.data_status_label || `Andmed ${catalog.catalog_version || "2026-09"} seisuga`;
    dataStatusBadge.textContent = status;
    catalogMeta.textContent = `${count} drooni/komplekti · kataloog ${catalog.catalog_version || "—"} · kontroll ${catalog.last_reviewed || "—"}`;
    appVersionEl.textContent = appVersion;
  }

  function copyShareLink() {
    const answers = getAnswersFromForm();
    const params = answersToParams(answers);
    const link = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard?.writeText(link).then(() => {
      copyLinkBtn.textContent = "Link kopeeritud";
      setTimeout(() => copyLinkBtn.textContent = "Kopeeri jagatav link", 1600);
    }).catch(() => {
      window.prompt("Kopeeri link:", link);
    });
  }

  function downloadResultJson() {
    const result = window.__lastDroneSelectorResult || { answers: getAnswersFromForm(), generatedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `droonivaliku-tulemus-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function resetForm() {
    setAnswersToForm({ ...defaultAnswers, useCases: [...defaultAnswers.useCases] });
    renderResults();
  }

  function bindEvents() {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      renderResults();
    });

    form.addEventListener("change", renderResults);
    resetBtn.addEventListener("click", resetForm);
    copyLinkBtn.addEventListener("click", copyShareLink);
    downloadBtn.addEventListener("click", downloadResultJson);
  }

  function init() {
    if (!catalog || !rules) {
      document.body.innerHTML = "<p>Rakenduse andmeid ei õnnestunud laadida. Kontrolli, et data/drones.js ja data/rules.js oleksid olemas.</p>";
      return;
    }
    initMeta();
    populateSelects();
    populateUseCases();
    setAnswersToForm(paramsToAnswers());
    bindEvents();
    renderResults();
  }

  window.DroneSelector = {
    recommendAll,
    recommendedResults,
    getAnswersFromForm,
    renderResults
  };

  init();
})();
