/*
 * This chapter documents arrays, a fundamental datatype in JavaScript
 * and in most other programming languages. An array is an ordered
 * collection of values. Each value is called an element, and each element
 * has a numeric position in the array, known as its index. JavaScript
 * arrays are untyped: an array element may be of any type, and different
 * elements of the same array may be of different types. Array elements
 * may even be objects or other arrays, which allows you to create
 * complex data structures, such as arrays of objects and arrays of arrays.
 * JavaScript arrays are zero-based and use 32-bit indexes: the index of
 * the first element is 0, and the highest possible index is 4294967294
 * ((2^32)−2), for a maximum array size of 4,294,967,295 elements.
 * JavaScript arrays are dynamic: they grow or shrink as needed, and
 * there is no need to declare a fixed size for the array when you create it
 * or to reallocate it when the size changes. JavaScript arrays may be
 * sparse: the elements need not have contiguous indexes, and there may
 * be gaps. Every JavaScript array has a length property. For nonsparse
 * arrays, this property specifies the number of elements in the array. For
 * sparse arrays, length is larger than the highest index of any element.
 * 
 * JavaScript arrays are a specialized form of JavaScript object, and array
 * indexes are really little more than property names that happen to be
 * integers. We’ll talk more about the specializations of arrays elsewhere
 * in this chapter. Implementations typically optimize arrays so that
 * access to numerically indexed array elements is generally significantly 
 * faster than access to regular object properties.
 * 
 * Arrays inherit properties from Array.prototype, which defines a
 * rich set of array manipulation methods, covered in §7.8. Most of these
 * methods are generic, which means that they work correctly not only for
 * true arrays, but for any “array-like object.”
 * 
 * ES6 introduces a set of new array classes known collectively as “typed
 * arrays.” Unlike regular JavaScript arrays, typed arrays have a fixed
 * length and a fixed numeric element type. They offer high performance
 * and byte-level access to binary data.
 */