/*
 * This chapter documents JavaScript expressions and the operators with
 * which many of those expressions are built. An expression is a phrase of
 * JavaScript that can be evaluated to produce a value. A constant
 * embedded literally in your program is a very simple kind of expression.
 * A variable name is also a simple expression that evaluates to whatever
 * value has been assigned to that variable. Complex expressions are built
 * from simpler expressions. An array access expression, for example,
 * consists of one expression that evaluates to an array followed by an
 * open square bracket, an expression that evaluates to an integer, and a
 * close square bracket. This new, more complex expression evaluates to
 * the value stored at the specified index of the specified array. Similarly,
 * a function invocation expression consists of one expression that
 * evaluates to a function object and zero or more additional expressions
 * that are used as the arguments to the function.
 * 
 * The most common way to build a complex expression out of simpler
 * expressions is with an operator. An operator combines the values of its
 * operands (usually two of them) in some way and evaluates to a new
 * value. The multiplication operator * is a simple example. The
 * expression x * y evaluates to the product of the values of the
 * expressions x and y. For simplicity, we sometimes say that an operator
 * returns a value rather than “evaluates to” a value.
 * 
 * This chapter documents all of JavaScript’s operators, and it also
 * explains expressions (such as array indexing and function invocation)
 * that do not use operators. If you already know another programming
 * language that uses C-style syntax, you’ll find that the syntax of most of
 * JavaScript’s expressions and operators is already familiar to you.
 */