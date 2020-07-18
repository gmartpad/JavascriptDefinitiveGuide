/*
 * The || operator performs the Boolean OR operation on its two
 * operands. If one or both operands is truthy, it returns a truthy value. If
 * both operands are falsy, it returns a falsy value.
 * 
 * Although the || operator is most often used simply as a Boolean OR
 * operator, it, like the && operator, has more complex behavior. It starts
 * by evaluating its first operand, the expression on its left. If the value of
 * this first operand is truthy, it short-circuits and returns that truthy value
 * without ever evaluating the expression on the right. If, on the other
 * hand, the value of the first operand is falsy, then || evaluates its
 * second operand and returns the value of that expression.
 * 
 * As with the && operator, you should avoid right-side operands that
 * include side effects, unless you purposely want to use the fact that the
 * right-side expression may not be evaluated.
 * 
 * An idiomatic usage of this operator is to select the first truthy value in
 * a set of alternatives:
 */

 // If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max = maxWidth || preferences.maxWidth || 500;

/*
 * Note that if 0 is a legal value for maxWidth, then this code will not
 * work correctly, since 0 is a falsy value. See the ?? operator
 * for an alternative.
 * Prior to ES6, this idiom is often used in functions to supply default
 * values for parameters:
 */

// Copy the properties of o to p, and return p
function copy(o, p) {
    p = p || {}; // If no object passed for p, use a newly created object.
    // function body goes here
}

/*
 * In ES6 and later, however, this trick is no longer needed because the
 * default parameter value could simply be written in the function
 * definition itself: function copy(o, p={}) { ... }.
 */