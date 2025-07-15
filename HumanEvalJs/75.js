//// BEGIN - PROMPT
/**
 * Write a function that returns true if the given number is the multiplication of 3 prime numbers
 * and false otherwise.
 * Knowing that (a) is less then 100.
 * Example:
 * is_multiply_prime(30) === true
 * 30 = 2 * 3 * 5
 */
//// BEGIN - CANONICAL SOLUTION
function is_multiply_prime(a) {
    function is_prime(n) {
        for (let j = 2; j < n; j++) {
            if (n % j === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= 100; i++) {
        if (!is_prime(i)) continue;
        for (let j = 2; j <= 100; j++) {
            if (!is_prime(j)) continue;
            for (let k = 2; k <= 100; k++) {
                if (!is_prime(k)) continue;
                if (i * j * k === a) return true;
            }
        }
    }
    return false;
}

//// BEGIN - TEST
function check(candidate) {
    console.assert(candidate(5) === false);
    console.assert(candidate(30) === true);
    console.assert(candidate(8) === true);
    console.assert(candidate(10) === false);
    console.assert(candidate(125) === true);
    console.assert(candidate(3 * 5 * 7) === true);
    console.assert(candidate(3 * 6 * 7) === false);
    console.assert(candidate(9 * 9 * 9) === false);
    console.assert(candidate(11 * 9 * 9) === false);
    console.assert(candidate(11 * 13 * 7) === true);
}

//// BEGIN - CHECK
check(is_multiply_prime);