/*
  Check if an array contains at least one object
*/

function checkIfHasObject(array) {
  return array.some(item => typeof item === 'object')
};

const assert = require("assert");
assert.strictEqual(
  checkIfHasObject([1, 'str', 2]),
  false
);
assert.strictEqual(
  checkIfHasObject([1, 2, 3, 4, 5]),
  false
);
assert.strictEqual(
  checkIfHasObject([1, 'str', {}]),
  true
);
assert.strictEqual(
  checkIfHasObject([{ test: 1 }, {}, 1, '1']),
  true
);
