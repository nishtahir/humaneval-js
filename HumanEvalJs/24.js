//// BEGIN - PROMPT
/**
 * For a given number n, find the largest number that divides n evenly, smaller than n
 * @param {number} n
 * @returns {number}
 * @example
 * largestDivisor(15); // 5
 */
function largestDivisor(n) {
//// BEGIN - CANONICAL SOLUTION
  for (let i = n - 1; i >= 1; i--) {
    if (n % i === 0) {
      return i;
    }
  }
}

//// BEGIN - TEST
const METADATA = {
  author: 'jt',
  dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
  assert.strictEqual(candidate(3), 1);
  assert.strictEqual(candidate(7), 1);
  assert.strictEqual(candidate(10), 5);
  assert.strictEqual(candidate(100), 50);
  assert.strictEqual(candidate(49), 7);
}

//// BEGIN - CHECK
check(largestDivisor);