// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

// Check out the image below for better understanding:



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Non-empty array of positive integers.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i] ≤ 40.

// [output] integer

// The desired length.

function avoidObstacles(inputArray) {
    var maximum = Math.max(...inputArray);
    // The minimum jump size must be 1, assuming zero obstacles.
    var jump = 1;
    // loop through, and keep adding the jump to your number until you hit a value.
    // If you hit a value, increment the jump size and start over.
    var pos = 0;
    var index = 0;
    while(pos <= maximum) {
    // Jumping...
        while(pos <= maximum) {
            if(inputArray.indexOf(pos) !== -1){
                jump += 1;
                pos = -jump;
            }
            pos += jump;
        }
    }     
    return jump;
}