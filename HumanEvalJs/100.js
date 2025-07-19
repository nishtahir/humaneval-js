//// BEGIN - PROMPT
/**
 * Given a positive integer n, you have to make a pile of n levels of stones.
 * The first level has n stones.
 * The number of stones in the next level is:
 *   - the next odd number if n is odd.
 *   - the next even number if n is even.
 * Return the number of stones in each level in an array, where element at index
 * i represents the number of stones in the level (i+1).
 *
 * Examples:
 * console.log(makeAPile(3)); // [3, 5, 7]
 */
function makeAPile(n) {
//// BEGIN - CANONICAL SOLUTION
    return Array.from({ length: n }, (_, i) => n + 2 * i);
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate(3), [3, 5, 7], 'Test 3');
    assert.deepStrictEqual(candidate(4), [4, 6, 8, 10], 'Test 4');
    assert.deepStrictEqual(candidate(5), [5, 7, 9, 11, 13]);
    assert.deepStrictEqual(candidate(6), [6, 8, 10, 12, 14, 16]);
    assert.deepStrictEqual(candidate(8), [8, 10, 12, 14, 16, 18, 20, 22]);

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true, 'This prints if this assert fails 2 (also good for debugging!)');
}

//// BEGIN - CHECK
check(makeAPile);