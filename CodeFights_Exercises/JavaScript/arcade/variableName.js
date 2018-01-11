// Correct variable names consist only of Latin letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string name

// Guaranteed constraints:
// 1 ≤ name.length ≤ 10.

// [output] boolean

// true if name is a correct variable name, false otherwise.

function variableName(name) {
    var regex = /^\d|\W/;
    // have a regex to match all disallowed variables, and then negate that test.     
    return !regex.test(name);
}