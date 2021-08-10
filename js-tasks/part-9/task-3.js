/**
 * Reduce given number with numbers from pool given in 2nd argument
 * (starting from beginning of numPool array) unless number is > 0
 * or numPool is not empty.
 */

function reduceNum(num, numPool) {
  // code
}

const assert = require("assert");
assert.deepStrictEqual(reduceNum(100, [19, 37, 12, 67, 33, 42, 9, 7, 22]), -35);
assert.deepStrictEqual(reduceNum(647, [122, 67, 331, 42, 9, 7, 22]), 47);
