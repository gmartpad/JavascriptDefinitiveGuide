/*
 * The break statement, used alone, causes the innermost enclosing loop
 * or switch statement to exit immediately. Its syntax is simple:
 */

break;

/*
 * Because it causes a loop or switch to exit, this form of the break
 * statement is legal only if it appears inside one of these statements.
 * 
 * You’ve already seen examples of the break statement within a
 * switch statement. In loops, it is typically used to exit prematurely
 * when, for whatever reason, there is no longer any need to complete the
 * loop. When a loop has complex termination conditions, it is often
 * easier to implement some of these conditions with break statements
 * rather than trying to express them all in a single loop expression. The
 * following code searches the elements of an array for a particular value.
 * The loop terminates in the normal way when it reaches the end of the
 * array; it terminates with a break statement if it finds what it is
 * looking for in the array:
 */

for(let i = 0; i < a.length; i++) {
    if (a[i] === target) break;
}
    
/*
 * JavaScript also allows the break keyword to be followed by a
 * statement label (just the identifier, with no colon):
 */

break labelname;

/*
 * When break is used with a label, it jumps to the end of, or terminates,
 * the enclosing statement that has the specified label. It is a syntax error
 * to use break in this form if there is no enclosing statement with the
 * specified label. With this form of the break statement, the named
 * statement need not be a loop or switch: break can “break out of”
 * any enclosing statement. This statement can even be a statement block
 * grouped within curly braces for the sole purpose of naming the block
 * with a label.
 * 
 * A newline is not allowed between the break keyword and the
 * labelname. This is a result of JavaScript’s automatic insertion of
 * omitted semicolons: if you put a line terminator between the break
 * keyword and the label that follows, JavaScript assumes you meant to
 * use the simple, unlabeled form of the statement and treats the line
 * terminator as a semicolon. (See §2.6.)
 * 
 * You need the labeled form of the break statement when you want to
 * break out of a statement that is not the nearest enclosing loop or a
 * switch. The following code demonstrates:
 */

let matrix = getData(); // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
let sum = 0, success = false;
// Start with a labeled statement that we can break out of if errors occur
computeSum: if (matrix) {
    for(let x = 0; x < matrix.length; x++) {
        let row = matrix[x];
        if (!row) break computeSum;
        for(let y = 0; y < row.length; y++) {
            let cell = row[y];
            if (isNaN(cell)) break computeSum;
            sum += cell;
        }
    }
    success = true;
}
// The break statements jump here. If we arrive here with
success == false
// then there was something wrong with the matrix we were given.
// Otherwise, sum contains the sum of all cells of the matrix.

/*
 * Finally, note that a break statement, with or without a label, can not
 * transfer control across function boundaries. You cannot label a
 * function definition statement, for example, and then use that label
 * inside the function.
 */
