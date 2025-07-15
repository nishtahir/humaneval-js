//// BEGIN - PROMPT
/**
 * The FibFib number sequence is a sequence similar to the Fibonacci sequence that's defined as follows:
 * fibfib(0) == 0
 * fibfib(1) == 0
 * fibfib(2) == 1
 * fibfib(n) == fibfib(n-1) + fibfib(n-2) + fibfib(n-3).
 * Please write a function to efficiently compute the n-th element of the fibfib number sequence.
 *
 * @example
 * fibfib(1); // 0
 * @example
 * fibfib(5); // 4
 * @example
 * fibfib(8); // 24
 */
function fibfib(n) {
//// BEGIN - CANONICAL SOLUTION
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    return fibfib(n - 1) + fibfib(n - 2) + fibfib(n - 3);
}

//// BEGIN - TEST
const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.strictEqual(candidate(2), 1);
    assert.strictEqual(candidate(1), 0);
    assert.strictEqual(candidate(5), 4);
    assert.strictEqual(candidate(8), 24);
    assert.strictEqual(candidate(10), 81);
    assert.strictEqual(candidate(12), 274);
    assert.strictEqual(candidate(14), 927);
}

//// BEGIN - CHECK
check(fibfib);