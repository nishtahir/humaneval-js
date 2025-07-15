const assert = require('assert');

//// BEGIN - PROMPT
/**
 * You are given an array of integers.
 * Write a function next_smallest() that returns the 2nd smallest element of the array.
 * Return null if there is no such element.
 *
 * next_smallest([1, 2, 3, 4, 5]) === 2
 * next_smallest([5, 1, 4, 3, 2]) === 2
 * next_smallest([]) === null
 * next_smallest([1, 1]) === null
 */
//// BEGIN - CANONICAL SOLUTION
function next_smallest(lst) {
    const unique = Array.from(new Set(lst));
    unique.sort((a, b) => a - b);
    return unique.length < 2 ? null : unique[1];
}
//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([1, 2, 3, 4, 5]), 2);
    assert.strictEqual(candidate([5, 1, 4, 3, 2]), 2);
    assert.strictEqual(candidate([]), null);
    assert.strictEqual(candidate([1, 1]), null);
    assert.strictEqual(candidate([1, 1, 1, 1, 0]), 1);
    assert.strictEqual(candidate([1, 0**0]), null);
    assert.strictEqual(candidate([-35, 34, 12, -45]), -35);

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true);
}
//// BEGIN - CHECK
check(next_smallest);