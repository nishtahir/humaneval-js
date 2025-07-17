//// BEGIN - PROMPT
/**
 * Return the largest prime factor of n. Assume n > 1 and is not a prime.
 *
 * @example
 * largestPrimeFactor(13195); // 29
 * @example
 * largestPrimeFactor(2048); // 2
 *
 * @param {number} n
 * @returns {number}
 */
function largestPrimeFactor(n) {
//// BEGIN - CANONICAL SOLUTION
    /**
     * Check if k is a prime number.
     * @param {number} k
     * @returns {boolean}
     */
    function isPrime(k) {
        if (k < 2) {
            return false;
        }
        for (let i = 2; i < k; i++) {
            if (k % i === 0) {
                return false;
            }
        }
        return true;
    }

    let largest = 1;
    for (let j = 2; j <= n; j++) {
        if (n % j === 0 && isPrime(j)) {
            largest = Math.max(largest, j);
        }
    }
    return largest;
}

//// BEGIN - TEST
const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.strictEqual(candidate(15), 5);
    assert.strictEqual(candidate(27), 3);
    assert.strictEqual(candidate(63), 7);
    assert.strictEqual(candidate(330), 11);
    assert.strictEqual(candidate(13195), 29);
}

//// BEGIN - CHECK
check(largestPrimeFactor);