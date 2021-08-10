/**
 * Implement your own `flat` method (without optional depth argument)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */
function flat(arr) {
  // code here
}

const assert = require("assert");
assert.deepStrictEqual(flat([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(flat([1, [[[[[[[2]]]]]]], , , [3, 4]]), [1, 2, 3, 4]);
assert.deepStrictEqual(flat([, , , [[[[, , , ,]]]], , , , ,]), []);
