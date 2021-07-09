/**
 * Find last even number in given array `ar`
 */

function findLatestEven(ar) {
  let filter = ar.filter(item => {
    return item % 2 === 0
  })
  return filter[filter.length - 1]
}

const assert = require("assert");
assert.strictEqual(findLatestEven([10, 25, 40]), 40);
assert.strictEqual(findLatestEven([100, 50, 20]), 20);
assert.strictEqual(findLatestEven([30, 3, 5]), 30);
