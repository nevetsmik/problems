import { cakeThief, makeWeights } from "./cakeThief";

window.cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
  { weight: 1, value: 20 },
  { weight: 2, value: 16 },
];
window.capacity = 10;

window.cakeThief = cakeThief;
window.makeWeights = makeWeights;
