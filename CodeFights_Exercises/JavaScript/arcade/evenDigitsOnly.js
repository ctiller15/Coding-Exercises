// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 109.

// [output] boolean

// true if all digits of n are even, false otherwise.

function evenDigitsOnly(n) {
    // caching the string version...
    var numStr = (n + "");
    var length = numStr.length;
    // abusing the heck out of type coercion...     
    for(var i = 0; i < length; i++) {
        if(numStr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}