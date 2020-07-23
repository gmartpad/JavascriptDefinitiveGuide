/*
 * Recall that function invocations are expressions and that all
 * expressions have values. A return statement within a function
 * specifies the value of invocations of that function. Here’s the syntax of
 * the return statement:
 */

return expression;

/*
 * A return statement may appear only within the body of a function. It
 * is a syntax error for it to appear anywhere else. When the return
 * statement is executed, the function that contains it returns the value of
 * expression to its caller. For example:
 */

function square(x) { return x*x; } // A function that has a return statement

square(2) // => 4

/*
 * With no return statement, a function invocation simply executes
 * each of the statements in the function body in turn until it reaches the
 * end of the function and then returns to its caller. In this case, the
 * invocation expression evaluates to undefined. The return
 * statement often appears as the last statement in a function, but it need
 * not be last: a function returns to its caller when a return statement is
 * executed, even if there are other statements remaining in the function
 * body.
 * 
 * The return statement can also be used without an expression to
 * make the function return undefined to its caller. For example:
 */

function displayObject(o) {
    // Return immediately if the argument is null or undefined.
    if (!o) return;
    // Rest of function goes here...
}

/*
 * Because of JavaScript’s automatic semicolon insertion (§2.6), you
 * cannot include a line break between the return keyword and the
 * expression that follows it.
 */