/**
 * Find count of items in given array `ar` that starts with
 * given character `char`
 */

function findCountStartWith(ar, char) {
  let a = 0
  ar.map(item => {
    return item.indexOf(char) === 0 ? a = a + 1 : a
  })
  return a
}

const assert = require("assert");
assert.strictEqual(findCountStartWith(["abc", "aaa", "dfa"], "a"), 2);
assert.strictEqual(findCountStartWith(["", "qwe", "123"], ""), 3);
assert.strictEqual(findCountStartWith(["", "qwe", "123"], "3"), 0);
