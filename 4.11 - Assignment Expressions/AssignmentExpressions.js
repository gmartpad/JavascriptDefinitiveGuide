/*
 * JavaScript uses the = operator to assign a value to a variable or
 * property. For example:
 */

i = 0; // Set the variable i to 0.
o.x = 1; // Set the property x of object o to 1.

/*
 * The = operator expects its left-side operand to be an lvalue: a variable
 * or object property (or array element). It expects its right-side operand
 * to be an arbitrary value of any type. The value of an assignment
 * expression is the value of the right-side operand. As a side effect, the =
 * operator assigns the value on the right to the variable or property on the
 * left so that future references to the variable or property evaluate to the
 * value.
 * 
 * Although assignment expressions are usually quite simple, you may
 * sometimes see the value of an assignment expression used as part of a
 * larger expression. For example, you can assign and test a value in the
 * same expression with code like this:
 */

(a = b) === 0

/*
 * If you do this, be sure you are clear on the difference between the =
 * and === operators! Note that = has very low precedence, and
 * parentheses are usually necessary when the value of an assignment is to
 * be used in a larger expression.
 * 
 * The assignment operator has right-to-left associativity, which means
 * that when multiple assignment operators appear in an expression, they
 * are evaluated from right to left. Thus, you can write code like this to
 * assign a single value to multiple variables:
 */

i = j = k = 0; // Initialize 3 variables to 0
