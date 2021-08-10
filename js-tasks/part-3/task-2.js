/**
 * Replace all ` `(space) characters with `_`(underscore)
 * in given string and force string to lower case.
 */
function underscoreCase(s) {
  return s.split(' ').join('_').toLowerCase()
}

const assert = require("assert");
assert.strictEqual(underscoreCase("SoMe valueAble string"), "some_valueable_string");
assert.strictEqual(underscoreCase("1 1 1 1 1"), "1_1_1_1_1");
