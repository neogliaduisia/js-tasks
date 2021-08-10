/**
 * Reduce array of strings and concatenate numbers only
 * 
 * E.g. concatNumbers(["a74", "1b35"]) // "74135"
 */
function concatNumbers(arr) {
  return arr.map(item => {
    return item.replace(/[&\/\\#,+()$~%.'":;*?<>{}/a-z]/g, "")
  }).join('')
}

const assert = require("assert");
assert.strictEqual(concatNumbers(["a74", "1b35"]), "74135");
assert.strictEqual(concatNumbers(["pro", "zxc"]), "");
assert.strictEqual(concatNumbers(["980", ":;.,:"]), "980");
