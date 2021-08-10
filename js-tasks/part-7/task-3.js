/**
 * Convert all items in given array to numbers, omit letters
 */
function convertToNumber(arr) {
  return arr.map(item => {
    return Number(item.match(/\d/g).join(''))
  })
}

const assert = require("assert");
assert.deepStrictEqual(convertToNumber(["146", "128aa", "zxc145"]), [
  146,
  128,
  145
]);
assert.deepStrictEqual(
  convertToNumber(["146zxcqwe", "!?sss128aa", "zxc145fbdb"]),
  [146, 128, 145]
);
assert.deepStrictEqual(
  convertToNumber(["dferh;//146", "zsdddcv128aa", "zxc1 45*()*"]),
  [146, 128, 145]
);
