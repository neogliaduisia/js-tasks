/**
 * From given url get video id
 */
function getVideoId(url) {
  return url.substring(url.includes('v=') ? (url.lastIndexOf('=') + 1) : (url.lastIndexOf('/') + 1))
}

const assert = require("assert");
assert.strictEqual(
  getVideoId("https://www.youtube.com/watch?v=7r5n2NJJAYs"),
  "7r5n2NJJAYs"
);
assert.strictEqual(getVideoId("https://youtu.be/7r5n2NJJAYs"), "7r5n2NJJAYs");
