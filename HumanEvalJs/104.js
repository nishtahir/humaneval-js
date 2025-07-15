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
//// BEGIN - CANONICAL SOLUTION
function uniqueDigits(x) {
    const oddDigitElements = [];
    for (const i of x) {
        if (String(i).split('').every(c => parseInt(c, 10) % 2 === 1)) {
            oddDigitElements.push(i);
        }
    }
    return oddDigitElements.sort((a, b) => a - b);
}
//// BEGIN - TEST
function check(candidate) {
    if (JSON.stringify(candidate([15, 33, 1422, 1])) !== JSON.stringify([1, 15, 33])) {
        throw new Error('Test case 1 failed');
    }
    if (JSON.stringify(candidate([152, 323, 1422, 10])) !== JSON.stringify([])) {
        throw new Error('Test case 2 failed');
    }
    if (JSON.stringify(candidate([12345, 2033, 111, 151])) !== JSON.stringify([111, 151])) {
        throw new Error('Test case 3 failed');
    }
    if (JSON.stringify(candidate([135, 103, 31])) !== JSON.stringify([31, 135])) {
        throw new Error('Test case 4 failed');
    }
    // Check some edge cases that are easy to work out by hand.
    return true;
}
//// BEGIN - CHECK
check(uniqueDigits);