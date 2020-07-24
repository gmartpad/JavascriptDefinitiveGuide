/*
 * The function declaration is used to define functions.
 * A function declaration looks like this:
 */ 

function area(radius) {
    return Math.PI * radius * radius;
}
    
/*
 * A function declaration creates a function object and assigns it to the
 * specified name—area in this example. Elsewhere in our program, we
 * can refer to the function—and run the code inside it—by using this
 * name. The function declarations in any block of JavaScript code are
 * processed before that code runs, and the function names are bound to
 * the function objects throughout the block. We say that function
 * declarations are “hoisted” because it is as if they had all been moved up
 * to the top of whatever scope they are defined within. The upshot is that
 * code that invokes a function can exist in your program before the code
 * that declares the function.
 */