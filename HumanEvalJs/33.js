'use strict';
const assert = require('assert');

//// BEGIN - PROMPT
/**
 * This function takes an array l and returns a new array l' such that
 * l' is identical to l at indices not divisible by three, while its values
 * at indices divisible by three are equal to the values of the corresponding
 * indices of l, but sorted.
 * @param {number[]} l
 * @returns {number[]}
 * @example
 * sortThird([1, 2, 3]); // [1, 2, 3]
 * sortThird([5, 6, 3, 4, 8, 9, 2]); // [2, 6, 3, 4, 8, 9, 5]
 */
function sortThird(l) {
  BEGIN - CANONICAL SOLUTION
  const result = l.slice();
  const elems = [];
  for (let i = 0; i < result.length; i += 3) {
    elems.push(result[i]);
  }
  elems.sort((a, b) => a - b);
  let idx = 0;
  for (let i = 0; i < result.length; i += 3) {
    result[i] = elems[idx++];
  }
  return result;
}

//// BEGIN - TEST
const METADATA = {};

function check(candidate) {
  assert.deepStrictEqual(candidate([1, 2, 3]), sortThird([1, 2, 3]));
  assert.deepStrictEqual(candidate([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]), sortThird([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]));
  assert.deepStrictEqual(candidate([5, 8, -12, 4, 23, 2, 3, 11, 12, -10]), sortThird([5, 8, -12, 4, 23, 2, 3, 11, 12, -10]));
  assert.deepStrictEqual(candidate([5, 6, 3, 4, 8, 9, 2]), [2, 6, 3, 4, 8, 9, 5]);
  assert.deepStrictEqual(candidate([5, 8, 3, 4, 6, 9, 2]), [2, 8, 3, 4, 6, 9, 5]);
  assert.deepStrictEqual(candidate([5, 6, 9, 4, 8, 3, 2]), [2, 6, 9, 4, 8, 3, 5]);
  assert.deepStrictEqual(candidate([5, 6, 3, 4, 8, 9, 2, 1]), [2, 6, 3, 4, 8, 9, 5, 1]);
}

//// BEGIN - CHECK
check(sortThird);