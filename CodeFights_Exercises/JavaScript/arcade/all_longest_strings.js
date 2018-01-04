function allLongestStrings(inputArray) {
//     Initialize the maximum length and the array of strings.
    var max = 0;
    var longestStrings = [];
    for(var i = 0; i < inputArray.length; i++){
//         If the current value is larger than any previous value, that is the new maximum length
//         If they're the same,
        if(inputArray[i].length > max){
            max = inputArray[i].length;
//             Reset the string array and put the new value inside.
            longestStrings = [];
            longestStrings.push(inputArray[i]);
        } else if(inputArray[i].length === max){
//             Push the new value into the array.
            longestStrings.push(inputArray[i]);
        }
    }
    return longestStrings;
}