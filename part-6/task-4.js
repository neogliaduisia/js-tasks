/*
  Check if all elements in array are strings
*/

function checkIfElementsStrings(array) {
  // code here
};

const assert = require("assert");
assert.strictEqual(
  checkIfElementsStrings(['s']),
  true
);
assert.strictEqual(
  checkIfElementsStrings(['string1', 'string2', 'string3', 'string4']),
  true
);
assert.strictEqual(
  checkIfElementsStrings(['string1', 'string2', 'string3', 1]),
  false
);
assert.strictEqual(
  checkIfElementsStrings([{}, 2, 'str']),
  false
);
