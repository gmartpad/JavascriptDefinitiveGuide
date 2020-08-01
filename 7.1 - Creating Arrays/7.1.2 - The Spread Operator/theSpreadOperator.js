/*
 * In ES6 and later, you can use the “spread operator,” ..., to include
 * the elements of one array within an array literal:
 */

let a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]

/*
 * The three dots “spread” the array a so that its elements become
 * elements within the array literal that is being created. It is as if the
 * ...a was replaced by the elements of the array a, listed literally as
 * part of the enclosing array literal. (Note that, although we call these
 * three dots a spread operator, this is not a true operator because it can
 * only be used in array literals and, as we’ll see later in the book,
 * function invocations.)
 * 
 * The spread operator is a convenient way to create a (shallow) copy of
 * an array:
 */

let original = [1,2,3];
let copy = [...original];
copy[0] = 0; // Modifying the copy does not change the original
original[0] // => 1


/*
 * The spread operator works on any iterable object. Strings are iterable, so
 * you can use a spread operator to turn any string into an array of singlecharacter strings:
 */

let digits = [..."0123456789ABCDEF"];
digits // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E", "F"]

/*
 * Set objects are iterable, so an easy way to remove duplicate
 * elements from an array is to convert the array to a set and then
 * immediately convert the set back to an array using the spread operator:
 */

let letters = [..."hello world"];
[...new Set(letters)] // => ["h","e","l","o"," ","w","r","d"]
