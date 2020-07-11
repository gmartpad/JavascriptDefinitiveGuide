/*
 * Operator precedence and associativity specify the order in which
 * operations are performed in a complex expression, but they do not
 * specify the order in which the subexpressions are evaluated. JavaScript
 * always evaluates expressions in strictly left-to-right order. In the
 * expression w = x + y * z, for example, the subexpression w is
 * evaluated first, followed by x, y, and z. Then the values of y and z are
 * multiplied, added to the value of x, and assigned to the variable or
 * property specified by expression w. Adding parentheses to the
 * expressions can change the relative order of the multiplication,
 * addition, and assignment, but not the left-to-right order of evaluation.
 * 
 * Order of evaluation only makes a difference if any of the expressions
 * being evaluated has side effects that affect the value of another
 * expression. If expression x increments a variable that is used by
 * expression z, then the fact that x is evaluated before z is important.
 */