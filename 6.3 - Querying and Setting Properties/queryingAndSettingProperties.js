/*
 * To obtain the value of a property, use the dot (.) or square bracket
 * ([]) operators. The lefthand side should be an
 * expression whose value is an object. If using the dot operator, the
 * righthand side must be a simple identifier that names the property. If
 * using square brackets, the value within the brackets must be an
 * expression that evaluates to a string that contains the desired property
 * name:
 */

let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.

/*
 * To create or set a property, use a dot or square brackets as you would
 * to query the property, but put them on the lefthand side of an
 * assignment expression:
 */

book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.

/*
 * When using square bracket notation, we’ve said that the expression
 * inside the square brackets must evaluate to a string. A more precise
 * statement is that the expression must evaluate to a string or a value that
 * can be converted to a string or to a Symbol.
 */