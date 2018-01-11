// You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.

// Example

// For n = 13, the output should be
// swapAdjacentBits(n) = 14.

// 1310 = 11012 ~> {11}{01}2 ~> 11102 = 1410.

// For n = 74, the output should be
// swapAdjacentBits(n) = 133.

// 7410 = 010010102 ~> {01}{00}{10}{10}2 ~> 100001012 = 13310.
// Note the preceding zero written in front of the initial number: since both numbers are 32-bit integers, they have 32 bits in their binary representation. The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 0 ≤ n < 230.

// [output] integer

// 1: Comb out all the odd and even bits for both numbers. 0xAAAAAAAA and 0x55555555 do this perfectly.
// so, "n & comb".
// Next, shift them to the right, and to the left, respectively. This represents the "swap" with that item.
// Finally, combine the bits with a bitwise or statement.

function swapAdjacentBits(n) {
  return (((n & 0xAAAAAAAA) >> 1) | ((n & 0x55555555) << 1));
}