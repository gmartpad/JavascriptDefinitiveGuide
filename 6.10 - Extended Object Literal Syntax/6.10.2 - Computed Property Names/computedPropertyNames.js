/*
 * Sometimes you need to create an object with a specific property, but
 * the name of that property is not a compile-time constant that you can
 * type literally in your source code. Instead, the property name you need
 * is stored in a variable or is the return value of a function that you
 * invoke. You can’t use a basic object literal for this kind of property.
 * Instead, you have to create an object and then add the desired
 * properties as an extra step:
 */

const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;

/*
 * It is much simpler to set up an object like this with an ES6 feature
 * known as computed properties that lets you take the square brackets
 * from the preceding code and move them directly into the object literal:
 */

const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};

p.p1 + p.p2 // => 3

/*
 * With this new syntax, the square brackets delimit an arbitrary
 * JavaScript expression. That expression is evaluated, and the resulting
 * value (converted to a string, if necessary) is used as the property name.
 * 
 * One situation where you might want to use computed properties is
 * when you have a library of JavaScript code that expects to be passed
 * objects with a particular set of properties, and the names of those
 * properties are defined as constants in that library. If you are writing
 * code to create the objects that will be passed to that library, you could
 * hardcode the property names, but you’d risk bugs if you type the
 * property name wrong anywhere, and you’d risk version mismatch
 * issues if a new version of the library changes the required property
 * names. Instead, you might find that it makes your code more robust to
 * use computed property syntax with the property name constants
 * defined by the library
 */