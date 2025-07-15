const assert = require('assert');

//// BEGIN - PROMPT
/**
 * Given a positive integer n, return the product of the odd digits.
 * Return 0 if all digits are even.
 *
 * For example:
 * digits(1)  == 1
 * digits(4)  == 0
 * digits(235) == 15
 *
 * @param {number} n
 * @returns {number}
 */
//// BEGIN - CANONICAL SOLUTION
function digits(n) {
    let product = 1;
    let oddCount = 0;
    for (const char of n.toString()) {
        const digit = parseInt(char, 10);
        if (digit % 2 === 1) {
            product *= digit;
            oddCount++;
        }
    }
    return oddCount === 0 ? 0 : product;
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(5), 5);
    assert.strictEqual(candidate(54), 5);
    assert.strictEqual(candidate(120), 1);
    assert.strictEqual(candidate(5014), 5);
    assert.strictEqual(candidate(98765), 315);
    assert.strictEqual(candidate(5576543), 2625);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(2468), 0);
}

//// BEGIN - CHECK
check(digits);