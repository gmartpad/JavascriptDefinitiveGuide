/*
 * ES6 defines a new loop statement: for/of. This new kind of loop
 * uses the for keyword but is a completely different kind of loop than
 * the regular for loop.
 * 
 * The for/of loop works with iterable objects.
 * For this
 * chapter, it is enough to know that arrays, strings, sets, and maps are
 * iterable: they represent a sequence or set of elements that you can loop
 * or iterate through using a for/of loop.
 *
 * Here, for example, is how we can use for/of to loop through the
 * elements of an array of numbers and compute their sum:
 */

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data) {
    sum += element;
}
sum // => 45

/*
 * Superficially, the syntax looks like a regular for loop: the for
 * keyword is followed by parentheses that contain details about what the
 * loop should do. In this case, the parentheses contain a variable
 * declaration (or, for variables that have already been declared, simply
 * the name of the variable) followed by the of keyword and an
 * expression that evaluates to an iterable object, like the data array in
 * this case. As with all loops, the body of a for/of loop follows the
 * parentheses, typically within curly braces.
 * 
 * In the code just shown, the loop body runs once for each element of the
 * data array. Before each execution of the loop body, the next element
 * of the array is assigned to the element variable. Array elements are
 * iterated in order from first to last.
 * 
 * Arrays are iterated “live”—changes made during the iteration may
 * affect the outcome of the iteration. If we modify the preceding code by
 * adding the line data.push(sum); inside the loop body, then we
 * create an infinite loop because the iteration can never reach the last
 * element of the array.
 */

/*
 * FOR/OF WITH OBJECTS
 *
 * Objects are not (by default) iterable. Attempting to use for/of on a
 * regular object throws a TypeError at runtime:
 */

let o = { x: 1, y: 2, z: 3 };
for(let element of o) { // Throws TypeError because o is not iterable
    console.log(element);
}

/*
 * If you want to iterate through the properties of an object, you can use
 * the for/in loop (introduced in §5.4.5), or use for/of with the
 * Object.keys() method:
 */

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
    keys += k;
}
keys // => "xyz"

/*
 * This works because Object.keys() returns an array of property
 * names for an object, and arrays are iterable with for/of. Note also
 * that this iteration of the keys of an object is not live as the array
 * example above was—changes to the object o made in the loop body
 * will have no effect on the iteration. If you don’t care about the keys of
 * an object, you can also iterate through their corresponding values like
 * this:
 */

let sum = 0;
for(let v of Object.values(o)) {
    sum += v;
}
sum // => 6

/*
 * And if you are interested in both the keys and the values of an object’s
 * properties, you can use for/of with Object.entries() and
 * destructuring assignment:
 */

let pairs = "";
for(let [k, v] of Object.entries(o)) {
    pairs += k + v;
}
pairs // => "x1y2z3"

/*
 * Object.entries() returns an array of arrays, where each inner
 * array represents a key/value pair for one property of the object. We use
 * destructuring assignment in this code example to unpack those inner
 * arrays into two individual variables.
 */

/*
 * FOR/OF WITH STRINGS
 *
 * Strings are iterable character-by-character in ES6:
 */

let frequency = {};
for(let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
frequency // => {m: 1, i: 4, s: 4, p: 2}

/*
 * Note that strings are iterated by Unicode codepoint, not by UTF-16
 * character. The string “I ❤ ” has a .length of 5 (because the two
 * emoji characters each require two UTF-16 characters to represent). But
 * if you iterate that string with for/of, the loop body will run three
 * times, once for each of the three code points “I”, “❤”, and “ .”
 */

/*
 * FOR/OF WITH SET AND MAP
 * 
 * The built-in ES6 Set and Map classes are iterable. When you iterate a
 * Set with for/of, the loop body runs once for each element of the set.
 * You could use code like this to print the unique words in a string of
 * text:
 */

let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
    unique.push(word);
}
unique // => ["Na", "na", "Batman!"]

/*
 * Maps are an interesting case because the iterator for a Map object does
 * not iterate the Map keys, or the Map values, but key/value pairs. Each
 * time through the iteration, the iterator returns an array whose first
 * element is a key and whose second element is the corresponding value.
 * Given a Map m, you could iterate and destructure its key/value pairs
 * like this:
 */

let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
    key // => 1
    value // => "one"
}

/*
 * ASYNCHRONOUS ITERATION WITH FOR/AWAIT
 * 
 * ES2018 introduces a new kind of iterator, known as an asynchronous
 * iterator, and a variant on the for/of loop, known as the
 * for/await loop that works with asynchronous iterators.
 */

 // Read chunks from an asynchronously iterable stream and print them out
async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk);
    }
}
