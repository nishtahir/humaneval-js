const assert = require('assert');

//// BEGIN - PROMPT

/**
 * From a given list of integers, generate a list of rolling maximum element found until given moment
 * in the sequence.
 * @param {number[]} numbers
 * @returns {number[]}
 * @example
 * // returns [1, 2, 3, 3, 3, 4, 4]
 * rolling_max([1, 2, 3, 2, 3, 4, 2]);
 */
function rolling_max(numbers) {
//// BEGIN - CANONICAL SOLUTION
    let running_max = null;
    const result = [];

    for (const n of numbers) {
        if (running_max === null) {
            running_max = n;
        } else {
            running_max = Math.max(running_max, n);
        }
        result.push(running_max);
    }

    return result;
}

//// BEGIN - TEST

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    assert.deepStrictEqual(candidate([]), []);
    assert.deepStrictEqual(candidate([1, 2, 3, 4]), [1, 2, 3, 4]);
    assert.deepStrictEqual(candidate([4, 3, 2, 1]), [4, 4, 4, 4]);
    assert.deepStrictEqual(candidate([3, 2, 3, 100, 3]), [3, 3, 3, 100, 100]);
}

//// BEGIN - CHECK
check(rolling_max);