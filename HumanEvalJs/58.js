//// BEGIN - PROMPT
/**
 * Return sorted unique common elements for two lists.
 * @param {number[]} l1
 * @param {number[]} l2
 * @returns {number[]}
 */
function common(l1, l2) {
//// BEGIN - CANONICAL SOLUTION
    const ret = new Set();
    for (const e1 of l1) {
        for (const e2 of l2) {
            if (e1 === e2) {
                ret.add(e1);
            }
        }
    }
    return Array.from(ret).sort((a, b) => a - b);
}

//// BEGIN - TEST
const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.deepStrictEqual(candidate([1, 4, 3, 34, 653, 2, 5], [5, 7, 1, 5, 9, 653, 121]), [1, 5, 653]);
    assert.deepStrictEqual(candidate([5, 3, 2, 8], [3, 2]), [2, 3]);
    assert.deepStrictEqual(candidate([4, 3, 2, 8], [3, 2, 4]), [2, 3, 4]);
    assert.deepStrictEqual(candidate([4, 3, 2, 8], []), []);
}

//// BEGIN - CHECK
check(common);