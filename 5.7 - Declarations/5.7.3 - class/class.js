/*
 * In ES6 and later, the class declaration creates a new class and gives
 * it a name that we can use to refer to it. A simple class declaration might look like this:
 */

class Circle {
    constructor(radius) { this.r = radius; }
    area() { return Math.PI * this.r * this.r; }
    circumference() { return 2 * Math.PI * this.r; }
}

/*
 * Unlike functions, class declarations are not hoisted, and you cannot use
 * a class declared this way in code that appears before the declaration.
 */