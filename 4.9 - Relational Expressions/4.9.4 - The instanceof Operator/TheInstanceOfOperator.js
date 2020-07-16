/*
 * The instanceof operator expects a left-side operand that is an
 * object and a right-side operand that identifies a class of objects. The
 * operator evaluates to true if the left-side object is an instance of the
 * right-side class and evaluates to false otherwise. In JavaScript, classes 
 * of objects are defined by the constructor function that initializes them. 
 * Thus, the right-side operand of instanceof should be a function. Here are examples:
 */

let d = new Date(); // Create a new object with the Date() constructor
d instanceof Date // => true: d was created with Date()
d instanceof Object // => true: all objects are instances of Object
d instanceof Number // => false: d is not a Number object
let a = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array // => true: a is an array
a instanceof Object // => true: all arrays are objects
a instanceof RegExp // => false: arrays are not regular expressions

/*
 * Note that all objects are instances of Object. instanceof
 * considers the “superclasses” when deciding whether an object is an
 * instance of a class. If the left-side operand of instanceof is not an
 * object, instanceof returns false. If the righthand side is not a
 * class of objects, it throws a TypeError.
 * 
 * In order to understand how the instanceof operator works, you
 * must understand the “prototype chain.” .To evaluate the expression 
 * o instanceof f, JavaScript evaluates f.prototype, and then
 * looks for that value in the prototype chain of o. If it finds it, then o is
 * an instance of f (or of a subclass of f) and the operator returns true.
 * If f.prototype is not one of the values in the prototype chain of o,
 * then o is not an instance of f and instanceof returns false.
 */