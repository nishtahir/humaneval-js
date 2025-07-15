//// BEGIN - PROMPT
/**
 * Create a function that takes 3 numbers.
 * Returns true if one of the numbers is equal to the sum of the other two, and all numbers are integers.
 * Returns false in any other cases.
 *
 * Examples:
 * any_int(5, 2, 7) ➞ true
 * any_int(3, 2, 2) ➞ false
 * any_int(3, -2, 1) ➞ true
 * any_int(3.6, -2.2, 2) ➞ false
 */
function any_int(x, y, z) {
  if (Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(z)) {
    if (x + y === z || x + z === y || y + z === x) {
      return true;
    }
    return false;
  }
  return false;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
  // Check some simple cases
  assert.strictEqual(candidate(2, 3, 1), true, "This prints if this assert fails 1 (good for debugging!)");
  assert.strictEqual(candidate(2.5, 2, 3), false, "This prints if this assert fails 2 (good for debugging!)");
  assert.strictEqual(candidate(1.5, 5, 3.5), false, "This prints if this assert fails 3 (good for debugging!)");
  assert.strictEqual(candidate(2, 6, 2), false, "This prints if this assert fails 4 (good for debugging!)");
  assert.strictEqual(candidate(4, 2, 2), true, "This prints if this assert fails 5 (good for debugging!)");
  assert.strictEqual(candidate(2.2, 2.2, 2.2), false, "This prints if this assert fails 6 (good for debugging!)");
  assert.strictEqual(candidate(-4, 6, 2), true, "This prints if this assert fails 7 (good for debugging!)");

  // Check some edge cases that are easy to work out by hand.
  assert.strictEqual(candidate(2, 1, 1), true, "This prints if this assert fails 8 (also good for debugging!)");
  assert.strictEqual(candidate(3, 4, 7), true, "This prints if this assert fails 9 (also good for debugging!)");
  assert.strictEqual(candidate(3.0, 4, 7), false, "This prints if this assert fails 10 (also good for debugging!)");
}

//// BEGIN - CHECK
check(any_int);