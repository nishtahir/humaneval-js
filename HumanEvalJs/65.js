//// BEGIN - PROMPT
/**
 * Circular shift the digits of the integer x, shift the digits right by shift
 * and return the result as a string.
 * If shift > number of digits, return digits reversed.
 * @example
 * circularShift(12, 1) // "21"
 * circularShift(12, 2) // "12"
 * @param {number} x - The integer whose digits will be shifted.
 * @param {number} shift - The number of positions to shift the digits to the right.
 * @returns {string} - The resulting string after circular shift or reverse.
 */
function circularShift(x, shift) {
//// BEGIN - CANONICAL SOLUTION
    const s = String(x);
    if (shift > s.length) {
        return s.split('').reverse().join('');
    } else {
        return s.slice(s.length - shift) + s.slice(0, s.length - shift);
    }
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(100, 2), "001");
    assert.strictEqual(candidate(12, 2), "12");
    assert.strictEqual(candidate(97, 8), "79");
    assert.strictEqual(candidate(12, 1), "21", "This prints if this assert fails 1 (good for debugging!)");

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(11, 101), "11", "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(circularShift);