//// BEGIN - PROMPT
/**
 * Write a function that returns true if the given number is the multiplication of 3 prime numbers
 * and false otherwise.
 * Knowing that (a) is less then 100.
 * Example:
 * isMultiplyPrime(30) === true
 * 30 = 2 * 3 * 5
 */
function isMultiplyPrime(a) {
//// BEGIN - CANONICAL SOLUTION
    function is_prime(n) {
        for (let j = 2; j < n; j++) {
            if (n % j === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= 100; i++) {
        if (!is_prime(i)) continue;
        for (let j = 2; j <= 100; j++) {
            if (!is_prime(j)) continue;
            for (let k = 2; k <= 100; k++) {
                if (!is_prime(k)) continue;
                if (i * j * k === a) return true;
            }
        }
    }
    return false;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.ok(candidate(5) === false);
    assert.ok(candidate(30) === true);
    assert.ok(candidate(8) === true);
    assert.ok(candidate(10) === false);
    assert.ok(candidate(125) === true);
    assert.ok(candidate(3 * 5 * 7) === true);
    assert.ok(candidate(3 * 6 * 7) === false);
    assert.ok(candidate(9 * 9 * 9) === false);
    assert.ok(candidate(11 * 9 * 9) === false);
    assert.ok(candidate(11 * 13 * 7) === true);
}

//// BEGIN - CHECK
check(isMultiplyPrime);