//// BEGIN - PROMPT
/**
 * Given an array of non-negative integers, return a copy of the given array after sorting,
 * you will sort the given array in ascending order if the sum( first index value, last index value) is odd,
 * or sort it in descending order if the sum( first index value, last index value) is even.
 *
 * Note:
 *  * don't change the given array.
 *
 * Examples:
 *  * sortArray([]) => []
 *  * sortArray([5]) => [5]
 *  * sortArray([2, 4, 3, 0, 1, 5]) => [0, 1, 2, 3, 4, 5]
 *  * sortArray([2, 4, 3, 0, 1, 5, 6]) => [6, 5, 4, 3, 2, 1, 0]
 */

function sortArray(array) {
    //// BEGIN - CANONICAL SOLUTION
    if (array.length === 0) return [];
    const reverse = (array[0] + array[array.length - 1]) % 2 === 0;
    const copy = array.slice();
    return copy.sort((a, b) => reverse ? b - a : a - b);
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate([]), []);
    assert.deepStrictEqual(candidate([5]), [5]);
    assert.deepStrictEqual(candidate([2, 4, 3, 0, 1, 5]), [0, 1, 2, 3, 4, 5]);
    assert.deepStrictEqual(candidate([2, 4, 3, 0, 1, 5, 6]), [6, 5, 4, 3, 2, 1, 0]);

    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(candidate([2, 1]), [1, 2]);
    assert.deepStrictEqual(candidate([15, 42, 87, 32, 11, 0]), [0, 11, 15, 32, 42, 87]);
    assert.deepStrictEqual(candidate([21, 14, 23, 11]), [23, 21, 14, 11]);
}

//// BEGIN - CHECK
check(sortArray);