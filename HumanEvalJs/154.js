//// BEGIN - PROMPT
/**
 * You are given 2 words. You need to return True if the second word or any of its rotations is a substring in the first word
 * cycpattern_check("abcd","abd") => False
 * cycpattern_check("hello","ell") => True
 * cycpattern_check("whassup","psus") => False
 * cycpattern_check("abab","baa") => True
 * cycpattern_check("efef","eeff") => False
 * cycpattern_check("himenss","simen") => True
 */
function cycpattern_check(a, b) {
//// BEGIN - CANONICAL SOLUTION
    const l = b.length;
    const pat = b + b;
    for (let i = 0; i <= a.length - l; i++) {
        for (let j = 0; j <= l; j++) {
            if (a.substr(i, l) === pat.substr(j, l)) {
                return true;
            }
        }
    }
    return false;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    assert.strictEqual(candidate("xyzw","xyw"), false, "test #0");
    assert.strictEqual(candidate("yello","ell"), true, "test #1");
    assert.strictEqual(candidate("whattup","ptut"), false, "test #2");
    assert.strictEqual(candidate("efef","fee"), true, "test #3");
    assert.strictEqual(candidate("abab","aabb"), false, "test #4");
    assert.strictEqual(candidate("winemtt","tinem"), true, "test #5");
}

//// BEGIN - CHECK
check(cycpattern_check);