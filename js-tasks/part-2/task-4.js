/**
 * Work with frozen object. Imagine, you're working with redux state.
 * Return new object that has all fields of given object and
 * change `def` key to `654` and `ghi` key to `789`.
 *
 * Use object destructuring
 */

function changeObj(obj) {
  return Object.keys(obj)
}

const assert = require("assert");
const o1 = {
  abc: 123,
  def: 456,
  ghi: null
};
Object.freeze(o1);
const o2 = changeObj(o1);
assert.deepStrictEqual(o2, {
  abc: 123,
  def: 654,
  ghi: 789
});
assert.notStrictEqual(o1, o2);
