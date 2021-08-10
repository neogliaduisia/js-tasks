/**
 * Return a string that will list all object entries like
 * ===== KEY ===== // without underscores, uppercased
 * VALUE           // no changes
 * \n              // new line after each, but not after last one
 * ...
 */

function log(obj) {
  // code
}

const assert = require("assert");
assert.strictEqual(
  log({
    stripe_key: "2837fg28f7gmvm9v",
    node_env: "development",
    host: "http://localhost:3333"
  }),
  `===== STRIPE KEY =====
2837fg28f7gmvm9v

===== NODE ENV =====
development

===== HOST =====
http://localhost:3333`
);
