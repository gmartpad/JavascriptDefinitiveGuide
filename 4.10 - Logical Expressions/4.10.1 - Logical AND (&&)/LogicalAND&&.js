/*
 * The && operator can be understood at three different levels. At the
 * simplest level, when used with boolean operands, && performs the
 * Boolean AND operation on the two values: it returns true if and only
 * if both its first operand and its second operand are true. If one or both
 * of these operands is false, it returns false.
 * 
 * && is often used as a conjunction to join two relational expressions:
 */

x === 0 && y === 0 // true if, and only if, x and y are both 0

/*
 * Relational expressions always evaluate to true or false, so when
 * used like this, the && operator itself returns true or false.
 * Relational operators have higher precedence than && (and ||), so
 * expressions like these can safely be written without parentheses.
 * 
 * But && does not require that its operands be boolean values. Recall that
 * all JavaScript values are either “truthy” or “falsy.”
 * (The falsy values are false, null, undefined, 0, -0, NaN, and
 * "". All other values, including all objects, are truthy.) The second level
 * at which && can be understood is as a Boolean AND operator for
 * truthy and falsy values. If both operands are truthy, the operator returns
 * a truthy value. Otherwise, one or both operands must be falsy, and the
 * operator returns a falsy value. In JavaScript, any expression or
 * statement that expects a boolean value will work with a truthy or falsy
 * value, so the fact that && does not always return true or false does
 * not cause practical problems.
 * 
 * Notice that this description says that the operator returns “a truthy
 * value” or “a falsy value” but does not specify what that value is. For
 * that, we need to describe && at the third and final level. This operator
 * starts by evaluating its first operand, the expression on its left. If the
 * value on the left is falsy, the value of the entire expression must also be
 * falsy, so && simply returns the value on the left and does not even
 * evaluate the expression on the right.
 * On the other hand, if the value on the left is truthy, then the overall
 * value of the expression depends on the value on the righthand side. If
 * the value on the right is truthy, then the overall value must be truthy,
 * and if the value on the right is falsy, then the overall value must be
 * falsy. So when the value on the left is truthy, the && operator evaluates
 * and returns the value on the right:
 */

let o = {x: 1};
let p = null;
o && o.x // => 1: o is truthy, so return value of o.x
p && p.x // => null: p is falsy, so return it and don't evaluate p.x

/*
 * It is important to understand that && may or may not evaluate its rightside operand. In this code example, the variable p is set to null, and
 * the expression p.x would, if evaluated, cause a TypeError. But the
 * code uses && in an idiomatic way so that p.x is evaluated only if p is
 * truthy—not null or undefined.
 * 
 * The behavior of && is sometimes called short circuiting, and you may
 * sometimes see code that purposely exploits this behavior to
 * conditionally execute code. For example, the following two lines of
 * JavaScript code have equivalent effects:
 *
 */

if (a === b) stop(); // Invoke stop() only if a === b
(a === b) && stop(); // This does the same thing

/*
 * In general, you must be careful whenever you write an expression with
 * side effects (assignments, increments, decrements, or function
 * invocations) on the righthand side of &&. Whether those side effects
 * occur depends on the value of the lefthand side.
 * 
 * Despite the somewhat complex way that this operator actually works, it
 * is most commonly used as a simple Boolean algebra operator that
 * works on truthy and falsy values.
 */