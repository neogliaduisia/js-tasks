/**
 * Find value of key `z` in given object.
 */

function findValueOfZKey(obj) {
  return obj.z
}

const assert = require("assert");
assert.strictEqual(findValueOfZKey({ a: 1, b: 2, z: 3 }), 3);
assert.strictEqual(findValueOfZKey({ e: 1, c: 2 }), undefined);
