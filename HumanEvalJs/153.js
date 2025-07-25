//// BEGIN - PROMPT
/**
 * You will be given the name of a class (a string) and a list of extensions.
 * The extensions are to be used to load additional classes to the class. The
 * strength of the extension is as follows: Let CAP be the number of the uppercase
 * letters in the extension's name, and let SM be the number of lowercase letters 
 * in the extension's name, the strength is given by the fraction CAP - SM. 
 * You should find the strongest extension and return a string in this 
 * format: ClassName.StrongestExtensionName.
 * If there are two or more extensions with the same strength, you should
 * choose the one that comes first in the list.
 * For example, if you are given "Slices" as the class and a list of the
 * extensions: ['SErviNGSliCes', 'Cheese', 'StuFfed'] then you should
 * return 'Slices.SErviNGSliCes' since 'SErviNGSliCes' is the strongest extension 
 * (its strength is -1).
 * Example:
 * for Strongest_Extension('my_class', ['AA', 'Be', 'CC']) == 'my_class.AA'
 */

//// BEGIN - CANONICAL SOLUTION
function Strongest_Extension(className, extensions) {
    let strong = extensions[0];
    const countUpper = s => (s.match(/[A-Z]/g) || []).length;
    const countLower = s => (s.match(/[a-z]/g) || []).length;
    let myVal = countUpper(strong) - countLower(strong);
    for (const s of extensions) {
        const val = countUpper(s) - countLower(s);
        if (val > myVal) {
            strong = s;
            myVal = val;
        }
    }
    return `${className}.${strong}`;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate('Watashi', ['tEN', 'niNE', 'eIGHt8OKe']), 'Watashi.eIGHt8OKe');
    assert.strictEqual(candidate('Boku123', ['nani', 'NazeDa', 'YEs.WeCaNe', '32145tggg']), 'Boku123.YEs.WeCaNe');
    assert.strictEqual(candidate('__YESIMHERE', ['t', 'eMptY', 'nothing', 'zeR00', 'NuLl__', '123NoooneB321']), '__YESIMHERE.NuLl__');
    assert.strictEqual(candidate('K', ['Ta', 'TAR', 't234An', 'cosSo']), 'K.TAR');
    assert.strictEqual(candidate('__HAHA', ['Tab', '123', '781345', '-_-']), '__HAHA.123');
    assert.strictEqual(candidate('YameRore', ['HhAas', 'okIWILL123', 'WorkOut', 'Fails', '-_-']), 'YameRore.okIWILL123');
    assert.strictEqual(candidate('finNNalLLly', ['Die', 'NowW', 'Wow', 'WoW']), 'finNNalLLly.WoW');

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate('_', ['Bb', '91245']), '_.Bb');
    assert.strictEqual(candidate('Sp', ['671235', 'Bb']), 'Sp.671235');
}

//// BEGIN - CHECK
check(Strongest_Extension);