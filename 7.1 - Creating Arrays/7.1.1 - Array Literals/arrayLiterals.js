/*
 * By far the simplest way to create an array is with an array literal, which
 * is simply a comma-separated list of array elements within square
 * brackets. For example:
 */

let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
let misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

/*
 * The values in an array literal need not be constants; they may be
 * arbitrary expressions:
 */

let base = 1024;
let table = [base, base+1, base+2, base+3];

/*
 * Array literals can contain object literals or other array literals:
 */

let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

/*
 * If an array literal contains multiple commas in a row, with no value
 * between, the array is sparse (see §7.3). Array elements for which
 * values are omitted do not exist but appear to be undefined if you
 * query them:
 */

let count = [1,,3]; // Elements at indexes 0 and 2. No element at index 1
let undefs = [,,]; // An array with no elements but a length of 2

/*
 * Array literal syntax allows an optional trailing comma, so [,,] has a
 * length of 2, not 3.
 */