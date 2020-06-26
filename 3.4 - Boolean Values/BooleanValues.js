/*
 * Boolean values are generally the result of comparisons you make in
 * your JavaScript programs. For example:
 */

a === 4

/*
 * For example, the if/else statement in JavaScript performs one
 * action if a boolean value is true and another action if the value is
 * false. You usually combine a comparison that creates a boolean
 * value directly with a statement that uses it. The result looks like this:
 */

if (a === 4) {
    b = b + 1;
} else {
    a = a + 1;
}
    
/*
 * Any JavaScript value can be converted to a
 * boolean value. The following values convert to, and therefore work
 * like, false:
 */

undefined
null
0
-0
NaN
"" // the empty string

/*
 * Any time
 * JavaScript expects a boolean value, a falsy value works like false
 * and a truthy value works like true.
 * 
 * As an example, suppose that the variable o either holds an object or the
 * value null. You can test explicitly to see if o is non-null with an if
 * statement like this:
 */

if (o !== null) ...

/*
 * The not-equal operator !== compares o to null and evaluates to
 * either true or false. But you can omit the comparison and instead
 * rely on the fact that null is falsy and objects are truthy:
 */

if (o) ...

/* The && operator performs the Boolean AND operation. It evaluates to
 * a truthy value if and only if both of its operands are truthy; it evaluates
 * to a falsy value otherwise. The || operator is the Boolean OR
 * operation: it evaluates to a truthy value if either one (or both) of its
 * operands is truthy and evaluates to a falsy value if both operands are
 * falsy. Finally, the unary ! operator performs the Boolean NOT
 * operation: it evaluates to true if its operand is falsy and evaluates to
 * false if its operand is truthy. For example:
 */

if ((x === 0 && y === 0) || !(z === 0)) {
    // x and y are both zero or z is non-zero
}
