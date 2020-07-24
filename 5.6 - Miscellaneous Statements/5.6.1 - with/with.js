/*
 * The with statement runs a block of code as if the properties of a
 * specified object were variables in scope for that code. It has the
 * following syntax:
 */

with (object)
statement

/*
 * This statement creates a temporary scope with the properties of object
 * as variables and then executes statement within that scope.
 * 
 * The with statement is forbidden in strict mode and should
 * be considered deprecated in non-strict mode: avoid using it whenever
 * possible. JavaScript code that uses with is difficult to optimize and is
 * likely to run significantly more slowly than the equivalent code written
 * without the with statement.
 * 
 * The common use of the with statement is to make it easier to work
 * with deeply nested object hierarchies. In client-side JavaScript, for
 * example, you may have to type expressions like this one to access
 * elements of an HTML form:
 */

document.forms[0].address.value

/*
 * If you need to write expressions like this a number of times, you can
 * use the with statement to treat the properties of the form object like
 * variables:
 */

with(document.forms[0]) {
    // Access form elements directly here. For example:
    name.value = "";
    address.value = "";
    email.value = "";
}

/*
 * This reduces the amount of typing you have to do: you no longer need
 * to prefix each form property name with document.forms[0]. It is
 * just as simple, of course, to avoid the with statement and write the
 * preceding code like this:
 */
    
let f = document.forms[0];
f.name.value = "";
f.address.value = "";
f.email.value = "";

/*
 * Note that if you use const or let or var to declare a variable or
 * constant within the body of a with statement, it creates an ordinary
 * variable and does not define a new property within the specified object.
 */