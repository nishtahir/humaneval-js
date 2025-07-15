//// BEGIN - PROMPT
/**
 * This function takes two positive numbers x and y and returns the
 * biggest even integer number that is in the range [x, y] inclusive. If 
 * there's no such number, then the function should return -1.
 *
 * For example:
 * choose_num(12, 15) = 14
 * choose_num(13, 12) = -1
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function choose_num(x, y) {
//// BEGIN - CANONICAL SOLUTION
    if (x > y) {
        return -1;
    }
    if (y % 2 === 0) {
        return y;
    }
    if (x === y) {
        return -1;
    }
    return y - 1;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(12, 15), 14);
    assert.strictEqual(candidate(13, 12), -1);
    assert.strictEqual(candidate(33, 12354), 12354);
    assert.strictEqual(candidate(5234, 5233), -1);
    assert.strictEqual(candidate(6, 29), 28);
    assert.strictEqual(candidate(27, 10), -1);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(7, 7), -1);
    assert.strictEqual(candidate(546, 546), 546);
}

//// BEGIN - CHECK
check(choose_num);