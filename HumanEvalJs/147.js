//// BEGIN - PROMPT
/**
 * You are given a positive integer n. You have to create an integer array a of length n.
 * For each i (1 ≤ i ≤ n), the value of a[i] = i * i - i + 1.
 * Return the number of triples (a[i], a[j], a[k]) of a where i < j < k,
 * and a[i] + a[j] + a[k] is a multiple of 3.
 *
 * Example :
 *   Input: n = 5
 *   Output: 1
 *   Explanation:
 *     a = [1, 3, 7, 13, 21]
 *     The only valid triple is (1, 7, 13).
 */
function get_max_triples(n) {
//// BEGIN - CANONICAL SOLUTION
    const A = [];
    for (let i = 1; i <= n; i++) {
        A.push(i * i - i + 1);
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if ((A[i] + A[j] + A[k]) % 3 === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(5), 1);
    assert.strictEqual(candidate(6), 4);
    assert.strictEqual(candidate(10), 36);
    assert.strictEqual(candidate(100), 53361);
}

//// BEGIN - CHECK
check(get_max_triples);