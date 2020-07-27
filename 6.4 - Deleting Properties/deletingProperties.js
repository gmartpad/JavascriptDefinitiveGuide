/*
 * The delete operator removes a property from an object. Its
 * single operand should be a property access expression. Surprisingly,
 * delete does not operate on the value of the property but on the
 * property itself:
 */

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

/*
 * The delete operator only deletes own properties, not inherited ones.
 * (To delete an inherited property, you must delete it from the prototype
 * object in which it is defined. Doing this affects every object that
 * inherits from that prototype.)
 * 
 * A delete expression evaluates to true if the delete succeeded or if
 * the delete had no effect (such as deleting a nonexistent property).
 * delete also evaluates to true when used (meaninglessly) with an
 * expression that is not a property access expression:
 */

let o = {x: 1}; // o has own property x and inherits property toString
delete o.x // => true: deletes property x
delete o.x // => true: does nothing (x doesn't exist) but true anyway
delete o.toString // => true: does nothing (toString isn't an own property)
delete 1 // => true: nonsense, but true anyway

/*
 * delete does not remove properties that have a configurable attribute
 * of false. Certain properties of built-in objects are non-configurable,
 * as are properties of the global object created by variable declaration
 * and function declaration. In strict mode, attempting to delete a nonconfigurable property causes a TypeError. In non-strict mode, delete
 * simply evaluates to false in this case:
 */

// In strict mode, all these deletions throw TypeError instead of returning false
delete Object.prototype // => false: property is nonconfigurable
var x = 1; // Declare a global variable
delete globalThis.x // => false: can't delete this property
function f() {} // Declare a global function
delete globalThis.f // => false: can't delete this property either

/*
 * When deleting configurable properties of the global object in non-strict
 * mode, you can omit the reference to the global object and simply
 * follow the delete operator with the property name:
 */

globalThis.x = 1; // Create a configurable global property (no let or var)
delete x // => true: this property can be deleted

/*
 * In strict mode, however, delete raises a SyntaxError if its operand is
 * an unqualified identifier like x, and you have to be explicit about the
 * property access:
 */

delete x; // SyntaxError in strict mode
delete globalThis.x; // This works