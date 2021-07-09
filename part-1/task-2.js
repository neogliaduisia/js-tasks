/**
 * Remove all `1` characters from string
 */
function removeOne(s) {
    return s.replace(/1/g, "")
}

const assert = require("assert");
assert.strictEqual(removeOne("sdkj1kjnj"), "sdkjkjnj");
assert.strictEqual(removeOne("jsndv 1ansdj 1001"), "jsndv ansdj 00");
assert.strictEqual(removeOne("1111111111"), "");
