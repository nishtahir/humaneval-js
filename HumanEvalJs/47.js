//// BEGIN - PROMPT
/**
 * Return median of elements in the list l.
 *
 * @param {number[]} l - array of numbers
 * @returns {number} median of the array
 *
 * >>> median([3, 1, 2, 4, 5])
 * 3
 * >>> median([-10, 4, 6, 1000, 10, 20])
 * 15.0
 */
function median(l) {
//// BEGIN - CANONICAL SOLUTION
    const sorted = [...l].sort((a, b) => a - b);
    const n = sorted.length;
    if (n % 2 === 1) {
        return sorted[Math.floor(n / 2)];
    } else {
        return (sorted[n / 2 - 1] + sorted[n / 2]) / 2.0;
    }
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate([3, 1, 2, 4, 5]), 3);
    assert.strictEqual(candidate([-10, 4, 6, 1000, 10, 20]), 8.0);
    assert.strictEqual(candidate([5]), 5);
    assert.strictEqual(candidate([6, 5]), 5.5);
    assert.strictEqual(candidate([8, 1, 3, 9, 9, 2, 7]), 7);
}

//// BEGIN - CHECK
check(median);