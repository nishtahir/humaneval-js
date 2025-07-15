//// BEGIN - PROMPT
/**
 * Filter an input array of strings only for ones that contain the given substring.
 *
 * Examples:
 *   filterBySubstring([], 'a'); // []
 *   filterBySubstring(['abc', 'bacd', 'cde', 'array'], 'a'); // ['abc', 'bacd', 'array']
 * @param {string[]} strings - Array of input strings.
 * @param {string} substring - Substring to filter by.
 * @returns {string[]} Filtered array of strings containing the substring.
 */
function filterBySubstring(strings, substring) {
//// BEGIN - CANONICAL SOLUTION
    return strings.filter(x => x.includes(substring));
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([], 'john'), []);
    assert.deepStrictEqual(candidate(['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], 'xxx'), ['xxx', 'xxxAAA', 'xxx']);
    assert.deepStrictEqual(candidate(['xxx', 'asd', 'aaaxxy', 'john doe', 'xxxAAA', 'xxx'], 'xx'), ['xxx', 'aaaxxy', 'xxxAAA', 'xxx']);
    assert.deepStrictEqual(candidate(['grunt', 'trumpet', 'prune', 'gruesome'], 'run'), ['grunt', 'prune']);
}

//// BEGIN - CHECK
check(filterBySubstring);