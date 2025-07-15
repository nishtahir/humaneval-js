//// BEGIN - PROMPT
/**
 * Given a positive floating point number, it can be decomposed into
 * an integer part (largest integer smaller than given number) and decimals
 * (leftover part always smaller than 1).
 *
 * Return the decimal part of the number.
 * @example
 * // returns 0.5
 * truncateNumber(3.5);
 * @param {number} number - The number to truncate.
 * @returns {number} The decimal part of the number.
 */
function truncateNumber(number) {
    //// BEGIN - CANONICAL SOLUTION
    return number % 1.0;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    if (candidate(3.5) !== 0.5) {
        throw new Error(`Expected 0.5, got ${candidate(3.5)}`);
    }
    if (Math.abs(candidate(1.33) - 0.33) >= 1e-6) {
        throw new Error(`Expected approx 0.33, got ${candidate(1.33)}`);
    }
    if (Math.abs(candidate(123.456) - 0.456) >= 1e-6) {
        throw new Error(`Expected approx 0.456, got ${candidate(123.456)}`);
    }
}

//// BEGIN - CHECK
check(truncateNumber);