/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[time limit] 4000ms (js)
[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function almostIncreasingSequence(sequence) {
    // console.log(sequence);
    for(var i = 0; i < sequence.length; i++){
        // create a new array with the value removed!
        let removedArray = sequence.slice(0, i).concat(sequence.slice(i + 1));
        // Be careful with indices!
        var result = removedArray.every((e, j, a) => {
            if(j){
                // compare to previous element...
                return(e > a[j - 1]);
            } else{
                // skipping the first element...
                return true;
            }
        });
        // If it's an increasing sequence, stop there!
        if(result){
            return result;            
        }
    }
    // Otherwise, we couldn't find one!
    return false;
}

// second shot. First one ran into memory issues.

function almostIncreasingSequence2(sequence) {
    // loop through, and initialize the count.
    var count = 0;
    for(var i = 0; i < sequence.length; i++){
        if(i){
            // if this condition is true, remove that value;
            if((sequence[i - 1] >= sequence[i])){
                // check it against the next character too...
                if(sequence[i + 1] && (sequence[i - 1] >= sequence[i + 1])){
                    // Remove the previous character.
                    sequence.splice(i - 1, 1);
                } else{
                    // Remove the upcoming character.
                    sequence.splice(i, 1);
                }
                // add to the count
                count++;
                // reset the index.
                i = 0;
            }
        }
    }
    return(count < 2);
}
