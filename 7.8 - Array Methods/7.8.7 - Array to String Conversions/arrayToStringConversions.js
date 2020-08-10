/*
 * The Array class defines three methods that can convert arrays to
 * strings, which is generally something you might do when creating log
 * and error messages. (If you want to save the contents of an array in
 * textual form for later reuse, serialize the array with
 * JSON.stringify() instead of using the methods described
 * here.)
 * 
 * The join() method converts all the elements of an array to strings
 * and concatenates them, returning the resulting string. You can specify
 * an optional string that separates the elements in the resulting string. If
 * no separator string is specified, a comma is used:
 */

let a = [1, 2, 3];
a.join() // => "1,2,3"
a.join(" ") // => "1 2 3"
a.join("") // => "123"
let b = new Array(10); // An array of length 10 with no elements
b.join("-") // => "---------": a string of 9 hyphens

/*
 * The join() method is the inverse of the String.split()
 * method, which creates an array by breaking a string into pieces.
 * Arrays, like all JavaScript objects, have a toString() method. For
 * an array, this method works just like the join() method with no
 * arguments:
 */

[1,2,3].toString() // => "1,2,3"
["a", "b", "c"].toString() // => "a,b,c"
[1, [2,"c"]].toString() // => "1,2,c"

/*
 * Note that the output does not include square brackets or any other sort
 * of delimiter around the array value.
 * 
 * toLocaleString() is the localized version of toString(). It
 * converts each array element to a string by calling the
 * toLocaleString() method of the element, and then it
 * concatenates the resulting strings using a locale-specific (and
 * implementation-defined) separator string.
 */