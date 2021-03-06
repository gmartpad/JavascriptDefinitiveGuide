/*
 * An exception is a signal that indicates that some sort of exceptional
 * condition or error has occurred. To throw an exception is to signal such
 * an error or exceptional condition. To catch an exception is to handle it
 * —to take whatever actions are necessary or appropriate to recover from
 * the exception. In JavaScript, exceptions are thrown whenever a runtime
 * error occurs and whenever the program explicitly throws one using the
 * throw statement. Exceptions are caught with the
 * try/catch/finally statement, which is described in the next
 * section.
 * 
 * The throw statement has the following syntax:
 */

 throw expression;

/*
 * expression may evaluate to a value of any type. You might throw a
 * number that represents an error code or a string that contains a humanreadable error message. The Error class and its subclasses are used
 * when the JavaScript interpreter itself throws an error, and you can use
 * them as well. An Error object has a name property that specifies the
 * type of error and a message property that holds the string passed to
 * the constructor function. Here is an example function that throws an
 * Error object when invoked with an invalid argument:
 */

function factorial(x) {
    // If the input argument is invalid, throw an exception!
    if (x < 0) throw new Error("x must not be negative");
    // Otherwise, compute a value and return normally
    let f;
    for(f = 1; x > 1; f *= x, x--) /* empty */ ;
    return f;
}
factorial(4) // => 24

/*
 * When an exception is thrown, the JavaScript interpreter immediately
 * stops normal program execution and jumps to the nearest exception
 * handler. Exception handlers are written using the catch clause of the
 * try/catch/finally statement, which is described in the next
 * section. If the block of code in which the exception was thrown does
 * not have an associated catch clause, the interpreter checks the nexthighest enclosing block of code to see if it has an exception handler
 * associated with it. This continues until a handler is found. If an
 * exception is thrown in a function that does not contain a
 * try/catch/finally statement to handle it, the exception
 * propagates up to the code that invoked the function. In this way,
 * exceptions propagate up through the lexical structure of JavaScript
 * methods and up the call stack. If no exception handler is ever found,
 * the exception is treated as an error and is reported to the user.
 */