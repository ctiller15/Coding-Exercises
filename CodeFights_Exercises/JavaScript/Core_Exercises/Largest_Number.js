/*
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
largestNumber(n) = 99.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 7.

[output] integer

The largest integer of length n.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

*/

function largestNumber(n) {
    // I considered a more fun solution adding strings, but I figured why bother?
    return(10**n - 1);
}