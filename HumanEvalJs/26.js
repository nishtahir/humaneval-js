//// BEGIN - PROMPT

/**
 * From a list of integers, remove all elements that occur more than once.
 * Keep order of elements left the same as in the input.
 * @param {number[]} numbers
 * @returns {number[]}
 * @example
 * removeDuplicates([1, 2, 3, 2, 4]); // [1, 3, 4]
*/
function removeDuplicates(numbers) {
//// BEGIN - CANONICAL SOLUTION
    const count = new Map();
    for (const n of numbers) {
        count.set(n, (count.get(n) || 0) + 1);
    }
    return numbers.filter(n => count.get(n) <= 1);
}

//// BEGIN - TEST
const METADATA = { author: 'jt', dataset: 'test' };

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([]), []);
    assert.deepStrictEqual(candidate([1, 2, 3, 4]), [1, 2, 3, 4]);
    assert.deepStrictEqual(candidate([1, 2, 3, 2, 4, 3, 5]), [1, 4, 5]);
}

//// BEGIN - CHECK
check(removeDuplicates);