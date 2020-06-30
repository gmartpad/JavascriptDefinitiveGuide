/*
 * ES6 implements a kind of compound declaration and assignment
 * syntax known as destructuring assignment. In a destructuring
 * assignment, the value on the righthand side of the equals sign is an
 * array or object (a “structured” value), and the lefthand side specifies
 * one or more variable names using a syntax that mimics array and
 * object literal syntax. When a destructuring assignment occurs, one or
 * more values are extracted (“destructured”) from the value on the right
 * and stored into the variables named on the left. Destructuring
 * assignment is perhaps most commonly used to initialize variables as
 * part of a const, let, or var declaration statement, but it can also be
 * done in regular assignment expressions (with variables that have
 * already been declared). And, as we’ll see in §8.3.5, destructuring can
 * also be used when defining the parameters to a function.
 * 
 * Here are simple destructuring assignments using arrays of values:
 */

let [x,y] = [1,2]; // Same as let x=1, y=2
[x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1
[x,y] = [y,x]; // Swap the value of the two variables
[x,y] // => [3,2]: the incremented and swapped values

/*
 * Notice how destructuring assignment makes it easy to work with
 * functions that return arrays of values:
 */

// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r,theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); 
theta == Math.PI/4
let [x,y] = toCartesian(r,theta); // [x, y] == [1.0, 1,0]
    
/*
 * We saw that variables and constants can be declared as part of
 * JavaScript’s various for loops. It is possible to use variable
 * destructuring in this context as well. Here is a code that loops over the
 * name/value pairs of all properties of an object and uses destructuring
 * assignment to convert those pairs from two-element arrays into
 * individual variables:
 */

let o = { x: 1, y: 2 }; // The object we'll loop over

for(const [name, value] of Object.entries(o)) {
    console.log(name, value); // Prints "x 1" and "y 2"
}

/*
 * The number of variables on the left of a destructuring assignment does
 * not have to match the number of array elements on the right. Extra
 * variables on the left are set to undefined, and extra values on the
 * right are ignored. The list of variables on the left can include extra
 * commas to skip certain values on the right:
 */

let [x,y] = [1]; // x == 1; y == undefined
[x,y] = [1,2,3]; // x == 1; y == 2
[,x,,y] = [1,2,3,4]; // x == 2; y == 4

/*
 * If you want to collect all unused or remaining values into a single
 * variable when destructuring an array, use three dots (...) before the
 * last variable name on the left-hand side:
 */

let [x, ...y] = [1,2,3,4]; // y == [2,3,4]

/*
 * Destructuring assignment can be used with nested arrays. In this case,
 * the lefthand side of the assignment should look like a nested array
 * literal:
 */

let [a, [b, c]] = [1, [2,2.5], 3]; // a == 1; b == 2; c == 2.5

/*
 * A powerful feature of array destructuring is that it does not actually
 * require an array! You can use any iterable object on the
 * righthand side of the assignment; any object that can be used with a
 * for/of loop can also be destructured:
 */

let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]

/*
 * Destructuring assignment can also be performed when the righthand
 * side is an object value. In this case, the lefthand side of the assignment
 * looks something like an object literal: a comma-separated list of
 * variable names within curly braces:
 */

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
let {r, g, b} = transparent; // r == 0.0; g == 0.0; b == 0.0

/*
 * The next example copies global functions of the Math object into
 * variables, which might simplify code that does a lot of trigonometry:
 */

// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
const {sin, cos, tan} = Math;

/*
 * Notice in the code here that the Math object has many properties other
 * than the three that are destructured into individual variables. Those that
 * are not named are simply ignored. If the lefthand side of this
 * assignment had included a variable whose name was not a property of
 * Math, that variable would simply be assigned undefined.
 * 
 * In each of these object destructuring examples, we have chosen
 * variable names that match the property names of the object we’re
 * destructuring. This keeps the syntax simple and easy to understand, but
 * it is not required. Each of the identifiers on the lefthand side of an
 * object destructuring assignment can also be a colon-separated pair of
 * identifiers, where the first is the name of the property whose value is to
 * be assigned and the second is the name of the variable to assign it to:
 */

 // Same as const cosine = Math.cos, tangent = Math.tan;
const { cos: cosine, tan: tangent } = Math;

/*
 * I find that object destructuring syntax becomes too complicated to be
 * useful when the variable names and property names are not the same,
 * and I tend to avoid the shorthand in this case. If you choose to use it,
 * remember that property names are always on the left of the colon, in
 * both object literals and on the left of an object destructuring
 * assignment.
 * 
 * Destructuring assignment becomes even more complicated when it is
 * used with nested objects, or arrays of objects, or objects of arrays, but
 * it is legal:
 */

let points = [{x: 1, y: 2}, {x: 3, y: 4}]; // An array of two point objects
let [{x: x1, y: y1}, {x: x2, y: y2}] = points; // destructured into 4 variables.
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

/*
 * Or, instead of destructuring an array of objects, we could destructure an
 * object of arrays:
 */

let points = { p1: [1,2], p2: [3,4] }; // An object with 2 array props
let { p1: [x1, y1], p2: [x2, y2] } = points; // destructured into 4 vars
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

/*
 * Complex destructuring syntax like this can be hard to write and hard to
 * read, and you may be better off just writing out your assignments
 * explicitly with traditional code like let x1 = points.p1[0];.
 */

/*
 * UNDERSTANDING COMPLEX DESTRUCTURING
 *
 * If you find yourself working with code that uses complex destructuring assignments, 
 * there is a useful regularity that can help you make sense of the complex cases. 
 * Think first about a regular (singlevalue) assignment. After the assignment is done, 
 * you can take the variable name from the lefthand side of the assignment and use it as 
 * an expression in your code, where it will evaluate to whatever value you assigned it. 
 * The same thing is true for destructuring assignment. The lefthand side of a 
 * destructuring assignment looks like an array literal or an object literal. After the
 * assignment has been done, the lefthand side will actually work as a valid array 
 * literal or object literal elsewhere in your code. You can check that you’ve written 
 * a destructuring assignment correctly by trying to use the lefthand side on the 
 * righthand side of another assignment expression:
 */

 // Start with a data structure and a complex destructuring
let points = [{x: 1, y: 2}, {x: 3, y: 4}];
let [{x: x1, y: y1}, {x: x2, y: y2}] = points;

// Check your destructuring syntax by flipping the assignment around
let points2 = [{x: x1, y: y1}, {x: x2, y: y2}]; // points2 == points