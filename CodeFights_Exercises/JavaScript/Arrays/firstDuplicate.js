/*
Note: Write a solution with O(n) time complexity and O(1) additional space complexity, since this is what you would be asked to do during a real interview.

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 3, 3, 1, 5, 2], the output should be
firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than than second occurrence of 2 does, so the answer is 3.

For a = [2, 4, 3, 5, 1], the output should be
firstDuplicate(a) = -1.

Input/Output

[time limit] 4000ms (js)
[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ a.length.

[output] integer

The element in a that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return -1.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function firstDuplicate(a) {
    // First, find out if there is a second occurence of any number.
    var duplicate = -1;
    var cloneIndex;
    for(var i = 0; i < a.length; i++){
        // Does a second occurrence exist?
        if(a.indexOf(a[i], i + 1) !== -1){
            // Check the clone Index. This works only if the cloneIndex has a value.
            if(cloneIndex){
                // If the new potential clone has a lower index, then switch the potential clone to the new one.
                if (a.indexOf(a[i], i + 1) < cloneIndex){
                    duplicate = a[i];
                    cloneIndex = a.indexOf(a[i], i + 1);
                }
            } else{
                // If it exists, save it as the duplicate.
                duplicate = a[i];
                // Save the clone index.
                cloneIndex = a.indexOf(a[i], i + 1);
            }
        }
    }
    return duplicate;
}

/*
CORRECT SOLUTION
*/

function firstDuplicate2(a) {
    // We just need to check against the elements we've passed.
    for(var i = 0; i < a.length; i++){
        // Taking the current item and finding its correct position.
        var position = Math.abs(a[i]) - 1;
        // Return the very first one we find that fulfills the condition.
        // If the value has been found before, it will exist in that position.
        if (a[position] < 0){
            return Math.abs(a[i]);
        }
        // indexing it with a negative value. This checks if the value has existed before.
        // None of the default values will be less than 0.
        a[position] = -a[position];
    }
    return -1;
}