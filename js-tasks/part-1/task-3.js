/**
 * Get all object keys and filter out keys,
 * which have 3 characters or more
 */
function f(obj) {
    return Object.keys(obj).filter((item) => {
      if (item.length < 3) { 
        return item
      }
    } 
  )
}

const assert = require("assert");
assert.deepEqual(f({ longer: "123", sh: "145" }), ["sh"]);
assert.deepEqual(f({ lon: "123", sha: "145" }), []);
assert.deepEqual(f({ he: "123", sa: "145", mo: "sjndvjndsv" }), [
  "he",
  "sa",
  "mo"
]);
