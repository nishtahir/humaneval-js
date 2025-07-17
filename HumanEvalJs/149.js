//// BEGIN - PROMPT
/**
 * Write a function that accepts an array of strings as a parameter,
 * deletes the strings that have odd lengths from it,
 * and returns the resulting array with sorted order.
 * The array may contain duplicates.
 * The order should be ascending by length of each word.
 * If two words have the same length, sort alphabetically.
 * The function returns an array of strings in sorted order.
 *
 * For example:
 * sorted_list_sum(["aa", "a", "aaa"]) => ["aa"]
 * sorted_list_sum(["ab", "a", "aaa", "cd"]) => ["ab", "cd"]
 */
function sorted_list_sum(lst) {
//// BEGIN - CANONICAL SOLUTION
    lst.sort();
    const new_lst = [];
    for (const i of lst) {
        if (i.length % 2 === 0) {
            new_lst.push(i);
        }
    }
    return new_lst.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate(["aa", "a", "aaa"]), ["aa"]);
    assert.deepStrictEqual(candidate(["school", "AI", "asdf", "b"]), ["AI", "asdf", "school"]);
    assert.deepStrictEqual(candidate(["d", "b", "c", "a"]), []);
    assert.deepStrictEqual(candidate(["d", "dcba", "abcd", "a"]), ["abcd", "dcba"]);

    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(candidate(["AI", "ai", "au"]), ["AI", "ai", "au"]);
    assert.deepStrictEqual(candidate(["a", "b", "b", "c", "c", "a"]), []);
    assert.deepStrictEqual(candidate(["aaaa", "bbbb", "dd", "cc"]), ["cc", "dd", "aaaa", "bbbb"]);
}

//// BEGIN - CHECK
check(sorted_list_sum);