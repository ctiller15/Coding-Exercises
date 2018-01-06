// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

// Example

// For

// image = [[1, 1, 1], 
//          [1, 7, 1], 
//          [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.

// For

// image = [[7, 4, 0, 1], 
//          [5, 6, 2, 2], 
//          [6, 10, 7, 8], 
//          [1, 4, 2, 0]]
// the output should be

// boxBlur(image) = [[5, 4], 
//                   [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer image

// An image, stored as a rectangular matrix of non-negative integers.

// Guaranteed constraints:
// 3 ≤ image.length ≤ 10,
// 3 ≤ image[0].length ≤ 10,
// 0 ≤ image[i][j] ≤ 255.

// [output] array.array.integer

// A blurred image represented as integers, obtained through the process in the description.

function boxBlur(image) {
    var rows = image.length;
    var cols = image[0].length;
    // Using this data to premake a new array.
    var blurred = new Array(rows - 2);
    for(var i = 0; i < rows - 2; i++) {
        blurred[i] = new Array(cols - 2);
    }
    // Now, loop through and calculate the averages.
    for(var i = 1; i < rows - 1; i++) {
        for(var j = 1; j < cols - 1; j++) {
            // Via the conditions it should never hit the last value.             
            let sum = 0;
            let tempArray = [];
            // Loop over the nine values in that box.
            for(var k = i - 1; k <= i + 1; k++) {
                for(var l = j - 1; l <= j + 1; l++) {
                    sum += image[k][l];
                }
            }
            blurred[i - 1][j - 1] = Math.floor(sum / 9);
        }
    }
    return blurred;
}