/*
 * Object.create() creates a new object, using its first argument as
 * the prototype of that object:
 */

let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
o1.x + o1.y // => 3

/*
 * You can pass null to create a new object that does not have a
 * prototype, but if you do this, the newly created object will not inherit
 * anything, not even basic methods like toString() (which means it
 * won’t work with the + operator either):
 */

let o2 = Object.create(null); // o2 inherits no props or methods.

/*
 * If you want to create an ordinary empty object (like the object returned
 * by {} or new Object()), pass Object.prototype:
 */

let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

/*
 * The ability to create a new object with an arbitrary prototype is a
 * powerful one, and we’ll use Object.create() in a number of
 * places throughout this chapter. (Object.create() also takes an
 * optional second argument that describes the properties of the new
 * object.
 * 
 * One use for Object.create() is when you want to guard against
 * unintended (but nonmalicious) modification of an object by a library
 * function that you don’t have control over. Instead of passing the object
 * directly to the function, you can pass an object that inherits from it. If
 * the function reads properties of that object, it will see the inherited
 * values. If it sets properties, however, those writes will not affect the
 * original object.
 */

let o = { x: "don't change this value" };
library.function(Object.create(o)); // Guard against accidental modifications

/*
 * To understand why this works, you need to know how properties are
 * queried and set in JavaScript. These are the topics of the next section.
 */