/**
 * Find count of strings with length longer or equal than 5 characters.
 */

function findLongerFive(ar) {
  return ar.filter(item => {
    return item.length >= 5
  }).length
}

const assert = require("assert");
const internal = require("stream");
assert.strictEqual(findLongerFive(["abc", "aaa", "dfa"]), 0);
assert.strictEqual(findLongerFive(["abcde", "aaa", "dfa zxc"]), 2);
assert.strictEqual(findLongerFive(["abcqe", "aaaqe", "dfaqe"]), 3);
