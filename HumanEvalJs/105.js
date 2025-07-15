//// BEGIN - PROMPT
/**
 * Given an array of integers, sort the integers that are between 1 and 9 inclusive,
 * reverse the resulting array, and then replace each digit by its corresponding name from
 * "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine".
 *
 * For example:
 *   arr = [2, 1, 1, 4, 5, 8, 2, 3]
 *         -> sort arr -> [1, 1, 2, 2, 3, 4, 5, 8]
 *         -> reverse arr -> [8, 5, 4, 3, 2, 2, 1, 1]
 *   return ["Eight", "Five", "Four", "Three", "Two", "Two", "One", "One"]
 *
 *   If the array is empty, return an empty array:
 *   arr = []
 *   return []
 *
 *   If the array has any strange number ignore it:
 *   arr = [1, -1 , 55]
 *         -> sort arr -> [-1, 1, 55]
 *         -> reverse arr -> [55, 1, -1]
 *   return = ['One']
 *
 * @param {number[]} arr
 * @returns {string[]}
 */

//// BEGIN - CANONICAL SOLUTION
function by_length(arr) {
    const dic = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    };
    const sortedArr = arr.slice().sort((a, b) => b - a);
    const newArr = [];
    for (const v of sortedArr) {
        if (dic[v]) {
            newArr.push(dic[v]);
        }
    }
    return newArr;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.ok(true, "This prints if this assert fails 1 (good for debugging!)");
    assert.deepStrictEqual(candidate([2, 1, 1, 4, 5, 8, 2, 3]), ["Eight", "Five", "Four", "Three", "Two", "Two", "One", "One"], "Error");
    assert.deepStrictEqual(candidate([]), [], "Error");
    assert.deepStrictEqual(candidate([1, -1, 55]), ['One'], "Error");

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true, "This prints if this assert fails 2 (also good for debugging!)");
    assert.deepStrictEqual(candidate([1, -1, 3, 2]), ["Three", "Two", "One"]);
    assert.deepStrictEqual(candidate([9, 4, 8]), ["Nine", "Eight", "Four"]);
}

//// BEGIN - CHECK
check(by_length);