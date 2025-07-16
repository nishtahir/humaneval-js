//// BEGIN - PROMPT
/**
 * triplesSumToZero takes an array of integers as an input.
 * It returns true if there are three distinct elements in the array that
 * sum to zero, and false otherwise.
 *
 * Examples:
 *   triplesSumToZero([1, 3, 5, 0]); // false
 *   triplesSumToZero([1, 3, -2, 1]); // true
 *   triplesSumToZero([1, 2, 3, 7]); // false
 *   triplesSumToZero([2, 4, -5, 3, 9, 7]); // true
 *   triplesSumToZero([1]); // false
 */

function triplesSumToZero(l) {
//// BEGIN - CANONICAL SOLUTION
    for (let i = 0; i < l.length; i++) {
        for (let j = i + 1; j < l.length; j++) {
            for (let k = j + 1; k < l.length; k++) {
                if (l[i] + l[j] + l[k] === 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

//// BEGIN - TEST
const METADATA = {};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate([1, 3, 5, 0]), false);
    assert.strictEqual(candidate([1, 3, 5, -1]), false);
    assert.strictEqual(candidate([1, 3, -2, 1]), true);
    assert.strictEqual(candidate([1, 2, 3, 7]), false);
    assert.strictEqual(candidate([1, 2, 5, 7]), false);
    assert.strictEqual(candidate([2, 4, -5, 3, 9, 7]), true);
    assert.strictEqual(candidate([1]), false);
    assert.strictEqual(candidate([1, 3, 5, -100]), false);
    assert.strictEqual(candidate([100, 3, 5, -100]), false);
}

//// BEGIN - CHECK
check(triplesSumToZero);