/**
 * Remove all non-alphanumerical symbols in given string
 */
function alphanumerize(s) {
  return s.replace(/[^a-z0-9+]+/gi, '')
}

const assert = require("assert");
assert.strictEqual(alphanumerize("SoMe#$&, valueAble!! st!ring"), "SoMevalueAblestring");
assert.strictEqual(alphanumerize("100% profit"), "100profit");
