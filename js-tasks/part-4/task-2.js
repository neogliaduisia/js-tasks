/**
 * Find sum of all odd numbers in given array.
 */

function findSumOfOdd(ar) {
  const a = ar.filter(item => {
    return item % 2
  })
  return a.reduce((prev, curr) => {
    return prev + curr
  })
}

const assert = require("assert");
assert.strictEqual(findSumOfOdd([15, 25, 40]), 40);
assert.strictEqual(findSumOfOdd([100, 50, 20]), 0);
assert.strictEqual(findSumOfOdd([30, 3, 5]), 8);
