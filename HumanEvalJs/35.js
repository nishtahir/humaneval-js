//// BEGIN - PROMPT
/**
 * Return maximum element in the list.
 * @param {number[]} l - The list of numbers.
 * @returns {number} The maximum element.
 * @example
 * // returns 3
 * maxElement([1, 2, 3]);
 * @example
 * // returns 123
 * maxElement([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]);
 */
function maxElement(l) {
//// BEGIN - CANONICAL SOLUTION
    let m = l[0];
    for (const e of l) {
        if (e > m) {
            m = e;
        }
    }
    return m;
}

//// BEGIN - TEST
const METADATA = {}
const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate([1, 2, 3]), 3);
    assert.strictEqual(candidate([5, 3, -5, 2, -3, 3, 9, 0, 124, 1, -10]), 124);
}

//// BEGIN - CHECK
check(maxElement);