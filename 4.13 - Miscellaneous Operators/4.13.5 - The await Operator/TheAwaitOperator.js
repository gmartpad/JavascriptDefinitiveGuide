/*
 * await was introduced in ES2017 as a way to make asynchronous
 * programming more natural in JavaScript.
 * Briefly, however, await
 * expects a Promise object (representing an asynchronous computation)
 * as its sole operand, and it makes your program behave as if it were
 * waiting for the asynchronous computation to complete (but it does this
 * without actually blocking, and it does not prevent other asynchronous
 * operations from proceeding at the same time). The value of the await
 * operator is the fulfillment value of the Promise object. Importantly,
 * await is only legal within functions that have been declared
 * asynchronous with the async keyword. 
 */