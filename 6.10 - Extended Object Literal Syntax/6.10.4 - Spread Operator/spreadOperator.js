/*
 * In ES2018 and later, you can copy the properties of an existing object
 * into a new object using the “spread operator” ... inside an object
 * literal:
 */

let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height // => 175

/*
 * In this code, the properties of the position and dimensions
 * objects are “spread out” into the rect object literal as if they had been
 * written literally inside those curly braces. Note that this ... syntax is
 * often called a spread operator but is not a true JavaScript operator in
 * any sense. Instead, it is a special-case syntax available only within
 * object literals. (Three dots are used for other purposes in other
 * JavaScript contexts, but object literals are the only context where the
 * three dots cause this kind of interpolation of one object into another
 * one.)
 * 
 * If the object that is spread and the object it is being spread into both
 * have a property with the same name, then the value of that property
 * will be the one that comes last:
 */

let o = { x: 1 };
let p = { x: 0, ...o };
p.x // => 1: the value from object o overrides the initial value
let q = { ...o, x: 2 };
q.x // => 2: the value 2 overrides the previous value from o.

/*
 * Also note that the spread operator only spreads the own properties of
 * an object, not any inherited ones:
 */

let o = Object.create({x: 1}); // o inherits the property x
let p = { ...o };
p.x // => undefined

/*
 * Finally, it is worth noting that, although the spread operator is just
 * three little dots in your code, it can represent a substantial amount of
 * work to the JavaScript interpreter. If an object has n properties, the
 * process of spreading those properties into another object is likely to be
 * an O(n) operation. This means that if you find yourself using ...
 * within a loop or recursive function as a way to accumulate data into
 * one large object, you may be writing an inefficient O(n ) algorithm that
 * will not scale well as n gets larger.
 */