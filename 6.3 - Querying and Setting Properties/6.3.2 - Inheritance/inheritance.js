/*
 * JavaScript objects have a set of “own properties,” and they also inherit
 * a set of properties from their prototype object. To understand this, we
 * must consider property access in more detail. The examples in this
 * section use the Object.create() function to create objects with
 * specified prototypes.
 * 
 * Suppose you query the property x in the object o. If o does not have an
 * own property with that name, the prototype object of o is queried for
 * the property x. If the prototype object does not have an own property
 * by that name, but has a prototype itself, the query is performed on the
 * prototype of the prototype. This continues until the property x is found
 * or until an object with a null prototype is searched. As you can see,
 * the prototype attribute of an object creates a chain or linked list
 * from which properties are inherited:
 */

let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.

let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.

let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.

let f = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3; x and y are inherited from o and p

/*
 * Now suppose you assign to the property x of the object o. If o already
 * has an own (non-inherited) property named x, then the assignment
 * simply changes the value of this existing property. Otherwise, the
 * assignment creates a new property named x on the object o. If o
 * previously inherited the property x, that inherited property is now
 * hidden by the newly created own property with the same name.
 *
 * Property assignment examines the prototype chain only to determine
 * whether the assignment is allowed. If o inherits a read-only property
 * named x, for example, then the assignment is not allowed.
 * 
 * If the assignment is
 * allowed, however, it always creates or sets a property in the original
 * object and never modifies objects in the prototype chain. The fact that
 * inheritance occurs when querying properties but not when setting them
 * is a key feature of JavaScript because it allows us to selectively
 * override inherited properties:
 *
 */ 

let unitcircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r

c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property

unitcircle.r // => 1: the prototype is not affected

/*
 * There is one exception to the rule that a property assignment either
 * fails or creates or sets a property in the original object. If o inherits the
 * property x, and that property is an accessor property with a setter
 * method, then that setter method is called rather than
 * creating a new property x in o. Note, however, that the setter method is
 * called on the object o, not on the prototype object that defines the
 * property, so if the setter method defines any properties, it will do so on
 * o, and it will again leave the prototype chain unmodified.
 */