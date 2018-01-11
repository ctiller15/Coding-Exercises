// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.



// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string cell1

// [input] string cell2

// [output] boolean

// true if both cells have the same color, false otherwise.

// Just check the char codes!

function chessBoardCellColor(cell1, cell2) {
    return((cell1.charCodeAt(0) + cell1.charCodeAt(1)) % 2 === (cell2.charCodeAt(0) + cell2.charCodeAt(1)) % 2);
}