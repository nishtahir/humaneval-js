//// BEGIN - PROMPT

/**
 * Test if given string is a palindrome
 * @param {string} string
 * @returns {boolean}
 */
function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}

/**
 * Find the shortest palindrome that begins with a supplied string.
 * Algorithm idea is simple:
 * - Find the longest postfix of supplied string that is a palindrome.
 * - Append to the end of the string reverse of a string prefix that comes before the palindromic suffix.
 * @param {string} string
 * @returns {string}
 * @example
 * makePalindrome('') // ''
 * makePalindrome('cat') // 'catac'
 * makePalindrome('cata') // 'catac'
 */
function makePalindrome(string) {
//// BEGIN - CANONICAL SOLUTION
    if (string === '') {
        return '';
    }

    let beginningOfSuffix = 0;

    while (!isPalindrome(string.slice(beginningOfSuffix))) {
        beginningOfSuffix += 1;
    }

    const prefix = string.slice(0, beginningOfSuffix);
    const reversedPrefix = prefix.split('').reverse().join('');
    return string + reversedPrefix;
}

//// BEGIN - TEST

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(''), '');
    assert.strictEqual(candidate('x'), 'x');
    assert.strictEqual(candidate('xyz'), 'xyzyx');
    assert.strictEqual(candidate('xyx'), 'xyx');
    assert.strictEqual(candidate('jerry'), 'jerryrrej');
}

//// BEGIN - CHECK
check(makePalindrome);