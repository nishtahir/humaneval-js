//// BEGIN - PROMPT
/**
 * Input is a space-delimited string of numerals from 'zero' to 'nine'.
 * Valid choices are 'zero', 'one', 'two', 'three', 'four', 'five',
 * 'six', 'seven', 'eight' and 'nine'.
 * Return the string with numbers sorted from smallest to largest.
 * @example
 * // returns 'one three five'
 * sortNumbers('three one five');
 * @param {string} numbers
 * @returns {string}
 */
function sortNumbers(numbers) {
    //// BEGIN - CANONICAL SOLUTION
    const valueMap = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };
    return numbers
        .split(' ')
        .filter(x => x)
        .sort((a, b) => valueMap[a] - valueMap[b])
        .join(' ');
}

//// BEGIN - TEST
const assert = require('assert');

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    assert.strictEqual(candidate(''), '');
    assert.strictEqual(candidate('three'), 'three');
    assert.strictEqual(candidate('three five nine'), 'three five nine');
    assert.strictEqual(candidate('five zero four seven nine eight'), 'zero four five seven eight nine');
    assert.strictEqual(candidate('six five four three two one zero'), 'zero one two three four five six');
}

//// BEGIN - CHECK
check(sortNumbers);