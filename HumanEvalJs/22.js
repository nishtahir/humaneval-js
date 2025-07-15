//// BEGIN - PROMPT
/**
 * Filter given array of any JS values only for integers.
 *
 * @param {Array<any>} values - The array of values to filter.
 * @returns {Array<number>} An array containing only the integer values.
 *
 * @example
 * filter_integers(['a', 3.14, 5]); // returns [5]
 * @example
 * filter_integers([1, 2, 3, 'abc', {}, []]); // returns [1, 2, 3]
 */
//// BEGIN - CANONICAL SOLUTION
function filter_integers(values) {
    return values.filter(x => Number.isInteger(x));
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([]), []);
    assert.deepStrictEqual(candidate([4, {}, [], 23.2, 9, 'adasd']), [4, 9]);
    assert.deepStrictEqual(candidate([3, 'c', 3, 3, 'a', 'b']), [3, 3, 3]);
}

//// BEGIN - CHECK
check(filter_integers);