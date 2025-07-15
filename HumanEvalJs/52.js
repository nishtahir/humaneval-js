const assert = require('assert');

//// BEGIN - PROMPT
/**
 * Return true if all numbers in the list l are below threshold t.
 * @param {number[]} l
 * @param {number} t
 * @returns {boolean}
 * @example
 * belowThreshold([1, 2, 4, 10], 100); // true
 * belowThreshold([1, 20, 4, 10], 5); // false
 */
function belowThreshold(l, t) {
//// BEGIN - CANONICAL SOLUTION
    for (const e of l) {
        if (e >= t) {
            return false;
        }
    }
    return true;
}

//// BEGIN - TEST

const METADATA = {};

function check(candidate) {
    assert.ok(candidate([1, 2, 4, 10], 100));
    assert.ok(!candidate([1, 20, 4, 10], 5));
    assert.ok(candidate([1, 20, 4, 10], 21));
    assert.ok(candidate([1, 20, 4, 10], 22));
    assert.ok(candidate([1, 8, 4, 10], 11));
    assert.ok(!candidate([1, 8, 4, 10], 10));
}

//// BEGIN - CHECK
check(belowThreshold);