/*
 * The comparison operators test the relative order 
 * (numerical or alphabetical) of their two operands:
 * 
 * Less than (<)
 * 
 *      The < operator evaluates to true if its first operand is less than its
 *      second operand; otherwise, it evaluates to false.
 * 
 * Greater than (>)
 * 
 *      The > operator evaluates to true if its first operand is greater than
 *      its second operand; otherwise, it evaluates to false.
 * 
 * Less than or equal (<=)
 * 
 *      The <= operator evaluates to true if its first operand is less than
 *      or equal to its second operand; otherwise, it evaluates to false.
 * 
 * Greater than or equal (>=)
 * 
 *      The >= operator evaluates to true if its first operand is greater
 *      than or equal to its second operand; otherwise, it evaluates to
 *      false.
 * 
 * The operands of these comparison operators may be of any type.
 * Comparison can be performed only on numbers and strings, however,
 * so operands that are not numbers or strings are converted.
 * 
 * Comparison and conversion occur as follows:
 * 
 *      If either operand evaluates to an object, that object is
 *      converted to a primitive value. If its valueOf() method 
 *      returns a primitive value, that value is used. Otherwise, 
 *      the return value of its toString() method is used.
 * 
 *      If, after any required object-to-primitive conversion, both
 *      operands are strings, the two strings are compared, using
 *      alphabetical order, where “alphabetical order” is defined by
 *      the numerical order of the 16-bit Unicode values that make up
 *      the strings.
 * 
 *      If, after object-to-primitive conversion, at least one operand is
 *      not a string, both operands are converted to numbers and
 *      compared numerically. 0 and -0 are considered equal.
 *      Infinity is larger than any number other than itself, and -
 *      Infinity is smaller than any number other than itself. If
 *      either operand is (or converts to) NaN, then the comparison
 *      operator always returns false. Although the arithmetic
 *      operators do not allow BigInt values to be mixed with regular
 *      numbers, the comparison operators do allow comparisons
 *      between numbers and BigInts.
 * 
 * Remember that JavaScript strings are sequences of 16-bit integer
 * values, and that string comparison is just a numerical comparison of
 * the values in the two strings. The numerical encoding order defined by
 * Unicode may not match the traditional collation order used in any
 * particular language or locale. Note in particular that string comparison
 * is case-sensitive, and all capital ASCII letters are “less than” all
 * lowercase ASCII letters. This rule can cause confusing results if you do
 * not expect it. For example, according to the < operator, the string
 * “Zoo” comes before the string “aardvark”.
 * 
 * For a more robust string-comparison algorithm, try the
 * String.localeCompare() method, which also takes locale specific definitions 
 * of alphabetical order into account. For case insensitive comparisons, you can
 * convert the strings to all lowercase or all uppercase using String.toLowerCase() 
 * or String.toUpperCase().
 * 
 * Both the + operator and the comparison operators behave differently
 * for numeric and string operands. + favors strings: it performs
 * concatenation if either operand is a string. The comparison operators
 * favor numbers and only perform string comparison if both operands are
 * strings:
 */

1 + 2 // => 3: addition.
"1" + "2" // => "12": concatenation.
"1" + 2 // => "12": 2 is converted to "2".
11 < 3 // => false: numeric comparison.
"11" < "3" // => true: string comparison.
"11" < 3 // => false: numeric comparison, "11" converted to 11.
"one" < 3 // => false: numeric comparison, "one" converted to NaN.

/*
 * Finally, note that the <= (less than or equal) and >= (greater than or
 * equal) operators do not rely on the equality or strict equality operators
 * for determining whether two values are “equal.” Instead, the less-thanor-equal operator is simply defined as “not greater than,” and the
 * greater-than-or-equal operator is defined as “not less than.” The one
 * exception occurs when either operand is (or converts to) NaN, in which
 * case, all four comparison operators return false.
 */