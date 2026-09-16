import { test } from "node:test";
import assert from "node:assert/strict";
import { tipFor, splitBill } from "../src/tip.js";

test("18% tip on $50", () => {
  assert.equal(tipFor(50), 9);
});

test("split $120 four ways", () => {
  assert.deepEqual(splitBill(120, 4, 20), { tip: 24, perPerson: 36 });
});
