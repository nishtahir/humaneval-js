//// BEGIN - PROMPT
/**
 * The Brazilian factorial is defined as:
 * brazilian_factorial(n) = n! * (n-1)! * (n-2)! * ... * 1!
 * where n > 0
 *
 * For example:
 * >>> special_factorial(4)
 * 288
 *
 * The function will receive an integer as input and should return the special
 * factorial of this integer.
 */
 
//// BEGIN - CANONICAL SOLUTION
function special_factorial(n) {
    let fact_i = 1;
    let special_fact = 1;
    for (let i = 1; i <= n; i++) {
        fact_i *= i;
        special_fact *= fact_i;
    }
    return special_fact;
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    if (candidate(4) !== 288) throw new Error("Test 4");
    if (candidate(5) !== 34560) throw new Error("Test 5");
    if (candidate(7) !== 125411328000) throw new Error("Test 7");
    // Check some edge cases that are easy to work out by hand.
    if (candidate(1) !== 1) throw new Error("Test 1");
}

//// BEGIN - CHECK
check(special_factorial);