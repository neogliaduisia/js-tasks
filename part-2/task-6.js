/**
 * Filter OUT all the items that are NOT integers
 */

function filterOutNotIntegers(ar) {
  return ar.filter(item => {
    return typeof item !== 'string'
  })
}

const assert = require("assert");
assert.deepStrictEqual(filterOutNotIntegers(["abc", 15, 245]), [15, 245]);
assert.deepStrictEqual(filterOutNotIntegers([3, "145", "dfa zxc"]), [3]);
assert.deepStrictEqual(filterOutNotIntegers([]), []);
