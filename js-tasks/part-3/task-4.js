/**
 * Filter out all Booleans from array
 */
function filterOutBools(arr) {
  return arr.filter(item => {
    return typeof item !== 'boolean'
  })
}

const assert = require("assert");
assert.deepStrictEqual(filterOutBools(["qwe", true, 123]), ["qwe", 123]);
assert.deepStrictEqual(filterOutBools([true, false, 0]), [0]);
assert.deepStrictEqual(filterOutBools([undefined, false, null]), [undefined, null]);