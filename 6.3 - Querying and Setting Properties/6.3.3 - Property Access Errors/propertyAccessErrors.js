/*
 * Property access expressions do not always return or set a value. This
 * section explains the things that can go wrong when you query or set a
 * property.
 * 
 * It is not an error to query a property that does not exist. If the property
 * x is not found as an own property or an inherited property of o, the
 * property access expression o.x evaluates to undefined. Recall that
 * our book object has a “sub-title” property, but not a “subtitle” property:
 */

book.subtitle // => undefined: property doesn't exist

/*
 * It is an error, however, to attempt to query a property of an object that
 * does not exist. The null and undefined values have no properties,
 * and it is an error to query properties of these values. Continuing the
 * preceding example:
 */

let len = book.subtitle.length; // !TypeError: undefined doesn't have length

/*
 * Property access expressions will fail if the lefthand side of the . is
 * null or undefined. So when writing an expression like
 * book.author.surname, you should be careful if you are not
 * certain that book and book.author are actually defined. Here are
 * two ways to guard against this kind of problem:
 */

// A verbose and explicit technique
let surname = undefined;

if (book) {
    if (book.author) {
        surname = book.author.surname;
    }
}

// A concise and idiomatic alternative to get surname or null or undefined
surname = book && book.author && book.author.surname;

/*
 * ES2020 supports conditional property access
 * with ?., which allows us to rewrite the previous assignment
 * expression as:
 */

let surname = book?.author?.surname;

/*
 * Attempting to set a property on null or undefined also causes a
 * TypeError. Attempts to set properties on other values do not always
 * succeed, either: some properties are read-only and cannot be set, and
 * some objects do not allow the addition of new properties. In strict
 * mode (§5.6.3), a TypeError is thrown whenever an attempt to set a
 * property fails. Outside of strict mode, these failures are usually silent.
 * 
 * The rules that specify when a property assignment succeeds and when
 * it fails are intuitive but difficult to express concisely. An attempt to set
 * a property p of an object o fails in these circumstances:
 *
 *      - o has an own property p that is read-only: it is not possible to
 *      set read-only properties.
 * 
 *      - o has an inherited property p that is read-only: it is not
 *      possible to hide an inherited read-only property with an own
 *      property of the same name.
 * 
 *      - o does not have an own property p; o does not inherit a
 *      property p with a setter method, and o’s extensible attribute
 *      is false. Since p does not already exist in o, and
 *      if there is no setter method to call, then p must be added to o.
 *      But if o is not extensible, then no new properties can be
 *      defined on it.
 */