/*
 * An invocation expression is JavaScript’s syntax for calling (or
 * executing) a function or method. It starts with a function expression
 * that identifies the function to be called. The function expression is
 * followed by an open parenthesis, a comma-separated list of zero or
 * more argument expressions, and a close parenthesis. Some examples:
 */

f(0) // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
a.sort() // a.sort is the function; there are no arguments.

/*
 * When an invocation expression is evaluated, the function expression is
 * evaluated first, and then the argument expressions are evaluated to
 * produce a list of argument values. If the value of the function
 * expression is not a function, a TypeError is thrown. Next, the argument
 * values are assigned, in order, to the parameter names specified when
 * the function was defined, and then the body of the function is executed.
 * If the function uses a return statement to return a value, then that
 * value becomes the value of the invocation expression. Otherwise, the
 * value of the invocation expression is undefined. 
 * 
 * Every invocation expression includes a pair of parentheses and an
 * expression before the open parenthesis. If that expression is a property
 * access expression, then the invocation is known as a method
 * invocation. In method invocations, the object or array that is the subject
 * of the property access becomes the value of the this keyword while
 * the body of the function is being executed. This enables an objectoriented programming paradigm in which functions (which we call
 * “methods” when used this way) operate on the object of which they are
 * part.
 */