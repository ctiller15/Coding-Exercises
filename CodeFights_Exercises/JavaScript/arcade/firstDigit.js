// Find the leftmost digit that occurs in a given string.

// Example

// For inputString = "var_1__Int", the output should be
// firstDigit(inputString) = '1';
// For inputString = "q2q-q", the output should be
// firstDigit(inputString) = '2';
// For inputString = "0ss", the output should be
// firstDigit(inputString) = '0'.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string containing at least one digit.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 10.

// [output] char

// Using the isNaN trick I learned earlier.

// function firstDigit(inputString) {
//     for(x in inputString) {
//         if(!isNaN(inputString[x])) return inputString[x];
//     }
// }

function firstDigit(inputString) {
    for(x in inputString) {
        // Using the isNaN trick w/ parsefloat. I could've used regex, but decided not to.'
        if(!isNaN(parseFloat(inputString[x]))) return inputString[x];
    }
}