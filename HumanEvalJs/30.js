//// BEGIN - PROMPT
/**
 * Return only positive numbers in the list.
 * @param {number[]} l - array of numbers
 * @returns {number[]} filtered array containing only positive numbers
*
* @example
* getPositive([-1, 2, -4, 5, 6]); // [2, 5, 6]
* @example
* getPositive([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]); // [5, 3, 2, 3, 9, 123, 1]
*/
function getPositive(l) {
  return l.filter(e => e > 0);
}

//// BEGIN - TEST
const METADATA = {};

const assert = require('assert');

function check(candidate) {
  assert.deepStrictEqual(candidate([-1, -2, 4, 5, 6]), [4, 5, 6]);
  assert.deepStrictEqual(candidate([5, 3, -5, 2, 3, 3, 9, 0, 123, 1, -10]), [5, 3, 2, 3, 3, 9, 123, 1]);
  assert.deepStrictEqual(candidate([-1, -2]), []);
  assert.deepStrictEqual(candidate([]), []);
}

//// BEGIN - CHECK
check(getPositive);