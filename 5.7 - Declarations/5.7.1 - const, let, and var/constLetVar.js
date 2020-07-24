/*
 * In ES6 and later, const declares constants, and let declares variables. Prior
 * to ES6, the var keyword was the only way to declare variables and
 * there was no way to declare constants. Variables declared with var are
 * scoped to the containing function rather than the containing block. This
 * can be a source of bugs, and in modern JavaScript there is really no
 * reason to use var instead of let.
 */

const TAU = 2*Math.PI;
let radius = 3;
var circumference = TAU * radius;
