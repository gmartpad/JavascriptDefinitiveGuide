/*
 * All of the object properties we’ve discussed so far in this chapter have
 * been data properties with a name and an ordinary value. JavaScript
 * also supports accessor properties, which do not have a single value but
 * instead have one or two accessor methods: a getter and/or a setter.
 * When a program queries the value of an accessor property, JavaScript
 * invokes the getter method (passing no arguments). The return value of
 * this method becomes the value of the property access expression.
 * 
 * When a program sets the value of an accessor property, JavaScript
 * invokes the setter method, passing the value of the righthand side of the
 * assignment. This method is responsible for “setting,” in some sense,
 * the property value. The return value of the setter method is ignored.
 * 
 * If a property has both a getter and a setter method, it is a read/write
 * property. If it has only a getter method, it is a read-only property. And
 * if it has only a setter method, it is a write-only property (something that
 * is not possible with data properties), and attempts to read it always
 * evaluate to undefined.
 * 
 * Accessor properties can be defined with an extension to the object
 * literal syntax (unlike the other ES6 extensions we’ve seen here, getters
 * and setters were introduced in ES5):
 */

let o = {
    // An ordinary data property
    dataProp: value,
    // An accessor property defined as a pair of functions.
    get accessorProp() { return this.dataProp; },
    set accessorProp(value) { this.dataProp = value; }
};

/*
 * Accessor properties are defined as one or two methods whose name is
 * the same as the property name. These look like ordinary methods
 * defined using the ES6 shorthand except that getter and setter
 * definitions are prefixed with get or set. (In ES6, you can also use
 * computed property names when defining getters and setters. Simply
 * replace the property name after get or set with an expression in
 * square brackets.)
 * 
 * The accessor methods defined above simply get and set the value of a
 * data property, and there is no reason to prefer the accessor property
 * over the data property. But as a more interesting example, consider the
 * following object that represents a 2D Cartesian point. It has ordinary
 * data properties to represent the x and y coordinates of the point, and it
 * has accessor properties that give the equivalent polar coordinates of the
 * point:
 */

let p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,
    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.hypot(this.x, this.y); },
    set r(newvalue) {
    let oldvalue = Math.hypot(this.x, this.y);
    let ratio = newvalue/oldvalue;
    this.x *= ratio;
    this.y *= ratio;
    },
    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};

p.r // => Math.SQRT2
p.theta // => Math.PI / 4
   
/*
 * Note the use of the keyword this in the getters and setter in this
 * example. JavaScript invokes these functions as methods of the object
 * on which they are defined, which means that within the body of the
 * function, this refers to the point object p. So the getter method for
 * the r property can refer to the x and y properties as this.x and
 * this.y.
 * 
 * Accessor properties are inherited, just as data properties are, so you can
 * use the object p defined above as a prototype for other points. You can
 * give the new objects their own x and y properties, and they’ll inherit
 * the r and theta properties:
 */

let q = Object.create(p); // A new object that inherits getters and setters
q.x = 3; q.y = 4; // Create q's own data properties
q.r // => 5: the inherited accessor properties work
q.theta // => Math.atan2(4, 3)

/*
 * The code above uses accessor properties to define an API that provides
 * two representations (Cartesian coordinates and polar coordinates) of a
 * single set of data. Other reasons to use accessor properties include
 * sanity checking of property writes and returning different values on
 * each property read:
 */

 // This object generates strictly increasing serial numbers
const serialnum = {
    // This data property holds the next serial number.
    // The _ in the property name hints that it is for internal use only.
    _n: 0,
    // Return the current value and increment it
    get next() { return this._n++; },
    // Set a new value of n, but only if it is larger than current
    set next(n) {
    if (n > this._n) this._n = n;
    else throw new Error("serial number can only be set to a larger value");
    }
};
    
serialnum.next = 10; // Set the starting serial number
serialnum.next // => 10
serialnum.next // => 11: different value each time we get next

/*
 * Finally, here is one more example that uses a getter method to
 * implement a property with “magical” behavior:
 */

// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
const random = {
    get octet() { return Math.floor(Math.random()*256); },
    get uint16() { return Math.floor(Math.random()*65536); },
    get int16() { return
    Math.floor(Math.random()*65536)-32768; }
};
