const assert = require('assert');

//// BEGIN - PROMPT

//// BEGIN - CANONICAL SOLUTION
function digits_sum(n) {
  let neg = 1;
  if (n < 0) {
    n = -n;
    neg = -1;
  }
  const digits = Array.from(String(n), Number);
  digits[0] *= neg;
  return digits.reduce((sum, d) => sum + d, 0);
}

/**
 * Write a function count_nums which takes an array of integers and returns
 * the number of elements which has a sum of digits > 0.
 * If a number is negative, then its first signed digit will be negative:
 * e.g. -123 has signed digits -1, 2, and 3.
 *
 * @param {number[]} arr
 * @returns {number}
 *
 * @example
 * count_nums([]) === 0
 * @example
 * count_nums([-1, 11, -11]) === 1
 * @example
 * count_nums([1, 1, 2]) === 3
 */
function count_nums(arr) {
  return arr.map(digits_sum).filter(x => x > 0).length;
}

//// BEGIN - TEST
function check(candidate) {
  assert.strictEqual(candidate([]), 0);
  assert.strictEqual(candidate([-1, -2, 0]), 0);
  assert.strictEqual(candidate([1, 1, 2, -2, 3, 4, 5]), 6);
  assert.strictEqual(candidate([1, 6, 9, -6, 0, 1, 5]), 5);
  assert.strictEqual(candidate([1, 100, 98, -7, 1, -1]), 4);
  assert.strictEqual(candidate([12, 23, 34, -45, -56, 0]), 5);
  assert.strictEqual(candidate([-0, 1 ** 0]), 1);
  assert.strictEqual(candidate([1]), 1);

  assert.ok(true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(count_nums);