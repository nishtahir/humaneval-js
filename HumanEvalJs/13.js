const assert = require('assert');

//// BEGIN - PROMPT

/**
 * Return a greatest common divisor of two integers a and b
 *
 * @param {number} a - First integer.
 * @param {number} b - Second integer.
 * @returns {number} Greatest common divisor.
 *
 * @example
 * greatestCommonDivisor(3, 5); // 1
 * greatestCommonDivisor(25, 15); // 5
 */
function greatestCommonDivisor(a, b) {
//// BEGIN - CANONICAL SOLUTION
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

//// BEGIN - TEST

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    assert.strictEqual(candidate(3, 7), 1);
    assert.strictEqual(candidate(10, 15), 5);
    assert.strictEqual(candidate(49, 14), 7);
    assert.strictEqual(candidate(144, 60), 12);
}

//// BEGIN - CHECK
check(greatestCommonDivisor);