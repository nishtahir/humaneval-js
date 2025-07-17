//// BEGIN - PROMPT
/**
 * Write a function that takes an array of numbers as input and returns 
 * the number of elements in the array that are greater than 10 and both 
 * first and last digits of a number are odd (1, 3, 5, 7, 9).
 * For example:
 * specialFilter([15, -73, 14, -15]) => 1 
 * specialFilter([33, -2, -3, 45, 21, 109]) => 2
 */
/**
 * @param {number[]} nums
 * @returns {number}
 */
function specialFilter(nums) {
//// BEGIN - CANONICAL SOLUTION
    let count = 0;
    const oddDigits = new Set([1, 3, 5, 7, 9]);
    for (const num of nums) {
        if (num > 10) {
            const str = String(num);
            const first = parseInt(str[0], 10);
            const last = parseInt(str[str.length - 1], 10);
            if (oddDigits.has(first) && oddDigits.has(last)) {
                count++;
            }
        }
    }
    return count;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([5, -2, 1, -5]), 0);
    assert.strictEqual(candidate([15, -73, 14, -15]), 1);
    assert.strictEqual(candidate([33, -2, -3, 45, 21, 109]), 2);
    assert.strictEqual(candidate([43, -12, 93, 125, 121, 109]), 4);
    assert.strictEqual(candidate([71, -2, -33, 75, 21, 19]), 3);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate([1]), 0);
    assert.strictEqual(candidate([]), 0);
}

//// BEGIN - CHECK
check(specialFilter);