/*
  Transform an array of string. If a strings length more than 5, reverse this string
*/

function reverseLongStrings(array) {
  // code here
};

const assert = require("assert");
assert.deepStrictEqual(
  reverseLongStrings(['123', '12345', '123456']),
  ['123', '12345', '654321']
);
assert.deepStrictEqual(
  reverseLongStrings(['asd', 'string', 'qwezxc']),
  ['asd', 'gnirts', 'cxzewq']
);