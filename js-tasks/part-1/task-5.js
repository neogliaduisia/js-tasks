/**
 * Given array of string, make a single concatenated string
 * from them and make it uppercased
 */
function f(a) {
    return a.join('').toUpperCase()
}

const assert = require("assert");
assert.strictEqual(f(["abc", "def"]), "ABCDEF");
assert.strictEqual(f(["123", "zxc", "789"]), "123ZXC789");
