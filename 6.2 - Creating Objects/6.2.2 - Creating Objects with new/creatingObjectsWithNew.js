/*
 * The new operator creates and initializes a new object. The new
 * keyword must be followed by a function invocation. A function used in
 * this way is called a constructor and serves to initialize a newly created
 * object. JavaScript includes constructors for its built-in types. For
 * example:
 */

let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping

/*
 * In addition to these built-in constructors, it is common to define your
 * own constructor functions to initialize newly created objects.
 */