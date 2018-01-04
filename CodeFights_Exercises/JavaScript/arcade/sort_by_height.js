// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 5 ≤ a.length ≤ 15,
// -1 ≤ a[i] ≤ 200.

// [output] array.integer

// Sorted array a with all the trees untouched.

function sortByHeight(a) {
// First, collect all of the heights that are not trees.
    var heights = [];
    for(var i = 0; i < a.length; i++) {
        if(a[i] >= 0) {
            heights.push(a[i]);
        }
    }
// Then, sort all of those heights in ascending order.
    heights.sort((a, b) => {
        return a - b;
    });
// Finally, put those heights in order, minding the trees.
    var sortInd = 0;
    a.forEach((val, ind, arr) => {
//         Check if we're not looking at a tree. If not, put our value in that spot.
       if(val !== -1) {
           arr[ind] = heights[sortInd];
           sortInd++;
       } 
    });
    return a;
}