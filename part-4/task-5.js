/**
 * Find sum of all numbers from `n` down to 0
 * `sumUpTo(5) // 5 + 4 + 3 + 2 + 1 = 15`
 * 
 * Use recursion
 */

function sumUpTo(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const assert = require("assert");
assert.strictEqual(sumUpTo(5), 15);
assert.strictEqual(sumUpTo(25), 325);
assert.strictEqual(sumUpTo(255), 32640);
