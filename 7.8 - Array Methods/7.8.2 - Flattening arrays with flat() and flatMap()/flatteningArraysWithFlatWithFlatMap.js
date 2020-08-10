/*
 * In ES2019, the flat() method creates and returns a new array that
 * contains the same elements as the array it is called on, except that any
 * elements that are themselves arrays are “flattened” into the returned
 * array. For example:
 */

[1, [2, 3]].flat() // => [1, 2, 3]
[1, [2, [3]]].flat() // => [1, 2, [3]]

/*
 * When called with no arguments, flat() flattens one level of nesting.
 * Elements of the original array that are themselves arrays are flattened,
 * but array elements of those arrays are not flattened. If you want to
 * flatten more levels, pass a number to flat():
 */

let a = [1, [2, [3, [4]]]];
a.flat(1) // => [1, 2, [3, [4]]]
a.flat(2) // => [1, 2, 3, [4]]
a.flat(3) // => [1, 2, 3, 4]
a.flat(4) // => [1, 2, 3, 4]

/*
 * The flatMap() method works just like the map() method (see
 * “map()”) except that the returned array is automatically flattened as if
 * passed to flat(). That is, calling a.flatMap(f) is the same as
 * (but more efficient than) a.map(f).flat():
 */

let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
words // => ["hello", "world", "the", "definitive", "guide"];

/*
 * You can think of flatMap() as a generalization of map() that
 * allows each element of the input array to map to any number of
 * elements of the output array. In particular, flatMap() allows you to
 * map input elements to an empty array, which flattens to nothing in the
 * output array:
 */

// Map non-negative numbers to their square roots
[-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x)) // =>
[1, 2**0.5]
