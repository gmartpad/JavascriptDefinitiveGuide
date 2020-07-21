/*
 * An if statement causes a branch in the flow of a program’s execution,
 * and you can use the else if idiom to perform a multiway branch.
 * This is not the best solution, however, when all of the branches depend
 * on the value of the same expression. In this case, it is wasteful to
 * repeatedly evaluate that expression in multiple if statements.
 *
 * The switch statement handles exactly this situation. The switch
 * keyword is followed by an expression in parentheses and a block of
 * code in curly braces:
 */

switch(expression) {
    statements
}

/*
 * However, the full syntax of a switch statement is more complex than
 * this. Various locations in the block of code are labeled with the case
 * keyword followed by an expression and a colon. When a switch
 * executes, it computes the value of expression and then looks for a
 * case label whose expression evaluates to the same value (where
 * sameness is determined by the === operator). If it finds one, it starts
 * executing the block of code at the statement labeled by the case. If it
 * does not find a case with a matching value, it looks for a statement
 * labeled default:. If there is no default: label, the switch
 * statement skips the block of code altogether.
 * 
 * switch is a confusing statement to explain; its operation becomes
 * much clearer with an example. The following switch statement is
 * equivalent to the repeated if/else statements shown in the previous
 * section:
 */
    
switch(n) {
    case 1: // Start here if n === 1
        // Execute code block #1.
    break; // Stop here
    case 2: // Start here if n === 2
        // Execute code block #2.
    break; // Stop here
    case 3: // Start here if n === 3
        // Execute code block #3.
    break; // Stop here
    default: // If all else fails...
        // Execute code block #4.
    break; // Stop here
}
 
/*
 * Note the break keyword used at the end of each case in this code.
 * The break statement, described later in this chapter, causes the
 * interpreter to jump to the end (or “break out”) of the switch
 * statement and continue with the statement that follows it. The case
 * clauses in a switch statement specify only the starting point of the
 * desired code; they do not specify any ending point. In the absence of
 * break statements, a switch statement begins executing its block of
 * code at the case label that matches the value of its expression and
 * continues executing statements until it reaches the end of the block. On
 * rare occasions, it is useful to write code like this that “falls through”
 * from one case label to the next, but 99% of the time you should be
 * careful to end every case with a break statement. (When using
 * switch inside a function, however, you may use a return statement
 * instead of a break statement. Both serve to terminate the switch
 * statement and prevent execution from falling through to the next
 * case.)
 * 
 * Here is a more realistic example of the switch statement; it converts
 * a value to a string in a way that depends on the type of the value:
 */

function convert(x) {
    switch(typeof x) {
        case "number": // Convert the number to a hexadecimal integer
        return x.toString(16);
        case "string": // Return the string enclosed in quotes
        return '"' + x + '"';
        default: // Convert any other type in the usual way
        return String(x);
    }
}
   
/*
 * Note that in the two previous examples, the case keywords are
 * followed by number and string literals, respectively. This is how the
 * switch statement is most often used in practice, but note that the
 * ECMAScript standard allows each case to be followed by an arbitrary
 * expression.
 * 
 * The switch statement first evaluates the expression that follows the
 * switch keyword and then evaluates the case expressions, in the
 * order in which they appear, until it finds a value that matches. The
 * matching case is determined using the === identity operator, not the
 * == equality operator, so the expressions must match without any type
 * conversion.
 * 
 * Because not all of the case expressions are evaluated each time the
 * switch statement is executed, you should avoid using case
 * expressions that contain side effects such as function calls or
 * assignments. The safest course is simply to limit your case
 * expressions to constant expressions.
 * 
 * As explained earlier, if none of the case expressions match the
 * switch expression, the switch statement begins executing its body
 * at the statement labeled default:. If there is no default: label,
 * the switch statement skips its body altogether. Note that in the 
 * examples shown, the default: label appears at the end of the
 * switch body, following all the case labels. This is a logical and
 * common place for it, but it can actually appear anywhere within the
 * body of the statement.
 */