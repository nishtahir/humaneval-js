//// BEGIN - PROMPT
/**
 * Given two positive integers a and b, return the even digits between a
 * and b, in ascending order.
 *
 * For example:
 * generateIntegers(2, 8) => [2, 4, 6, 8]
 * generateIntegers(8, 2) => [2, 4, 6, 8]
 * generateIntegers(10, 14) => []
 */
function generateIntegers(a, b) {
//// BEGIN - CANONICAL SOLUTION
    const lower = Math.max(2, Math.min(a, b));
    const upper = Math.min(8, Math.max(a, b));
    const result = [];
    for (let i = lower; i <= upper; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate(2, 10), [2, 4, 6, 8], 'Test 1');
    assert.deepStrictEqual(candidate(10, 2), [2, 4, 6, 8], 'Test 2');
    assert.deepStrictEqual(candidate(132, 2), [2, 4, 6, 8], 'Test 3');
    assert.deepStrictEqual(candidate(17, 89), [], 'Test 4');

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true, 'This prints if this assert fails 2 (also good for debugging!)');
}

//// BEGIN - CHECK
check(generateIntegers);