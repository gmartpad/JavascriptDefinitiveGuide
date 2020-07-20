/*
 * The conditional operator is the only ternary operator (three operands)
 * in JavaScript and is sometimes actually called the ternary operator.
 * This operator is sometimes written ?:, although it does not appear
 * quite that way in code. Because this operator has three operands, the
 * first goes before the ?, the second goes between the ? and the :, and
 * the third goes after the :. It is used like this:
 */

x > 0 ? x : -x // The absolute value of x

/*
 * The operands of the conditional operator may be of any type. The first
 * operand is evaluated and interpreted as a boolean. If the value of the
 * first operand is truthy, then the second operand is evaluated, and its
 * value is returned. Otherwise, if the first operand is falsy, then the third
 * operand is evaluated and its value is returned. Only one of the second
 * and third operands is evaluated; never both.
 * 
 * While you can achieve similar results using the if statement (§5.3.1),
 * the ?: operator often provides a handy shortcut. Here is a typical
 * usage, which checks to be sure that a variable is defined (and has a
 * meaningful, truthy value) and uses it if so or provides a default value if
 * not:
 */

greeting = "hello " + (username ? username : "there");

/*
 * This is equivalent to, but more compact than, the following if
 * statement:
 */

greeting = "hello ";
    if (username) {
        greeting += username;
} else {
    greeting += "there";
}
