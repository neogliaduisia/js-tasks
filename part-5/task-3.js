/**
 * Generate new array based on given one
 * which should contain only first element
 */
function getFirst1(arr) {
  // code
}

const assert = require("assert");
const a1 = [
  [3, 5, 7],
  [1, 4, 8],
  [2, 5, 9],
]
const a2 = getFirst1(a1)
assert.deepStrictEqual(a1, [
  [3, 5, 7],
  [1, 4, 8],
  [2, 5, 9],
])
assert.deepStrictEqual(a2, [3, 1, 2])
