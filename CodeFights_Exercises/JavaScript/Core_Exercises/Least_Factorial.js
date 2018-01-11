// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

// Example

// For n = 17, the output should be
// leastFactorial(n) = 24.

// 17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ n ≤ 120.

// [output] integer

function leastFactorial(n) {
//     Initialize the factor and the index.
    var factor = 1;
    var ind = 1;
//     Multiply by factorial num till you end up larger or equal to the number.
    while(factor < n) {
        factor *= ind;
        ind += 1;
    }
    return (factor);
}