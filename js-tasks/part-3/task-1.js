/**
 * Return from an array object which has `bird` key in it
 * Do no additional checks on parameters or key existance
 */

function findBird(ar) {
  return ar.find(item => {
    return item.bird
  })
}

const assert = require("assert");
assert.deepStrictEqual(findBird([{
    squirrel: true,
    tree: true,
    duplo: false
  },
  {
    bird: true,
    flower: true,
    sun: true
  }
]), {
  bird: true,
  flower: true,
  sun: true
});
assert.deepStrictEqual(findBird([{
    bird: false,
    oak: true,
    river: true
  },
  {
    qwe: 1,
    zxc: 2,
    asd: 3
  },
]), {
  bird: false,
  oak: true,
  river: true
});
assert.strictEqual(findBird([]), undefined)
