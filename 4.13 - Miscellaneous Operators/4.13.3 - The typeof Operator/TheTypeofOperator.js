/*
 * typeof is a unary operator that is placed before its single operand,
 * which can be of any type. Its value is a string that specifies the type of
 * the operand. Table specifies the value of the typeof operator for
 * any JavaScript value.
 */

/*
 * Table - Values returned by the typeof operator
 *
 * x                        typeof x
 * 
 * undefined                "undefined"
 * null                     "object"
 * true or false            "boolean"
 * any number or NaN        "number"
 * any BigInt               "bigint"
 * any string               "string"
 * any symbol               "symbol"
 * any function             "function"
 * any nonfunction object   "object"
 */

/*
 * You might use the typeof operator in an expression like this:
 */

// If the value is a string, wrap it in quotes, otherwise, convert
(typeof value === "string") ? "'" + value + "'" : value.toString()

/*
 * Note that typeof returns “object” if the operand value is null. If
 * you want to distinguish null from objects, you’ll have to explicitly
 * test for this special-case value.
 * 
 * Although JavaScript functions are a kind of object, the typeof
 * operator considers functions to be sufficiently different that they have
 * their own return value.
 * 
 * Because typeof evaluates to “object” for all object and array values
 * other than functions, it is useful only to distinguish objects from other,
 * primitive types. In order to distinguish one class of object from
 * another, you must use other techniques, such as the instanceof
 * operator, the class attribute, or the
 * constructor property.
 */