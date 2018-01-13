// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Array of positive integers.

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// 1 ≤ inputArray[i] ≤ 1000.

// [input] integer k

// An integer (not greater than the length of inputArray).

// Guaranteed constraints:
// 1 ≤ k ≤ inputArray.length.

// [output] integer

// The maximal possible sum.

// function arrayMaxConsecutiveSum(inputArray, k) {
//     var max = 0;
    
//     for(var i = 0; i <= inputArray.length - k; i++) {
//         let tempSum = 0;
        
//         for(var j = 0; j < k; j++) tempSum += inputArray[i + j];
        
//         if(tempSum > max) max = tempSum;
//     }
    
//     return max;
// }

function arrayMaxConsecutiveSum(inputArray, k) {
    var max = 0;
    
    for(var i = 0; i < k; i++) max += inputArray[i];
 
    // Had to rethink how to traverse this in the case of an extremely huge array.
    // Create your initial sum, and then decrement/increment by the previous and next number. Cuts down on calculations tremendously.
    
    let shifted = max;
    for(var i = 0; i < inputArray.length - k; i++) {
        shifted -= inputArray[i];
        shifted += inputArray[i + k];
        if(shifted > max) max = shifted;
    }
    return max;
}