/**
 * Convert all items in given array to boolean
 */
function convertToBool(arr) {
  return arr.map(item => {
    return Boolean(item)
  })
}

const assert = require("assert");
assert.deepStrictEqual(convertToBool(["qwe", true, 123]), [true, true, true]);
assert.deepStrictEqual(convertToBool([true, false, 0]), [true, false, false]);
assert.deepStrictEqual(convertToBool([undefined, false, null, NaN]), [false, false, false, false]);
