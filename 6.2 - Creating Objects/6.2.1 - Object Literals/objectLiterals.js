/*
 * The easiest way to create an object is to include an object literal in your
 * JavaScript code. In its simplest form, an object literal is a commaseparated list of colon-separated name:value pairs, enclosed within
 * curly braces. A property name is a JavaScript identifier or a string
 * literal (the empty string is allowed). A property value is any JavaScript
 * expression; the value of the expression (it may be a primitive value or
 * an object value) becomes the value of the property. Here are some
 * examples:
 */

let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y+1 }; // More complex values
let book = {
    "main title": "JavaScript", // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences", // for is reserved, but no quotes.
    author: { // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan"
    }
};

/*
 * A trailing comma following the last property in an object literal is
 * legal, and some programming styles encourage the use of these trailing
 * commas so you’re less likely to cause a syntax error if you add a new
 * property at the end of the object literal at some later time.
 * 
 * An object literal is an expression that creates and initializes a new and
 * distinct object each time it is evaluated. The value of each property is
 * evaluated each time the literal is evaluated. This means that a single
 * object literal can create many new objects if it appears within the body
 * of a loop or in a function that is called repeatedly, and that the property
 * values of these objects may differ from each other.
 * 
 * The object literals shown here use simple syntax that has been legal
 * since the earliest versions of JavaScript.
 */