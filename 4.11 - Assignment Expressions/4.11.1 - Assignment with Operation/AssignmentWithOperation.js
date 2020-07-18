/*
 * Besides the normal = assignment operator, JavaScript supports a
 * number of other assignment operators that provide shortcuts by
 * combining assignment with some other operation. For example, the +=
 * operator performs addition and assignment. 
 * 
 * The following expression:
 */

total += salesTax;

/*
 * is equivalent to this one:
 */

total = total + salesTax;

/*
 * As you might expect, the += operator works for numbers or strings.
 * For numeric operands, it performs addition and assignment; for string
 * operands, it performs concatenation and assignment.
 * 
 * Similar operators include -=, *=, &=, and so on. Table lists them
 * all.
 */

 /*
 * Assignment operators
 *
 * Operator     Example     Equivalent
 * +=           a += b      a = a + b
 * -=           a -= b      a = a - b
 * *=           a *= b      a = a * b
 * /=           a /= b      a = a / b
 * %=           a %= b      a = a % b
 * **=          a **= b     a = a ** b
 * <<=          a <<= b     a = a << b
 * >>=          a >>= b     a = a >> b
 * >>>=         a >>>= b    a = a >>> b
 * &=           a &= b      a = a & b
 * |=           a |= b      a = a | b
 * ^=           a ^= b      a = a ^ b
 */


// In most cases, the expression:

a op= b

// where op is an operator, is equivalent to the expression:

a = a op b

/*
 * In the first line, the expression a is evaluated once. In the second, it is
 * evaluated twice. The two cases will differ only if a includes side
 * effects such as a function call or an increment operator. The following
 * two assignments, for example, are not the same:
 */

data[i++] *= 2;
data[i++] = data[i++] * 2;
