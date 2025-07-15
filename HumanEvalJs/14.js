//// BEGIN - PROMPT
/**
 * Return list of all prefixes from shortest to longest of the input string
 * @param {string} str
 * @returns {string[]}
 * @example
 * allPrefixes('abc'); // ['a', 'ab', 'abc']
 */
function allPrefixes(str) {
//// BEGIN - CANONICAL SOLUTION
    const result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str.slice(0, i + 1));
    }
    return result;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate(''), []);
    assert.deepStrictEqual(candidate('asdfgh'), ['a', 'as', 'asd', 'asdf', 'asdfg', 'asdfgh']);
    assert.deepStrictEqual(candidate('WWW'), ['W', 'WW', 'WWW']);
}

//// BEGIN - CHECK
check(allPrefixes);