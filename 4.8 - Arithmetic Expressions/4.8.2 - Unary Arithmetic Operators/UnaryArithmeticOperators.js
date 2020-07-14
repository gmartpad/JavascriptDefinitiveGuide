/*
 * Unary operators modify the value of a single operand to produce a new
 * value. In JavaScript, the unary operators all have high precedence and
 * are all right-associative. The arithmetic unary operators described in
 * this section (+, -, ++, and --) all convert their single operand to a
 * number, if necessary. Note that the punctuation characters + and - are
 * used as both unary and binary operators.
 * 
 * The unary arithmetic operators are the following:
 * 
 * Unary plus (+)
 *      
 *      The unary plus operator converts its operand to a number (or to
 *      NaN) and returns that converted value. When used with an operand
 *      that is already a number, it doesn’t do anything. This operator may
 *      not be used with BigInt values, since they cannot be converted to
 *      regular numbers.
 *
 * Unary minus (-)
 * 
 *      When - is used as a unary operator, it converts its operand to a
 *      number, if necessary, and then changes the sign of the result.
 * 
 * Increment (++)
 *      
 *      The ++ operator increments (i.e., adds 1 to) its single operand,
 *      which must be an lvalue (a variable, an element of an array, or a
 *      property of an object). The operator converts its operand to a
 *      number, adds 1 to that number, and assigns the incremented value
 *      back into the variable, element, or property.
 * 
 *      The return value of the ++ operator depends on its position relative
 *      to the operand. When used before the operand, where it is known as 
 *      the pre-increment operator, it increments the operand and evaluates
 *      to the incremented value of that operand. When used after the
 *      operand, where it is known as the post-increment operator, it
 *      increments its operand but evaluates to the unincremented value of
 *      that operand. Consider the difference between these two lines of
 *      code:
 * 
 */

let i = 1, j = ++i; // i and j are both 2
let n = 1, m = n++; // n is 2, m is 1

/*
 * Note that the expression x++ is not always the same as x=x+1.
 * The ++ operator never performs string concatenation: it always
 * converts its operand to a number and increments it. If x is the string
 * “1”, ++x is the number 2, but x+1 is the string “11”.
 * 
 * Also note that, because of JavaScript’s automatic semicolon
 * insertion, you cannot insert a line break between the post-increment
 * operator and the operand that precedes it. If you do so, JavaScript
 * will treat the operand as a complete statement by itself and insert a
 * semicolon before it.
 * 
 * Decrement (--)
 * 
 *      The -- operator expects an lvalue operand. It converts the value of
 *      the operand to a number, subtracts 1, and assigns the decremented
 *      value back to the operand. Like the ++ operator, the return value of
 *      -- depends on its position relative to the operand. When used
 *      before the operand, it decrements and returns the decremented
 *      value. When used after the operand, it decrements the operand but
 *      returns the undecremented value. When used after its operand, no
 *      line break is allowed between the operand and the operator.
 *
 * 
 */