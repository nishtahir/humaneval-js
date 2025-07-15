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
    return strings.filter(x => x.startsWith(prefix));
}

//// BEGIN - CANONICAL SOLUTION
// Same as above

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    if (JSON.stringify(candidate([], 'john')) !== JSON.stringify([])) {
        throw new Error('Test failed: expected [] for empty input');
    }
    const result = candidate(['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], 'xxx');
    if (JSON.stringify(result) !== JSON.stringify(['xxx', 'xxxAAA', 'xxx'])) {
        throw new Error('Test failed: unexpected result for prefix "xxx"');
    }
}

//// BEGIN - CHECK
check(filterByPrefix);

module.exports = { filterByPrefix };