//// BEGIN - PROMPT
/**
 * Return list of prime factors of given integer in the order from smallest to largest.
 * Each of the factors should be listed number of times corresponding to how many times it appears in factorization.
 * Input number should be equal to the product of all factors.
 * @example
 * factorize(8) // [2, 2, 2]
 * factorize(25) // [5, 5]
 * factorize(70) // [2, 5, 7]
 * @param {number} n
 * @returns {number[]}
 */
function factorize(n) {
//// BEGIN - CANONICAL SOLUTION
    const fact = [];
    let i = 2;
    while (i <= Math.sqrt(n) + 1) {
        if (n % i === 0) {
            fact.push(i);
            n = n / i;
        } else {
            i += 1;
        }
    }
    if (n > 1) {
        fact.push(n);
    }
    return fact;
}

//// BEGIN - TEST
const assert = require('assert');

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    assert.deepStrictEqual(candidate(2), [2]);
    assert.deepStrictEqual(candidate(4), [2, 2]);
    assert.deepStrictEqual(candidate(8), [2, 2, 2]);
    assert.deepStrictEqual(candidate(3 * 19), [3, 19]);
    assert.deepStrictEqual(candidate(3 * 19 * 3 * 19), [3, 3, 19, 19]);
    assert.deepStrictEqual(candidate(3 * 19 * 3 * 19 * 3 * 19), [3, 3, 3, 19, 19, 19]);
    assert.deepStrictEqual(candidate(3 * 19 * 19 * 19), [3, 19, 19, 19]);
    assert.deepStrictEqual(candidate(3 * 2 * 3), [2, 3, 3]);
}

//// BEGIN - CHECK
check(factorize);