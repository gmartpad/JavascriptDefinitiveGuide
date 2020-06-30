/*
 * In modern JavaScript (ES6 and later), variables are declared with the
 * let keyword, like this:
 */

let i;
let sum;

/*
 * You can also declare multiple variables in a single let statement:
 */

let i, sum;

/*
 * It is a good programming practice to assign an initial value to your
 * variables when you declare them, when this is possible:
 */

let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x*x; // Initializers can use previously declared variables

/*
 * If you don’t specify an initial value for a variable with the let
 * statement, the variable is declared, but its value is undefined until
 * your code assigns a value to it.
 * 
 * To declare a constant instead of a variable, use const instead of let.
 * const works just like let except that you must initialize the constant
 * when you declare it:
 */

const H0 = 74; // Hubble constant (km/s/Mpc)
const C = 299792.458; // Speed of light in a vacuum (km/s)
const AU = 1.496E8; // Astronomical Unit: distance to the sun (km)

/*
 * As the name implies, constants cannot have their values changed, and
 * any attempt to do so causes a TypeError to be thrown.
 * 
 * It is a common (but not universal) convention to declare constants
 * using names with all capital letters such as H0 or HTTP_NOT_FOUND
 * as a way to distinguish them from variables.
 */

/*
 * WHEN TO USE CONST
 *
 * There are two schools of thought about the use of the const keyword. One
 * approach is to use const only for values that are fundamentally unchanging, like
 * the physical constants shown, or program version numbers, or byte sequences
 * used to identify file types, for example. Another approach recognizes that many of
 * the so-called variables in our program don’t actually ever change as our program
 * runs. In this approach, we declare everything with const, and then if we find that
 * we do actually want to allow the value to vary, we switch the declaration to let.
 * This may help prevent bugs by ruling out accidental changes to variables that we
 * did not intend.
 * 
 * In one approach, we use const only for values that must not change. In the other,
 * we use const for any value that does not happen to change. 
 */

/*
 * Each of these loops includes a loop variable
 * that gets a new value assigned to it on each iteration of the loop.
 * JavaScript allows us to declare the loop variable as part of the loop
 * syntax itself, and this is another common way to use let:
 */

for(let i = 0, len = data.length; i < len; i++)
    console.log(data[i]);

for(let datum of data) 
    console.log(datum);

for(let property in object) 
    console.log(property);

/*
 * It may seem surprising, but you can also use const to declare the loop
 * “variables” for for/in and for/of loops, as long as the body of the
 * loop does not reassign a new value. In this case, the const declaration
 * is just saying that the value is constant for the duration of one loop
 * iteration:
 */

for(const datum of data) 
    console.log(datum);

for(const property in object) 
    console.log(property);

/*
 * VARIABLE AND CONSTANT SCOPE
 *
 * The scope of a variable is the region of your program source code in
 * which it is defined. Variables and constants declared with let and
 * const are block scoped. This means that they are only defined within
 * the block of code in which the let or const statement appears.
 * JavaScript class and function definitions are blocks, and so are the
 * bodies of if/else statements, while loops, for loops, and so on.
 * Roughly speaking, if a variable or constant is declared within a set of
 * curly braces, then those curly braces delimit the region of code in
 * which the variable or constant is defined (though of course it is not
 * legal to reference a variable or constant from lines of code that execute
 * before the let or const statement that declares the variable).
 * Variables and constants declared as part of a for, for/in, or
 * for/of loop have the loop body as their scope, even though they
 * technically appear outside of the curly braces.
 * 
 * When a declaration appears at the top level, outside of any code blocks,
 * we say it is a global variable or constant and has global scope. In Node
 * and in client-side JavaScript modules, the scope of a
 * global variable is the file that it is defined in. In traditional client-side
 * JavaScript, however, the scope of a global variable is the HTML
 * document in which it is defined. That is: if one <script> declares a
 * global variable or constant, that variable or constant is defined in all of
 * the <script> elements in that document (or at least all of the scripts
 * that execute after the let or const statement executes).
 */

/*
 * REPEATED DECLARATIONS
 *
 * It is a syntax error to use the same name with more than one let or
 * const declaration in the same scope. It is legal (though a practice best
 * avoided) to declare a new variable with the same name in a nested
 * scope:
 */

const x = 1; // Declare x as a global constant
if (x === 1) {
    let x = 2; // Inside a block x can refer to a different value
    console.log(x); // Prints 2
}
console.log(x); // Prints 1: we're back in the global scope now
let x = 3; // ERROR! Syntax error trying to redeclare x

/*
 * DECLARATIONS AND TYPES
 *
 * If you’re used to statically typed languages such as C or Java, you may
 * think that the primary purpose of variable declarations is to specify the
 * type of values that may be assigned to a variable. But, as you have
 * seen, there is no type associated with JavaScript’s variable
 * declarations. A JavaScript variable can hold a value of any type. For
 * example, it is perfectly legal (but generally poor programming style) in
 * JavaScript to assign a number to a variable and then later assign a
 * string to that variable:
 */

let i = 10;
i = "ten";
