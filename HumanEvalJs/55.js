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

function check(candidate) {
    console.assert(candidate(10) === 55);
    console.assert(candidate(1) === 1);
    console.assert(candidate(8) === 21);
    console.assert(candidate(11) === 89);
    console.assert(candidate(12) === 144);
}
//// BEGIN - CHECK
check(fib);