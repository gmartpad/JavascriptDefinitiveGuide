/*
 * In ES2020, you can also invoke a function using ?.() instead of ().
 * Normally when you invoke a function, if the expression to the left of
 * the parentheses is null or undefined or any other non-function, a
 * TypeError is thrown. With the new ?.() invocation syntax, if the
 * expression to the left of the ?. evaluates to null or undefined,
 * then the entire invocation expression evaluates to undefined and no
 * exception is thrown.
 * 
 * Array objects have a sort() method that can optionally be passed a
 * function argument that defines the desired sorting order for the array
 * elements. Before ES2020, if you wanted to write a method like
 * sort() that takes an optional function argument, you would typically
 * use an if statement to check that the function argument was defined
 * before invoking it in the body of the if:
 */

function square(x, log) { // The second argument is an optional function
    if (log) { // If the optional function is passed
        log(x); // Invoke it
    }
    return x * x; // Return the square of the argument
}

/*
 * With this conditional invocation syntax of ES2020, however, you can
 * simply write the function invocation using ?.(), knowing that
 * invocation will only happen if there is actually a value to be invoked:
 */

function square(x, log) { // The second argument is an optional function
    log?.(x); // Call the function if there is one
    return x * x; // Return the square of the argument
}
    
/*
 * Note, however, that ?.() only checks whether the lefthand side is
 * null or undefined. It does not verify that the value is actually a
 * function. So the square() function in this example would still throw
 * an exception if you passed two numbers to it, for example.
 * 
 * Like conditional property access expressions, function
 * invocation with ?.() is short-circuiting: if the value to the left of ?.
 * is null or undefined, then none of the argument expressions
 * within the parentheses are evaluated:
 */

let f = null, x = 0;

try {
    f(x++); // Throws TypeError because f is null
} catch(e) {
    x // => 1: x gets incremented before the exception is thrown
}

f?.(x++) // => undefined: f is null, but no exception thrown
x // => 1: increment is skipped because of shortcircuiting

/*
 * Conditional invocation expressions with ?.() work just as well for
 * methods as they do for functions. But because method invocation also
 * involves property access, it is worth taking a moment to be sure you
 * understand the differences between the following expressions:
 */

o.m() // Regular property access, regular invocation
o?.m() // Conditional property access, regular invocation
o.m?.() // Regular property access, conditional invocation

/*
 * In the first expression, o must be an object with a property m and the
 * value of that property must be a function. In the second expression, if o
 * is null or undefined, then the expression evaluates to
 * undefined. But if o has any other value, then it must have a
 * property m whose value is a function. And in the third expression, o
 * must not be null or undefined. If it does not have a property m, or
 * if the value of that property is null, then the entire expression
 * evaluates to undefined.
 * 
 * Conditional invocation with ?.() is one of the newest features of
 * JavaScript. As of the first months of 2020, this new syntax is supported
 * in the current or beta versions of most major browsers.
 */