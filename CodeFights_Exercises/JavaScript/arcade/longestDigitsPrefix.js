// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString="123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 35.

// [output] string

function longestDigitsPrefix(inputString) {
    // This sounds like a good excuse to use regex.
    // Strip out the longest strings. ONLY if it starts with a number.
    // Then, just check the first element of the array if it exists or not!
    str = inputString.match(/^\d+/g);
    return(str !== null ? str[0] : "");
}