//// BEGIN - PROMPT
/**
 * sum_to_n is a function that sums numbers from 1 to n.
 *
 * @param {number} n - The number up to which to sum.
 * @returns {number} The sum from 1 to n.
 *
 * @example
 * sum_to_n(30); // 465
 * sum_to_n(100); // 5050
 * sum_to_n(5); // 15
 * sum_to_n(10); // 55
 * sum_to_n(1); // 1
 */
function sumToN(n) {
//// BEGIN - CANONICAL SOLUTION
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//// BEGIN - TEST
const METADATA = {};

function check(candidate) {
    console.assert(candidate(1) === 1);
    console.assert(candidate(6) === 21);
    console.assert(candidate(11) === 66);
    console.assert(candidate(30) === 465);
    console.assert(candidate(100) === 5050);
}

//// BEGIN - CHECK
check(sumToN);