//// BEGIN - PROMPT
/**
 * Write a function countNums which takes an array of integers and returns
 * the number of elements which has a sum of digits > 0.
 * If a number is negative, then its first signed digit will be negative:
 * e.g. -123 has signed digits -1, 2, and 3.
 */
function digitsSum(n) {
  let neg = 1;
  if (n < 0) {
    n = -n;
    neg = -1;
  }
  const digits = Array.from(String(n), Number);
  digits[0] *= neg;
  return digits.reduce((sum, d) => sum + d, 0);
}

/* @param {number[]} arr
 * @returns {number}
 *
 * @example
 * countNums([]) === 0
 * @example
 * countNums([-1, 11, -11]) === 1
 * @example
 * countNums([1, 1, 2]) === 3
 */
function countNums(arr) {
//// BEGIN - CANONICAL SOLUTION
  return arr.map(digitsSum).filter(x => x > 0).length;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

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
check(countNums);