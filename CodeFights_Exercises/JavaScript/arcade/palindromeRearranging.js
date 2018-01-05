// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(inputString) {
// If more than one character shows up an odd number of times, it cannot be a palindrome.
    var odds = 0;
// Record all of the characters in the string.
    var chars = {};
    for(var i = 0; i < inputString.length; i++) {
        !(chars[inputString[i]]) ? chars[inputString[i]] = 1 : chars[inputString[i]] += 1;
    }
// Check every character to see if it shows up an odd number of times.
    for(const prop in chars){
        (chars[prop] % 2 === 1) ? odds += 1 : odds += 0;
    }
    return odds < 2;
}