/*
 * The operators listed are arranged in order from high
 * precedence to low precedence, with horizontal lines separating groups
 * of operators at the same precedence level. Operator precedence
 * controls the order in which operations are performed. Operators with
 * higher precedence (nearer the top of the table) are performed before
 * those with lower precedence (nearer to the bottom).
 * 
 * Consider the following expression:
 */

w = x + y*z;

/*
 * The multiplication operator * has a higher precedence than the addition
 * operator +, so the multiplication is performed before the addition.
 * Furthermore, the assignment operator = has the lowest precedence, so
 * the assignment is performed after all the operations on the right side
 * are completed.
 *
 * Operator precedence can be overridden with the explicit use of
 * parentheses. To force the addition in the previous example to be
 * performed first, write:
 */

w = (x + y)*z;

/*
 * Note that property access and invocation expressions have higher
 * precedence than any of the operators listed. Consider this
 * expression:
 */

// my is an object with a property named functions whose value is an
// array of functions. We invoke function number x, passing it argument
// y, and then we ask for the type of the value returned.
typeof my.functions[x](y)

/*
 * Although typeof is one of the highest-priority operators, the
 * typeof operation is performed on the result of the property access,
 * array index, and function invocation, all of which have higher priority
 * than operators.
 * 
 * In practice, if you are at all unsure about the precedence of your
 * operators, the simplest thing to do is to use parentheses to make the
 * evaluation order explicit. The rules that are important to know are
 * these: multiplication and division are performed before addition and
 * subtraction, and assignment has very low precedence and is almost
 * always performed last.
 * 
 * When new operators are added to JavaScript, they do not always fit
 * naturally into this precedence scheme. The ?? operator (§4.13.2) is 
 * shown in the table as lower-precedence than || and &&, but, in fact, its
 * precedence relative to those operators is not defined, and ES2020
 * requires you to explicitly use parentheses if you mix ?? with either ||
 * or &&. 
 * 
 * Similarly, the new ** exponentiation operator does not have a
 * well-defined precedence relative to the unary negation operator, and
 * you must use parentheses when combining negation with
 * exponentiation.
 * 
 */
