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
  // code here
}

const assert = require("assert");
assert.deepStrictEqual(transformBack({ js: true, html: true, css: true }), [
  { label: "javascript", value: "js" },
  { label: "hypertext markup language", value: "html" },
  { label: "cascading style sheets", value: "css" }
]);
