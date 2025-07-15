//// BEGIN - PROMPT
/**
 * Out of list of strings, return the longest one. Return the first one in case of multiple
 * strings of the same length. Return null in case the input list is empty.
 * @param {string[]} strings
 * @returns {string|null}
 * @example
 * longest([]) // null
 * longest(['a', 'b', 'c']) // 'a'
 * longest(['a', 'bb', 'ccc']) // 'ccc'
 */
function longest(strings) {
//// BEGIN - CANONICAL SOLUTION
    if (!strings || strings.length === 0) {
        return null;
    }
    const maxlen = Math.max(...strings.map(s => s.length));
    for (const s of strings) {
        if (s.length === maxlen) {
            return s;
        }
    }
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.equal(candidate([]), null)
    assert.equal(candidate(['x', 'y', 'z']), 'x')
    assert.equal(candidate(['x', 'yyy', 'zzzz', 'www', 'kkkk', 'abc']), 'zzzz')
}

//// BEGIN - CHECK
check(longest);