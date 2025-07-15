//// BEGIN - PROMPT
/**
 * Insert a number 'delimeter' between every two consecutive elements of input array `numbers`.
 * @param {number[]} numbers
 * @param {number} delimeter
 * @returns {number[]}
 * @example
 * intersperse([], 4); // []
 * @example
 * intersperse([1, 2, 3], 4); // [1, 4, 2, 4, 3]
 */
function intersperse(numbers, delimeter) {
//// BEGIN - CANONICAL SOLUTION
    if (!numbers || numbers.length === 0) {
        return [];
    }
    const result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        result.push(numbers[i]);
        result.push(delimeter);
    }
    result.push(numbers[numbers.length - 1]);
    return result;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([], 7), []);
    assert.deepStrictEqual(candidate([5, 6, 3, 2], 8), [5, 8, 6, 8, 3, 8, 2]);
    assert.deepStrictEqual(candidate([2, 2, 2], 2), [2, 2, 2, 2, 2]);
}

//// BEGIN - CHECK
check(intersperse);