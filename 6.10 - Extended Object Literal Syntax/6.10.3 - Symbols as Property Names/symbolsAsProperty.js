/*
 * The computed property syntax enables one other very important object
 * literal feature. In ES6 and later, property names can be strings or
 * symbols. If you assign a symbol to a variable or constant, then you can
 * use that symbol as a property name using the computed property
 * syntax:
 */

const extension = Symbol("my extension symbol");
let o = {
    [extension]: { /* extension data stored in this object */ }
};
o[extension].x = 0; // This won't conflict with other properties of o

/*
 * Symbols are opaque values. You can’t do
 * anything with them other than use them as property names. Every
 * Symbol is different from every other Symbol, however, which means
 * that Symbols are good for creating unique property names. Create a
 * new Symbol by calling the Symbol() factory function. (Symbols are
 * primitive values, not objects, so Symbol() is not a constructor
 * function that you invoke with new.) The value returned by Symbol()
 * is not equal to any other Symbol or other value. You can pass a string
 * to Symbol(), and this string is used when your Symbol is converted
 * to a string. But this is a debugging aid only: two Symbols created with
 * the same string argument are still different from one another.
 *
 * The point of Symbols is not security, but to define a safe extension
 * mechanism for JavaScript objects. If you get an object from third-party
 * code that you do not control and need to add some of your own
 * properties to that object but want to be sure that your properties will
 * not conflict with any properties that may already exist on the object,
 * you can safely use Symbols as your property names. If you do this, you
 * can also be confident that the third-party code will not accidentally
 * alter your symbolically named properties. (That third-party code could,
 * of course, use Object.getOwnPropertySymbols() to discover
 * the Symbols you’re using and could then alter or delete your
 * properties. This is why Symbols are not a security mechanism.) 
 */