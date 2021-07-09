/**
 * Transform given array to object with next format:
 * transform(["js", "html", "css"]) => { js: true, html: true, css: true }
 */
function transform(arr) {
  // code here
}

const assert = require("assert");
assert.deepStrictEqual(transform(["js", "html", "css"]), {
  js: true,
  html: true,
  css: true
});
assert.deepStrictEqual(transform([]), {});
