/*
 * Before we can cover the third object creation technique, we must pause
 * for a moment to explain prototypes. Almost every JavaScript object has
 * a second JavaScript object associated with it. This second object is
 * known as a prototype, and the first object inherits properties from the
 * prototype.
 * 
 * All objects created by object literals have the same prototype object,
 * and we can refer to this prototype object in JavaScript code as
 * Object.prototype. Objects created using the new keyword and a
 * constructor invocation use the value of the prototype property of
 * the constructor function as their prototype. So the object created by
 * new Object() inherits from Object.prototype, just as the
 * object created by {} does. Similarly, the object created by new
 * Array() uses Array.prototype as its prototype, and the object
 * created by new Date() uses Date.prototype as its prototype.
 * This can be confusing when first learning JavaScript. Remember:
 * almost all objects have a prototype, but only a relatively small number
 * of objects have a prototype property. It is these objects with
 * prototype properties that define the prototypes for all the other
 * objects.
 * 
 * Object.prototype is one of the rare objects that has no prototype:
 * it does not inherit any properties. Other prototype objects are normal
 * objects that do have a prototype. Most built-in constructors (and most
 * user-defined constructors) have a prototype that inherits from
 * Object.prototype. For example, Date.prototype inherits
 * properties from Object.prototype, so a Date object created by
 * new Date() inherits properties from both Date.prototype and
 * Object.prototype. This linked series of prototype objects is
 * known as a prototype chain.
 * 
 * Chapter 9 explains the connection between prototypes and constructors
 * in more detail: it shows how to define new “classes” of objects by
 * writing a constructor function and setting its prototype property to
 * the prototype object to be used by the “instances” created with that
 * constructor
 */