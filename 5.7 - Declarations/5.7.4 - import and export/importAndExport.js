/*
 * The import and export declarations are used together to make
 * values defined in one module of JavaScript code available in another
 * module. A module is a file of JavaScript code with its own global
 * namespace, completely independent of all other modules. The only
 * way that a value (such as function or class) defined in one module can
 * be used in another module is if the defining module exports it with
 * export and the using module imports it with import
 * 
 * import directives are used to import one or more values from another
 * file of JavaScript code and give them names within the current module.
 * import directives come in a few different forms. Here are some
 * examples:
 */

import Circle from './geometry/circle.js';
import { PI, TAU } from './geometry/constants.js';
import { magnitude as hypotenuse } from './vectors/utils.js';

/*
 * Values within a JavaScript module are private and cannot be imported
 * into other modules unless they have been explicitly exported. The
 * export directive does this: it declares that one or more values defined
 * in the current module are exported and therefore available for import
 * by other modules. The export directive has more variants than the
 * import directive does. Here is one of them:
 */

 // geometry/constants.js
const PI = Math.PI;
const TAU = 2 * PI;
export { PI, TAU };

/*
 * The export keyword is sometimes used as a modifier on other
 * declarations, resulting in a kind of compound declaration that defines a
 * constant, variable, function, or class and exports it at the same time.
 * And when a module exports only a single value, this is typically done
 * with the special form export default:
 */

export const TAU = 2 * Math.PI;
export function magnitude(x,y) { return Math.sqrt(x*x + y*y);
}
export default class Circle { /* class definition omitted
here */ }