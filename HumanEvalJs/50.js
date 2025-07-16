//// BEGIN - PROMPT
/**
 * returns encoded string by shifting every character by 5 in the alphabet.
 * @param {string} s
 * @returns {string}
 */
function encodeShift(s) {
    return s.split('').map(ch => {
        const code = ch.charCodeAt(0);
        const aCode = 'a'.charCodeAt(0);
        return String.fromCharCode(((code + 5 - aCode) % 26) + aCode);
    }).join('');
}

/**
 * takes as input string encoded with encodeShift function. Returns decoded string.
 * @param {string} s
 * @returns {string}
 */
function decodeShift(s) {
//// BEGIN - CANONICAL SOLUTION
    return s.split('').map(ch => {
        const code = ch.charCodeAt(0);
        const aCode = 'a'.charCodeAt(0);
        return String.fromCharCode(((code - 5 - aCode + 26) % 26) + aCode);
    }).join('');
}

//// BEGIN - TEST

const METADATA = {};
const assert = require('assert');

function check(candidate) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 100; i++) {
        const len = Math.floor(Math.random() * 11) + 10;
        let str = '';
        for (let j = 0; j < len; j++) {
            str += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        const encodedStr = encodeShift(str);
        assert.strictEqual(candidate(encodedStr), str);
    }
}

//// BEGIN - CHECK

check(decodeShift);