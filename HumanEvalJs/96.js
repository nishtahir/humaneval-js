//// BEGIN - PROMPT
/**
 * Implement a function that takes a non-negative integer and returns an array of the first n
 * integers that are prime numbers and less than n.
 * for example:
 * countUpTo(5) => [2,3]
 * countUpTo(11) => [2,3,5,7]
 * countUpTo(0) => []
 * countUpTo(20) => [2,3,5,7,11,13,17,19]
 * countUpTo(1) => []
 * countUpTo(18) => [2,3,5,7,11,13,17]
*/
function countUpTo(n) {
//// BEGIN - CANONICAL SOLUTION
    const primes = [];
    for (let i = 2; i < n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate(5), [2, 3]);
    assert.deepStrictEqual(candidate(6), [2, 3, 5]);
    assert.deepStrictEqual(candidate(7), [2, 3, 5]);
    assert.deepStrictEqual(candidate(10), [2, 3, 5, 7]);
    assert.deepStrictEqual(candidate(0), []);
    assert.deepStrictEqual(candidate(22), [2, 3, 5, 7, 11, 13, 17, 19]);
    assert.deepStrictEqual(candidate(1), []);
    assert.deepStrictEqual(candidate(18), [2, 3, 5, 7, 11, 13, 17]);
    assert.deepStrictEqual(candidate(47), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]);
    assert.deepStrictEqual(candidate(101), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
}

//// BEGIN - CHECK
check(countUpTo);