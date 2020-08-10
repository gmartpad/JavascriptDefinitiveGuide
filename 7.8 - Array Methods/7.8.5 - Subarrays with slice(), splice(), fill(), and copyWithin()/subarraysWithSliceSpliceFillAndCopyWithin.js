/*
 * Arrays define a number of methods that work on contiguous regions, or
 * subarrays or “slices” of an array. The following sections describe
 * methods for extracting, replacing, filling, and copying slices.
 *
 * SLICE()
 * 
 * The slice() method returns a slice, or subarray, of the specified
 * array. Its two arguments specify the start and end of the slice to be
 * returned. The returned array contains the element specified by the first
 * argument and all subsequent elements up to, but not including, the
 * element specified by the second argument. If only one argument is
 * specified, the returned array contains all elements from the start
 * position to the end of the array. If either argument is negative, it
 * specifies an array element relative to the length of the array. An
 * argument of –1, for example, specifies the last element in the array, and
 * an argument of –2 specifies the element before that one. Note that
 * slice() does not modify the array on which it is invoked. Here are
 * some examples:
 * 
 */

let a = [1,2,3,4,5];
a.slice(0,3); // Returns [1,2,3]
a.slice(3); // Returns [4,5]
a.slice(1,-1); // Returns [2,3,4]
a.slice(-3,-2); // Returns [3]

/*
 * SPLICE()
 * 
 * splice() is a general-purpose method for inserting or removing
 * elements from an array. Unlike slice() and concat(),
 * splice() modifies the array on which it is invoked. Note that
 * splice() and slice() have very similar names but perform
 * substantially different operations.
 * splice() can delete elements from an array, insert new elements
 * into an array, or perform both operations at the same time. Elements of
 * the array that come after the insertion or deletion point have their
 * indexes increased or decreased as necessary so that they remain
 * contiguous with the rest of the array. The first argument to splice()
 * specifies the array position at which the insertion and/or deletion is to
 * begin. The second argument specifies the number of elements that
 * should be deleted from (spliced out of) the array. (Note that this is
 * another difference between these two methods. The second argument
 * to slice() is an end position. The second argument to splice() is
 * a length.) If this second argument is omitted, all array elements from
 * the start element to the end of the array are removed. splice()
 * returns an array of the deleted elements, or an empty array if no
 * elements were deleted. For example:
 */

let a = [1,2,3,4,5,6,7,8];
a.splice(4) // => [5,6,7,8]; a is now [1,2,3,4]
a.splice(1,2) // => [2,3]; a is now [1,4]
a.splice(1,1) // => [4]; a is now [1]

/*
 * The first two arguments to splice() specify which array elements
 * are to be deleted. These arguments may be followed by any number of
 * additional arguments that specify elements to be inserted into the array,
 * starting at the position specified by the first argument. For example:
 */

let a = [1,2,3,4,5];
a.splice(2,0,"a","b") // => []; a is now [1,2,"a","b",3,4,5]
a.splice(2,2,[1,2],3) // => ["a","b"]; a is now [1,2, [1,2],3,3,4,5]

/*
 * Note that, unlike concat(), splice() inserts arrays themselves,
 * not the elements of those arrays.
 *
 * FILL()
 *
 * The fill() method sets the elements of an array, or a slice of an
 * array, to a specified value. It mutates the array it is called on, and also
 * returns the modified array:
 */

let a = new Array(5); // Start with no elements and length 5
a.fill(0) // => [0,0,0,0,0]; fill the array with zeros
a.fill(9, 1) // => [0,9,9,9,9]; fill with 9 starting at index 1
a.fill(8, 2, -1) // => [0,9,8,8,9]; fill with 8 at indexes 2, 3

/*
 * The first argument to fill() is the value to set array elements to. The
 * optional second argument specifies the starting index. If omitted, filling
 * starts at index 0. The optional third argument specifies the ending
 * index—array elements up to, but not including, this index will be
 * filled. If this argument is omitted, then the array is filled from the start
 * index to the end. You can specify indexes relative to the end of the
 * array by passing negative numbers, just as you can for slice().
 *
 * COPYWITHIN()
 * 
 * copyWithin() copies a slice of an array to a new position within
 * the array. It modifies the array in place and returns the modified array,
 * but it will not change the length of the array. The first argument
 * specifies the destination index to which the first element will be
 * copied. The second argument specifies the index of the first element to
 * be copied. If this second argument is omitted, 0 is used. The third
 * argument specifies the end of the slice of elements to be copied. If
 * omitted, the length of the array is used. Elements from the start index
 * up to, but not including, the end index will be copied. You can specify
 * indexes relative to the end of the array by passing negative numbers,
 * just as you can for slice():
 * 
 */

let a = [1,2,3,4,5];
a.copyWithin(1) // => [1,1,2,3,4]: copy array elements up one
a.copyWithin(2, 3, 5) // => [1,1,3,4,4]: copy last 2 elements to index 2
a.copyWithin(0, -2) // => [4,4,3,4,4]: negative offsets work, too

/*
 * copyWithin() is intended as a high-performance method that is
 * particularly useful with typed arrays (see §11.2). It is modeled after the
 * memmove() function from the C standard library. Note that the copy
 * will work correctly even if there is overlap between the source and
 * destination regions.
 */