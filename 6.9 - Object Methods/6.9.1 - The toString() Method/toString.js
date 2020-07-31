/*
 * The toString() method takes no arguments; it returns a string that
 * somehow represents the value of the object on which it is invoked.
 * JavaScript invokes this method of an object whenever it needs to
 * convert the object to a string. This occurs, for example, when you use
 * the + operator to concatenate a string with an object or when you pass
 * an object to a method that expects a string.
 * 
 * The default toString() method is not very informative (though it is
 * useful for determining the class of an object).
 * For example, the following line of code simply evaluates to the string
 * “[object Object]”:
 */

let s = { x: 1, y: 1 }.toString(); // s == "[object Object]"

/*
 * Because this default method does not display much useful information,
 * many classes define their own versions of toString(). For
 * example, when an array is converted to a string, you obtain a list of the
 * array elements, themselves each converted to a string, and when a
 * function is converted to a string, you obtain the source code for the
 * function. You might define your own toString() method like this:
 */

let point = {
    x: 1,
    y: 2,
    toString: function() { return `(${this.x}, ${this.y})`; }
};
String(point) // => "(1, 2)": toString() is used for string conversions
    