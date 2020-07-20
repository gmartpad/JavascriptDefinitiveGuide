/*
 * Just as the comma operator combines multiple expressions
 * into a single expression, a statement block combines multiple
 * statements into a single compound statement. A statement block is
 * simply a sequence of statements enclosed within curly braces. Thus,
 * the following lines act as a single statement and can be used anywhere
 * that JavaScript expects a single statement:
 */

{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(π) = " + cx);
}
    
/*
 * There are a few things to note about this statement block. First, it does
 * not end with a semicolon. The primitive statements within the block
 * end in semicolons, but the block itself does not. Second, the lines
 * inside the block are indented relative to the curly braces that enclose
 * them. This is optional, but it makes the code easier to read and
 * understand.
 * 
 * Just as expressions often contain subexpressions, many JavaScript
 * statements contain substatements. Formally, JavaScript syntax usually
 * allows a single substatement. For example, the while loop syntax
 * includes a single statement that serves as the body of the loop. Using a
 * statement block, you can place any number of statements within this
 * single allowed substatement.
 * 
 * A compound statement allows you to use multiple statements where
 * JavaScript syntax expects a single statement. The empty statement is
 * the opposite: it allows you to include no statements where one is
 * expected. The empty statement looks like this:
 */

;

/*
 * The JavaScript interpreter takes no action when it executes an empty
 * statement. The empty statement is occasionally useful when you want
 * to create a loop that has an empty body. Consider the following for
 * loop:
 */

// Initialize an array a
for(let i = 0; i < a.length; a[i++] = 0) ;

/*
 * In this loop, all the work is done by the expression a[i++] = 0, and
 * no loop body is necessary. JavaScript syntax requires a statement as a
 * loop body, however, so an empty statement—just a bare semicolon—is
 * used.
 * 
 * Note that the accidental inclusion of a semicolon after the right
 * parenthesis of a for loop, while loop, or if statement can cause
 * frustrating bugs that are difficult to detect. For example, the following
 * code probably does not do what the author intended:
 */

if ((a === 0) || (b === 0)); // Oops! This line does nothing...
o = null; // and this line is always executed.

/*
 * When you intentionally use the empty statement, it is a good idea to
 * comment your code in a way that makes it clear that you are doing it on
 * purpose. For example:
 */

for(let i = 0; i < a.length; a[i++] = 0) /* empty */ ;
