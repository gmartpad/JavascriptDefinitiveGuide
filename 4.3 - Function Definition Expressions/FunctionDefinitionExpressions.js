/*
 * A function definition expression defines a JavaScript function, and the
 * value of such an expression is the newly defined function. In a sense, a
 * function definition expression is a “function literal” in the same way
 * that an object initializer is an “object literal.” A function definition
 * expression typically consists of the keyword function followed by a
 * comma-separated list of zero or more identifiers (the parameter names)
 * in parentheses and a block of JavaScript code (the function body) in
 * curly braces. For example:
 */

// This function returns the square of the value passed to it.
let square = function(x) { return x * x; };

/*
 * A function definition expression can also include a name for the
 * function. Functions can also be defined using a function statement
 * rather than a function expression. And in ES6 and later, function
 * expressions can use a compact new “arrow function” syntax.
 */