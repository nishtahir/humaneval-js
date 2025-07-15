//// BEGIN - PROMPT
/**
 * Return list with elements incremented by 1.
 * @example
 * incr_list([1, 2, 3]);
 * // returns [2, 3, 4]
 * @example
 * incr_list([5, 3, 5, 2, 3, 3, 9, 0, 123]);
 * // returns [6, 4, 6, 3, 4, 4, 10, 1, 124]
 * @param {number[]} l
 * @returns {number[]}
 */
function incr_list(l) {
//// BEGIN - CANONICAL SOLUTION
    return l.map(e => e + 1);
}

//// BEGIN - TEST
const METADATA = {};

function check(candidate) {
    if (JSON.stringify(candidate([])) !== JSON.stringify([])) {
        throw new Error('Test failed: []');
    }
    if (JSON.stringify(candidate([3, 2, 1])) !== JSON.stringify([4, 3, 2])) {
        throw new Error('Test failed: [3,2,1]');
    }
    if (JSON.stringify(candidate([5, 2, 5, 2, 3, 3, 9, 0, 123])) !== JSON.stringify([6, 3, 6, 3, 4, 4, 10, 1, 124])) {
        throw new Error('Test failed: long list');
    }
}

//// BEGIN - CHECK
check(incr_list);