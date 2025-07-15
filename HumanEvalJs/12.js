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
//// BEGIN - CANONICAL SOLUTION
function longest(strings) {
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

function check(candidate) {
    if (candidate([]) !== null) throw new Error('Test failed: expected null for empty array');
    if (candidate(['x', 'y', 'z']) !== 'x') throw new Error("Test failed: expected 'x' for ['x','y','z']");
    if (candidate(['x', 'yyy', 'zzzz', 'www', 'kkkk', 'abc']) !== 'zzzz') throw new Error("Test failed: expected 'zzzz' for mixed lengths");
}
//// BEGIN - CHECK
check(longest);