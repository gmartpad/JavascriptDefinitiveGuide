/*
 * As we’ve seen, JavaScript arrays have some special features that other
 * objects do not have:
 *
 *      - The length property is automatically updated as new
 *      elements are added to the list.
 * 
 *      - Setting length to a smaller value truncates the array.
 * 
 *      - Arrays inherit useful methods from Array.prototype.
 * 
 *      - Array.isArray() returns true for arrays.
 *
 * These are the features that make JavaScript arrays distinct from regular
 * objects. But they are not the essential features that define an array. It is
 * often perfectly reasonable to treat any object with a numeric length
 * property and corresponding non-negative integer properties as a kind of
 * array.
 * 
 * These “array-like” objects actually do occasionally appear in practice,
 * and although you cannot directly invoke array methods on them or
 * expect special behavior from the length property, you can still iterate
 * through them with the same code you’d use for a true array. It turns out
 * that many array algorithms work just as well with array-like objects as
 * they do with real arrays. This is especially true if your algorithms treat
 * the array as read-only or if they at least leave the array length
 * unchanged.
 * 
 * The following code takes a regular object, adds properties to make it an
 * array-like object, and then iterates through the “elements” of the
 * resulting pseudo-array:
 */

let a = {}; // Start with a regular empty object

// Add properties to make it "array-like"
let i = 0;
while(i < 10) {
    a[i] = i * i;
    i++;
}
a.length = i;

// Now iterate through it as if it were a real array
let total = 0;
for(let j = 0; j < a.length; j++) {
    total += a[j];
}

/*
 * In client-side JavaScript, a number of methods for working with
 * HTML documents (such as document.querySelectorAll(),
 * for example) return array-like objects. Here’s a function you might use
 * to test for objects that work like arrays:
 */

 // Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType !== 3 test.

function isArrayLike(o) {
    if (o && // o is not null, undefined, etc.
    typeof o === "object" && // o is an object
    Number.isFinite(o.length) && // o.length is a finite number
    o.length >= 0 && // o.length is nonnegative
    Number.isInteger(o.length) && // o.length is an integer
    o.length < 4294967295) { // o.length < 2^32 - 1
        return true; // Then o is arraylike.
    } else {
        return false; // Otherwise it is not.
    }
}

/*
 * We’ll see in a later section that strings behave like arrays.
 * Nevertheless, tests like this one for array-like objects typically return
 * false for strings—they are usually best handled as strings, not as
 * arrays.
 * 
 * Most JavaScript array methods are purposely defined to be generic so
 * that they work correctly when applied to array-like objects in addition
 * to true arrays. Since array-like objects do not inherit from
 * Array.prototype, you cannot invoke array methods on them
 * directly. You can invoke them indirectly using the Function.call
 * method, however:
 */

let a = {"0": "a", "1": "b", "2": "c", length: 3}; // An array-like object
Array.prototype.join.call(a, "+") // => "a+b+c"
Array.prototype.map.call(a, x => x.toUpperCase()) // => ["A","B","C"]
Array.prototype.slice.call(a, 0) // => ["a","b","c"]: true array copy
Array.from(a) // => ["a","b","c"]: easier array copy

/*
 * The second-to-last line of this code invokes the Array slice()
 * method on an array-like object in order to copy the elements of that
 * object into a true array object. This is an idiomatic trick that exists in
 * much legacy code, but is now much easier to do with
 * Array.from().
 */