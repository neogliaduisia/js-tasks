/**
 * Find the maximum element through given arrays
 */

function findMax(ar) {
  return Math.max.apply(Math, ar.flat())
}

const assert = require("assert");
assert.strictEqual(findMax([[1, 7, 15], [-5, 28, 35], [4, 5, 0]]), 35);
assert.strictEqual(
  findMax([[0, 3, -15], [89, 128, 135], [1004, 50, 0.5]]),
  1004
);
