/*
 * The bitwise operators perform low-level manipulation of the bits in the
 * binary representation of numbers. Although they do not perform
 * traditional arithmetic operations, they are categorized as arithmetic
 * operators here because they operate on numeric operands and return a
 * numeric value. Four of these operators perform Boolean algebra on the
 * individual bits of the operands, behaving as if each bit in each operand
 * were a boolean value (1=true, 0=false). The other three bitwise
 * operators are used to shift bits left and right. These operators are not
 * commonly used in JavaScript programming, and if you are not familiar
 * with the binary representation of integers, including the two’s
 * complement representation of negative integers, you can probably skip
 * this section.
 *
 * The bitwise operators expect integer operands and behave as if those
 * values were represented as 32-bit integers rather than 64-bit floatingpoint values. These operators convert their operands to numbers, if
 * necessary, and then coerce the numeric values to 32-bit integers by
 * dropping any fractional part and any bits beyond the 32nd. The shift
 * operators require a right-side operand between 0 and 31. After
 * converting this operand to an unsigned 32-bit integer, they drop any
 * bits beyond the 5th, which yields a number in the appropriate range.
 * Surprisingly, NaN, Infinity, and -Infinity all convert to 0
 * when used as operands of these bitwise operators.
 * 
 * All of these bitwise operators except >>> can be used with regular
 * number operands or with BigInt operands.
 * 
 * Bitwise AND (&)
 * 
 *  The & operator performs a Boolean AND operation on each bit of
 *  its integer arguments. A bit is set in the result only if the
 *  corresponding bit is set in both operands. For example, 0x1234 &
 *  0x00FF evaluates to 0x0034.
 * 
 * Bitwise OR (|)
 *  
 *  The | operator performs a Boolean OR operation on each bit of its
 *  integer arguments. A bit is set in the result if the corresponding bit
 *  is set in one or both of the operands. For example, 0x1234 |
 *  0x00FF evaluates to 0x12FF.
 * 
 * Bitwise XOR (^)
 * 
 *  The ^ operator performs a Boolean exclusive OR operation on each
 *  bit of its integer arguments. Exclusive OR means that either
 *  operand one is true or operand two is true, but not both. A bit is
 *  set in this operation’s result if a corresponding bit is set in one (but
 *  not both) of the two operands. For example, 0xFF00 ^ 0xF0F0
 *  evaluates to 0x0FF0.
 * 
 * Bitwise NOT (~)
 * 
 *  The ~ operator is a unary operator that appears before its single
 *  integer operand. It operates by reversing all bits in the operand.
 *  Because of the way signed integers are represented in JavaScript,
 *  applying the ~ operator to a value is equivalent to changing its sign
 *  and subtracting 1. For example, ~0x0F evaluates to
 *  0xFFFFFFF0, or −16.
 *
 * Shift left (<<)
 * 
 *  The << operator moves all bits in its first operand to the left by the
 *  number of places specified in the second operand, which should be
 *  an integer between 0 and 31. For example, in the operation a <<
 *  1, the first bit (the ones bit) of a becomes the second bit (the twos
 *  bit), the second bit of a becomes the third, etc. A zero is used for
 *  the new first bit, and the value of the 32nd bit is lost. Shifting a
 *  value left by one position is equivalent to multiplying by 2, shifting
 *  two positions is equivalent to multiplying by 4, and so on. For
 *  example, 7 << 2 evaluates to 28.
 * 
 *  Shift right with sign (>>)
 * 
 *  The >> operator moves all bits in its first operand to the right by
 *  the number of places specified in the second operand (an integer
 *  between 0 and 31). Bits that are shifted off the right are lost. The
 *  bits filled in on the left depend on the sign bit of the original
 *  operand, in order to preserve the sign of the result. If the first
 *  operand is positive, the result has zeros placed in the high bits; if
 *  the first operand is negative, the result has ones placed in the high
 *  bits. Shifting a positive value right one place is equivalent to
 *  dividing by 2 (discarding the remainder), shifting right two places
 *  is equivalent to integer division by 4, and so on. 7 >> 1 evaluates
 *  to 3, for example, but note that and −7 >> 1 evaluates to −4.
 */