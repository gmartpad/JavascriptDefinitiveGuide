/*
 * In versions of JavaScript before ES6, the only way to declare a variable
 * is with the var keyword, and there is no way to declare constants. The
 * syntax of var is just like the syntax of let:
 */

var x;
var data = [], count = data.length;
for(var i = 0; i < count; i++) console.log(data[i]);

/*
 * Although var and let have the same syntax, there are important
 * differences in the way they work:
 * 
 *      - Variables declared with var do not have block scope. Instead,
 *        they are scoped to the body of the containing function no
 *        matter how deeply nested they are inside that function.
 * 
 *      - If you use var outside of a function body, it declares a global
 *        variable. But global variables declared with var differ from
 *        globals declared with let in an important way. Globals
 *        declared with var are implemented as properties of the global
 *        object. The global object can be referenced as
 *        globalThis. So if you write var x = 2; outside of a
 *        function, it is like you wrote globalThis.x = 2;. Note
 *        however, that the analogy is not perfect: the properties created
 *        with global var declarations cannot be deleted with the
 *        delete operator. Global variables and constants
 *        declared with let and const are not properties of the global
 *        object.
 * 
 *      - Unlike variables declared with let, it is legal to declare the
 *        same variable multiple times with var. And because var
 *        variables have function scope instead of block scope, it is
 *        actually common to do this kind of redeclaration. The variable
 *        i is frequently used for integer values, and especially as the
 *        index variable of for loops. In a function with multiple for
 *        loops, it is typical for each one to begin for(var i = 0;
 *        .... Because var does not scope these variables to the loop
 *        body, each of these loops is (harmlessly) re-declaring and 
 *        reinitializing the same variable.
 * 
 *      - One of the most unusual features of var declarations is
 *        known as hoisting. When a variable is declared with var, the
 *        declaration is lifted up (or “hoisted”) to the top of the
 *        enclosing function. The initialization of the variable remains
 *        where you wrote it, but the definition of the variable moves to
 *        the top of the function. So variables declared with var can be
 *        used, without error, anywhere in the enclosing function. If the
 *        initialization code has not run yet, then the value of the
 *        variable may be undefined, but you won’t get an error if
 *        you use the variable before it is initialized. (This can be a
 *        source of bugs and is one of the important misfeatures that
 *        let corrects: if you declare a variable with let but attempt
 *        to use it before the let statement runs, you will get an actual
 *        error instead of just seeing an undefined value.)
 *
 */

/*
 * USING UNDECLARED VARIABLES
 *
 * In strict mode, if you attempt to use an undeclared variable, you’ll get a
 * reference error when you run your code. Outside of strict mode, however, if you
 * assign a value to a name that has not been declared with let, const, or var,
 * you’ll end up creating a new global variable. It will be a global no matter now
 * deeply nested within functions and blocks your code is, which is almost certainly
 * not what you want, is bug-prone, and is one of the best reasons for using strict
 * mode!
 * 
 * Global variables created in this accidental way are like global variables declared
 * with var: they define properties of the global object. But unlike the properties
 * defined by proper var declarations, these properties can be deleted with the
 * delete operator.
 */

