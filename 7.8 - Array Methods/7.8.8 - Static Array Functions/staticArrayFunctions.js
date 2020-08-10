/*
 * In addition to the array methods we’ve already documented, the Array
 * class also defines three static functions that you can invoke through the
 * Array constructor rather than on arrays. Array.of() and
 * Array.from() are factory methods for creating new arrays. 
 * 
 * The one other static array function is Array.isArray(), which is
 * useful for determining whether an unknown value is an array or not:
 */

Array.isArray([]) // => true
Array.isArray({}) // => false
