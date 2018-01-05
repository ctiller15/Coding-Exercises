// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 5,
// 1 ≤ picture[i].length ≤ 5.

// [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

function addBorder(picture) {
//     Loop through, add the stars at the beginning and end, and add one at the start and end of the middle strings.
    var newArray = [];
    for(var i = 0; i < picture.length + 2; i++){
        if(i === 0) {
            newArray.push("*".repeat(picture[0].length + 2));
        } else if (i === picture.length + 1) {
            newArray.push("*".repeat(picture[0].length + 2));
        } else {
            let temp = picture[i - 1].split("");
            temp.unshift("*");
            temp.push("*");
            newArray.push(temp.join(""));
        }
    }
    return newArray;
}