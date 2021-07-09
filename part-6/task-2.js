/*
  Filter out strings that doesn't contain  any uppercase letter
*/

function filterOutWithoutUpper(array) {
  // code here
};

const assert = require("assert");
assert.deepStrictEqual(
  filterOutWithoutUpper(['string', 'String', 'lorem lorem', 'Lorem lorem lorem']),
  ['String', 'Lorem lorem lorem']
);
assert.deepStrictEqual(
  filterOutWithoutUpper(['Abc', 'asd', 'Test', 'Qwer', 'Yqwer', 'ppp']),
  ['Abc', 'Test', 'Qwer', 'Yqwer']
);
