/**
 * From given url get video id
 */
function getVideoId(s) {
  // code here
}

const assert = require("assert");
assert.strictEqual(
  getVideoId("https://www.youtube.com/watch?v=7r5n2NJJAYs"),
  "7r5n2NJJAYs"
);
assert.strictEqual(getVideoId("https://youtu.be/7r5n2NJJAYs"), "7r5n2NJJAYs");
