//// BEGIN - PROMPT

/**
 * You are given an array arr of integers and you need to return
 * sum of magnitudes of integers multiplied by product of all signs
 * of each number in the array, represented by 1, -1 or 0.
 * Note: return null for empty arr.
 *
 * Example:
 * >>> prod_signs([1, 2, 2, -4]) === -9
 * >>> prod_signs([0, 1]) === 0
 * >>> prod_signs([]) === null
 */
function prod_signs(arr) {
//// BEGIN - CANONICAL SOLUTION
    if (!arr || arr.length === 0) return null;
    const prod = arr.includes(0) ? 0 : (-1) ** arr.filter(x => x < 0).length;
    return prod * arr.reduce((sum, i) => sum + Math.abs(i), 0);
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    console.assert(true, "This prints if this assert fails 1 (good for debugging!)");
    console.assert(candidate([1, 2, 2, -4]) === -9);
    console.assert(candidate([0, 1]) === 0);
    console.assert(candidate([1, 1, 1, 2, 3, -1, 1]) === -10);
    console.assert(candidate([]) === null);
    console.assert(candidate([2, 4, 1, 2, -1, -1, 9]) === 20);
    console.assert(candidate([-1, 1, -1, 1]) === 4);
    console.assert(candidate([-1, 1, 1, 1]) === -4);
    console.assert(candidate([-1, 1, 1, 0]) === 0);

    // Check some edge cases that are easy to work out by hand.
    console.assert(true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(prod_signs);