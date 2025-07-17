//// BEGIN - PROMPT
/**
 * A simple program which should return the value of x if n is
 * a prime number and should return the value of y otherwise.
 *
 * Examples:
 * for x_or_y(7, 34, 12) == 34
 * for x_or_y(15, 8, 5) == 5
 *
 * @param {number} n
 * @param {*} x
 * @param {*} y
 * @returns {*}
 */
function x_or_y(n, x, y) {
//// BEGIN - CANONICAL SOLUTION
  if (n === 1) {
    return y;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return y;
    }
  }
  return x;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
  // Check some simple cases
  assert.strictEqual(candidate(7, 34, 12), 34);
  assert.strictEqual(candidate(15, 8, 5), 5);
  assert.strictEqual(candidate(3, 33, 5212), 33);
  assert.strictEqual(candidate(1259, 3, 52), 3);
  assert.strictEqual(candidate(7919, -1, 12), -1);
  assert.strictEqual(candidate(3609, 1245, 583), 583);
  assert.strictEqual(candidate(91, 56, 129), 129);
  assert.strictEqual(candidate(6, 34, 1234), 1234);

  // Check some edge cases that are easy to work out by hand.
  assert.strictEqual(candidate(1, 2, 0), 0);
  assert.strictEqual(candidate(2, 2, 0), 2);
}

//// BEGIN - CHECK
check(x_or_y);