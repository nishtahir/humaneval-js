//// BEGIN - PROMPT

/**
 * brackets is a string of "<" and ">".
 * Returns true if every opening bracket has a corresponding closing bracket.
 *
 * @param {string} brackets
 * @returns {boolean}
 *
 * @example
 * correct_bracketing("<") // false
 * correct_bracketing("<>") // true
 * correct_bracketing("<<><>>") // true
 * correct_bracketing("><<>") // false
 */
function correct_bracketing(brackets) {
//// BEGIN - CANONICAL SOLUTION
    let depth = 0;
    for (const b of brackets) {
        if (b === "<") {
            depth++;
        } else {
            depth--;
        }
        if (depth < 0) {
            return false;
        }
    }
    return depth === 0;
}

//// BEGIN - TEST

const METADATA = {};

function check(candidate) {
    function assert(condition) {
        if (!condition) throw new Error('Assertion failed');
    }
    assert(candidate("<>"));
    assert(candidate("<<><>>"));
    assert(candidate("<><><<><>><>"));
    assert(candidate("<><><<<><><>><>><<><><<>>>"));
    assert(!candidate("<<<><>>>>"));
    assert(!candidate("><<>"));
    assert(!candidate("<"));
    assert(!candidate("<<<<"));
    assert(!candidate(">"));
    assert(!candidate("<<>"));
    assert(!candidate("<><><<><>><>><<>"));
    assert(!candidate("<><><<><>><>>><>"));
}

//// BEGIN - CHECK

check(correct_bracketing);