//// BEGIN - PROMPT
/**
 * Write a function that returns true if the object q will fly, and false otherwise.
 * The object q will fly if it's balanced (it is a palindromic list) and the sum of its elements
 * is less than or equal to the maximum possible weight w.
 *
 * Example:
 * willItFly([1, 2], 5) ➞ false
 * // 1+2 is less than the maximum possible weight, but it's unbalanced.
 *
 * willItFly([3, 2, 3], 1) ➞ false
 * // it's balanced, but 3+2+3 is more than the maximum possible weight.
 *
 * willItFly([3, 2, 3], 9) ➞ true
 * // 3+2+3 is less than the maximum possible weight, and it's balanced.
 *
 * willItFly([3], 5) ➞ true
 * // 3 is less than the maximum possible weight, and it's balanced.
 */
function willItFly(q, w) {
//// BEGIN - CANONICAL SOLUTION
    if (q.reduce((a, b) => a + b, 0) > w) {
        return false;
    }
    let i = 0, j = q.length - 1;
    while (i < j) {
        if (q[i] !== q[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([3, 2, 3], 9), true);
    assert.strictEqual(candidate([1, 2], 5), false);
    assert.strictEqual(candidate([3], 5), true);
    assert.strictEqual(candidate([3, 2, 3], 1), false);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate([1, 2, 3], 6), false);
    assert.strictEqual(candidate([5], 5), true);
}

//// BEGIN - CHECK
check(willItFly);