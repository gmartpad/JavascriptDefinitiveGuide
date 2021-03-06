/*
 * Instead of testing for the existence of individual properties, we
 * sometimes want to iterate through or obtain a list of all the properties
 * of an object. There are a few different ways to do this.
 * 
 * The for/in loop runs the body of the loop
 * once for each enumerable property (own or inherited) of the specified
 * object, assigning the name of the property to the loop variable. Built-in
 * methods that objects inherit are not enumerable, but the properties that
 * your code adds to objects are enumerable by default. For example:
 */

let o = {x: 1, y: 2, z: 3}; // Three enumerable own properties

o.propertyIsEnumerable("toString") // => false: not enumerable

for(let p in o) { // Loop through the properties
    console.log(p); // Prints x, y, and z, but not toString
}

/*
 * To guard against enumerating inherited properties with for/in, you
 * can add an explicit check inside the loop body:
 */

for(let p in o) {
    if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
}

for(let p in o) {
    if (typeof o[p] === "function") continue; // Skip all methods
}

/*
 * As an alternative to using a for/in loop, it is often easier to get an
 * array of property names for an object and then loop through that array
 * with a for/of loop. There are four functions you can use to get an
 * array of property names:
 * 
 *      - Object.keys() returns an array of the names of the
 *      enumerable own properties of an object. It does not include
 *      non-enumerable properties, inherited properties, or properties
 *      whose name is a Symbol.
 *      
 *      - Object.getOwnPropertyNames() works like
 *      Object.keys() but returns an array of the names of nonenumerable own properties as well, as long as their names are
 *      strings.
 *      
 *      - Object.getOwnPropertySymbols() returns own
 *      properties whose names are Symbols, whether or not they are
 *      enumerable.
 *      
 *      - Reflect.ownKeys() returns all own property names, both
 *      enumerable and non-enumerable, and both string and Symbol.
 * 
 */