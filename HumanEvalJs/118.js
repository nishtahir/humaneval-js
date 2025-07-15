//// BEGIN - PROMPT
/**
 * You are given a word. Your task is to find the closest vowel that stands between
 * two consonants from the right side of the word (case sensitive).
 *
 * Vowels in the beginning and ending doesn't count. Return empty string if you didn't
 * find any vowel that meets the above condition.
 *
 * You may assume that the given string contains English letters only.
 *
 * Example:
 * get_closest_vowel("yogurt") ==> "u"
 * get_closest_vowel("FULL") ==> "U"
 * get_closest_vowel("quick") ==> ""
 * get_closest_vowel("ab") ==> ""
 *
 * @param {string} word
 * @returns {string}
 */
function get_closest_vowel(word) {
//// BEGIN - CANONICAL SOLUTION
    if (word.length < 3) {
        return "";
    }
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    for (let i = word.length - 2; i > 0; i--) {
        const char = word[i];
        if (vowels.has(char)) {
            const prev = word[i - 1];
            const next = word[i + 1];
            if (!vowels.has(prev) && !vowels.has(next)) {
                return char;
            }
        }
    }
    return "";
}

const assert = require('assert');
//// BEGIN - TEST
function check(candidate) {
    assert(candidate("yogurt") === "u");
    assert(candidate("full") === "u");
    assert(candidate("easy") === "");
    assert(candidate("eAsy") === "");
    assert(candidate("ali") === "");
    assert(candidate("bad") === "a");
    assert(candidate("most") === "o");
    assert(candidate("ab") === "");
    assert(candidate("ba") === "");
    assert(candidate("quick") === "");
    assert(candidate("anime") === "i");
    assert(candidate("Asia") === "");
    assert(candidate("Above") === "o");
    // Check some edge cases that are easy to work out by hand.
    assert(true);
}
//// BEGIN - CHECK
check(get_closest_vowel);