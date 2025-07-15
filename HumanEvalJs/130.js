//// BEGIN - PROMPT
/**
 * Everyone knows Fibonacci sequence, it was studied deeply by mathematicians in
 * the last couple centuries. However, what people don't know is Tribonacci sequence.
 * Tribonacci sequence is defined by the recurrence:
 * tri(1) = 3
 * tri(n) = 1 + n / 2, if n is even.
 * tri(n) = tri(n - 1) + tri(n - 2) + tri(n + 1), if n is odd.
 * For example:
 * tri(2) = 1 + (2 / 2) = 2
 * tri(4) = 3
 * tri(3) = tri(2) + tri(1) + tri(4)
 *        = 2 + 3 + 3 = 8
 * You are given a non-negative integer number n, you have to return a list of the
 * first n + 1 numbers of the Tribonacci sequence.
 * Examples:
 * tri(3) = [1, 3, 2, 8]
 */
//// BEGIN - CANONICAL SOLUTION
function tri(n) {
    if (n === 0) {
        return [1];
    }
    const myTri = [1, 3];
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            myTri.push(i / 2 + 1);
        } else {
            myTri.push(myTri[i - 1] + myTri[i - 2] + (i + 3) / 2);
        }
    }
    return myTri;
}
//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate(3), [1, 3, 2, 8]);
    assert.deepStrictEqual(candidate(4), [1, 3, 2, 8, 3]);
    assert.deepStrictEqual(candidate(5), [1, 3, 2, 8, 3, 15]);
    assert.deepStrictEqual(candidate(6), [1, 3, 2, 8, 3, 15, 4]);
    assert.deepStrictEqual(candidate(7), [1, 3, 2, 8, 3, 15, 4, 24]);
    assert.deepStrictEqual(candidate(8), [1, 3, 2, 8, 3, 15, 4, 24, 5]);
    assert.deepStrictEqual(candidate(9), [1, 3, 2, 8, 3, 15, 4, 24, 5, 35]);
    assert.deepStrictEqual(candidate(20), [1, 3, 2, 8, 3, 15, 4, 24, 5, 35, 6, 48, 7, 63, 8, 80, 9, 99, 10, 120, 11]);
    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(candidate(0), [1]);
    assert.deepStrictEqual(candidate(1), [1, 3]);
}
//// BEGIN - CHECK
check(tri);