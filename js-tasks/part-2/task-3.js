/**
 * Find sum of numbers in given array.
 */

function findSumOfArray(ar) {
  return ar.reduce((prev, next) => {
    return prev + next
  }, 0)
}

const assert = require("assert");
assert.strictEqual(findSumOfArray([15, 25, 40]), 80);
assert.strictEqual(findSumOfArray([0, 0, 0]), 0);
assert.strictEqual(findSumOfArray([30, 3, 0.3]), 33.3);
