/*
 * The ! operator is a unary operator; it is placed before a single operand.
 * Its purpose is to invert the boolean value of its operand. For example, if
 * x is truthy, !x evaluates to false. If x is falsy, then !x is true.
 * 
 * Unlike the && and || operators, the ! operator converts its operand to
 * a boolean value before
 * inverting the converted value. This means that ! always returns true
 * or false and that you can convert any value x to its equivalent
 * boolean value by applying this operator twice: !!x.
 * 
 * As a unary operator, ! has high precedence and binds tightly. If you
 * want to invert the value of an expression like p && q, you need to use
 * parentheses: !(p && q). It is worth noting two laws of Boolean
 * algebra here that we can express using JavaScript syntax:
 *
 */

 // DeMorgan's Laws
!(p && q) === (!p || !q) // => true: for all values of p and q
!(p || q) === (!p && !q) // => true: for all values of p and q
