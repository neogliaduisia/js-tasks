/**
 * Add given `strumber` argument to the given array `arr`
 * If strumber is a string - append it, if a number - prepend
 */
function uOrP(arr, strumber) {
  // code
}

const assert = require("assert");
const a1 = uOrP(["abc"], "def");
assert.strictEqual(a1.indexOf("def"), 1);
const a2 = uOrP(["abc"], 123);
assert.strictEqual(a2.indexOf(123), 0);
