//// BEGIN - PROMPT
/**
 * Create a function which returns the largest index of an element which
 * is not greater than or equal to the element immediately preceding it. If
 * no such element exists then return -1. The given array will not contain
 * duplicate values.
 *
 * Examples:
 * can_arrange([1,2,4,3,5]) = 3
 * can_arrange([1,2,3]) = -1
 *
 * @param {number[]} arr
 * @returns {number}
 */
function can_arrange(arr) {
//// BEGIN - CANONICAL SOLUTION
    let ind = -1;
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < arr[i - 1]) {
            ind = i;
        }
        i += 1;
    }
    return ind;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([1,2,4,3,5]), 3);
    assert.strictEqual(candidate([1,2,4,5]), -1);
    assert.strictEqual(candidate([1,4,2,5,6,7,8,9,10]), 2);
    assert.strictEqual(candidate([4,8,5,7,3]), 4);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate([]), -1);
}

//// BEGIN - CHECK
check(can_arrange);