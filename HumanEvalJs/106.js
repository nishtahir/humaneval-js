//// BEGIN - PROMPT
/**
 * Implement the function f that takes n as a parameter,
 * and returns an array of size n, such that the value of the element at index i is the factorial of i if i is even
 * or the sum of numbers from 1 to i otherwise.
 * i starts from 1.
 * the factorial of i is the multiplication of the numbers from 1 to i (1 * 2 * ... * i).
 * Example:
 * f(5) == [1, 2, 6, 24, 15]
 * @param {number} n
 * @returns {number[]}
 */
//// BEGIN - CANONICAL SOLUTION
function f(n) {
    const ret = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            let x = 1;
            for (let j = 1; j <= i; j++) {
                x *= j;
            }
            ret.push(x);
        } else {
            let x = 0;
            for (let j = 1; j <= i; j++) {
                x += j;
            }
            ret.push(x);
        }
    }
    return ret;
}
//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    assert.deepStrictEqual(candidate(5), [1, 2, 6, 24, 15]);
    assert.deepStrictEqual(candidate(7), [1, 2, 6, 24, 15, 720, 28]);
    assert.deepStrictEqual(candidate(1), [1]);
    assert.deepStrictEqual(candidate(3), [1, 2, 6]);
}
//// BEGIN - CHECK
check(f);