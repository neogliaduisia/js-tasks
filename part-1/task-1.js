/**
 * Find count of strings containing "a" letter
 */
function findAllA(ar) {
  return ar.filter(item => item.includes('a')).length
}
const assert = require("assert");
assert.strictEqual(findAllA(["abc", "aaa", "dfa"]), 3);
assert.strictEqual(findAllA(["abc", "ccc", "dfa"]), 2);
assert.strictEqual(findAllA(["qbc", "ccc", "dfq"]), 0);
