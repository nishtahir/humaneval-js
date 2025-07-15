//// BEGIN - PROMPT
/**
 * Complete the function that takes two integers and returns 
 * the product of their unit digits.
 * Assume the input is always valid.
 * Examples:
 * multiply(148, 412) should return 16.
 * multiply(19, 28) should return 72.
 * multiply(2020, 1851) should return 0.
 * multiply(14,-15) should return 20.
 *
 * @param {number} a - first integer
 * @param {number} b - second integer
 * @returns {number} product of the unit digits
 */
function multiply(a, b) {
//// BEGIN - CANONICAL SOLUTION
    return Math.abs(a % 10) * Math.abs(b % 10);
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(148, 412), 16, "First test error: " + candidate(148, 412));
    assert.strictEqual(candidate(19, 28), 72, "Second test error: " + candidate(19, 28));
    assert.strictEqual(candidate(2020, 1851), 0, "Third test error: " + candidate(2020, 1851));
    assert.strictEqual(candidate(14, -15), 20, "Fourth test error: " + candidate(14, -15));
    assert.strictEqual(candidate(76, 67), 42, "Fifth test error: " + candidate(76, 67));
    assert.strictEqual(candidate(17, 27), 49, "Sixth test error: " + candidate(17, 27));

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(0, 1), 0, "1st edge test error: " + candidate(0, 1));
    assert.strictEqual(candidate(0, 0), 0, "2nd edge test error: " + candidate(0, 0));
}

//// BEGIN - CHECK
check(multiply);