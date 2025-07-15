//// BEGIN - PROMPT
/**
 * The Fib4 number sequence is a sequence similar to the Fibonacci sequence that's defined as follows:
 * fib4(0) -> 0
 * fib4(1) -> 0
 * fib4(2) -> 2
 * fib4(3) -> 0
 * fib4(n) -> fib4(n-1) + fib4(n-2) + fib4(n-3) + fib4(n-4).
 * Please write a function to efficiently compute the n-th element of the fib4 number sequence. Do not use recursion.
 *
 * Examples:
 *   fib4(5) -> 4
 *   fib4(6) -> 8
 *   fib4(7) -> 14
 */

//// BEGIN - CANONICAL SOLUTION
/**
 * Computes the n-th element of the fib4 number sequence.
 * @param {number} n
 * @returns {number}
 */
function fib4(n) {
    const results = [0, 0, 2, 0];
    if (n < 4) {
        return results[n];
    }
    for (let i = 4; i <= n; i++) {
        const sum = results[0] + results[1] + results[2] + results[3];
        results.push(sum);
        results.shift();
    }
    return results[3];
}

//// BEGIN - TEST
const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.strictEqual(candidate(5), 4);
    assert.strictEqual(candidate(8), 28);
    assert.strictEqual(candidate(10), 104);
    assert.strictEqual(candidate(12), 386);
}

//// BEGIN - CHECK
check(fib4);