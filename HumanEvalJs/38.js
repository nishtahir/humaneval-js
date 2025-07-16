//// BEGIN - PROMPT

/**
 * returns encoded string by cycling groups of three characters.
 * @param {string} s
 * @returns {string}
 */
function encodeCyclic(s) {
    // split string to groups. Each of length 3.
    const groups = [];
    for (let i = 0; i < Math.ceil(s.length / 3); i++) {
        groups.push(s.slice(3 * i, Math.min(3 * i + 3, s.length)));
    }
    // cycle elements in each group. Unless group has fewer elements than 3.
    const cycled = groups.map(group =>
        group.length === 3 ? group.slice(1) + group[0] : group
    );
    return cycled.join('');
}

/**
 * takes as input string encoded with encodeCyclic function. Returns decoded string.
 * @param {string} s
 * @returns {string}
 */
function decodeCyclic(s) {
//// BEGIN - CANONICAL SOLUTION
    return encodeCyclic(encodeCyclic(s));
}

//// BEGIN - TEST
const METADATA = {}

const assert = require('assert');
const letters = 'abcdefghijklmnopqrstuvwxyz';

function check(candidate) {
    for (let i = 0; i < 100; i++) {
        const len = Math.floor(Math.random() * 11) + 10; // random length between 10 and 20
        let str = '';
        for (let j = 0; j < len; j++) {
            str += letters[Math.floor(Math.random() * letters.length)];
        }
        const encoded = encodeCyclic(str);
        assert.strictEqual(candidate(encoded), str);
    }
}

//// BEGIN - CHECK
check(decodeCyclic);