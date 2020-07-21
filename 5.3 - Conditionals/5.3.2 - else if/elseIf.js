/*
 * The if/else statement evaluates an expression and executes one of
 * two pieces of code, depending on the outcome. But what about when
 * you need to execute one of many pieces of code? One way to do this is
 * with an else if statement. else if is not really a JavaScript
 * statement, but simply a frequently used programming idiom that results
 * when repeated if/else statements are used:
 */

if (n === 1) {
    // Execute code block #1
} else if (n === 2) {
    // Execute code block #2
} else if (n === 3) {
    // Execute code block #3
} else {
    // If all else fails, execute block #4
}

/*
 * There is nothing special about this code. It is just a series of if
 * statements, where each following if is part of the else clause of the
 * previous statement. Using the else if idiom is preferable to, and
 * more legible than, writing these statements out in their syntactically
 * equivalent, fully nested form:
 */

if (n === 1) {
    // Execute code block #1
}
else {
    if (n === 2) {
        // Execute code block #2
    }
    else {
        if (n === 3) {
            // Execute code block #3
        }
        else {
            // If all else fails, execute block #4
        }
    }
}
    