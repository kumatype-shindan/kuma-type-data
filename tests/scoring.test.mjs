import assert from "node:assert/strict";
import { test } from "node:test";

import questions from "../data/questions.json" with { type: "json" };
import kumaTypes from "../data/kuma-types.json" with { type: "json" };
import {
  calculateKumaResultCode,
  getCompatibilityPair,
  getPrimaryCompatibleTypes,
} from "../src/scoring.mjs";

test("public package exposes 20 questions and 16 unique Kuma types", () => {
  assert.equal(questions.length, 20);
  assert.equal(kumaTypes.length, 16);
  assert.equal(new Set(kumaTypes.map((type) => type.code)).size, 16);
});

test("calculateKumaResultCode follows the published axis and tie rules", () => {
  assert.equal(calculateKumaResultCode(Array(20).fill(0), questions), "INFP");

  const extrovertedSensorThinkerPlanner = [
    2, 2, 2, -2, -2,
    2, 2, 2, -2, -2,
    2, 2, 2, -2, -2,
    2, 2, 2, -2, -2,
  ];

  assert.equal(calculateKumaResultCode(extrovertedSensorThinkerPlanner, questions), "ESTJ");
});

test("compatibility helper resolves direct matches with score details", () => {
  const intj = kumaTypes.find((type) => type.code === "INTJ");
  const primaryMatches = getPrimaryCompatibleTypes(intj, kumaTypes).map((type) => type.code);

  assert.deepEqual(primaryMatches, ["INFJ", "ENFP"]);

  const pair = getCompatibilityPair("INTJ", "INFJ", kumaTypes);
  assert.equal(pair.me.code, "INTJ");
  assert.equal(pair.you.code, "INFJ");
  assert.equal(pair.score, 96);
  assert.match(pair.headline, /自然に惹かれやすい/);
});
