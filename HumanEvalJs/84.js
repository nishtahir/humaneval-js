//// BEGIN - PROMPT
/**
 * Given a positive integer N, return the total sum of its digits in binary.
 *
 * Example:
 *   For N = 1000, the sum of digits will be 1 the output should be "1".
 *   For N = 150, the sum of digits will be 6 the output should be "110".
 *   For N = 147, the sum of digits will be 12 the output should be "1100".
 *
 * @param {number} N - Constraints: 0 ≤ N ≤ 10000.
 * @returns {string} a string of binary number
 */
function solve(N) {
//// BEGIN - CANONICAL SOLUTION
    const sum = N.toString().split('').reduce((acc, ch) => acc + Number(ch), 0);
    return sum.toString(2);
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    if (candidate(1000) !== "1") throw new Error("Error");
    if (candidate(150) !== "110") throw new Error("Error");
    if (candidate(147) !== "1100") throw new Error("Error");

    // Check some edge cases that are easy to work out by hand.
    if (candidate(333) !== "1001") throw new Error("Error");
    if (candidate(963) !== "10010") throw new Error("Error");
}

//// BEGIN - CHECK
check(solve);