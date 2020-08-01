/*
 * Array.from is another array factory method introduced in ES6. It
 * expects an iterable or array-like object as its first argument and returns
 * a new array that contains the elements of that object. With an iterable
 * argument, Array.from(iterable) works like the spread operator
 * [...iterable] does. It is also a simple way to make a copy of an
 * array:
 */

let copy = Array.from(original);

/*
 * Array.from() is also important because it defines a way to make a
 * true-array copy of an array-like object. Array-like objects are non-array
 * objects that have a numeric length property and have values stored with
 * properties whose names happen to be integers. When working with
 * client-side JavaScript, the return values of some web browser methods
 * are array-like, and it can be easier to work with them if you first
 * convert them to true arrays:
 */

let truearray = Array.from(arraylike);

/*
 * Array.from() also accepts an optional second argument. If you
 * pass a function as the second argument, then as the new array is being
 * built, each element from the source object will be passed to the
 * function you specify, and the return value of the function will be stored
 * in the array instead of the original value. (This is very much like the
 * array map() method that will be introduced later in the chapter, but it
 * is more efficient to perform the mapping while the array is being built
 * than it is to build the array and then map it to another new array.)
 */