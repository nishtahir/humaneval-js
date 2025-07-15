//// BEGIN - PROMPT
/**
 * Evaluates polynomial with coefficients xs at point x.
 * returns xs[0] + xs[1] * x + xs[2] * x^2 + ... xs[n] * x^n
 * @param {number[]} xs
 * @param {number} x
 * @returns {number}
 */
function poly(xs, x) {
    return xs.reduce((sum, coeff, i) => sum + coeff * Math.pow(x, i), 0);
}

//// BEGIN - CANONICAL SOLUTION
/**
 * xs are coefficients of a polynomial.
 * findZero finds x such that poly(xs, x) = 0.
 * findZero returns only one zero point, even if there are many.
 * Moreover, findZero only takes list xs having even number of coefficients
 * and largest non zero coefficient as it guarantees
 * a solution.
 * @param {number[]} xs
 * @returns {number}
 */
function findZero(xs) {
    let begin = -1.0;
    let end = 1.0;
    while (poly(xs, begin) * poly(xs, end) > 0) {
        begin *= 2.0;
        end *= 2.0;
    }
    while (end - begin > 1e-10) {
        const center = (begin + end) / 2.0;
        if (poly(xs, center) * poly(xs, begin) > 0) {
            begin = center;
        } else {
            end = center;
        }
    }
    return begin;
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
    for (let t = 0; t < 100; t++) {
        const ncoeff = 2 * Math.floor(Math.random() * 4 + 1);
        const coeffs = [];
        for (let i = 0; i < ncoeff; i++) {
            let coeff = Math.floor(Math.random() * 21) - 10;
            if (coeff === 0) coeff = 1;
            coeffs.push(coeff);
        }
        const sol = candidate(coeffs.slice());
        assert(Math.abs(poly(coeffs, sol)) < 1e-4);
    }
}

//// BEGIN - CHECK
check(findZero);