/*
 * A for/in loop looks a lot like a for/of loop, with the of keyword
 * changed to in. While a for/of loop requires an iterable object after
 * the of, a for/in loop works with any object after the in. The
 * for/of loop is new in ES6, but for/in has been part of JavaScript
 * since the very beginning (which is why it has the more natural
 * sounding syntax).
 * 
 * The for/in statement loops through the property names of a
 * specified object. The syntax looks like this:
 */

for (variable in object)
    statement

/*
 * variable typically names a variable, but it may be a variable declaration
 * or anything suitable as the left-hand side of an assignment expression.
 * object is an expression that evaluates to an object. As usual, statement
 * is the statement or statement block that serves as the body of the loop.
 * 
 * And you might use a for/in loop like this:
 */

for(let p in o) { // Assign property names of o to variable p
    console.log(o[p]); // Print the value of each property
}
  
/*
 * To execute a for/in statement, the JavaScript interpreter first
 * evaluates the object expression. If it evaluates to null or
 * undefined, the interpreter skips the loop and moves on to the next
 * statement. The interpreter now executes the body of the loop once for
 * each enumerable property of the object. Before each iteration, however,
 * the interpreter evaluates the variable expression and assigns the name
 * of the property (a string value) to it.
 *
 * Note that the variable in the for/in loop may be an arbitrary
 * expression, as long as it evaluates to something suitable for the left side
 * of an assignment. This expression is evaluated each time through the
 * loop, which means that it may evaluate differently each time. For
 * example, you can use code like the following to copy the names of all
 * object properties into an array:
 */

let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for(a[i++] in o) /* empty */;

/*
 * JavaScript arrays are simply a specialized kind of object, and array
 * indexes are object properties that can be enumerated with a for/in
 * loop. For example, following the previous code with this line
 * enumerates the array indexes 0, 1, and 2:
 */

for(let i in a) console.log(i);

/*
 * I find that a common source of bugs in my own code is the accidental
 * use of for/in with arrays when I meant to use for/of. When
 * working with arrays, you almost always want to use for/of instead
 * of for/in.
 * 
 * The for/in loop does not actually enumerate all properties of an
 * object. It does not enumerate properties whose names are symbols.
 * And of the properties whose names are strings, it only loops over the
 * enumerable properties. The various built-in methods
 * defined by core JavaScript are not enumerable. All objects have a
 * toString() method, for example, but the for/in loop does not
 * enumerate this toString property. In addition to built-in methods,
 * many other properties of the built-in objects are non-enumerable. All
 * properties and methods defined by your code are enumerable, by
 * default. (You can make them non-enumerable using techniques
 * explained in)
 * 
 * Enumerable inherited properties are also enumerated by
 * the for/in loop. This means that if you use for/in loops and also
 * use code that defines properties that are inherited by all objects, then
 * your loop may not behave in the way you expect. For this reason, many
 * programmers prefer to use a for/of loop with Object.keys()
 * instead of a for/in loop.
 * 
 * If the body of a for/in loop deletes a property that has not yet been
 * enumerated, that property will not be enumerated. If the body of the
 * loop defines new properties on the object, those properties may or may
 * not be enumerated. 
 * /