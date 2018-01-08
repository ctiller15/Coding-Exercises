// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

// Example

// For a = 2, b = 7 and c = 2, the output should be
// extraNumber(a, b, c) = 7.

// The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer a

// Guaranteed constraints:
// 1 ≤ a ≤ 109.

// [input] integer b

// Guaranteed constraints:
// 1 ≤ b ≤ 109.

// [input] integer c

// Guaranteed constraints:
// 1 ≤ c ≤ 109.

// [output] integer

function extraNumber(a, b, c) {
    // Approach this one mathematically!
    // Check if a is not equal to b.
    // Then check if a is not equal to c. If true, return a.
    // Otherwise, return b.
    // If a equals b, return c.
    return a !== b ? a !== c ? a : b : c;
}