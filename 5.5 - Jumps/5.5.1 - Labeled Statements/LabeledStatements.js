/*
 * Any statement may be labeled by preceding it with an identifier and a
 * colon:
 */

 identifier: statement

 /* 
 * By labeling a statement, you give it a name that you can use to refer to
 * it elsewhere in your program. You can label any statement, although it
 * is only useful to label statements that have bodies, such as loops and
 * conditionals. By giving a loop a name, you can use break and
 * continue statements inside the body of the loop to exit the loop or to
 * jump directly to the top of the loop to begin the next iteration. break
 * and continue are the only JavaScript statements that use statement
 * labels; they are covered in the following subsections. Here is an
 * example of a labeled while loop and a continue statement that
 * uses the label.
 */

mainloop: while(token !== null) {
    // Code omitted...
    continue mainloop; // Jump to the next iteration of the named loop
    // More code omitted...
}

/*
 * The identifier you use to label a statement can be any legal JavaScript
 * identifier that is not a reserved word. The namespace for labels is
 * different than the namespace for variables and functions, so you can
 * use the same identifier as a statement label and as a variable or function
 * name. Statement labels are defined only within the statement to which
 * they apply (and within its substatements, of course). A statement may
 * not have the same label as a statement that contains it, but two
 * statements may have the same label as long as neither one is nested
 * within the other. Labeled statements may themselves be labeled.
 * Effectively, this means that any statement may have multiple labels.
 */
