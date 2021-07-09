/**
 * Return array without item with given `id`
 * **Warning!** There could be items without `id` field,
 * filter them out as well.
 */

function removeItemById(ar, id) {
  // code
}

const assert = require("assert");
assert.deepStrictEqual(removeItemById([{
    id: 45,
    name: 'Forty Five'
  },
  {
    id: 23,
    name: 'Twenty Three'
  },
  {
    id: 15,
    name: 'Fifteen'
  },
], 45), [{
    id: 23,
    name: 'Twenty Three'
  },
  {
    id: 15,
    name: 'Fifteen'
  }
])
assert.deepStrictEqual(removeItemById([{
    id: 45,
    name: 'Forty Five'
  },
  {
    name: 'Twenty Three'
  },
  {
    id: 15,
    name: 'Fifteen'
  },
], 15), [{
  id: 45,
  name: 'Forty Five'
}])
