// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Non-empty string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 10.

// [output] string

// The result string after replacing all of its characters.

function alphabeticShift(inputString) {
    var shifted = [];
    // loop through and increment the char codes.
    for(var i = 0; i < inputString.length; i++) {
        if(inputString.charCodeAt(i) === 122) {
            shifted.push(String.fromCharCode(97));
        } else {
            shifted.push(String.fromCharCode(inputString.charCodeAt(i) + 1));
        }
    }
    return(shifted.join(""));
}