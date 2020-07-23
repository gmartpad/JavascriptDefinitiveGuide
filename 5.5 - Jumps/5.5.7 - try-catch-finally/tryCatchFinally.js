/*
 * The try/catch/finally statement is JavaScript’s exception
 * handling mechanism. The try clause of this statement simply defines
 * the block of code whose exceptions are to be handled. The try block
 * is followed by a catch clause, which is a block of statements that are
 * invoked when an exception occurs anywhere within the try block.
 * The catch clause is followed by a finally block containing
 * cleanup code that is guaranteed to be executed, regardless of what
 * happens in the try block. Both the catch and finally blocks are
 * optional, but a try block must be accompanied by at least one of these
 * blocks. The try, catch, and finally blocks all begin and end with
 * curly braces. These braces are a required part of the syntax and cannot
 * be omitted, even if a clause contains only a single statement.
 * 
 * The following code illustrates the syntax and purpose of the
 * try/catch/finally statement:
 */

try {
    // Normally, this code runs from the top of the block to the bottom
    // without problems. But it can sometimes throw an exception,
    // either directly, with a throw statement, or indirectly, by calling
    // a method that throws an exception.
    }
catch(e) {
    // The statements in this block are executed if, and only if, the try
    // block throws an exception. These statements can use the local variable
    // e to refer to the Error object or other value that was thrown.
    // This block may handle the exception somehow, may ignore the
    // exception by doing nothing, or may rethrow the exception with throw.
}
finally {
    // This block contains statements that are always executed, regardless of
    // what happens in the try block. They are executed whether the try
    // block terminates:
    // 1) normally, after reaching the bottom of the block
    // 2) because of a break, continue, or return statement
    // 3) with an exception that is handled by a catch clause above
    // 4) with an uncaught exception that is still propagating
}

/*
 * Note that the catch keyword is generally followed by an identifier in
 * parentheses. This identifier is like a function parameter. When an
 * exception is caught, the value associated with the exception (an Error
 * object, for example) is assigned to this parameter. The identifier
 * associated with a catch clause has block scope—it is only defined
 * within the catch block.
 * 
 * Here is a realistic example of the try/catch statement. It uses the
 * factorial() method defined in the previous section and the clientside JavaScript methods prompt() and alert() for input and
 * output:
 */

try {
    // Ask the user to enter a number
    let n = Number(prompt("Please enter a positive integer",
    ""));
    // Compute the factorial of the number, assuming the input is valid
    let f = factorial(n);
    // Display the result
    alert(n + "! = " + f);
}
    catch(ex) { // If the user's input was not valid, we end up here
    alert(ex); // Tell the user what the error is
}

/*
 * This example is a try/catch statement with no finally clause.
 * Although finally is not used as often as catch, it can be useful.
 * However, its behavior requires additional explanation. The finally
 * clause is guaranteed to be executed if any portion of the try block is
 * executed, regardless of how the code in the try block completes. It is
 * generally used to clean up after the code in the try clause.
 * 
 * In the normal case, the JavaScript interpreter reaches the end of the
 * try block and then proceeds to the finally block, which performs
 * any necessary cleanup. If the interpreter left the try block because of
 * a return, continue, or break statement, the finally block is
 * executed before the interpreter jumps to its new destination.
 * 
 * If an exception occurs in the try block and there is an associated
 * catch block to handle the exception, the interpreter first executes the
 * catch block and then the finally block. If there is no local catch
 * block to handle the exception, the interpreter first executes the
 * finally block and then jumps to the nearest containing catch
 * clause.
 * 
 * If a finally block itself causes a jump with a return, continue,
 * break, or throw statement, or by calling a method that throws an
 * exception, the interpreter abandons whatever jump was pending and
 * performs the new jump. For example, if a finally clause throws an
 * exception, that exception replaces any exception that was in the process
 * of being thrown. If a finally clause issues a return statement, the
 * method returns normally, even if an exception has been thrown and has
 * not yet been handled.
 * 
 * try and finally can be used together without a catch clause. In
 * this case, the finally block is simply cleanup code that is
 * guaranteed to be executed, regardless of what happens in the try
 * block. Recall that we can’t completely simulate a for loop with a
 * while loop because the continue statement behaves differently for
 * the two loops. If we add a try/finally statement, we can write a 
 * while loop that works like a for loop and that handles continue
 * statements correctly:
 */

 // Simulate for(initialize ; test ;increment ) body;
initialize ;
while( test ) {
try { body ; }
finally { increment ; }
}

/* 
 * Note, however, that a body that contains a break statement behaves
 * slightly differently (causing an extra increment before exiting) in the
 * while loop than it does in the for loop, so even with the finally
 * clause, it is not possible to completely simulate the for loop with
 * while.
 */

/*
 * BARE CATCH CLAUSES
 *
 * Occasionally you may find yourself using a catch clause solely to detect and stop the propagation of
 * an exception, even though you do not care about the type or the value of the exception. In ES2019
 * and later, you can omit the parentheses and the identifier and use the catch keyword bare in this
 * case. Here is an example:
 */

 // Like JSON.parse(), but return undefined instead of throwing an error
function parseJSON(s) {
    try {
        return JSON.parse(s);
    } catch {
        // Something went wrong but we don't care what it was
        return undefined;
    }
}
    