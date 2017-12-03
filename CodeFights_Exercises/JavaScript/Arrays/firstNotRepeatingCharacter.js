/*
Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[time limit] 4000ms (js)
[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/


// First solution. Not performant enough!
function firstNotRepeatingCharacter(s) {
    for(var i = 0; i < s.length; i++){
        // String split separates it into n + 1 elements of an array, where n
        // is the number of occurences of the split character.
        let count = s.split(s[i]).length - 1;
        // if n = 1? Just return that value!
        if(count === 1){
            return s[i];
        }
    }
    return '_';
}

// The second attempt. Still not performant enough!
function firstNotRepeatingCharacter2(s) {
    for(var i = 0; i < s.length; i++){
        // creating a regex to match the character
        let reg = new RegExp(s[i],'gi');
        // checking if that character only appears once.
        if(s.match(reg).length === 1){
            return s[i];
        }
    }
    return '_';
}

//Final solution. This actually worked. Not sure why.
function firstNotRepeatingCharacter3(s) {
    // Initializing an array to hold all letters.
    var letters = {};
    for(var i = 0; i < s.length; i++){
        // Check if letter is already stored in array.
        if(letters[s[i]]){
            // if it's stored, increment.
            letters[s[i]] += 1;
        } else {
            // Otherwise, create it!
            letters[s[i]] = 1;
        }
    }
    // Check the characters and return the first one that has a value of 1.
    for(var letter in letters){
        if(letters[letter] === 1){
            return letter;
        }
    }
    // Couldn't find one, return the underscore.
    return '_'
}