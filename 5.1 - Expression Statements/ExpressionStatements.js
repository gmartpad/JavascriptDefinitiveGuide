/*
 * The simplest kinds of statements in JavaScript are expressions that
 * have side effects. This sort of statement was shown in Chapter 4.
 * Assignment statements are one major category of expression
 * statements. For example:
 */

greeting = "Hello " + name;
i *= 3;

/*
 * The increment and decrement operators, ++ and --, are related to
 * assignment statements. These have the side effect of changing a
 * variable value, just as if an assignment had been performed:
 */

counter++;

/*
 * The delete operator has the important side effect of deleting an
 * object property. Thus, it is almost always used as a statement, rather
 * than as part of a larger expression:
 */

delete o.x;

/*
 * Function calls are another major category of expression statements. For
 * example:
 */

console.log(debugMessage);
displaySpinner(); // A hypothetical function to display a spinner in a web app.

/*
 * These function calls are expressions, but they have side effects that
 * affect the host environment or program state, and they are used here as
 * statements. If a function does not have any side effects, there is no
 * sense in calling it, unless it is part of a larger expression or an
 * assignment statement. For example, you wouldn’t just compute a
 * cosine and discard the result:
 */

Math.cos(x);

/*
 * But you might well compute the value and assign it to a variable for
 * future use:
 */

cx = Math.cos(x);

/*
 * Note that each line of code in each of these examples is terminated
 * with a semicolon.
 */