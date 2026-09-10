import catalog from "./data/drones.json";
import { recommendDrones, type UserAnswers } from "./lib/scoring";

const answers: UserAnswers = {
  useCases: ["travel", "family_video", "youtube"],
  maxPriceBand: "700_1500",
  weightPreference: "prefer_under_250g",
  minWindClass: "T2",
  minCameraClass: "K2",
  thermalRequired: false,
  zoomPreferred: false,
  obstacleAvoidancePreferred: true,
  userLevel: "beginner"
};

const results = recommendDrones(catalog, answers, 5);

for (const r of results) {
  console.log(`${r.drone.brand} ${r.drone.model} — ${r.scorePercent}%`);
  console.log(r.reasons.slice(0, 3).join("; "));
}
