// Given a divisor and a bound, find the largest integer N such that:

// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.

// Example

// For divisor = 3 and bound = 10, the output should be
// maxMultiple(divisor, bound) = 9.

// The largest integer divisible by 3 and not larger than 10 is 9.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer divisor

// Guaranteed constraints:
// 2 ≤ divisor ≤ 10.

// [input] integer bound

// Guaranteed constraints:
// 5 ≤ bound ≤ 100.

// [output] integer

// The largest integer not greater than bound that is divisible by divisor.

function maxMultiple(divisor, bound) {
    var int = 1;
    // Limit the loop to values greater than 0 and less than or equal to the bound.
    // Two conditions taken care of!
    for(var i = 1; i <= bound; i++) {
        if(i % divisor === 0) {
            int = i;
        }
    }
    return int;
}