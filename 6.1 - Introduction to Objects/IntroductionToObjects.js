/*
 * An object is a composite value: it aggregates multiple values (primitive
 * values or other objects) and allows you to store and retrieve those
 * values by name. An object is an unordered collection of properties,
 * each of which has a name and a value. Property names are usually
 * strings, so we can say that objects map strings to values. This stringto-value mapping goes by various names—you are probably already
 * familiar with the fundamental data structure under the name “hash,”
 * “hashtable,” “dictionary,” or “associative array.” An object is more
 * than a simple string-to-value map, however. In addition to maintaining
 * its own set of properties, a JavaScript object also inherits the properties
 * of another object, known as its “prototype.” The methods of an object
 * are typically inherited properties, and this “prototypal inheritance” is a
 * key feature of JavaScript.
 * 
 * JavaScript objects are dynamic—properties can usually be added and
 * deleted—but they can be used to simulate the static objects and
 * “structs” of statically typed languages. They can also be used (by
 * ignoring the value part of the string-to-value mapping) to represent sets
 * of strings.
 * 
 * Any value in JavaScript that is not a string, a number, a Symbol, or
 * true, false, null, or undefined is an object. And even though
 * strings, numbers, and booleans are not objects, they can behave like
 * immutable objects.
 * 
 * If the variable x refers to an object and the code
 * let y = x; is executed, the variable y holds a reference to the same
 * object, not a copy of that object. Any modifications made to the object
 * through the variable y are also visible through the variable x.
 * 
 * The most common things to do with objects are to create them and set,
 * query, delete, test, and enumerate their properties. These fundamental
 * operations are described in the opening sections of this chapter. The
 * sections after that cover more advanced topics.
 * 
 * A property has a name and a value. A property name may be any
 * string, including the empty string (or any Symbol), but no object may
 * have two properties with the same name. The value may be any
 * JavaScript value, or it may be a getter or setter function (or both).
 * 
 * It is sometimes important to be able to distinguish between properties
 * defined directly on an object and those that are inherited from a
 * prototype object. JavaScript uses the term own property to refer to noninherited properties.
 * 
 * In addition to its name and value, each property has three property
 * attributes:
 * 
 *      - The writable attribute specifies whether the value of the
 *      property can be set.
 * 
 *      - The enumerable attribute specifies whether the property name
 *      is returned by a for/in loop.
 * 
 *      - The configurable attribute specifies whether the property can
 *      be deleted and whether its attributes can be altered.
 * 
 * Many of JavaScript’s built-in objects have properties that are readonly, non-enumerable, or non-configurable. By default, however, all
 * properties of the objects you create are writable, enumerable, and
 * configurable.
 */