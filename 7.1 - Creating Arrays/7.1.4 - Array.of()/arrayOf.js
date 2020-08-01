/*
 * When the Array() constructor function is invoked with one numeric
 * argument, it uses that argument as an array length. But when invoked
 * with more than one numeric argument, it treats those arguments as
 * elements for the array to be created. This means that the Array()
 * constructor cannot be used to create an array with a single numeric
 * element.
 * 
 * In ES6, the Array.of() function addresses this problem: it is a
 * factory method that creates and returns a new array, using its argument
 * values (regardless of how many of them there are) as the array
 * elements:
 */

Array.of() // => []; returns empty array with no arguments
Array.of(10) // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3) // => [1, 2, 3]
