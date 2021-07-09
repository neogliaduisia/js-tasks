/**
 * Find the array with the maximum element through given arrays
 */

function findMaxArray(ar) {
  // code
}

const assert = require("assert");
assert.deepStrictEqual(findMaxArray([[1, 7, 15], [-5, 28, 35], [4, 5, 0]]), [
  -5,
  28,
  35
]);
assert.deepStrictEqual(
  findMaxArray([[0, 3, -15], [89, 128, 135], [1004, 50, 0.5]]),
  [1004, 50, 0.5]
);
