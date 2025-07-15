//// BEGIN - PROMPT
/**
 * For a given string, flip lowercase characters to uppercase and uppercase to lowercase.
 * @example
 *   flipCase('Hello'); // 'hELLO'
 * @param {string} string
 * @returns {string}
 */
function flipCase(string) {
//// BEGIN - CANONICAL SOLUTION
    return string
        .split('')
        .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
        .join('');
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(''), '');
    assert.strictEqual(candidate('Hello!'), 'hELLO!');
    assert.strictEqual(
        candidate('These violent delights have violent ends'),
        'tHESE VIOLENT DELIGHTS HAVE VIOLENT ENDS'
    );
}

//// BEGIN - CHECK
check(flipCase);