/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

Input/Output

[time limit] 4000ms (js)
[input] array.array.char grid

A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

[output] boolean

Return true if grid represents a valid Sudoku puzzle, otherwise return false.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

*/

function sudoku2(grid) {
    // create an object to keep track of everything.
    // Check the rows...
    for(var i = 0; i < grid.length; i++){
        // initialize the row for this loop.
        var row = {};
        // loop through all the individual items.
        for(var j = 0; j < grid[i].length; j++){
            // If we aren't looking at a blank space, save the contents.
            if(grid[i][j] !== '.'){
                if(row[grid[i][j]]){
                       row[grid[i][j]]++;
                   } else{
                       row[grid[i][j]] = 1;
                   }
            }
        }
        for(var key in row){
            if(row[key] > 1){
                return false;
            }
        }
    }
    // All rows checked. Now for the columns.

    // pick out all of the column data.
    for(var j = 0; j < grid.length; j++){
        var col = {};
        for(var i = 0; i < grid.length; i++){
            // Check if it's not blank.
            if(grid[i][j] !== "."){
                // Populate column data.
                if(col[grid[i][j]]){
                    col[grid[i][j]]++;
                } else{
                    col[grid[i][j]] = 1;
                }
            }
        }
        for(var key in col){
            if(col[key] > 1){
                return false;
            }
        }
    }
    // All columns checked. Now for the individual grids.

    // pick out all of the grid data.
    // Remember that we're looking at individual 3x3 grids.
    // Our increments must reflect that.
    // This causes us to loop a total of nine times.
    var iInc = 0;
    var jInc = 0;
    var count = 0;
    while(count < 9){
        if((count % 3 === 0) && (count > 0)){
            jInc = 0;
            iInc += 3;
        }
        var grids = {};
        for(var i = 0 + iInc; i < 3 + iInc; i++){
            for(var j = 0 + jInc; j < 3 + jInc; j++){
                // check if grid value exists.
                // console.log(grid[i][j], i, j);
                if(grid[i][j] !== "."){
                    if(grids[grid[i][j]]){
                        grids[grid[i][j]]++;
                    } else{
                        grids[grid[i][j]] = 1;
                    }
                }
            }
        }
        for(var key in grids){
            if(grids[key] > 1){
                return false;
            }
        }
        // Incrementing j.
        jInc += 3;
        count += 1;
    }
    return true;
}
