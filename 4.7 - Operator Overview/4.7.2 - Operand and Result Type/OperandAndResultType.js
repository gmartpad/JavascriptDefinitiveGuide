/*
 * Some operators work on values of any type, but most expect their
 * operands to be of a specific type, and most operators return (or evaluate
 * to) a value of a specific type.
 * 
 * JavaScript operators usually convert the type of their
 * operands as needed. The multiplication operator * expects numeric
 * operands, but the expression "3" * "5" is legal because JavaScript
 * can convert the operands to numbers. The value of this expression is
 * the number 15, not the string “15”, of course. Remember also that
 * every JavaScript value is either “truthy” or “falsy,” so operators that
 * expect boolean operands will work with an operand of any type.
 * 
 * Some operators behave differently depending on the type of the
 * operands used with them. Most notably, the + operator adds numeric
 * operands but concatenates string operands. Similarly, the comparison
 * operators such as < perform comparison in numerical or alphabetical
 * order depending on the type of the operands. The descriptions of
 * individual operators explain their type-dependencies and specify what
 * type conversions they perform.
 * 
 * lvalue is a historical term that means “an expression that can legally appear on the
 * left side of an assignment expression.” In JavaScript, variables,
 * properties of objects, and elements of arrays are lvalues.
 * 
 */