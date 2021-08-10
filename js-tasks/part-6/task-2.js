/*
  Filter out strings that doesn't contain  any uppercase letter
*/

function filterOutWithoutUpper(array) {
  const isUpperCase = string => /[A-Z]/.test(string);
  return array.filter(item => {
    return isUpperCase(item.toString())
  })
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
