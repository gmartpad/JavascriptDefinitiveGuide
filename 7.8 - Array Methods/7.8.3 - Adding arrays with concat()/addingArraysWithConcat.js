/*
 * The concat() method creates and returns a new array that contains
 * the elements of the original array on which concat() was invoked,
 * followed by each of the arguments to concat(). If any of these
 * arguments is itself an array, then it is the array elements that are
 * concatenated, not the array itself. Note, however, that concat() does
 * not recursively flatten arrays of arrays. concat() does not modify
 * the array on which it is invoked:
 */

let a = [1,2,3];
a.concat(4, 5) // => [1,2,3,4,5]
a.concat([4,5],[6,7]) // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5,[6,7]]) // => [1,2,3,4,5,[6,7]]; but not nested arrays
a // => [1,2,3]; the original array is unmodified

/*
 * Note that concat() makes a new copy of the array it is called on. In
 * many cases, this is the right thing to do, but it is an expensive
 * operation. If you find yourself writing code like a = a.concat(x),
 * then you should think about modifying your array in place with
 * push() or splice() instead of creating a new one
 */