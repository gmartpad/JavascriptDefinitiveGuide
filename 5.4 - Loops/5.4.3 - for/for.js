/*
 * The for statement provides a looping construct that is often more
 * convenient than the while statement. The for statement simplifies
 * loops that follow a common pattern. Most loops have a counter
 * variable of some kind. This variable is initialized before the loop starts
 * and is tested before each iteration of the loop. Finally, the counter
 * variable is incremented or otherwise updated at the end of the loop
 * body, just before the variable is tested again. In this kind of loop, the
 * initialization, the test, and the update are the three crucial
 * manipulations of a loop variable. The for statement encodes each of
 * these three manipulations as an expression and makes those
 * expressions an explicit part of the loop syntax:
 */

for(initialize ; test ; increment)
    statement

/*
 * initialize, test, and increment are three expressions (separated by
 * semicolons) that are responsible for initializing, testing, and
 * incrementing the loop variable. Putting them all in the first line of the
 * loop makes it easy to understand what a for loop is doing and
 * prevents mistakes such as forgetting to initialize or increment the loop
 * variable.
 * 
 * The simplest way to explain how a for loop works is to show the
 * equivalent while loop:
 */

initialize;
while(test) {
    statement
    increment;
}

/*
 * In other words, the initialize expression is evaluated once, before the
 * loop begins. To be useful, this expression must have side effects
 * (usually an assignment). JavaScript also allows initialize to be a
 * variable declaration statement so that you can declare and initialize a
 * loop counter at the same time. The test expression is evaluated before
 * each iteration and controls whether the body of the loop is executed. If
 * test evaluates to a truthy value, the statement that is the body of the
 * loop is executed. Finally, the increment expression is evaluated. Again,
 * this must be an expression with side effects in order to be useful.
 * Generally, it is either an assignment expression, or it uses the ++ or --
 * operators.
 * 
 * We can print the numbers from 0 to 9 with a for loop like the
 * following. Contrast it with the equivalent while loop shown in the
 * previous section:
 */

for(let count = 0; count < 10; count++) {
    console.log(count);
}

/*
 * Loops can become a lot more complex than this simple example, of
 * course, and sometimes multiple variables change with each iteration of
 * the loop. This situation is the only place that the comma operator is
 * commonly used in JavaScript; it provides a way to combine multiple
 * initialization and increment expressions into a single expression
 * suitable for use in a for loop:
 */ 
    
let i, j, sum = 0;
for(i = 0, j = 10 ; i < 10 ; i++, j--) {
    sum += i * j;
}

/*
 * In all our loop examples so far, the loop variable has been numeric.
 * This is quite common but is not necessary. The following code uses a
 * for loop to traverse a linked list data structure and return the last
 * object in the list (i.e., the first object that does not have a next
 * property):
 */

function tail(o) { // Return the tail of linked list o
    for(; o.next; o = o.next) /* empty */ ; // Traverse while o.next is truthy
    return o;
}

/*
 * Note that this code has no initialize expression. Any of the three
 * expressions may be omitted from a for loop, but the two semicolons
 * are required. If you omit the test expression, the loop repeats forever,
 * and for(;;) is another way of writing an infinite loop, like
 * while(true).
 */