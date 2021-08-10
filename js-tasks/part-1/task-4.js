/**
 * Extend given object with key `some` and value `value`
 */
function f(obj) {
  return obj.some = 'value'
}

const assert = require("assert");
const o1 = { a: "123" };
const o2 = f(o1);
assert.strictEqual(o1, o2);
assert.strictEqual(o1.some, "value");

