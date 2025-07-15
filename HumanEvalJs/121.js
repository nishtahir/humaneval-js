//// BEGIN - PROMPT
/**
 * Given a non-empty array of integers, return the sum of all of the odd elements that are in even positions.
 *
 * Examples:
 * solution([5, 8, 7, 1]) ==> 12
 * solution([3, 3, 3, 3, 3]) ==> 9
 * solution([30, 13, 24, 321]) ==> 0
 *
 * @param {number[]} lst
 * @returns {number}
 */
function solution(lst) {
//// BEGIN - CANONICAL SOLUTION
    return lst.reduce((sum, x, idx) => (idx % 2 === 0 && x % 2 === 1 ? sum + x : sum), 0);
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    if (candidate([5, 8, 7, 1])    !== 12) throw new Error('Test failed: [5,8,7,1]');
    if (candidate([3, 3, 3, 3, 3]) !== 9) throw new Error('Test failed: [3,3,3,3,3]');
    if (candidate([30, 13, 24, 321]) !== 0) throw new Error('Test failed: [30,13,24,321]');
    if (candidate([5, 9]) !== 5) throw new Error('Test failed: [5,9]');
    if (candidate([2, 4, 8]) !== 0) throw new Error('Test failed: [2,4,8]');
    if (candidate([30, 13, 23, 32]) !== 23) throw new Error('Test failed: [30,13,23,32]');
    if (candidate([3, 13, 2, 9]) !== 3) throw new Error('Test failed: [3,13,2,9]');
}

//// BEGIN - CHECK
check(solution)