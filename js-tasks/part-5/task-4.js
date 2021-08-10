/**
 * Generate new array based on given one
 * which should contain only first element
 * 
 * Notice that nested array has been changed,
 * compare to previous task.
 */
function getFirst2(arr) {
  return arr[0]
}

const assert = require("assert");
const a1 = [
  [3, 5, 7],
  [1, 4, 8],
  [2, 5, 9],
]
const a2 = getFirst2(a1)
assert.notDeepStrictEqual(a1, [
  [3, 5, 7],
  [1, 4, 8],
  [2, 5, 9],
])
assert.deepStrictEqual(a2, [3, 1, 2])
