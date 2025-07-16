//// BEGIN - PROMPT


/**
 * Return true if a given number is prime, and false otherwise.
 * @param {number} n - Number to check for primality.
 * @returns {boolean}
 * @example
 * isPrime(6); // false
 * isPrime(101); // true
 * isPrime(11); // true
 * isPrime(13441); // true
 * isPrime(61); // true
 * isPrime(4); // false
 * isPrime(1); // false
*/
function isPrime(n) {
//// BEGIN - CANONICAL SOLUTION
    if (n < 2) {
        return false;
    }
    for (let k = 2; k < n - 1; k++) {
        if (n % k === 0) {
            return false;
        }
    }
    return true;
}

//// BEGIN - TEST

const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.strictEqual(candidate(6), false);
    assert.strictEqual(candidate(101), true);
    assert.strictEqual(candidate(11), true);
    assert.strictEqual(candidate(13441), true);
    assert.strictEqual(candidate(61), true);
    assert.strictEqual(candidate(4), false);
    assert.strictEqual(candidate(1), false);
    assert.strictEqual(candidate(5), true);
    assert.strictEqual(candidate(11), true);
    assert.strictEqual(candidate(17), true);
    assert.strictEqual(candidate(5 * 17), false);
    assert.strictEqual(candidate(11 * 7), false);
    assert.strictEqual(candidate(13441 * 19), false);
}

//// BEGIN - CHECK
check(isPrime);