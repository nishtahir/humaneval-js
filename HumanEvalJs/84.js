//// BEGIN - PROMPT
/**
 * Given a positive integer N, return the total sum of its digits in binary.
 *
 *  
 *  Example
 *      For N = 1000, the sum of digits will be 1 the output should be "1".
 *      For N = 150, the sum of digits will be 6 the output should be "110".
 *      For N = 147, the sum of digits will be 12 the output should be "1100".
 *  
 *  Variables:
 *      @N integer
 *           Constraints: 0 ≤ N ≤ 10000.
 *  Output:
 *       a string of binary number
 */
function solve(N) {
//// BEGIN - CANONICAL SOLUTION
    const sum = N.toString().split('').reduce((acc, ch) => acc + Number(ch), 0);
    return sum.toString(2);
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(1000), "1");
    assert.strictEqual(candidate(150), "110");
    assert.strictEqual(candidate(147), "1100");

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(333), "1001");
    assert.strictEqual(candidate(963), "10010");
}

//// BEGIN - CHECK
check(solve);