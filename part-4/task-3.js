/**
 * Translate coma-separated `query` string using `dictionary`
 */

const dictionary = {
  "towel": "полотенце",
  "dry": "сухой",
  "water": "вода",
  "sun": "солнце",
  "room": "комната",
  "pen": "ручка",
  "ability": "способность",
}

function getTranslation(query) {
  // code
}

const assert = require("assert");
assert.strictEqual(getTranslation("dry, room, ability"), "сухой, комната, способность");
assert.strictEqual(getTranslation("pen, sun, towel"), "ручка, солнце, полотенце");
