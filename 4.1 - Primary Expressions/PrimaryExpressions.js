/*
 * The simplest expressions, known as primary expressions, are those that
 * stand alone—they do not include any simpler expressions. Primary
 * expressions in JavaScript are constant or literal values, certain
 * language keywords, and variable references.
 *
 * Literals are constant values that are embedded directly in your
 * program. They look like these:
 */

1.23 // A number literal
"hello" // A string literal
/pattern/ // A regular expression literal

/*
 * JavaScript syntax for number literals was covered in §3.2. String
 * literals were documented in §3.3. The regular expression literal syntax
 * was introduced in §3.3.5.
 *
 * Some of JavaScript’s reserved words are primary expressions:
 */

true // Evalutes to the boolean true value
false // Evaluates to the boolean false value
null // Evaluates to the null value
this // Evaluates to the "current" object

/*
 * We learned about true, false, and null in §3.4 and §3.5. Unlike
 * the other keywords, this is not a constant—it evaluates to different
 * values in different places in the program. The this keyword is used in
 * object-oriented programming. Within the body of a method, this
 * evaluates to the object on which the method was invoked.
 * 
 * Finally, the third type of primary expression is a reference to a
 * variable, constant, or property of the global object:
 */

i // Evaluates to the value of the variable i.
sum // Evaluates to the value of the variable sum.
undefined // The value of the "undefined" property of the global object

/*
 * When any identifier appears by itself in a program, JavaScript assumes
 * it is a variable or constant or property of the global object and looks up
 * its value. If no variable with that name exists, an attempt to evaluate a
 * nonexistent variable throws a ReferenceError instead.
 */