/*
 * The first-defined operator ?? evaluates to its first defined operand: if
 * its left operand is not null and not undefined, it returns that value.
 * Otherwise, it returns the value of the right operand. Like the && and ||
 * operators, ?? is short-circuiting: it only evaluates its second operand if
 * the first operand evaluates to null or undefined. If the expression
 * a has no side effects, then the expression a ?? b is equivalent to:
 */

(a !== null && a !== undefined) ? a : b

/*
 * ?? is a useful alternative to || when you want to select the
 * first defined operand rather than the first truthy operand. Although ||
 * is nominally a logical OR operator, it is also used idiomatically to
 * select the first non-falsy operand with code like this:
 */

// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max = maxWidth || preferences.maxWidth || 500;

/*
 * The problem with this idiomatic use is that zero, the empty string, and
 * false are all falsy values that may be perfectly valid in some
 * circumstances. In this code example, if maxWidth is zero, that value
 * will be ignored. But if we change the || operator to ??, we end up
 * with an expression where zero is a valid value:
 */

// If maxWidth is defined, use that. Otherwise, look for a value in
// the preferences object. If that is not defined, use a hardcoded constant.
let max = maxWidth ?? preferences.maxWidth ?? 500;

/*
 * Here are more examples showing how ?? works when the first
 * operand is falsy. If that operand is falsy but defined, then ?? returns it.
 * It is only when the first operand is “nullish” (i.e., null or
 * undefined) that this operator evaluates and returns the second
 * operand:
 */

let options = { timeout: 0, title: "", verbose: false, n: null };
options.timeout ?? 1000 // => 0: as defined in the object
options.title ?? "Untitled" // => "": as defined in the object
options.verbose ?? true // => false: as defined in the object
options.quiet ?? false // => false: property is not defined
options.n ?? 10 // => 10: property is null

/*
 * Note that the timeout, title, and verbose expressions here
 * would have different values if we used || instead of ??.
 * 
 * The ?? operator is similar to the && and || operators but does not
 * have higher precedence or lower precedence than they do. If you use it
 * in an expression with either of those operators, you must use explicit
 * parentheses to specify which operation you want to perform first:
 */

(a ?? b) || c // ?? first, then ||
a ?? (b || c) // || first, then ??
a ?? b || c // SyntaxError: parentheses are required

/*
 * The ?? operator is defined by ES2020, and as of early 2020, is newly
 * supported by current or beta versions of all major browsers. This
 * operator is formally called the “nullish coalescing” operator, but I
 * avoid that term because this operator selects one of its operands but
 * does not “coalesce” them in any way that I can see.
 */