/*
 * Arrays implement indexOf(), lastIndexOf(), and
 * includes() methods that are similar to the same-named methods of
 * strings. There are also sort() and reverse() methods for
 * reordering the elements of an array. These methods are described in the
 * subsections that follow.
 *
 * INDEXOF() AND LASTINDEXOF()
 * 
 * indexOf() and lastIndexOf() search an array for an element
 * with a specified value and return the index of the first such element
 * found, or -1 if none is found. indexOf() searches the array from
 * beginning to end, and lastIndexOf() searches from end to
 * beginning: 
 * 
 */

let a = [0,1,2,1,0];
a.indexOf(1) // => 1: a[1] is 1
a.lastIndexOf(1) // => 3: a[3] is 1
a.indexOf(3) // => -1: no element has value 3

/*
 * indexOf() and lastIndexOf() compare their argument to the
 * array elements using the equivalent of the === operator. If your array
 * contains objects instead of primitive values, these methods check to see
 * if two references both refer to exactly the same object. If you want to
 * actually look at the content of an object, try using the find() method
 * with your own custom predicate function instead.
 *
 * indexOf() and lastIndexOf() take an optional second
 * argument that specifies the array index at which to begin the search. If
 * this argument is omitted, indexOf() starts at the beginning and
 * lastIndexOf() starts at the end. Negative values are allowed for
 * the second argument and are treated as an offset from the end of the
 * array, as they are for the slice() method: a value of –1, for example,
 * specifies the last element of the array.
 * The following function searches an array for a specified value and
 * returns an array of all matching indexes. This demonstrates how the
 * second argument to indexOf() can be used to find matches beyond
 * the first.
 */

// Find all occurrences of a value x in an array a and return an array
// of matching indexes
function findall(a, x) {

    let results = [], // The array of indexes we'll return
    
    len = a.length, // The length of the array to be searched
    
    pos = 0; // The position to search from

    while(pos < len) { // While more elements to search...

        pos = a.indexOf(x, pos); // Search
        
        if (pos === -1) break; // If nothing found, we're done.
        
        results.push(pos); // Otherwise, store index in array
        
        pos = pos + 1; // And start next search at next element
    }

    return results; // Return array of indexes

}

/*
 * Note that strings have indexOf() and lastIndexOf() methods
 * that work like these array methods, except that a negative second
 * argument is treated as zero.
 * 
 * INCLUDES()
 * 
 * The ES2016 includes() method takes a single argument and
 * returns true if the array contains that value or false otherwise. It
 * does not tell you the index of the value, only whether it exists. The
 * includes() method is effectively a set membership test for arrays.
 * Note, however, that arrays are not an efficient representation for sets,
 * and if you are working with more than a few elements, you should use
 * a real Set object.
 * 
 * The includes() method is slightly different than the indexOf()
 * method in one important way. indexOf() tests equality using the
 * same algorithm that the === operator does, and that equality algorithm
 * considers the not-a-number value to be different from every other
 * value, including itself. includes() uses a slightly different version
 * of equality that does consider NaN to be equal to itself. This means that
 * indexOf() will not detect the NaN value in an array, but
 * includes() will:
 */

let a = [1,true,3,NaN];
a.includes(true) // => true
a.includes(2) // => false
a.includes(NaN) // => true
a.indexOf(NaN) // => -1; indexOf can't find NaN

/*
 * SORT()
 *
 * sort() sorts the elements of an array in place and returns the sorted
 * array. When sort() is called with no arguments, it sorts the array
 * elements in alphabetical order (temporarily converting them to strings
 * to perform the comparison, if necessary):
 */

let a = ["banana", "cherry", "apple"];
a.sort(); // a == ["apple", "banana", "cherry"]

/*
 * If an array contains undefined elements, they are sorted to the end of
 * the array.
 * 
 * To sort an array into some order other than alphabetical, you must pass
 * a comparison function as an argument to sort(). This function
 * decides which of its two arguments should appear first in the sorted
 * array. If the first argument should appear before the second, the
 * comparison function should return a number less than zero. If the first
 * argument should appear after the second in the sorted array, the
 * function should return a number greater than zero. And if the two
 * values are equivalent (i.e., if their order is irrelevant), the comparison
 * function should return 0. So, for example, to sort array elements into
 * numerical rather than alphabetical order, you might do this:
 */

let a = [33, 4, 1111, 222];
a.sort(); // a == [1111, 222, 33, 4]; alphabetical order
a.sort(function(a,b) { // Pass a comparator function
return a-b; // Returns < 0, 0, or > 0, depending on order
}); // a == [4, 33, 222, 1111]; numerical order
a.sort((a,b) => b-a); // a == [1111, 222, 33, 4]; reverse numerical order

/*
 * As another example of sorting array items, you might perform a case-
 * insensitive alphabetical sort on an array of strings by passing a
 * comparison function that converts both of its arguments to lowercase
 * (with the toLowerCase() method) before comparing them:
 */

let a = ["ant", "Bug", "cat", "Dog"];
a.sort(); // a == ["Bug","Dog","ant","cat"]; casesensitive sort
a.sort(function(s,t) {
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}); // a == ["ant","Bug","cat","Dog"]; case-insensitive sort

/*
 * REVERSE()
 * 
 * The reverse() method reverses the order of the elements of an
 * array and returns the reversed array. It does this in place; in other
 * words, it doesn’t create a new array with the elements rearranged but
 * instead rearranges them in the already existing array:
 */

let a = [1,2,3];
a.reverse(); // a == [3,2,1]
