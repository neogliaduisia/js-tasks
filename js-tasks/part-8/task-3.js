/**
 * Transform given object to array with next format:
 * transformBack({ js: true, html: true, css: true }) => [
 *  { label: "javascript", value: "js" },
 *  { label: "hypertext markup language", value: "html" },
 *  { label: "cascading style sheets", value: "css" },
 * ]
 */

const dictionary = {
  js: "javascript",
  html: "hypertext markup language",
  css: "cascading style sheets"
};

function transformBack(obj) {
  let object = []
  for (const [key, value] of Object.entries(dictionary)) {
    object.push({ label: value, value: key })
  }
  return object
}

const assert = require("assert");
assert.deepStrictEqual(transformBack({ js: true, html: true, css: true }), [
  { label: "javascript", value: "js" },
  { label: "hypertext markup language", value: "html" },
  { label: "cascading style sheets", value: "css" }
]);
