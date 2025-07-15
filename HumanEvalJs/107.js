//// BEGIN - PROMPT
/**
 * Given a positive integer n, return an array that has the number of
 * even and odd integer palindromes that fall within the range (1, n), inclusive.
 *
 * Example 1:
 *   Input: 3
 *   Output: [1, 2]
 *   Explanation:
 *     Integer palindrome are 1, 2, 3. one of them is even, and two of them are odd.
 *
 * Example 2:
 *   Input: 12
 *   Output: [4, 6]
 *   Explanation:
 *     Integer palindrome are 1, 2, 3, 4, 5, 6, 7, 8, 9, 11. four of them are even, and 6 of them are odd.
 *
 * Note:
 *   1. 1 <= n <= 10^3
 *   2. returned array has the number of even and odd integer palindromes respectively.
 *
 * @param {number} n - The upper bound inclusive for checking palindromes.
 * @returns {number[]} An array where the first element is the count of even palindromes,
 *                     and the second element is the count of odd palindromes.
 */
function evenOddPalindrome(n) {
//// BEGIN - CANONICAL SOLUTION
    function isPalindrome(num) {
        const s = String(num);
        return s === s.split('').reverse().join('');
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1 && isPalindrome(i)) {
            oddCount++;
        } else if (i % 2 === 0 && isPalindrome(i)) {
            evenCount++;
        }
    }
    return [evenCount, oddCount];
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate(123), [8, 13]);
    assert.deepStrictEqual(candidate(12), [4, 6]);
    assert.deepStrictEqual(candidate(3), [1, 2]);
    assert.deepStrictEqual(candidate(63), [6, 8]);
    assert.deepStrictEqual(candidate(25), [5, 6]);
    assert.deepStrictEqual(candidate(19), [4, 6]);
    assert.deepStrictEqual(candidate(9), [4, 5], 'This prints if this assert fails 1 (good for debugging!)');

    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(candidate(1), [0, 1], 'This prints if this assert fails 2 (also good for debugging!)');
}

//// BEGIN - CHECK
check(evenOddPalindrome)