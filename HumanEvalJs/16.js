//// BEGIN - PROMPT
/**
 * Given a string, find out how many distinct characters (regardless of case) it consists of
 * @param {string} str
 * @returns {number}
 * @example
 * countDistinctCharacters('xyzXYZ'); // 3
 * countDistinctCharacters('Jerry');  // 4
 */

function countDistinctCharacters(str) {
//// BEGIN - CANONICAL SOLUTION
    return new Set(str.toLowerCase()).size;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(''), 0);
    assert.strictEqual(candidate('abcde'), 5);
    assert.strictEqual(candidate('abcde' + 'cade' + 'CADE'), 5);
    assert.strictEqual(candidate('aaaaAAAAaaaa'), 1);
    assert.strictEqual(candidate('Jerry jERRY JeRRRY'), 5);
}

//// BEGIN - CHECK
check(countDistinctCharacters);