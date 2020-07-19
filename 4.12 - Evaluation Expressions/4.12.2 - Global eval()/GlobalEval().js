/*
 * It is the ability of eval() to change local variables that is so
 * problematic to JavaScript optimizers. As a workaround, however,
 * interpreters simply do less optimization on any function that calls
 * eval(). But what should a JavaScript interpreter do, however, if a
 * script defines an alias for eval() and then calls that function by
 * another name? The JavaScript specification declares that when
 * eval() is invoked by any name other than “eval”, it should evaluate
 * the string as if it were top-level global code. The evaluated code may
 * define new global variables or global functions, and it may set global
 * variables, but it will not use or modify any variables local to the calling
 * function, and will not, therefore, interfere with local optimizations.
 * 
 * A “direct eval” is a call to the eval() function with an expression
 * that uses the exact, unqualified name “eval” (which is beginning to feel
 * like a reserved word). Direct calls to eval() use the variable
 * environment of the calling context. Any other call—an indirect call—
 * uses the global object as its variable environment and cannot read,
 * write, or define local variables or functions. (Both direct and indirect
 * calls can define new variables only with var. Uses of let and const
 * inside an evaluated string create variables and constants that are local
 * to the evaluation and do not alter the calling or global environment.)
 *
 * The following code demonstrates:
 */

const geval = eval; // Using another name does a global eval
let x = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
    let x = "local"; // Define a local variable
    eval("x += 'changed';"); // Direct eval sets local variable
    return x; // Return changed local variable
}
function g() { // This function does a global eval
    let y = "local"; // A local variable
    geval("y += 'changed';"); // Indirect eval sets global variable
    return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":

/*
 * Notice that the ability to do a global eval is not just an accommodation
 * to the needs of the optimizer; it is actually a tremendously useful
 * feature that allows you to execute strings of code as if they were
 * independent, top-level scripts. As noted at the beginning of this section,
 * it is rare to truly need to evaluate a string of code. But if you do find it
 * necessary, you are more likely to want to do a global eval than a local
 * eval.
 */