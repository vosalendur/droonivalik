/*
  Kaheastmeline droonisoovituse mootor:
  1) välistavad filtrid
  2) sobivuse skoorimine

  Sobib kasutamiseks Next.js / React / TypeScript rakenduses.
  Eeldab kataloogi formaati, kus droonid asuvad väljal catalog.drones.
  Andmete lähteversioon: drones.json, 2026-09 seis.
*/

export type PriceBand = "under_350" | "350_700" | "700_1500" | "1500_5000" | "over_5000";
export type WeightPreference = "any" | "prefer_under_250g" | "require_under_250g" | "over_250g_ok";
export type WindClass = "T0" | "T1" | "T2" | "T3" | "T4";
export type CameraClass = "K0" | "K1" | "K2" | "K3" | "K4";
export type ResultGroup = "primary" | "secondary" | "excluded";

export type UseCaseId =
  | "child_learning"
  | "fpv_beginner"
  | "fpv_sport"
  | "family_video"
  | "travel"
  | "youtube"
  | "property_monitoring"
  | "mapping_hobby"
  | "thermal_inspection"
  | "night_observation"
  | "hiking_nature"
  | "subject_tracking"
  | "real_estate_hobby"
  | "stem_programming"
  | "indoor_practice"
  | "search_private_land";

export interface DroneCatalog {
  catalog_version?: string;
  last_reviewed?: string;
  data_status_label?: string;
  drones: Drone[];
}

export interface Drone {
  id: string;
  brand: string;
  model: string;
  kit?: string;
  scope?: string;
  include_by_default?: boolean;
  public_price?: {
    amount?: number | null;
    currency?: string;
    price_band?: PriceBand;
    note?: string;
  };
  price_band?: PriceBand;
  price_band_label_et?: string;
  weight_g?: number | null;
  weight_class?: string;
  wind_class?: WindClass;
  wind_resistance_ms?: number | null;
  camera_class?: CameraClass;
  camera_summary?: string;
  has_zoom?: boolean;
  zoom_summary?: string;
  has_thermal?: boolean;
  fpv_type?: string;
  beginner_friendly?: boolean;
  travel_friendly?: boolean;
  obstacle_avoidance?: string;
  has_obstacle_avoidance?: boolean;
  recommended_use_cases?: UseCaseId[];
  avoid_if?: UseCaseId[];
  pros_et?: string[];
  cons_et?: string[];
  source_refs?: Array<{
    label: string;
    url?: string;
    accessed?: string;
    note?: string;
  }>;
}

export interface UserAnswers {
  /** Kasutaja võib valida mitu kasutusviisi. */
  useCases: UseCaseId[];

  /** Tõlgenda seda vaikimisi kui hinnalage, mitte täpset hinnavahemikku. */
  maxPriceBand?: PriceBand;

  /** Kui true, siis priceBand käsitletakse täpse vahemikuna, mitte ülempiirina. */
  strictPriceBand?: boolean;

  weightPreference?: WeightPreference;
  minWindClass?: WindClass;
  minCameraClass?: CameraClass;

  /** Kui true, jäävad alles ainult termokaameraga droonid. */
  thermalRequired?: boolean;

  /** Kui true, saab zoom sobivusskooris lisakaalu. */
  zoomPreferred?: boolean;

  /** Kui true, saab takistuste vältimine lisakaalu. */
  obstacleAvoidancePreferred?: boolean;

  /** Kasutaja oskustase võimalike tekstide jaoks. */
  userLevel?: "beginner" | "intermediate" | "advanced";
}

export interface Recommendation {
  drone: Drone;
  group: ResultGroup;
  score: number;
  scorePercent: number;
  reasons: string[];
  warnings: string[];
  excludedReasons: string[];
}

const PRICE_ORDER: PriceBand[] = ["under_350", "350_700", "700_1500", "1500_5000", "over_5000"];
const WIND_ORDER: WindClass[] = ["T0", "T1", "T2", "T3", "T4"];
const CAMERA_ORDER: CameraClass[] = ["K0", "K1", "K2", "K3", "K4"];

