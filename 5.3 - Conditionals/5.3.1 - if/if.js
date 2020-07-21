/*
 * The if statement is the fundamental control statement that allows
 * JavaScript to make decisions, or, more precisely, to execute statements
 * conditionally. This statement has two forms. The first is:
 */

if (expression)
    statement

/*
 * In this form, expression is evaluated. If the resulting value is truthy,
 * statement is executed. If expression is falsy, statement is not executed.
 * For example:
 */

if (username == null) // If username is null or undefined,
username = "John Doe"; // define it

/*
 * Or similarly:
 */

 // If username is null, undefined, false, 0, "", or NaN, give it a new value
if (!username) username = "John Doe";

/*
 * Note that the parentheses around the expression are a required part of
 * the syntax for the if statement.
 * 
 * JavaScript syntax requires a single statement after the if keyword and
 * parenthesized expression, but you can use a statement block to
 * combine multiple statements into one. So the if statement might also
 * look like this:
 */

if (!address) {
    address = "";
    message = "Please specify a mailing address.";
}

/*
 * The second form of the if statement introduces an else clause that is
 * executed when expression is false. Its syntax is:
 */

if (expression)
    statement1
else
    statement2

/*
 * This form of the statement executes statement1 if expression is
 * truthy and executes statement2 if expression is falsy. For example:
 */   

if (n === 1)
    console.log("You have 1 new message.");
else
    console.log(`You have ${n} new messages.`);

/*
 * When you have nested if statements with else clauses, some caution
 * is required to ensure that the else clause goes with the appropriate if
 * statement. Consider the following lines:
 */

i = j = 1;
k = 2;
if (i === j)
    if (j === k)
        console.log("i equals k");
else
    console.log("i doesn't equal j"); // WRONG!!

/*
 * In this example, the inner if statement forms the single statement
 * allowed by the syntax of the outer if statement. Unfortunately, it is
 * not clear (except from the hint given by the indentation) which if the
 * else goes with. And in this example, the indentation is wrong,
 * because a JavaScript interpreter actually interprets the previous
 * example as:
 */

if (i === j) {
    if (j === k)
        console.log("i equals k");
    else
        console.log("i doesn't equal j"); // OOPS!
}

/*
 * The rule in JavaScript (as in most programming languages) is that by
 * default an else clause is part of the nearest if statement. To make
 * this example less ambiguous and easier to read, understand, maintain,
 * and debug, you should use curly braces:
 */

if (i === j) {
    if (j === k) {
        console.log("i equals k");
    }
} else { // What a difference the location of a curly brace makes!
    console.log("i doesn't equal j");
}
   
/*
 * Many programmers make a habit of enclosing the bodies of if and
 * else statements (as well as other compound statements, such as
 * while loops) within curly braces, even when the body consists of
 * only a single statement. Doing so consistently can prevent the sort of
 * problem just shown, and I advise you to adopt this practice. In this
 * printed book, I place a premium on keeping example code vertically
 * compact, and I do not always follow my own advice on this matter.
 */