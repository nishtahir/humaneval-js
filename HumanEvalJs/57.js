//// BEGIN - PROMPT
/**
 * Return true if array elements are monotonically increasing or decreasing.
 * @param {number[]} arr
 * @returns {boolean}
 */
function monotonic(arr) {
//// BEGIN - CANONICAL SOLUTION
    const asc = [...arr].sort((a, b) => a - b);
    const desc = [...arr].sort((a, b) => b - a);
    if (JSON.stringify(arr) === JSON.stringify(asc) || JSON.stringify(arr) === JSON.stringify(desc)) {
        return true;
    }
    return false;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate([1, 2, 4, 10]), true);
    assert.strictEqual(candidate([1, 2, 4, 20]), true);
    assert.strictEqual(candidate([1, 20, 4, 10]), false);
    assert.strictEqual(candidate([4, 1, 0, -10]), true);
    assert.strictEqual(candidate([4, 1, 1, 0]), true);
    assert.strictEqual(candidate([1, 2, 3, 2, 5, 60]), false);
    assert.strictEqual(candidate([1, 2, 3, 4, 5, 60]), true);
    assert.strictEqual(candidate([9, 9, 9, 9]), true);
}

//// BEGIN - CHECK

check(monotonic);