/**
 * Multiple all items in array by 10.
 */

function multipleArrayByTen(ar) {
  return ar.map(item => {
    return item*10
  })
}

const assert = require("assert");
assert.deepStrictEqual(multipleArrayByTen([15, 25, 40]), [150, 250, 400]);
assert.deepStrictEqual(multipleArrayByTen([0, 0, 0]), [0, 0, 0]);
assert.deepStrictEqual(multipleArrayByTen([30, 3, 0.3]), [300, 30, 3]);
