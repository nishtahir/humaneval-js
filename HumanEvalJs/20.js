//// BEGIN - PROMPT
/**
 * From a supplied array of numbers (length at least two) select and return two that are the closest to each
 * other and return them in order (smaller number, larger number).
 * @param {number[]} numbers
 * @returns {[number, number]}
*/
function findClosestElements(numbers) {
//// BEGIN - CANONICAL SOLUTION
    let closestPair = null;
    let distance = null;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                const a = numbers[i];
                const b = numbers[j];
                const diff = Math.abs(a - b);
                if (distance === null || diff < distance) {
                    distance = diff;
                    closestPair = [Math.min(a, b), Math.max(a, b)];
                }
            }
        }
    }
    return closestPair;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([1.0, 2.0, 3.9, 4.0, 5.0, 2.2]), [3.9, 4.0]);
    assert.deepStrictEqual(candidate([1.0, 2.0, 5.9, 4.0, 5.0]), [5.0, 5.9]);
    assert.deepStrictEqual(candidate([1.0, 2.0, 3.0, 4.0, 5.0, 2.2]), [2.0, 2.2]);
    assert.deepStrictEqual(candidate([1.0, 2.0, 3.0, 4.0, 5.0, 2.0]), [2.0, 2.0]);
    assert.deepStrictEqual(candidate([1.1, 2.2, 3.1, 4.1, 5.1]), [2.2, 3.1]);
}

//// BEGIN - CHECK
check(findClosestElements);