const SCORE = {
  useCaseMatch: 40,
  budgetMatch: 25,
  cameraMatch: 20,
  weightMatch: 15,
  windMatch: 10,
  beginnerFriendly: 10,
  travelFriendly: 10,
  zoomPreferred: 8,
  thermalPreferred: 12,
  fpvTypeMatch: 20,
  obstacleAvoidancePreferred: 8,
  penaltyMissingThermalWhenRequired: -30,
  penaltyOver250gWhenPreferred: -20,
  penaltyCameraBelowMinimum: -25,
  penaltyAboveBudget: -35,
  penaltyUnsuitableUseCase: -15,
  penaltyFpvSportNonFpv: -35
};

const USE_CASE_REQUIREMENTS: Record<UseCaseId, Partial<{
  cameraMin: CameraClass;
  preferredWind: WindClass;
  thermalRequired: boolean;
  thermalPreferred: boolean;
  zoomPreferred: boolean;
  travelFriendlyRequired: boolean;
  beginnerFriendlyRequired: boolean;
  preferredFpvTypes: string[];
}>> = {
  child_learning: { cameraMin: "K0", preferredWind: "T0", beginnerFriendlyRequired: true },
  fpv_beginner: { cameraMin: "K0", preferredWind: "T0", preferredFpvTypes: ["fpv_beginner_kit", "fpv_tiny_whoop", "fpv_cinewhoop", "casual_fpv_optional", "casual_fpv_with_goggles"] },
  fpv_sport: { cameraMin: "K0", preferredWind: "T2", preferredFpvTypes: ["fpv_sport", "fpv_tiny_whoop"] },
  family_video: { cameraMin: "K1", preferredWind: "T1" },
  travel: { cameraMin: "K1", preferredWind: "T2", travelFriendlyRequired: true },
  youtube: { cameraMin: "K2", preferredWind: "T2" },
  property_monitoring: { cameraMin: "K2", preferredWind: "T3", zoomPreferred: true },
  mapping_hobby: { cameraMin: "K2", preferredWind: "T2" },
  thermal_inspection: { cameraMin: "K4", thermalRequired: true, preferredWind: "T2" },
  night_observation: { cameraMin: "K4", thermalRequired: true, preferredWind: "T2" },
  hiking_nature: { cameraMin: "K1", preferredWind: "T2" },
  subject_tracking: { cameraMin: "K1", preferredWind: "T2" },
  real_estate_hobby: { cameraMin: "K2", preferredWind: "T2", zoomPreferred: true },
  stem_programming: { cameraMin: "K0", preferredWind: "T0" },
  indoor_practice: { cameraMin: "K0", preferredWind: "T0" },
  search_private_land: { cameraMin: "K3", preferredWind: "T3", thermalPreferred: true }
};

function orderIndex<T extends string>(order: T[], value?: T): number {
  if (!value) return -1;
  return order.indexOf(value);
}

function dronePriceBand(drone: Drone): PriceBand | undefined {
  return drone.public_price?.price_band ?? drone.price_band;
}

function isAtOrBelowPrice(droneBand: PriceBand | undefined, maxBand: PriceBand | undefined): boolean {
  if (!maxBand || !droneBand) return true;
  return orderIndex(PRICE_ORDER, droneBand) <= orderIndex(PRICE_ORDER, maxBand);
}

function isAtOrAboveWind(droneClass: WindClass | undefined, minClass: WindClass | undefined): boolean {
  if (!minClass || !droneClass) return true;
  return orderIndex(WIND_ORDER, droneClass) >= orderIndex(WIND_ORDER, minClass);
}

function isAtOrAboveCamera(droneClass: CameraClass | undefined, minClass: CameraClass | undefined): boolean {
  if (!minClass || !droneClass) return true;
  return orderIndex(CAMERA_ORDER, droneClass) >= orderIndex(CAMERA_ORDER, minClass);
}

