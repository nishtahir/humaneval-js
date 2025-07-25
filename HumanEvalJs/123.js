//// BEGIN - PROMPT
/**
 * Given a positive integer n, return a sorted array that has the odd numbers in Collatz sequence.
 *
 * The Collatz conjecture is a conjecture in mathematics that concerns a sequence defined
 * as follows: start with any positive integer n. Then each term is obtained from the 
 * previous term as follows: if the previous term is even, the next term is one half of 
 * the previous term. If the previous term is odd, the next term is 3 times the previous
 * term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1.
 *
 * Note:
 *   1. Collatz(1) is [1].
 *   2. returned list sorted in increasing order.
 *
 * For example:
 * getOddCollatz(5) returns [1, 5] // The collatz sequence for 5 is [5, 16, 8, 4, 2, 1], so the odd numbers are only 1 and 5.
 *
 * @param {number} n
 * @returns {number[]}
 */
function getOddCollatz(n) {
//// BEGIN - CANONICAL SOLUTION
    let oddCollatz;
    if (n % 2 === 0) {
        oddCollatz = [];
    } else {
        oddCollatz = [n];
    }
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        if (n % 2 === 1) {
            oddCollatz.push(n);
        }
    }
    return oddCollatz.sort((a, b) => a - b);
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate(14), [1, 5, 7, 11, 13, 17]);
    assert.deepStrictEqual(candidate(5), [1, 5]);
    assert.deepStrictEqual(candidate(12), [1, 3, 5], "This prints if this assert fails 1 (good for debugging!)");
    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(candidate(1), [1], "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(getOddCollatz)