/*
 * One reason for the complexity of JavaScript’s object-to-primitive
 * conversions is that some types of objects have more than one primitive
 * representation. Date objects, for example, can be represented as strings
 * or as numeric timestamps. The JavaScript specification defines three
 * fundamental algorithms for converting objects to primitive values:
 * 
 * - prefer-string
 *      This algorithm returns a primitive value, preferring a string value,
 *      if a conversion to string is possible.
 * 
 * - prefer-number
 *      This algorithm returns a primitive value, preferring a number, if
 *      such a conversion is possible.
 *  
 * - no-preference
 *      This algorithm expresses no preference about what type of
 *      primitive value is desired, and classes can define their own
 *      conversions. Of the built-in JavaScript types, all except Date
 *      implement this algorithm as prefer-number. The Date class
 *      implements this algorithm as prefer-string.
 * 
 * OBJECT-TO-BOOLEAN CONVERSIONS
 * 
 * Object-to-boolean conversions are trivial: all objects convert to true.
 * Notice that this conversion does not require the use of the object-to-
 * primitive algorithms described, and that it literally applies to all
 * objects, including empty arrays and even the wrapper object new
 * Boolean(false).
 * 
 * OBJECT-TO-STRING CONVERSIONS
 * 
 * When an object needs to be converted to a string, JavaScript first
 * converts it to a primitive using the prefer-string algorithm, then
 * converts the resulting primitive value to a string.
 * This kind of conversion happens, for example, if you pass an object to
 * a built-in function that expects a string argument, if you call
 * String() as a conversion function, and when you interpolate objects
 * into template literals.
 * 
 * OBJECT-TO-NUMBER CONVERSIONS
 * 
 * When an object needs to be converted to a number, JavaScript first
 * converts it to a primitive value using the prefer-number algorithm, then
 * converts the resulting primitive value to a number.
 * Built-in JavaScript functions and methods that expect numeric
 * arguments convert object arguments to numbers in this way, and most
 * JavaScript operators that expect numeric operands convert 
 * objects to numbers in this way as well.
 * 
 * SPECIAL CASE OPERATOR CONVERSIONS
 * 
 * Here, we explain the special case operators that do not use the basic 
 * object-to-string and object-to-number conversions described earlier.
 * 
 * The + operator in JavaScript performs numeric addition and string
 * concatenation. If either of its operands is an object, JavaScript converts
 * them to primitive values using the no-preference algorithm. Once it has
 * two primitive values, it checks their types. If either argument is a
 * string, it converts the other to a string and concatenates the strings.
 * Otherwise, it converts both arguments to numbers and adds them.
 * 
 * The == and != operators perform equality and inequality testing in a
 * loose way that allows type conversions. If one operand is an object and
 * the other is a primitive value, these operators convert the object to
 * primitive using the no-preference algorithm and then compare the two
 * primitive values.
 * 
 * Finally, the relational operators <, <=, >, and >= compare the order of
 * their operands and can be used to compare both numbers and strings. If
 * either operand is an object, it is converted to a primitive value using the
 * prefer-number algorithm. Note, however, that unlike the object-to-number 
 * conversion, the primitive values returned by the prefer-number conversion 
 * are not then converted to numbers.
 * 
 * Note that the numeric representation of Date objects is meaningfully
 * comparable with < and >, but the string representation is not. For Date
 * objects, the no-preference algorithm converts to a string, so the fact
 * that JavaScript uses the prefer-number algorithm for these operators
 * means that we can use them to compare the order of two Date objects
 * 
 * THE TOSTRING() AND VALUEOF() METHODS
 * 
 * All objects inherit two conversion methods that are used by object-to-primitive 
 * conversions, and before we can explain the prefer-string, prefer-number, and 
 * no-preference conversion algorithms, we have to explain these two methods.
 * 
 * The first method is toString(), and its job is to return a string
 * representation of the object. The default toString() method does
 * not return a very interesting value:
 * 
 */

({x: 1, y: 2}).toString() // => "[object Object]"

/*
 * Many classes define more specific versions of the toString()
 * method. The toString() method of the Array class, for example,
 * converts each array element to a string and joins the resulting strings
 * together with commas in between. The toString() method of the
 * Function class converts user-defined functions to strings of JavaScript
 * source code. The Date class defines a toString() method that
 * returns a human-readable (and JavaScript-parsable) date and time
 * string. The RegExp class defines a toString() method that
 * converts RegExp objects to a string that looks like a RegExp literal:
 */

[1,2,3].toString() // => "1,2,3"
(function(x) { f(x); }).toString() // => "function(x) { f(x); }"
/\d+/g.toString() // => "/\\d+/g"
let d = new Date(2020,0,1);
d.toString() // => "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"

/*
 * The other object conversion function is called valueOf(). The job of
 * this method is less well defined: it is supposed to convert an object to a
 * primitive value that represents the object, if any such primitive value
 * exists. Objects are compound values, and most objects cannot really be
 * represented by a single primitive value, so the default valueOf()
 * method simply returns the object itself rather than returning a
 * primitive. Wrapper classes such as String, Number, and Boolean define
 * valueOf() methods that simply return the wrapped primitive value.
 * Arrays, functions, and regular expressions simply inherit the default
 * method. Calling valueOf() for instances of these types simply
 * returns the object itself. The Date class defines a valueOf() method
 * that returns the date in its internal representation: the number of
 * milliseconds since January 1, 1970:
 */

let d = new Date(2010, 0, 1); // January 1, 2010, (Pacific time)
d.valueOf() // => 1262332800000

/*
 * OBJECT-TO-PRIMITIVE CONVERSION ALGORITHMS
 *
 * With the toString() and valueOf() methods explained, we can
 * now explain approximately how the three object-to-primitive
 * algorithms work:
 * 
 *    - The prefer-string algorithm first tries the toString()
 *      method. If the method is defined and returns a primitive value,
 *      then JavaScript uses that primitive value (even if it is not a
 *      string!). If toString() does not exist or if it returns an
 *      object, then JavaScript tries the valueOf() method. If that
 *      method exists and returns a primitive value, then JavaScript
 *      uses that value. Otherwise, the conversion fails with a
 *      TypeError.
 * 
 *    - The prefer-number algorithm works like the prefer-string
 *      algorithm, except that it tries valueOf() first and
 *      toString() second.
 * 
 *    - The no-preference algorithm depends on the class of the
 *      object being converted. If the object is a Date object, then
 *      JavaScript uses the prefer-string algorithm. For any other
 *      object, JavaScript uses the prefer-number algorithm.
 * 
 * The rules described here are true for all built-in JavaScript types and
 * are the default rules for any classes you define yourself. 
 * 
 * Before we leave this topic, it is worth noting that the details of the
 * prefer-number conversion explain why empty arrays convert to the
 * number 0 and single-element arrays can also convert to numbers:
 * 
 */

Number([]) // => 0: this is unexpected!
Number([99]) // => 99: really?

/* 
 * The object-to-number conversion first converts the object to a primitive
 * using the prefer-number algorithm, then converts the resulting
 * primitive value to a number. The prefer-number algorithm tries
 * valueOf() first and then falls back on toString(). But the Array
 * class inherits the default valueOf() method, which does not return a
 * primitive value. So when we try to convert an array to a number, we
 * end up invoking the toString() method of the array. Empty arrays
 * convert to the empty string. And the empty string converts to the
 * number 0. An array with a single element converts to the same string
 * that that one element does. If an array contains a single number, that
 * number is converted to a string, and then back to a number.
 */