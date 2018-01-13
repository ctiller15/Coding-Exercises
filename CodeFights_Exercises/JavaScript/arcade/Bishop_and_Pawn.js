// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


// Example

// For bishop = "a1" and pawn = "c3", the output should be
// bishopAndPawn(bishop, pawn) = true.



// For bishop = "h1" and pawn = "h3", the output should be
// bishopAndPawn(bishop, pawn) = false.



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string bishop

// Coordinates of the white bishop in the chess notation.

// [input] string pawn

// Coordinates of the black pawn in the same notation.

// [output] boolean

// true if the bishop can capture the pawn, false otherwise.

function bishopAndPawn(bishop, pawn) {
    var moves = [];
    var j = 0;
    var center = Number(bishop[1]);
    // Board starts at charcode A = 65, and number 1.
    for(var i = 97; i <= 104; i++ ) {
        // Mathematically save every single possible move that can be made by the bishop into an array.
        // Check that array to see if it contains the pawn value.
        var diag1 = Number(bishop[1]) - (Number(bishop.charCodeAt(0)) - i);
        var diag2 = Number(bishop[1]) + (Number(bishop.charCodeAt(0)) - i);
        
        if(1 <= diag1 && diag1 <= 8) moves.push(String.fromCharCode(i) + diag1);
        if(1 <= diag2 && diag2 <= 8) moves.push(String.fromCharCode(i) + diag2);
    }
    return(moves.indexOf(pawn) > -1);
}