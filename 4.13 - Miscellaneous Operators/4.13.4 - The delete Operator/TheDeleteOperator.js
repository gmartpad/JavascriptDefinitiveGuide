/*
 * delete is a unary operator that attempts to delete the object property
 * or array element specified as its operand. Like the assignment,
 * increment, and decrement operators, delete is typically used for its
 * property deletion side effect and not for the value it returns. Some
 * examples:
 */

let o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore

let a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
2 in a // => false: array element 2 doesn't exist anymore
a.length // => 3: note that array length doesn't change, though

/*
 * Note that a deleted property or array element is not merely set to the
 * undefined value. When a property is deleted, the property ceases to
 * exist. Attempting to read a nonexistent property returns undefined,
 * but you can test for the actual existence of a property with the in
 * operator. Deleting an array element leaves a “hole” in the array
 * and does not change the array’s length. The resulting array is sparse.
 * 
 * delete expects its operand to be an lvalue. If it is not an lvalue, the
 * operator takes no action and returns true. Otherwise, delete
 * attempts to delete the specified lvalue. delete returns true if it
 * successfully deletes the specified lvalue. Not all properties can be
 * deleted, however: non-configurable properties are immune
 * from deletion.
 * 
 * In strict mode, delete raises a SyntaxError if its operand is an
 * unqualified identifier such as a variable, function, or function 
 * parameter: it only works when the operand is a property access
 * expression. Strict mode also specifies that delete raises a
 * TypeError if asked to delete any non-configurable (i.e., nondeleteable)
 * property. Outside of strict mode, no exception occurs in these cases,
 * and delete simply returns false to indicate that the operand could
 * not be deleted.
 * 
 * Here are some example uses of the delete operator:
 */

let o = {x: 1, y: 2};
delete o.x; // Delete one of the object properties; returns true.
typeof o.x; // Property does not exist; returns "undefined".
delete o.x; // Delete a nonexistent property; returns true.
delete 1; // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SyntaxError in strict mode.
delete o;
// Undeletable property: returns false, or TypeError in strict mode.
delete Object.prototype;
