//// BEGIN - PROMPT
/**
 * You're given a list of deposit and withdrawal operations on a bank account that starts with
 * zero balance. Your task is to detect if at any point the balance of the account falls below zero,
 * and at that point the function should return true. Otherwise it should return false.
 * @param {number[]} operations
 * @returns {boolean}
 * @example belowZero([1, 2, 3]); // false
 * @example belowZero([1, 2, -4, 5]); // true
 */
function belowZero(operations) {
//// BEGIN - CANONICAL SOLUTION
    let balance = 0;

    for (const op of operations) {
        balance += op;
        if (balance < 0) {
            return true;
        }
    }

    return false;
}
//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    console.assert(candidate([]) === false);
    console.assert(candidate([1, 2, -3, 1, 2, -3]) === false);
    console.assert(candidate([1, 2, -4, 5, 6]) === true);
    console.assert(candidate([1, -1, 2, -2, 5, -5, 4, -4]) === false);
    console.assert(candidate([1, -1, 2, -2, 5, -5, 4, -5]) === true);
    console.assert(candidate([1, -2, 2, -2, 5, -5, 4, -4]) === true);
}
//// BEGIN - CHECK
check(belowZero);