/* 
 * In addition to the basic toString() method, objects all have a
 * toLocaleString(). The purpose of this method is to return a
 * localized string representation of the object. The default
 * toLocaleString() method defined by Object doesn’t do any
 * localization itself: it simply calls toString() and returns that value.
 * The Date and Number classes define customized versions of
 * toLocaleString() that attempt to format numbers, dates, and
 * times according to local conventions. Array defines a
 * toLocaleString() method that works like toString() except
 * that it formats array elements by calling their toLocaleString()
 * methods instead of their toString() methods. You might do the
 * same thing with a point object like this:
 */

let point = {
    x: 1000,
    y: 2000,
    toString: function() { return `(${this.x}, ${this.y})`;
    },
    toLocaleString: function() {
        return `(${this.x.toLocaleString()},
        ${this.y.toLocaleString()})`;
    }
};
point.toString() // => "(1000, 2000)"
point.toLocaleString() // => "(1,000, 2,000)": note thousands separators