//// BEGIN - PROMPT
const crypto = require('crypto');
/**
 * Given a string 'text', return its md5 hash equivalent string.
 * If 'text' is an empty string, return null.
 *
 * @param {string} text
 * @returns {string|null}
 */
function stringToMd5(text) {
//// BEGIN - CANONICAL SOLUTION
  if (text === '') {
    return null;
  }
  return crypto.createHash('md5').update(text, 'ascii').digest('hex');
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
  // Check some simple cases
  assert.strictEqual(candidate('Hello world'), '3e25960a79dbc69b674cd4ec67a72c62');
  assert.strictEqual(candidate(''), null);
  assert.strictEqual(candidate('A B C'), '0ef78513b0cb8cef12743f5aeb35f888');
  assert.strictEqual(candidate('password'), '5f4dcc3b5aa765d61d8327deb882cf99');
  // Check some edge cases that are easy to work out by hand.
  assert.ok(true);
}

//// BEGIN - CHECK
check(stringToMd5);