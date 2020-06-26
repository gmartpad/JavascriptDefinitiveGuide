//In ES6 and later, string literals can be delimited with backticks:

let s = `hello world`;

/*
 * The final value of a string literal in backticks is computed by
 * evaluating any included expressions, converting the values of those
 * expressions to strings and combining those computed strings with the
 * literal characters within the backticks:
 */

let name = "Bill";
let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."

/*
 * The following
 * template literal includes four JavaScript expressions, a Unicode escape
 * sequence, and at least four newlines (the expression values may include
 * newlines as well):
 */

let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

/*
 * ES6 has one built-in tag function: String.raw(). It returns the text
 * within backticks without any processing of backslash escapes:
 */

`\n`.length // => 1: the string has a single newline character
String.raw(`\n`).length // => 2: a backslash character and the letter n