/*
 * Object and array initializers are expressions whose value is a newly
 * created object or array. These initializer expressions are sometimes
 * called object literals and array literals. Unlike true literals, however,
 * they are not primary expressions, because they include a number of
 * subexpressions that specify property and element values. Array
 * initializers have a slightly simpler syntax, and we’ll begin with those.
 *
 * An array initializer is a comma-separated list of expressions contained
 * within square brackets. The value of an array initializer is a newly
 * created array. The elements of this new array are initialized to the
 * values of the comma-separated expressions:
 * 
 */

[] // An empty array: no expressions inside brackets means no elements
[1+2,3+4] // A 2-element array. First element is 3, second is 7

/*
 * The element expressions in an array initializer can themselves be array
 * initializers, which means that these expressions can create nested
 * arrays:
 */

let matrix = [[1,2,3], [4,5,6], [7,8,9]];

/*
 * The element expressions in an array initializer are evaluated each time
 * the array initializer is evaluated. This means that the value of an array
 * initializer expression may be different each time it is evaluated.
 * 
 * Undefined elements can be included in an array literal by simply
 * omitting a value between commas. For example, the following array
 * contains five elements, including three undefined elements:
 */

let sparseArray = [1,,,,5];

/*
 * A single trailing comma is allowed after the last expression in an array
 * initializer and does not create an undefined element. However, any
 * array access expression for an index after that of the last expression
 * will necessarily evaluate to undefined.
 * 
 * Object initializer expressions are like array initializer expressions, but
 * the square brackets are replaced by curly brackets, and each
 * subexpression is prefixed with a property name and a colon:
 */

let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p

/*
 * In ES6, object literals have a much more feature-rich syntax.
 * Object literals can be nested. For example:
 */

let rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, y: 5 }
};
    