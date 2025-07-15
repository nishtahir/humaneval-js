//// BEGIN - PROMPT
/**
 * Given a non-empty array of integers arr and an integer k, return
 * the sum of the elements with at most two digits from the first k elements of arr.
 *
 * Example:
 *   Input: arr = [111,21,3,4000,5,6,7,8,9], k = 4
 *   Output: 24 // sum of 21 + 3
 *
 * Constraints:
 *   1. 1 <= arr.length <= 100
 *   2. 1 <= k <= arr.length
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
//// BEGIN - CANONICAL SOLUTION
function addElements(arr, k) {
    return arr.slice(0, k)
        .filter(elem => String(elem).length <= 2)
        .reduce((sum, elem) => sum + elem, 0);
}
//// BEGIN - TEST
function check(candidate) {
    const assert = require('assert');
    // Check some simple cases
    assert.strictEqual(candidate([1, -2, -3, 41, 57, 76, 87, 88, 99], 3), -4);
    assert.strictEqual(candidate([111, 121, 3, 4000, 5, 6], 2), 0);
    assert.strictEqual(candidate([11, 21, 3, 90, 5, 6, 7, 8, 9], 4), 125);
    assert.strictEqual(candidate([111, 21, 3, 4000, 5, 6, 7, 8, 9], 4), 24, "This prints if this assert fails 1 (good for debugging!)");

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate([1], 1), 1, "This prints if this assert fails 2 (also good for debugging!)");
}
//// BEGIN - CHECK
check(addElements);