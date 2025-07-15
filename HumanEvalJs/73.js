//// BEGIN - PROMPT
/**
 * Given an array arr of integers, find the minimum number of elements that
 * need to be changed to make the array palindromic. A palindromic array is an array that
 * is read the same backwards and forwards. In one change, you can change one element to any other element.
 *
 * For example:
 * smallest_change([1,2,3,5,4,7,9,6]) === 4
 * smallest_change([1, 2, 3, 4, 3, 2, 2]) === 1
 * smallest_change([1, 2, 3, 2, 1]) === 0
 */
//// BEGIN - CANONICAL SOLUTION
function smallest_change(arr) {
    let ans = 0;
    const n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (arr[i] !== arr[n - i - 1]) {
            ans++;
        }
    }
    return ans;
}
//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    console.assert(candidate([1,2,3,5,4,7,9,6]) === 4);
    console.assert(candidate([1, 2, 3, 4, 3, 2, 2]) === 1);
    console.assert(candidate([1, 4, 2]) === 1);
    console.assert(candidate([1, 4, 4, 2]) === 1);

    // Check some edge cases that are easy to work out by hand.
    console.assert(candidate([1, 2, 3, 2, 1]) === 0);
    console.assert(candidate([3, 1, 1, 3]) === 0);
    console.assert(candidate([1]) === 0);
    console.assert(candidate([0, 1]) === 1);
}
//// BEGIN - CHECK
check(smallest_change);