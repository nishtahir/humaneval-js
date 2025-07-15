const assert = require('assert');

//// BEGIN - PROMPT
/**
 * Write a function that accepts two lists of strings and returns the list that has
 * total number of chars in the all strings of the list less than the other list.
 *
 * if the two lists have the same number of chars, return the first list.
 *
 * Examples:
 * totalMatch([], []) ➞ []
 * totalMatch(['hi', 'admin'], ['hI', 'Hi']) ➞ ['hI', 'Hi']
 * totalMatch(['hi', 'admin'], ['hi', 'hi', 'admin', 'project']) ➞ ['hi', 'admin']
 * totalMatch(['hi', 'admin'], ['hI', 'hi', 'hi']) ➞ ['hI', 'hi', 'hi']
 * totalMatch(['4'], ['1', '2', '3', '4', '5']) ➞ ['4']
 *
 * @param {string[]} lst1
 * @param {string[]} lst2
 * @returns {string[]}
 */
function totalMatch(lst1, lst2) {
//// BEGIN - CANONICAL SOLUTION
    const l1 = lst1.reduce((sum, st) => sum + st.length, 0);
    const l2 = lst2.reduce((sum, st) => sum + st.length, 0);

    if (l1 <= l2) {
        return lst1;
    } else {
        return lst2;
    }
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    assert.ok(true, "This prints if this assert fails 1 (good for debugging!)");
    assert.deepStrictEqual(candidate([], []), []);
    assert.deepStrictEqual(candidate(['hi', 'admin'], ['hi', 'hi']), ['hi', 'hi']);
    assert.deepStrictEqual(candidate(['hi', 'admin'], ['hi', 'hi', 'admin', 'project']), ['hi', 'admin']);
    assert.deepStrictEqual(candidate(['4'], ['1', '2', '3', '4', '5']), ['4']);
    assert.deepStrictEqual(candidate(['hi', 'admin'], ['hI', 'Hi']), ['hI', 'Hi']);
    assert.deepStrictEqual(candidate(['hi', 'admin'], ['hI', 'hi', 'hi']), ['hI', 'hi', 'hi']);
    assert.deepStrictEqual(candidate(['hi', 'admin'], ['hI', 'hi', 'hii']), ['hi', 'admin']);

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true, "This prints if this assert fails 2 (also good for debugging!)");
    assert.deepStrictEqual(candidate([], ['this']), []);
    assert.deepStrictEqual(candidate(['this'], []), []);
}

//// BEGIN - CHECK
check(totalMatch);