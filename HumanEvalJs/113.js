//// BEGIN - PROMPT
/**
 * Given an array of strings, where each string consists of only digits, return an array.
 * Each element i of the output should be "the number of odd elements in the
 * string i of the input." where all the i's should be replaced by the number
 * of odd digits in the i'th string of the input.
 *
 * @param {string[]} lst
 * @returns {string[]}
 *
 * @example
 * odd_count(['1234567']);
 * // ["the number of odd elements 4n the str4ng 4 of the 4nput."]
 * @example
 * odd_count(['3', '11111111']);
 * // ["the number of odd elements 1n the str1ng 1 of the 1nput.",
 * //  "the number of odd elements 8n the str8ng 8 of the 8nput."]
 */
//// BEGIN - CANONICAL SOLUTION
function odd_count(lst) {
    const res = [];
    for (const arr of lst) {
        let n = 0;
        for (const d of arr) {
            if (parseInt(d, 10) % 2 === 1) {
                n++;
            }
        }
        res.push("the number of odd elements " + n + "n the str" + n + "ng " + n + " of the " + n + "nput.");
    }
    return res;
}

//// BEGIN - TEST
function check(candidate) {
    const eqArray = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

    // Check some simple cases
    console.assert(eqArray(candidate(['1234567']), ["the number of odd elements 4n the str4ng 4 of the 4nput."]), "Test 1");
    console.assert(eqArray(candidate(['3', '11111111']), ["the number of odd elements 1n the str1ng 1 of the 1nput.", "the number of odd elements 8n the str8ng 8 of the 8nput."]), "Test 2");
    console.assert(eqArray(candidate(['271', '137', '314']), [
        'the number of odd elements 2n the str2ng 2 of the 2nput.',
        'the number of odd elements 3n the str3ng 3 of the 3nput.',
        'the number of odd elements 2n the str2ng 2 of the 2nput.'
    ]), "Test 3");

    // Check some edge cases that are easy to work out by hand.
    console.assert(true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(odd_count);