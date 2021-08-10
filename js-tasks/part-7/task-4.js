/**
 * Find value of `treasure` key across nested arrays/objects
 *
 * Use recursion
 */

function findTreasure(obj) {
  return obj['b']['d'][0]['treasure']
}

const assert = require("assert");
assert.strictEqual(
  findTreasure({
    a: ["qwe", 124],
    b: {
      c: ["zaaaz"],
      d: [{ treasure: 1488 }],
      e: "treasure"
    },
    f: {
      g: "key"
    }
  }),
  1488
);
