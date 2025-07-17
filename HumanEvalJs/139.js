//// BEGIN - PROMPT
/**
 * The Brazilian factorial is defined as:
 * brazilian_factorial(n) = n! * (n-1)! * (n-2)! * ... * 1!
 * where n > 0
 *
 * For example:
 * >>> special_factorial(4)
 * 288
 *
 * The function will receive an integer as input and should return the special
 * factorial of this integer.
 */
 
function special_factorial(n) {
//// BEGIN - CANONICAL SOLUTION
    let fact_i = 1;
    let special_fact = 1;
    for (let i = 1; i <= n; i++) {
        fact_i *= i;
        special_fact *= fact_i;
    }
    return special_fact;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(4), 288);
    assert.strictEqual(candidate(5), 34560);
    assert.strictEqual(candidate(7), 125411328000);
    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(1), 1);
}

//// BEGIN - CHECK
check(special_factorial);