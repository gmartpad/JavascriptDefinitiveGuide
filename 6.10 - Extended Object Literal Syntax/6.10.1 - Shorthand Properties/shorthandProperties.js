/*
 * Suppose you have values stored in variables x and y and want to create
 * an object with properties named x and y that hold those values. With
 * basic object literal syntax, you’d end up repeating each identifier twice:
 */

let x = 1, y = 2;
let o = {
    x: x,
    y: y
};

/*
 * In ES6 and later, you can drop the colon and one copy of the identifier
 * and end up with much simpler code:
 */

let x = 1, y = 2;
let o = { x, y };
o.x + o.y // => 3
