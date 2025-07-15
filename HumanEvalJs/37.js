//// BEGIN - PROMPT
/**
 * This function takes an array l and returns a new array such that
 * elements at odd indices remain the same, while elements at even indices
 * are sorted among themselves.
 * @param {number[]} l
 * @returns {number[]}
 * @example
 * sort_even([1, 2, 3]); // [1, 2, 3]
 * sort_even([5, 6, 3, 4]); // [3, 6, 5, 4]
 */
function sort_even(l) {
    const evens = [];
    const odds = [];
    for (let i = 0; i < l.length; i++) {
        if (i % 2 === 0) {
            evens.push(l[i]);
        } else {
            odds.push(l[i]);
        }
    }
    evens.sort((a, b) => a - b);
    const ans = [];
    const minLen = Math.min(evens.length, odds.length);
    for (let i = 0; i < minLen; i++) {
        ans.push(evens[i], odds[i]);
    }
    if (evens.length > odds.length) {
        ans.push(evens[evens.length - 1]);
    }
    return ans;
}
//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    assert.deepStrictEqual(candidate([1, 2, 3]), [1, 2, 3]);
    assert.deepStrictEqual(candidate([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]), [-10, 3, -5, 2, -3, 3, 5, 0, 9, 1, 123]);
    assert.deepStrictEqual(candidate([5, 8, -12, 4, 23, 2, 3, 11, 12, -10]), [-12, 8, 3, 4, 5, 2, 12, 11, 23, -10]);
}
//// BEGIN - CHECK
check(sort_even);