/*
 * Object.prototype does not actually define a toJSON() method,
 * but the JSON.stringify() method looks for a
 * toJSON() method on any object it is asked to serialize. If this method
 * exists on the object to be serialized, it is invoked, and the return value
 * is serialized, instead of the original object. The Date class
 * defines a toJSON() method that returns a serializable string
 * representation of the date. We could do the same for our Point object
 * like this:
 */

let point = {
    x: 1,
    y: 2,
    toString: function() { return `(${this.x}, ${this.y})`;
    },
    toJSON: function() { return this.toString(); }
};
JSON.stringify([point]) // => '["(1, 2)"]'