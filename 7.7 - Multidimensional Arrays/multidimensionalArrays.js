/*
 * JavaScript does not support true multidimensional arrays, but you can
 * approximate them with arrays of arrays. To access a value in an array
 * of arrays, simply use the [] operator twice. For example, suppose the
 * variable matrix is an array of arrays of numbers. Every element in
 * matrix[x] is an array of numbers. To access a particular number
 * within this array, you would write matrix[x][y]. Here is a
 * concrete example that uses a two-dimensional array as a multiplication
 * table:
 */

// Create a multidimensional array
let table = new Array(10); // 10 rows of the table
for(let i = 0; i < table.length; i++) {
    table[i] = new Array(10); // Each row has 10 columns
}

// Initialize the array
for(let row = 0; row < table.length; row++) {
    for(let col = 0; col < table[row].length; col++) {
        table[row][col] = row*col;
    }
}

// Use the multidimensional array to compute 5*7
table[5][7] // => 35