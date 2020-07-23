/*
 * The yield statement is much like the return statement but is used
 * only in ES6 generator functions to produce the next value
 * in the generated sequence of values without actually returning:
 */

function* range(from, to) {
    for(let i = from; i <= to; i++) {
        yield i;
    }
}
    