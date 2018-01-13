// Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false;

// All rearrangements don't satisfy the description condition.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// Strings can be rearranged in the following way: "aa", "ab", "bb".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 15.

// [output] boolean

// function stringsRearrangement(inputArray) {
//     // check each letter in one string against the rest.
//     // Search for failures first.
//     var len = inputArray.length;
//     var strLen = inputArray[0].length;
//     // Checking how many times we've sorted.'
//     var sorts = 0;
//     inputArray.sort();
    
//     for(var i = 0; i < len - 1; i++) {
//         let count = 0;
        
//         if(inputArray[i + 1]) {
//             for(var j = 0; j < strLen; j++) {
//                 // Increment for every character that is different
//                 if(inputArray[i][j] !== inputArray[i + 1][j]) {
//                     count += 1;
//                 }
//             }
//         }
        
//         // If the count is anything besides 1, we need to either re-sort or if we can no longer sort, return false.
//         if(count !== 1) {
//             if(sorts === len - 1) {
//                 return false;                
//             } else if(inputArray[i + 1]) {
//             // Rearrange the array, and repeat the previous element.                 
//                 inputArray.push(inputArray[i + 1]);
//                 inputArray.splice(i + 1, 1);
//                 i--;
//                 sorts++;
//             }
//         }
//     }
//     return true;
// }

// Solution at: https://www.youtube.com/watch?time_continue=3558&v=PFOE2CAEA5E

function stringsRearrangement(inputArray) {
    
    function differByOne(str1, str2) {
        let mismatches = 0;
        
        for(let i = 0; i < str1.length; i++) {
            if(str1[i] != str2[i]) mismatches++;
        }
        
        return mismatches == 1;
    }
    
    let edges = [];
    
    for(let i = 0; i < inputArray.length; i++) {
        let row = [];
        
        for(let j = 0; j < inputArray.length; j++) {
            if(i != j && differByOne(inputArray[i], inputArray[j])) {
                row.push(j);
            }
        }
        edges.push(row);
    }
    
    const length = inputArray.length;
    const width = 1 << length;
    
    let dp = [];
    
    for(let i = 0; i < length; i++) {
        let row = [];
        
        for(let j = 0; j < width; j++) {
            row.push(j === 1 << i);
        }
        dp.push(row);
    }
    console.log(dp);
    for(let bin = 1; bin < width; bin++) {
        let indices = Array.from(bin.toString(2)).reverse();
        
        for(let i = 0; i < length; i++) {
            if(indices[i] == 1) {
                for(let j = 0; j < length; j++) {
                    if(i != j && indices[j] == 1 && edges[j].indexOf(i) > - 1 && dp[j][bin ^ 1 << i]) {
                        dp[i][bin] = true;
                    }
                }
            }
        }
    }
    for(let row of dp) {
       if(row[width - 1]) return true;
    }
    return false;
}