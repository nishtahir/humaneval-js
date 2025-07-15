//// BEGIN - PROMPT
/**
 * Find how many times a given substring can be found in the original string. Count overlapping cases.
 * @param {string} string
 * @param {string} substring
 * @returns {number}
 *
 * Examples:
 *   howManyTimes('', 'a') // 0
 *   howManyTimes('aaa', 'a') // 3
 *   howManyTimes('aaaa', 'aa') // 3
 */
function howManyTimes(string, substring) {
//// BEGIN - CANONICAL SOLUTION
    let times = 0;
    for (let i = 0; i <= string.length - substring.length; i++) {
        if (string.slice(i, i + substring.length) === substring) {
            times++;
        }
    }
    return times;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    const assert = require('assert');
    assert(candidate('', 'x') === 0);
    assert(candidate('xyxyxyx', 'x') === 4);
    assert(candidate('cacacacac', 'cac') === 4);
    assert(candidate('john doe', 'john') === 1);
}

//// BEGIN - CHECK
check(howManyTimes);