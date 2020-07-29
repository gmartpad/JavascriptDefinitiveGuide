/*
 * ES6 formally defines the order in which the own properties of an
 * object are enumerated. Object.keys(),
 * Object.getOwnPropertyNames(),
 * Object.getOwnPropertySymbols(),
 * Reflect.ownKeys(), and related methods such as
 * JSON.stringify() all list properties in the following order,
 * subject to their own additional constraints about whether they list nonenumerable properties or properties whose names are strings or
 * Symbols: * 
 * 
 *      - String properties whose names are non-negative integers are
 *      listed first, in numeric order from smallest to largest. This rule
 *      means that arrays and array-like objects will have their
 *      properties enumerated in order.
 * 
 *      - After all properties that look like array indexes are listed, all
 *      remaining properties with string names are listed (including
 *      properties that look like negative numbers or floating-point
 *      numbers). These properties are listed in the order in which
 *      they were added to the object. For properties defined in an
 *      object literal, this order is the same order they appear in the
 *      literal.
 * 
 *      - Finally, the properties whose names are Symbol objects are
 *      listed in the order in which they were added to the object.
 *
 * The enumeration order for the for/in loop is not as tightly specified
 * as it is for these enumeration functions, but implementations typically
 * enumerate own properties in the order just described, then travel up the
 * prototype chain enumerating properties in the same order for each
 * prototype object. Note, however, that a property will not be enumerated
 * if a property by that same name has already been enumerated, or even
 * if a non-enumerable property by the same name has already been
 * considered.
 */