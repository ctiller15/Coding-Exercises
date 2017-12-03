/*
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
Input/Output

[time limit] 4000ms (js)
[input] array.array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 100,
a[i].length = a.length,
1 ≤ a[i][j] ≤ 104.

[output] array.array.integer

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function rotateImage(a) {
    // First, initialize our new array.
    arrLen = a.length;
    var rotated = new Array(arrLen);
    // Create the sub-arrays...
    for(var i = 0; i < rotated.length; i++){
        rotated[i] = new Array(arrLen);
    }
    // Loop through every element, and rotate according to equation, (i,j) => (j, n - 1 - i).
    for(var i = 0; i < arrLen; i++){
        for(var j = 0; j < arrLen; j++){
            rotated[j][arrLen - 1 - i] = a[i][j];
        }
    }
    return rotated;
}