function isUnder250g(drone: Drone): boolean {
  if (typeof drone.weight_g === "number") return drone.weight_g < 250;
  return drone.weight_class === "under_250g";
}

function mergeDerivedRequirements(answers: UserAnswers): Required<Pick<UserAnswers, "thermalRequired" | "zoomPreferred">> & {
  minCameraClass: CameraClass;
  minWindClass?: WindClass;
  preferredFpvTypes: Set<string>;
  needsBeginnerFriendly: boolean;
  needsTravelFriendly: boolean;
} {
  let minCameraClass: CameraClass = answers.minCameraClass ?? "K0";
  let minWindClass = answers.minWindClass;
  let thermalRequired = Boolean(answers.thermalRequired);
  let zoomPreferred = Boolean(answers.zoomPreferred);
  const preferredFpvTypes = new Set<string>();
  let needsBeginnerFriendly = answers.userLevel === "beginner";
  let needsTravelFriendly = false;

  for (const useCase of answers.useCases) {
    const req = USE_CASE_REQUIREMENTS[useCase];
    if (!req) continue;

    if (req.cameraMin && orderIndex(CAMERA_ORDER, req.cameraMin) > orderIndex(CAMERA_ORDER, minCameraClass)) {
      minCameraClass = req.cameraMin;
    }
    if (req.preferredWind && (!minWindClass || orderIndex(WIND_ORDER, req.preferredWind) > orderIndex(WIND_ORDER, minWindClass))) {
      minWindClass = req.preferredWind;
    }
    if (req.thermalRequired) thermalRequired = true;
    if (req.zoomPreferred) zoomPreferred = true;
    if (req.beginnerFriendlyRequired) needsBeginnerFriendly = true;
    if (req.travelFriendlyRequired) needsTravelFriendly = true;
    for (const fpvType of req.preferredFpvTypes ?? []) preferredFpvTypes.add(fpvType);
  }

  return { thermalRequired, zoomPreferred, minCameraClass, minWindClass, preferredFpvTypes, needsBeginnerFriendly, needsTravelFriendly };
}

function hardFilter(drone: Drone, answers: UserAnswers, derived: ReturnType<typeof mergeDerivedRequirements>): string[] {
  const excluded: string[] = [];
  const selectedUseCases = new Set(answers.useCases);

  if (drone.scope && drone.scope !== "consumer") {
    excluded.push("ei ole tarbijaklassi droon");
  }

  // Thermal/enterprise droonid võivad kataloogis olla vaikimisi peidetud.
  // Kui kasutaja valis thermal, öövaatluse või oma maa-ala otsingu, lubame need tagasi.
  const specialNeed = derived.thermalRequired || selectedUseCases.has("thermal_inspection") || selectedUseCases.has("night_observation") || selectedUseCases.has("search_private_land");
  if (drone.include_by_default === false && !specialNeed) {
    excluded.push("eriotstarbeline/enterprise mudel, mida ei näidata vaikimisi tavatarbija valikus");
  }

  if (derived.thermalRequired && !drone.has_thermal) {
    excluded.push("kasutaja valis termokaamera, kuid mudelil puudub thermal");
  }

  if (answers.maxPriceBand) {
    const band = dronePriceBand(drone);
    if (answers.strictPriceBand) {
      if (band !== answers.maxPriceBand) excluded.push("ei kuulu valitud hinnavahemikku");
    } else if (!isAtOrBelowPrice(band, answers.maxPriceBand)) {
      excluded.push("ületab kasutaja valitud hinnalage");
    }
  }

  if (answers.weightPreference === "require_under_250g" && !isUnder250g(drone)) {
    excluded.push("kasutaja nõudis kuni 250 g klassi");
  }

  if (!isAtOrAboveCamera(drone.camera_class, derived.minCameraClass)) {
    excluded.push(`kaameraklass ${drone.camera_class ?? "puudub"} jääb alla nõude ${derived.minCameraClass}`);
  }

  return excluded;
}

