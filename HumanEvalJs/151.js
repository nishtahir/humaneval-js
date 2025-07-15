//// BEGIN - PROMPT
/**
 * Given a list of numbers, return the sum of squares of the numbers
 * in the list that are odd. Ignore numbers that are negative or not integers.
 *
 * double_the_difference([1, 3, 2, 0]) == 1 + 9 + 0 + 0 = 10
 * double_the_difference([-1, -2, 0]) == 0
 * double_the_difference([9, -2]) == 81
 * double_the_difference([0]) == 0
 *
 * If the input list is empty, return 0.
 *
 * @param {number[]} lst
 * @returns {number}
 */
//// BEGIN - CANONICAL SOLUTION
function double_the_difference(lst) {
    return lst
        .filter(i => Number.isInteger(i) && i > 0 && i % 2 !== 0)
        .reduce((sum, i) => sum + i * i, 0);
}
//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    assert.strictEqual(candidate([]), 0, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate([5, 4]), 25, "This prints if this assert fails 2 (good for debugging!)");
    assert.strictEqual(candidate([0.1, 0.2, 0.3]), 0, "This prints if this assert fails 3 (good for debugging!)");
    assert.strictEqual(candidate([-10, -20, -30]), 0, "This prints if this assert fails 4 (good for debugging!)");
    assert.strictEqual(candidate([-1, -2, 8]), 0, "This prints if this assert fails 5 (also good for debugging!)");
    assert.strictEqual(candidate([0.2, 3, 5]), 34, "This prints if this assert fails 6 (also good for debugging!)");
    const lst = [];
    for (let i = -99; i < 100; i += 2) {
        lst.push(i);
    }
    const odd_sum = lst
        .filter(i => i % 2 !== 0 && i > 0)
        .reduce((s, i) => s + i * i, 0);
    assert.strictEqual(candidate(lst), odd_sum, "This prints if this assert fails 7 (good for debugging!)");
}
//// BEGIN - CHECK
check(double_the_difference);