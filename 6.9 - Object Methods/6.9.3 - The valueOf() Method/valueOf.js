/*
 * The valueOf() method is much like the toString() method, but
 * it is called when JavaScript needs to convert an object to some
 * primitive type other than a string—typically, a number. JavaScript calls
 * this method automatically if an object is used in a context where a
 * primitive value is required. The default valueOf() method does
 * nothing interesting, but some of the built-in classes define their own
 * valueOf() method. The Date class defines valueOf() to convert
 * dates to numbers, and this allows Date objects to be chronologically
 * compared with < and >. You could do something similar with a point
 * object, defining a valueOf() method that returns the distance from
 * the origin to the point:
 */

let point = {
    x: 3,
    y: 4,
    valueOf: function() { return Math.hypot(this.x, this.y);
    }
};
Number(point) // => 5: valueOf() is used for conversions to numbers
point > 4 // => true
point > 5 // => false
point < 6 // => true