function scoreDrone(drone: Drone, answers: UserAnswers, derived: ReturnType<typeof mergeDerivedRequirements>): Omit<Recommendation, "drone" | "group" | "scorePercent" | "excludedReasons"> {
  let score = 0;
  const reasons: string[] = [];
  const warnings: string[] = [];
  const selectedUseCases = new Set(answers.useCases);
  const droneUseCases = new Set(drone.recommended_use_cases ?? []);
  const avoidIf = new Set(drone.avoid_if ?? []);

  const matchingUseCases = answers.useCases.filter((uc) => droneUseCases.has(uc));
  if (matchingUseCases.length > 0) {
    score += SCORE.useCaseMatch;
    reasons.push(`sobib valitud kasutusviisiga: ${matchingUseCases.join(", ")}`);
  } else if (answers.useCases.length > 0) {
    score += SCORE.penaltyUnsuitableUseCase;
    warnings.push("mudeli soovitatud kasutus ei kattu hästi valitud kasutusviisiga");
  }

  const unsuitableUseCases = answers.useCases.filter((uc) => avoidIf.has(uc));
  if (unsuitableUseCases.length > 0) {
    score += SCORE.penaltyUnsuitableUseCase;
    warnings.push(`kataloog märgib selle mudeli ebasobivaks: ${unsuitableUseCases.join(", ")}`);
  }

  if (isAtOrBelowPrice(dronePriceBand(drone), answers.maxPriceBand)) {
    score += SCORE.budgetMatch;
    reasons.push("mahub valitud hinnaklassi või hinnalae alla");
  } else {
    score += SCORE.penaltyAboveBudget;
    warnings.push("ületab valitud hinnalage");
  }

  if (isAtOrAboveCamera(drone.camera_class, derived.minCameraClass)) {
    score += SCORE.cameraMatch;
    reasons.push(`täidab kaameranõude ${derived.minCameraClass}`);
  } else {
    score += SCORE.penaltyCameraBelowMinimum;
    warnings.push(`kaamera jääb alla nõude ${derived.minCameraClass}`);
  }

  if (answers.weightPreference === "prefer_under_250g" || answers.weightPreference === "require_under_250g") {
    if (isUnder250g(drone)) {
      score += SCORE.weightMatch;
      reasons.push("kuni 250 g klass lihtsustab algaja/reisi kasutust");
    } else {
      score += SCORE.penaltyOver250gWhenPreferred;
      warnings.push("üle 250 g droon; regulatiivne ja praktiline koormus on suurem");
    }
  } else if (answers.weightPreference === "over_250g_ok") {
    score += SCORE.weightMatch;
    reasons.push("kasutaja lubas üle 250 g klassi");
  }

  if (isAtOrAboveWind(drone.wind_class, derived.minWindClass)) {
    score += SCORE.windMatch;
    if (derived.minWindClass) reasons.push(`täidab tuuleklassi ${derived.minWindClass} või parem`);
  } else if (derived.minWindClass) {
    warnings.push(`tuuleklass ${drone.wind_class ?? "puudub"} võib jääda alla soovitud taseme ${derived.minWindClass}`);
  }

  if (derived.needsBeginnerFriendly && drone.beginner_friendly) {
    score += SCORE.beginnerFriendly;
    reasons.push("algajasõbralik valik");
  }

  if (derived.needsTravelFriendly && drone.travel_friendly) {
    score += SCORE.travelFriendly;
    reasons.push("sobib hästi reisile kaasa võtmiseks");
  }

  if (derived.zoomPreferred) {
    if (drone.has_zoom || drone.camera_class === "K3" || drone.camera_class === "K4") {
      score += SCORE.zoomPreferred;
      reasons.push("zoom/detailvaatluse vajadus on kaetud");
    } else {
      warnings.push("zoom/detailvaatluse vajadus võib jääda nõrgaks");
    }
  }

  const thermalWantedAsPreference = answers.useCases.some((uc) => USE_CASE_REQUIREMENTS[uc]?.thermalPreferred);
  if (thermalWantedAsPreference && drone.has_thermal) {
    score += SCORE.thermalPreferred;
    reasons.push("termokaamera annab otsingu/öövaatluse jaoks lisaväärtust");
  }
  if (derived.thermalRequired && !drone.has_thermal) {
    score += SCORE.penaltyMissingThermalWhenRequired;
  }

  if (derived.preferredFpvTypes.size > 0) {
    if (drone.fpv_type && derived.preferredFpvTypes.has(drone.fpv_type)) {
      score += SCORE.fpvTypeMatch;
      reasons.push("FPV-tüübi poolest sobiv valik");
    } else if (selectedUseCases.has("fpv_sport")) {
      score += SCORE.penaltyFpvSportNonFpv;
      warnings.push("FPV spordi jaoks ei ole see põhilahendus");
    } else if (selectedUseCases.has("fpv_beginner")) {
      warnings.push("FPV algõppe jaoks võib vaja minna prille/pulti või teist platvormi");
    }
  }

  if (answers.obstacleAvoidancePreferred && drone.has_obstacle_avoidance) {
    score += SCORE.obstacleAvoidancePreferred;
    reasons.push("takistuste vältimine toetab algaja ja jälgimisvõtete kasutust");
  }

  return { score, reasons, warnings };
}

