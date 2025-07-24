//// BEGIN - PROMPT
/**
 * Given an array of numbers, return whether or not they are sorted
 * in ascending order. If array has more than 1 duplicate of the same
 * number, return false. Assume no negative numbers and only integers.
 *
 * Examples:
 * isSorted([5]) => true
 * isSorted([1, 2, 3, 4, 5]) => true
 * isSorted([1, 3, 2, 4, 5]) => false
 * isSorted([1, 2, 3, 4, 5, 6]) => true
 * isSorted([1, 2, 3, 4, 5, 6, 7]) => true
 * isSorted([1, 3, 2, 4, 5, 6, 7]) => false
 * isSorted([1, 2, 2, 3, 3, 4]) => true
 * isSorted([1, 2, 2, 2, 3, 4]) => false
 */
function isSorted(lst) {
//// BEGIN - CANONICAL SOLUTION
  const countDigit = {};
  for (const i of lst) {
    countDigit[i] = 0;
  }

  for (const i of lst) {
    countDigit[i]++;
  }

  for (const i of lst) {
    if (countDigit[i] > 2) {
      return false;
    }
  }
  
  for (let index = 1; index < lst.length; index++) {
    if (lst[index - 1] > lst[index]) {
      return false;
    }
  }
  return true;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
  // Check some simple cases
  assert.strictEqual(candidate([5]), true);
  assert.strictEqual(candidate([1, 2, 3, 4, 5]), true);
  assert.strictEqual(candidate([1, 3, 2, 4, 5]), false);
  assert.strictEqual(candidate([1, 2, 3, 4, 5, 6]), true);
  assert.strictEqual(candidate([1, 2, 3, 4, 5, 6, 7]), true);
  assert.strictEqual(candidate([1, 3, 2, 4, 5, 6, 7]), false, "This prints if this assert fails 1 (good for debugging!)");
  assert.strictEqual(candidate([]), true, "This prints if this assert fails 2 (good for debugging!)");
  assert.strictEqual(candidate([1]), true, "This prints if this assert fails 3 (good for debugging!)");
  assert.strictEqual(candidate([3, 2, 1]), false, "This prints if this assert fails 4 (good for debugging!)");

  // Check some edge cases that are easy to work out by hand.
  assert.strictEqual(candidate([1, 2, 2, 2, 3, 4]), false, "This prints if this assert fails 5 (good for debugging!)");
  assert.strictEqual(candidate([1, 2, 3, 3, 3, 4]), false, "This prints if this assert fails 6 (good for debugging!)");
  assert.strictEqual(candidate([1, 2, 2, 3, 3, 4]), true, "This prints if this assert fails 7 (good for debugging!)");
  assert.strictEqual(candidate([1, 2, 3, 4]), true, "This prints if this assert fails 8 (good for debugging!)");
}

//// BEGIN - CHECK
check(isSorted);