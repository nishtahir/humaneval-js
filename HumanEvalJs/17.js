//// BEGIN - PROMPT
/**
 * Input to this function is a string representing musical notes in a special ASCII format.
 * Your task is to parse this string and return list of integers corresponding to how many beats does each note last.
 *
 * Here is a legend:
 * 'o' - whole note, lasts four beats
 * 'o|' - half note, lasts two beats
 * '.|' - quarter note, lasts one beat
 *
 * @param {string} musicString
 * @returns {number[]}
 * @example
 * parseMusic('o o| .| o| o| .| .| .| .| o o')
 * // returns [4, 2, 1, 2, 2, 1, 1, 1, 1, 4, 4]
 */
function parseMusic(musicString) {
//// BEGIN - CANONICAL SOLUTION
    const noteMap = { 'o': 4, 'o|': 2, '.|': 1 };
    return musicString.split(' ').filter(x => x).map(x => noteMap[x]);
}

//// BEGIN - TEST
const METADATA = { author: 'jt', dataset: 'test' };
const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate(''), []);
    assert.deepStrictEqual(candidate('o o o o'), [4, 4, 4, 4]);
    assert.deepStrictEqual(candidate('.| .| .| .|'), [1, 1, 1, 1]);
    assert.deepStrictEqual(candidate('o| o| .| .| o o o o'), [2, 2, 1, 1, 4, 4, 4, 4]);
    assert.deepStrictEqual(candidate('o| .| o| .| o o| o o|'), [2, 1, 2, 1, 4, 2, 4, 2]);
}
//// BEGIN - CHECK
check(parseMusic);