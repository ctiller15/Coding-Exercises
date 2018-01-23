// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string st

// A string consisting of lowercase latin letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string

function checkPalindrome(inputString) {
    if(inputString.length === 1) return true;
    for(var i = 0; i < Math.floor(inputString.length/2); i++){
        if(inputString[i] !== inputString[inputString.length - 1 - i]) return false;
    }
    return true;
}

function buildPalindrome(st) {
    var palindromes = [];
    // Collect all possible palindromes.
    // Find the smallest one.
    for(var i = 0; i <= st.length; i++) {
        let palindrome = st + st.substr(0, st.length - i).split("").reverse().join("");
        // Reusing our 'checkPalindrome' function...
        if(checkPalindrome(palindrome)) {
            palindromes.push(palindrome);
        }       
    }
    // The last one will always be the smallest!
    return(palindromes[palindromes.length - 1]);
}