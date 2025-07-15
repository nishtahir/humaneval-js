//// BEGIN - PROMPT
/**
 * In this task, you will be given a string that represents a number of apples and oranges
 * that are distributed in a basket of fruit. This basket contains apples, oranges, and mango fruits.
 * Given the string that represents the total number of the oranges and apples and an integer that
 * represents the total number of the fruits in the basket, return the number of mango fruits in the basket.
 *
 * For example:
 * fruit_distribution("5 apples and 6 oranges", 19) -> 19 - 5 - 6 = 8
 * fruit_distribution("0 apples and 1 oranges", 3) -> 3 - 0 - 1 = 2
 * fruit_distribution("2 apples and 3 oranges", 100) -> 100 - 2 - 3 = 95
 * fruit_distribution("100 apples and 1 oranges", 120) -> 120 - 100 - 1 = 19
 *
 * @param {string} s - String describing number of apples and oranges.
 * @param {number} n - Total number of fruits in the basket.
 * @returns {number} Number of mango fruits in the basket.
 */

//// BEGIN - CANONICAL SOLUTION
function fruit_distribution(s, n) {
    const lis = [];
    s.split(' ').forEach(i => {
        if (/^\d+$/.test(i)) {
            lis.push(parseInt(i, 10));
        }
    });
    return n - lis.reduce((a, b) => a + b, 0);
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate("5 apples and 6 oranges", 19), 8);
    assert.strictEqual(candidate("5 apples and 6 oranges", 21), 10);
    assert.strictEqual(candidate("0 apples and 1 oranges", 3), 2);
    assert.strictEqual(candidate("1 apples and 0 oranges", 3), 2);
    assert.strictEqual(candidate("2 apples and 3 oranges", 100), 95);
    assert.strictEqual(candidate("2 apples and 3 oranges", 5), 0);
    assert.strictEqual(candidate("1 apples and 100 oranges", 120), 19);
}

//// BEGIN - CHECK
check(fruit_distribution);