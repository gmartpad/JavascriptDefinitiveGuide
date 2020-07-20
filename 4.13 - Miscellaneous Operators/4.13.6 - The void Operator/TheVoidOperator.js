/*
 * void is a unary operator that appears before its single operand, which
 * may be of any type. This operator is unusual and infrequently used; it
 * evaluates its operand, then discards the value and returns undefined.
 * Since the operand value is discarded, using the void operator makes
 * sense only if the operand has side effects.
 * 
 * The void operator is so obscure that it is difficult to come up with a
 * practical example of its use. One case would be when you want to
 * define a function that returns nothing but also uses the arrow function
 * shortcut syntax where the body of the function is a single
 * expression that is evaluated and returned. If you are evaluating the
 * expression solely for its side effects and do not want to return its value,
 * then the simplest thing is to use curly braces around the function body.
 * 
 * But, as an alternative, you could also use the void operator in this case:
 */

let counter = 0;
const increment = () => void counter++;
increment() // => undefined
counter // => 1