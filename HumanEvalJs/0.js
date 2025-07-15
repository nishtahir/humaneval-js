//// BEGIN - PROMPT
/**
 * Check if in given array of numbers, any two numbers are closer to each other than threshold.
 *
 * @param {number[]} numbers - List of numbers.
 * @param {number} threshold - Threshold for closeness.
 * @returns {boolean} True if any two numbers are closer than threshold.
 * @example
 * hasCloseElements([1.0, 2.0, 3.0], 0.5); // false
 * @example
 * hasCloseElements([1.0, 2.8, 3.0, 4.0, 5.0, 2.0], 0.3); // true
 */
function hasCloseElements(numbers, threshold) {
//// BEGIN - CANONICAL SOLUTION
    for (let idx = 0; idx < numbers.length; idx++) {
        const elem = numbers[idx];
        for (let idx2 = 0; idx2 < numbers.length; idx2++) {
            if (idx !== idx2) {
                const elem2 = numbers[idx2];
                const distance = Math.abs(elem - elem2);
                if (distance < threshold) {
                    return true;
                }
            }
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
    console.assert(candidate([1.0, 2.0, 3.9, 4.0, 5.0, 2.2], 0.3) === true);
    console.assert(candidate([1.0, 2.0, 3.9, 4.0, 5.0, 2.2], 0.05) === false);
    console.assert(candidate([1.0, 2.0, 5.9, 4.0, 5.0], 0.95) === true);
    console.assert(candidate([1.0, 2.0, 5.9, 4.0, 5.0], 0.8) === false);
    console.assert(candidate([1.0, 2.0, 3.0, 4.0, 5.0, 2.0], 0.1) === true);
    console.assert(candidate([1.1, 2.2, 3.1, 4.1, 5.1], 1.0) === true);
    console.assert(candidate([1.1, 2.2, 3.1, 4.1, 5.1], 0.5) === false);
}

//// BEGIN - CHECK
check(hasCloseElements);