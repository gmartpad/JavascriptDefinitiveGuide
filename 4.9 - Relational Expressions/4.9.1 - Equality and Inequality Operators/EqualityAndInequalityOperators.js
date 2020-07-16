/*
 * The == and === operators check whether two values are the same,
 * using two different definitions of sameness. Both operators accept
 * operands of any type, and both return true if their operands are the
 * same and false if they are different. The === operator is known as
 * the strict equality operator (or sometimes the identity operator), and it
 * checks whether its two operands are “identical” using a strict definition
 * of sameness. The == operator is known as the equality operator; it
 * checks whether its two operands are “equal” using a more relaxed
 * definition of sameness that allows type conversions.
 * 
 * The != and !== operators test for the exact opposite of the == and
 * === operators. The != inequality operator returns false if two
 * values are equal to each other according to == and returns true
 * otherwise. The !== operator returns false if two values are strictly
 * equal to each other and returns true otherwise.
 * The ! operator computes the Boolean NOT operation. This makes it
 * easy to remember that != and !== stand for “not equal to” and “not
 * strictly equal to.”
 */

/*
 * THE =, ==, AND === OPERATORS
 *
 * JavaScript supports =, ==, and === operators. Be sure you understand the differences between these
 * assignment, equality, and strict equality operators, and be careful to use the correct one when coding!
 * Although it is tempting to read all three operators as “equals,” it may help to reduce confusion if you
 * read “gets” or “is assigned” for =, “is equal to” for ==, and “is strictly equal to” for ===.
 * 
 * The == operator is a legacy feature of JavaScript and is widely considered to be a source of bugs.
 * You should almost always use === instead of ==, and !== instead of !=.
 */

/*
 * As mentioned, JavaScript objects are compared by reference,
 * not by value. An object is equal to itself, but not to any other object. If
 * two distinct objects have the same number of properties, with the same
 * names and values, they are still not equal. Similarly, two arrays that
 * have the same elements in the same order are not equal to each other.
 * 
 * STRICT EQUALITY
 * 
 * The strict equality operator === evaluates its operands, then compares
 * the two values as follows, performing no type conversion:
 * 
 *      If the two values have different types, they are not equal.
 *      
 *      If both values are null or both values are undefined, they
 *      are equal.
 * 
 *      If both values are the boolean value true or both are the
 *      boolean value false, they are equal.
 * 
 *      If one or both values is NaN, they are not equal. (This is
 *      surprising, but the NaN value is never equal to any other
 *      value, including itself! To check whether a value x is NaN, use
 *      x !== x, or the global isNaN() function.)
 *      
 *      If both values are numbers and have the same value, they are
 *      equal. If one value is 0 and the other is -0, they are also
 *      equal.
 * 
 *      If both values are strings and contain exactly the same 16-bit
 *      values in the same positions, they are
 *      equal. If the strings differ in length or content, they are not
 *      equal. Two strings may have the same meaning and the same
 *      visual appearance, but still be encoded using different
 *      sequences of 16-bit values. JavaScript performs no Unicode
 *      normalization, and a pair of strings like this is not considered
 *      equal to the === or == operators.
 * 
 *      If both values refer to the same object, array, or function, they
 *      are equal. If they refer to different objects, they are not equal,
 *      even if both objects have identical properties.
 *
 * EQUALITY WITH TYPE CONVERSION
 * 
 * The equality operator == is like the strict equality operator, but it is
 * less strict. If the values of the two operands are not the same type, it
 * attempts some type conversions and tries the comparison again:
 * 
 *      If the two values have the same type, test them for strict
 *      equality as described previously. If they are strictly equal, they
 *      are equal. If they are not strictly equal, they are not equal.
 * 
 *      If the two values do not have the same type, the == operator
 *      may still consider them equal. It uses the following rules and
 *      type conversions to check for equality:
 * 
 *          If one value is null and the other is undefined,
 *          they are equal.
 * 
 *          If one value is a number and the other is a string,
 *          convert the string to a number and try the comparison
 *          again, using the converted value.
 * 
 *          If either value is true, convert it to 1 and try the
 *          comparison again. If either value is false, convert it
 *          to 0 and try the comparison again.
 * 
 *          If one value is an object and the other is a number or
 *          string, convert the object to a primitive using the
 *          algorithm and try the comparison
 *          again. An object is converted to a primitive value by
 *          either its toString() method or its valueOf()
 *          method. The built-in classes of core JavaScript
 *          attempt valueOf() conversion before
 *          toString() conversion, except for the Date class,
 *          which performs toString() conversion.
 * 
 *          Any other combinations of values are not equal.
 * 
 * As an example of testing for equality, consider the comparison:
 */

 "1" == true // => true

/* 
 * This expression evaluates to true, indicating that these very different
 * looking values are in fact equal. The boolean value true is first
 * converted to the number 1, and the comparison is done again. Next, the
 * string "1" is converted to the number 1. Since both values are now the
 * same, the comparison returns true.
 */