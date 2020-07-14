/*
 * This section covers the operators that perform arithmetic or other
 * numerical manipulations on their operands. The exponentiation,
 * multiplication, division, and subtraction operators are straightforward
 * and are covered first. The addition operator gets a subsection of its own
 * because it can also perform string concatenation and has some unusual
 * type conversion rules. The unary operators and the bitwise operators
 * are also covered in subsections of their own.
 * 
 * Most of these arithmetic operators (except as noted as follows) can be
 * used with BigInt operands or with regular numbers, as
 * long as you don’t mix the two types.
 * 
 * The basic arithmetic operators are ** (exponentiation), *
 * (multiplication), / (division), % (modulo: remainder after division), +
 * (addition), and - (subtraction). As noted, we’ll discuss the + operator
 * in a section of its own. The other five basic operators simply evaluate
 * their operands, convert the values to numbers if necessary, and then
 * compute the power, product, quotient, remainder, or difference. Nonnumeric operands that cannot convert to numbers convert to the NaN
 * value. If either operand is (or converts to) NaN, the result of the
 * operation is (almost always) NaN.
 * 
 * The ** operator has higher precedence than *, /, and % (which in turn
 * have higher precedence than + and -). Unlike the other operators, **
 * works right-to-left, so 2**2**3 is the same as 2**8, not 4**3.
 * There is a natural ambiguity to expressions like -3**2. Depending on
 * the relative precedence of unary minus and exponentiation, that
 * expression could mean (-3)**2 or -(3**2). Different languages
 * handle this differently, and rather than pick sides, JavaScript simply
 * makes it a syntax error to omit parentheses in this case, forcing you to
 * write an unambiguous expression. ** is JavaScript’s newest arithmetic
 * operator: it was added to the language with ES2016. The
 * Math.pow() function has been available since the earliest versions
 * of JavaScript, however, and it performs exactly the same operation as
 * the ** operator.
 * 
 * The / operator divides its first operand by its second. If you are used to
 * programming languages that distinguish between integer and floatingpoint numbers, you might expect to get an integer result when you
 * divide one integer by another. In JavaScript, however, all numbers are
 * floating-point, so all division operations have floating-point results:
 * 5/2 evaluates to 2.5, not 2. Division by zero yields positive or
 * negative infinity, while 0/0 evaluates to NaN: neither of these cases
 * raises an error.
 * 
 * The % operator computes the first operand modulo the second operand.
 * In other words, it returns the remainder after whole-number division of
 * the first operand by the second operand. The sign of the result is the
 * same as the sign of the first operand. For example, 5 % 2 evaluates to
 * 1, and -5 % 2 evaluates to -1.
 * 
 * While the modulo operator is typically used with integer operands, it
 * also works for floating-point values. For example, 6.5 % 2.1
 * evaluates to 0.2.
 */