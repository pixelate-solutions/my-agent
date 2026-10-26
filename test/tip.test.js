import { test } from "node:test";
import assert from "node:assert/strict";
import { tipFor, splitBill } from "../src/tip.js";

test("18% tip on $50", () => {
  assert.equal(tipFor(50), 9);
});

test("20% tip on $50", () => {
  assert.equal(tipFor(50, 20), 10);
});

test("20% tip on $24.99 rounds to $5", () => {
  assert.equal(tipFor(24.99, 20), 5);
});

test("split $120 four ways", () => {
  assert.deepEqual(splitBill(120, 4, 20), { tip: 24, perPerson: 36 });
});
