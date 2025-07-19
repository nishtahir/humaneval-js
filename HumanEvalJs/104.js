//// BEGIN - PROMPT
/**
 * Given a list of positive integers x, return a sorted list of all 
 * elements that hasn't any even digit.
 *
 * Note: Returned list should be sorted in increasing order.
 *
 * For example:
 * uniqueDigits([15, 33, 1422, 1]);
 * // returns [1, 15, 33]
 * uniqueDigits([152, 323, 1422, 10]);
 * // returns []
 *
 * @param {number[]} x
 * @returns {number[]}
 */
function uniqueDigits(x) {
//// BEGIN - CANONICAL SOLUTION
    const oddDigitElements = [];
    for (const i of x) {
        if (String(i).split('').every(c => parseInt(c, 10) % 2 === 1)) {
            oddDigitElements.push(i);
        }
    }
    return oddDigitElements.sort((a, b) => a - b);
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(JSON.stringify(candidate([15, 33, 1422, 1])), JSON.stringify([1, 15, 33]), new Error("Test case 1 failed."));
    assert.strictEqual(JSON.stringify(candidate([152, 323, 1422, 10])), JSON.stringify([]), new Error("Test case 2 failed."));
    assert.strictEqual(JSON.stringify(candidate([12345, 2033, 111, 151])), JSON.stringify([111, 151]), new Error("Test case 3 failed."));
    assert.strictEqual(JSON.stringify(candidate([135, 103, 31])), JSON.stringify([31, 135]), new Error("Test case 4 failed."));
        
    // Check some edge cases that are easy to work out by hand.
    assert.ok(true);
}

//// BEGIN - CHECK
check(uniqueDigits);