//// BEGIN - PROMPT
/**
 * Return n-th Fibonacci number.
 *
 * @param {number} n
 * @returns {number}
 * @example
 * fib(10) // 55
 * fib(1) // 1
 * fib(8) // 21
 */
function fib(n) {
//// BEGIN - CANONICAL SOLUTION
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.ok(candidate(10) === 55);
    assert.ok(candidate(1) === 1);
    assert.ok(candidate(8) === 21);
    assert.ok(candidate(11) === 89);
    assert.ok(candidate(12) === 144);
}

//// BEGIN - CHECK
check(fib);