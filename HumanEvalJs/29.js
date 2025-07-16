//// BEGIN - PROMPT
/**
 * Filter an input list of strings only for ones that start with a given prefix.
 * @param {string[]} strings - input list of strings
 * @param {string} prefix - the prefix to filter by
 * @returns {string[]} filtered list of strings starting with prefix
 * @example
 * filterByPrefix([], 'a'); // []
 * filterByPrefix(['abc', 'bcd', 'cde', 'array'], 'a'); // ['abc', 'array']
 */
function filterByPrefix(strings, prefix) {
//// BEGIN - CANONICAL SOLUTION
    return strings.filter(x => x.startsWith(prefix));
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([], 'john'), [])
    assert.deepStrictEqual(candidate(['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], 'xxx'), ['xxx', 'xxxAAA', 'xxx'])
}

//// BEGIN - CHECK
check(filterByPrefix);
