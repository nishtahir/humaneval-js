//// BEGIN - PROMPT
/**
 * Your task is to implement a function that will simplify the expression
 * x * n. The function returns true if x * n evaluates to a whole number and false
 * otherwise. Both x and n are string representations of a fraction, and have the following format:
 * <numerator>/<denominator> where both numerator and denominator are positive whole numbers.
 *
 * You can assume that x and n are valid fractions, and do not have zero as denominator.
 *
 * Examples:
 * simplify("1/5", "5/1") = true
 * simplify("1/6", "2/1") = false
 * simplify("7/10", "10/2") = false
 *
 * @param {string} x - Fraction in the format "numerator/denominator"
 * @param {string} n - Fraction in the format "numerator/denominator"
 * @returns {boolean} - True if x * n is a whole number, false otherwise
 */
function simplify(x, n) {
//// BEGIN - CANONICAL SOLUTION
    const [a, b] = x.split("/");
    const [c, d] = n.split("/");
    const numerator = parseInt(a, 10) * parseInt(c, 10);
    const denom = parseInt(b, 10) * parseInt(d, 10);
    return numerator % denom === 0;
}
//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate("1/5", "5/1"), true, 'test1');
    assert.strictEqual(candidate("1/6", "2/1"), false, 'test2');
    assert.strictEqual(candidate("5/1", "3/1"), true, 'test3');
    assert.strictEqual(candidate("7/10", "10/2"), false, 'test4');
    assert.strictEqual(candidate("2/10", "50/10"), true, 'test5');
    assert.strictEqual(candidate("7/2", "4/2"), true, 'test6');
    assert.strictEqual(candidate("11/6", "6/1"), true, 'test7');
    assert.strictEqual(candidate("2/3", "5/2"), false, 'test8');
    assert.strictEqual(candidate("5/2", "3/5"), false, 'test9');
    assert.strictEqual(candidate("2/4", "8/4"), true, 'test10');
    assert.strictEqual(candidate("2/4", "4/2"), true, 'test11');
    assert.strictEqual(candidate("1/5", "5/1"), true, 'test12');
    assert.strictEqual(candidate("1/5", "1/5"), false, 'test13');
}

//// BEGIN - CHECK
check(simplify)