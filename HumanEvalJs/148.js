const assert = require('assert');

//// BEGIN - PROMPT
/**
 * There are eight planets in our solar system: the closest to the Sun is Mercury,
 * the next one is Venus, then Earth, Mars, Jupiter, Saturn, Uranus, Neptune.
 * Write a function that takes two planet names as strings planet1 and planet2.
 * The function should return an array containing all planets whose orbits are
 * located between the orbit of planet1 and the orbit of planet2, sorted by
 * proximity to the sun.
 * The function should return an empty array if planet1 or planet2
 * are not correct planet names or if they are the same.
 *
 * Examples:
 * bf("Jupiter", "Neptune") ==> ["Saturn", "Uranus"]
 * bf("Earth", "Mercury") ==> ["Venus"]
 * bf("Mercury", "Uranus") ==> ["Venus", "Earth", "Mars", "Jupiter", "Saturn"]
 *
 * @param {string} planet1
 * @param {string} planet2
 * @returns {string[]}
 */
function bf(planet1, planet2) {
    //// BEGIN - CANONICAL SOLUTION
    const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    if (!planetNames.includes(planet1) || !planetNames.includes(planet2) || planet1 === planet2) {
        return [];
    }
    const index1 = planetNames.indexOf(planet1);
    const index2 = planetNames.indexOf(planet2);
    if (index1 < index2) {
        return planetNames.slice(index1 + 1, index2);
    } else {
        return planetNames.slice(index2 + 1, index1);
    }
    //// END - CANONICAL SOLUTION
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate("Jupiter", "Neptune"), ["Saturn", "Uranus"], "First test error: " + JSON.stringify(candidate("Jupiter", "Neptune")));
    assert.deepStrictEqual(candidate("Earth", "Mercury"), ["Venus"], "Second test error: " + JSON.stringify(candidate("Earth", "Mercury")));
    assert.deepStrictEqual(candidate("Mercury", "Uranus"), ["Venus", "Earth", "Mars", "Jupiter", "Saturn"], "Third test error: " + JSON.stringify(candidate("Mercury", "Uranus")));
    assert.deepStrictEqual(candidate("Neptune", "Venus"), ["Earth", "Mars", "Jupiter", "Saturn", "Uranus"], "Fourth test error: " + JSON.stringify(candidate("Neptune", "Venus")));

    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(candidate("Earth", "Earth"), [], "Edge case Earth-Earth failed");
    assert.deepStrictEqual(candidate("Mars", "Earth"), [], "Edge case Mars-Earth failed");
    assert.deepStrictEqual(candidate("Jupiter", "Makemake"), [], "Edge case invalid planet failed");
}
//// BEGIN - CHECK
check(bf);