/**
 * Find count of items in given array `ar` that starts with
 * given character `char`
 */

function findCountStartWith(ar, char) {
  // code
}

const assert = require("assert");
assert.strictEqual(findCountStartWith(["abc", "aaa", "dfa"], "a"), 2);
assert.strictEqual(findCountStartWith(["", "qwe", "123"], ""), 3);
assert.strictEqual(findCountStartWith(["", "qwe", "123"], "3"), 0);
