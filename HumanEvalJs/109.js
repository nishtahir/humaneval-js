//// BEGIN - PROMPT
/**
 * We have an array 'arr' of N integers arr[1], arr[2], ..., arr[N]. The
 * numbers in the array will be randomly ordered. Your task is to determine if
 * it is possible to get an array sorted in non-decreasing order by performing
 * the following operation on the given array:
 * You are allowed to perform right shift operation any number of times.
 *
 * One right shift operation means shifting all elements of the array by one
 * position in the right direction. The last element of the array will be moved to
 * the starting position in the array i.e. 0th index.
 *
 * If it is possible to obtain the sorted array by performing the above operation
 * then return true else return false.
 * If the given array is empty then return true.
 *
 * Note: The given list is guaranteed to have unique elements.
 *
 * For Example:
 *
 * moveOneBall([3, 4, 5, 1, 2]) ==> true
 * Explanation: By performing 2 right shift operations, non-decreasing order can
 * be achieved for the given array.
 * moveOneBall([3, 5, 4, 1, 2]) ==> false
 * Explanation: It is not possible to get non-decreasing order for the given
 * array by performing any number of right shift operations.
 */

function moveOneBall(arr) {
//// BEGIN - CANONICAL SOLUTION
    if(arr.length === 0) {
        return true;
    }
    const sorted_array = [...arr].sort((a, b) => a - b);
    const min_value = Math.min(...arr);
    const min_index = arr.indexOf(min_value);
    const my_arr = arr.slice(min_index).concat(arr.slice(0, min_index));
    for (let i = 0; i < arr.length; i++) {
        if(my_arr[i], sorted_array[i]) {
            return false;
        }
    }
    return true;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([3, 4, 5, 1, 2]), true);
    assert.strictEqual(candidate([3, 5, 10, 1, 2]), true);
    assert.strictEqual(candidate([4, 3, 1, 2]), false);
    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate([3, 5, 4, 1, 2]), false);
    assert.strictEqual(candidate([]), true);
}

//// BEGIN - CHECK
check(moveOneBall);