/**
 * Transform given array to object with next format:
 * transform(["js", "html", "css"]) => { js: true, html: true, css: true }
 */
function transform(arr) {
  const arrays = arr.map(item => {
    return [item, true]
  })
  const map = new Map(arrays);
  const obj = Object.fromEntries(map);
  return obj
}

const assert = require("assert");
assert.deepStrictEqual(transform(["js", "html", "css"]), {
  js: true,
  html: true,
  css: true
});
assert.deepStrictEqual(transform([]), {});
