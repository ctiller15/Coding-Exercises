/*

Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

Example

For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = true;
For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = false.
Input/Output

[time limit] 4000ms (js)
[input] array.string strings

An array of strings, each containing only lowercase English letters.

Guaranteed constraints:
1 ≤ strings.length ≤ 105,
1 ≤ strings[i].length ≤ 10.

[input] array.string patterns

An array of pattern strings, each containing only lowercase English letters.

Guaranteed constraints:
patterns.length = strings.length,
1 ≤ patterns[i].length ≤ 10.

[output] boolean

Return true if strings follows patterns and false otherwise.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

*/

function areFollowingPatterns(strings, patterns) {
    // Create an object to store all data.
    var decode = {};
    for(var i = 0; i < strings.length; i++){
        // Check to see if the value has been recorded already.
        if(decode[patterns[i]]){
            if(decode[patterns[i]] !== strings[i]){
                return false;
            }
        } else{
            decode[patterns[i]] = strings[i];
        }
        // Check to see if the string has shown up already under a different key.
        for(var key in decode){
            // If the string exists as a prop...
            if(decode[key] === strings[i]){
                // if the prop is different from the current...
                if(key !== patterns[i]){
                    return false;
                }
            }
        }
    }
    return true;
}
