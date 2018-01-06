// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
// -15 ≤ inputArray[i] ≤ 15.

// [output] integer

// The maximal absolute difference.

function arrayMaximalAdjacentDifference(inputArray) {
    var diff = 0;
    var length = inputArray.length;
    for(var i = 1; i < length; i++){
        var absVal = Math.abs(inputArray[i] - inputArray[i - 1]);
        if(absVal > diff) {
            diff = absVal;
        }
    }
    return diff;
}