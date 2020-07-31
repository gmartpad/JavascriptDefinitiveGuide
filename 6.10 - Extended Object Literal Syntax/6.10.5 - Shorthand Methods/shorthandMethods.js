/*
 * When a function is defined as a property of an object, we call that
 * function a method. Prior to ES6, you would define a method in an
 * object literal using a function definition expression just as you would
 * define any other property of an object:
 */

let square = {
    area: function() { return this.side * this.side; },
    side: 10
};
square.area() // => 100

/*
 * In ES6, however, the object literal syntax has been extended to allow a shortcut
 * where the function keyword and the colon are omitted, resulting in
 * code like this: 
 */

let square = {
    area() { return this.side * this.side; },
    side: 10
};
square.area() // => 100

/*
 * Both forms of the code are equivalent: both add a property named
 * area to the object literal, and both set the value of that property to the
 * specified function. The shorthand syntax makes it clearer that area()
 * is a method and not a data property like side.
 * When you write a method using this shorthand syntax, the property
 * name can take any of the forms that are legal in an object literal: in
 * addition to a regular JavaScript identifier like the name area above,
 * you can also use string literals and computed property names, which
 * can include Symbol property names:
 */

const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
    "method With Spaces"(x) { return x + 1; },
    [METHOD_NAME](x) { return x + 2; },
    [symbol](x) { return x + 3; }
};
weirdMethods["method With Spaces"](1) // => 2
weirdMethods[METHOD_NAME](1) // => 3
weirdMethods[symbol](1) // => 4

/*
 * Using a Symbol as a method name is not as strange as it seems. In
 * order to make an object iterable (so it can be used with a for/of
 * loop), you must define a method with the symbolic name
 * Symbol.iterator
 */