export function recommendDrones(catalog: DroneCatalog, answers: UserAnswers, limit = 5): Recommendation[] {
  const derived = mergeDerivedRequirements(answers);

  const recommendations = catalog.drones.map((drone) => {
    const excludedReasons = hardFilter(drone, answers, derived);
    const partial = scoreDrone(drone, answers, derived);

    let group: ResultGroup = excludedReasons.length > 0 ? "excluded" : "primary";

    // FPV sport on erijuhtum: mitte-FPV mudelid võivad jääda lisasoovituseks,
    // mitte põhisoovituseks, kui nad ei ole juba kõva filtri tõttu välja jäetud.
    if (group === "primary" && answers.useCases.includes("fpv_sport")) {
      const preferred = drone.fpv_type && derived.preferredFpvTypes.has(drone.fpv_type);
      if (!preferred) group = "secondary";
    }

    // Kui kasutaja valib mitu kasutusviisi, kuid mudel katab ainult väikese osa neist,
    // võib selle lükata lisasoovituseks.
    const matches = answers.useCases.filter((uc) => drone.recommended_use_cases?.includes(uc)).length;
    if (group === "primary" && answers.useCases.length >= 3 && matches <= 1) {
      group = "secondary";
    }

    const maxReasonableScore = 166; // positiivsete punktide ligikaudne lagi koos FPV/thermal lisadega
    const scorePercent = Math.max(0, Math.min(100, Math.round((partial.score / maxReasonableScore) * 100)));

    return {
      drone,
      group,
      score: partial.score,
      scorePercent,
      reasons: partial.reasons,
      warnings: partial.warnings,
      excludedReasons
    } satisfies Recommendation;
  });

  const primary = recommendations
    .filter((r) => r.group === "primary")
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const secondary = recommendations
    .filter((r) => r.group === "secondary")
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(0, limit - primary.length));

  return [...primary, ...secondary];
}

export function recommendWithExcluded(catalog: DroneCatalog, answers: UserAnswers): Recommendation[] {
  const derived = mergeDerivedRequirements(answers);
  return catalog.drones
    .map((drone) => {
      const excludedReasons = hardFilter(drone, answers, derived);
      const partial = scoreDrone(drone, answers, derived);
      const group: ResultGroup = excludedReasons.length > 0 ? "excluded" : "primary";
      const maxReasonableScore = 166;
      return {
        drone,
        group,
        score: partial.score,
        scorePercent: Math.max(0, Math.min(100, Math.round((partial.score / maxReasonableScore) * 100))),
        reasons: partial.reasons,
        warnings: partial.warnings,
        excludedReasons
      } satisfies Recommendation;
    })
    .sort((a, b) => {
      if (a.group !== b.group) return a.group === "excluded" ? 1 : -1;
      return b.score - a.score;
    });
}
