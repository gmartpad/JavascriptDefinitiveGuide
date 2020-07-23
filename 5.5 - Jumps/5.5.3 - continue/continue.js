/*
 * The continue statement is similar to the break statement. Instead
 * of exiting a loop, however, continue restarts a loop at the next
 * iteration. The continue statement’s syntax is just as simple as the
 * break statement’s:
 */

 continue;

/*
 * The continue statement can also be used with a label:
 */

 continue label

/*
 * The continue statement, in both its labeled and unlabeled forms, can
 * be used only within the body of a loop. Using it anywhere else causes a
 * syntax error.
 * 
 * When the continue statement is executed, the current iteration of the
 * enclosing loop is terminated, and the next iteration begins. This means
 * different things for different types of loops:
 *
 *      - In a while loop, the specified expression at the beginning of
 *      the loop is tested again, and if it’s true, the loop body is
 *      executed starting from the top.
 * 
 *      - In a do/while loop, execution skips to the bottom of the
 *      loop, where the loop condition is tested again before restarting
 *      the loop at the top.
 * 
 *      - In a for loop, the increment expression is evaluated, and the
 *      test expression is tested again to determine if another iteration
 *      should be done.
 * 
 *      - In a for/of or for/in loop, the loop starts over with the
 *      next iterated value or next property name being assigned to the
 *      specified variable.
 * 
 * Note the difference in behavior of the continue statement in the
 * while and for loops: a while loop returns directly to its condition,
 * but a for loop first evaluates its increment expression and then returns
 * to its condition. Earlier, we considered the behavior of the for loop in
 * terms of an “equivalent” while loop. Because the continue
 * statement behaves differently for these two loops, however, it is not
 * actually possible to perfectly simulate a for loop with a while loop
 * alone.
 * 
 * The following example shows an unlabeled continue statement
 * being used to skip the rest of the current iteration of a loop when an
 * error occurs:
 */

for(let i = 0; i < data.length; i++) {
    if (!data[i]) continue; // Can't proceed with undefined data
    total += data[i];
}

/*
 * Like the break statement, the continue statement can be used in its
 * labeled form within nested loops when the loop to be restarted is not
 * the immediately enclosing loop. Also, as with the break statement,
 * line breaks are not allowed between the continue statement and its
 * labelname.
 */
    