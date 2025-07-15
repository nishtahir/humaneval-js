//// BEGIN - PROMPT
/**
 * Input to this function is a string representing multiple groups of nested parentheses separated by spaces.
 * For each group, output the deepest level of nesting of parentheses.
 * E.g. (()()) has maximum two levels of nesting while ((())) has three.
 *
 * @param {string} parenString
 * @returns {number[]}
 *
 * @example
 * parseNestedParens('(()()) ((())) () ((())()())'); // [2, 3, 1, 3]
 */
function parseNestedParens(parenString) {
//// BEGIN - CANONICAL SOLUTION
    function parseParenGroup(s) {
        let depth = 0;
        let maxDepth = 0;
        for (const c of s) {
            if (c === '(') {
                depth++;
                if (depth > maxDepth) maxDepth = depth;
            } else {
                depth--;
            }
        }
        return maxDepth;
    }
    return parenString.split(' ').filter(x => x).map(parseParenGroup);
}

//// BEGIN - TEST
const assert = require('assert');
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    assert.deepStrictEqual(candidate('(()()) ((())) () ((())()())'), [2, 3, 1, 3]);
    assert.deepStrictEqual(candidate('() (()) ((())) (((())))'), [1, 2, 3, 4]);
    assert.deepStrictEqual(candidate('(()(())((())))'), [4]);
}

//// BEGIN - CHECK
check (parseNestedParens)