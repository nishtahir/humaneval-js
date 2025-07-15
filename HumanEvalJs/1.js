//// BEGIN - PROMPT

/**
 * Input to this function is a string containing multiple groups of nested parentheses. Your goal is to
 * separate those groups into separate strings and return the list of those.
 * Separate groups are balanced (each open brace is properly closed) and not nested within each other.
 * Ignore any spaces in the input string.
 * @example
 * // returns ['()', '(())', '(()())']
 * separateParenGroups('( ) (( )) (( )( ))');
 * @param {string} parenString
 * @returns {string[]}
*/
function separateParenGroups(parenString) {
    //// BEGIN - CANONICAL SOLUTION
    const result = [];
    let currentString = [];
    let currentDepth = 0;
    
    for (const c of parenString) {
        if (c === '(') {
            currentDepth++;
            currentString.push(c);
        } else if (c === ')') {
            currentDepth--;
            currentString.push(c);
            
            if (currentDepth === 0) {
                result.push(currentString.join(''));
                currentString.length = 0;
            }
        }
    }
    
    return result;
}

//// BEGIN - TEST
const assert = require('assert');

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    assert.deepStrictEqual(candidate('(()()) ((())) () ((())()())'), [
        '(()())', '((()))', '()', '((())()())'
    ]);
    assert.deepStrictEqual(candidate('() (()) ((())) (((())))'), [
        '()', '(())', '((()))', '(((())))'
    ]);
    assert.deepStrictEqual(candidate('(()(())((())))'), [
        '(()(())((())))'
    ]);
    assert.deepStrictEqual(candidate('( ) (( )) (( )( ))'), ['()', '(())', '(()())']);
}

//// BEGIN - CHECK
check(separateParenGroups);