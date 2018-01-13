// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string of lowercase latin letters.

// Guaranteed constraints:
// 3 ≤ s.length ≤ 15.

// [output] integer

function differentSymbolsNaive(s) {
    var itemObj = {};
    var count = 0;
    // Check if a character exists in the object. If not, add it to the count.
    for(var i = 0; i < s.length; i++) {
        if(!itemObj[s[i]]) {
            itemObj[s[i]] = true;
            count += 1;
        }
    }
    return count;
}