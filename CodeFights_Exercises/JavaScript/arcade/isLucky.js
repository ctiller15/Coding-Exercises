
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function isLucky(n) {
// Break number in half.
    var first = (n + "").slice(0,((n + "").length)/2);
    var second = (n + "").slice((n + "").length/2);
// Sum the first half, and then the second half.
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < first.length; i++){
        sum1 += Number(first[i]);
    }
    for(var j = 0; j < second.length; j++){
        sum2 += Number(second[j]);
    }
// If their sums are equal, return true. Otherwise, return false.
    return sum1 === sum2;
}