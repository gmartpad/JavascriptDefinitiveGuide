/*
 * As discussed earlier, all JavaScript objects (except those explicitly
 * created without a prototype) inherit properties from
 * Object.prototype. These inherited properties are primarily
 * methods, and because they are universally available, they are of
 * particular interest to JavaScript programmers. We’ve already seen the
 * hasOwnProperty() and propertyIsEnumerable() methods,
 * for example. (And we’ve also already covered quite a few static
 * functions defined on the Object constructor, such as
 * Object.create() and Object.keys().) This section explains
 * a handful of universal object methods that are defined on
 * Object.prototype, but which are intended to be replaced by
 * other, more specialized implementations. In the sections that follow,
 * we show examples of defining these methods on a single object.
 */