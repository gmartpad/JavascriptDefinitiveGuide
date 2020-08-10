/*
 * The methods described in this section iterate over arrays by passing
 * array elements, in order, to a function you supply, and they provide
 * convenient ways to iterate, map, filter, test, and reduce arrays.
 * 
 * Before we explain the methods in detail, however, it is worth making
 * some generalizations about them. First, all of these methods accept a
 * function as their first argument and invoke that function once for each
 * element (or some elements) of the array. If the array is sparse, the
 * function you pass is not invoked for nonexistent elements. In most
 * cases, the function you supply is invoked with three arguments: the
 * value of the array element, the index of the array element, and the array
 * itself. Often, you only need the first of these argument values and can
 * ignore the second and third values.
 * 
 * Most of the iterator methods described in the following subsections
 * accept an optional second argument. If specified, the function is
 * invoked as if it is a method of this second argument. That is, the second
 * argument you pass becomes the value of the this keyword inside of
 * the function you pass as the first argument. The return value of the
 * function you pass is usually important, but different methods handle
 * the return value in different ways. None of the methods described here
 * modify the array on which they are invoked (though the function you
 * pass can modify the array, of course).
 * 
 * Each of these functions is invoked with a function as its first argument,
 * and it is very common to define that function inline as part of the
 * method invocation expression instead of using an existing function that
 * is defined elsewhere. Arrow function syntax (see §8.1.3) works
 * particularly well with these methods, and we will use it in the examples
 * that follow.
 * 
 * FOREACH()
 * 
 * The forEach() method iterates through an array, invoking a
 * function you specify for each element. As we’ve described, you pass
 * the function as the first argument to forEach(). forEach() then
 * invokes your function with three arguments: the value of the array
 * element, the index of the array element, and the array itself. If you only
 * care about the value of the array element, you can write a function with
 * only one parameter—the additional arguments will be ignored:
 * 
 */

let data = [1,2,3,4,5], sum = 0;

// Compute the sum of the elements of the array
data.forEach(value => { sum += value; }); // sum == 15

// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; }); // data == [2,3,4,5,6]

/*
 * Note that forEach() does not provide a way to terminate iteration
 * before all elements have been passed to the function. That is, there is
 * no equivalent of the break statement you can use with a regular for
 * loop.
 * 
 * MAP()
 * 
 * The map() method passes each element of the array on which it is
 * invoked to the function you specify and returns an array containing the
 * values returned by your function. For example:
 */

let a = [1, 2, 3];
a.map(x => x*x) // => [1, 4, 9]: the function takes input x and returns x*x

/*
 * The function you pass to map() is invoked in the same way as a
 * function passed to forEach(). For the map() method, however, the
 * function you pass should return a value. Note that map() returns a
 * new array: it does not modify the array it is invoked on. If that array is
 * sparse, your function will not be called for the missing elements, but
 * the returned array will be sparse in the same way as the original array:
 * it will have the same length and the same missing elements.
 *
 * FILTER()
 * 
 * The filter() method returns an array containing a subset of the
 * elements of the array on which it is invoked. The function you pass to
 * it should be predicate: a function that returns true or false. The
 * predicate is invoked just as for forEach() and map(). If the return
 * value is true, or a value that converts to true, then the element
 * passed to the predicate is a member of the subset and is added to the
 * array that will become the return value. Examples:
 *  
 */

let a = [5, 4, 3, 2, 1];
a.filter(x => x < 3) // => [2, 1]; values less than 3
a.filter((x,i) => i%2 === 0) // => [5, 3, 1]; every other value

/*
 * Note that filter() skips missing elements in sparse arrays and that
 * its return value is always dense. To close the gaps in a sparse array,
 * you can do this:
 */

let dense = sparse.filter(() => true);

/*
 * And to close gaps and remove undefined and null elements, you can
 * use filter, like this:
 */

a = a.filter(x => x !== undefined && x !== null);

/*
 * FIND() AND FINDINDEX()
 *
 * The find() and findIndex() methods are like filter() in that
 * they iterate through your array looking for elements for which your
 * predicate function returns a truthy value. Unlike filter(), however,
 * these two methods stop iterating the first time the predicate finds an
 * element. When that happens, find() returns the matching element,
 * and findIndex() returns the index of the matching element. If no
 * matching element is found, find() returns undefined and
 * findIndex() returns -1:
 */

let a = [1,2,3,4,5];
a.findIndex(x => x === 3) // => 2; the value 3 appears at index 2
a.findIndex(x => x < 0) // => -1; no negative numbers in the array
a.find(x => x % 5 === 0) // => 5: this is a multiple of 5
a.find(x => x % 7 === 0) // => undefined: no multiples of 7 in the array

/*
 * EVERY() AND SOME()
 * 
 * The every() and some() methods are array predicates: they apply a
 * predicate function you specify to the elements of the array, then return
 * true or false.
 * 
 * The every() method is like the mathematical “for all” quantifier ∀:
 * it returns true if and only if your predicate function returns true for
 * all elements in the array:
 */

let a = [1,2,3,4,5];
a.every(x => x < 10) // => true: all values are < 10.
a.every(x => x % 2 === 0) // => false: not all values are even.

/*
 * The some() method is like the mathematical “there exists” quantifier
 * ∃: it returns true if there exists at least one element in the array for
 * which the predicate returns true and returns false if and only if the
 * predicate returns false for all elements of the array:
 */

let a = [1,2,3,4,5];
a.some(x => x%2===0) // => true; a has some even numbers.
a.some(isNaN) // => false; a has no non-numbers.

/*
 * Note that both every() and some() stop iterating array elements as
 * soon as they know what value to return. some() returns true the
 * first time your predicate returns <code>true</code> and only iterates
 * through the entire array if your predicate always returns false.
 * every() is the opposite: it returns false the first time your
 * predicate returns false and only iterates all elements if your
 * predicate always returns true. Note also that, by mathematical
 * convention, every() returns true and some returns false when
 * invoked on an empty array.
 * 
 * REDUCE() AND REDUCERIGHT()
 *
 * The reduce() and reduceRight() methods combine the
 * elements of an array, using the function you specify, to produce a
 * single value. This is a common operation in functional programming
 * and also goes by the names “inject” and “fold.” Examples help
 * illustrate how it works:
 */

let a = [1,2,3,4,5];
a.reduce((x,y) => x+y, 0) // => 15; the sum of the values
a.reduce((x,y) => x*y, 1) // => 120; the product of the values
a.reduce((x,y) => (x > y) ? x : y) // => 5; the largest of the values

/*
 * reduce() takes two arguments. The first is the function that
 * performs the reduction operation. The task of this reduction function is
 * to somehow combine or reduce two values into a single value and to
 * return that reduced value. In the examples we’ve shown here, the
 * functions combine two values by adding them, multiplying them, and
 * choosing the largest. The second (optional) argument is an initial value
 * to pass to the function.
 *
 * Functions used with reduce() are different than the functions used
 * with forEach() and map(). The familiar value, index, and array
 * values are passed as the second, third, and fourth arguments. The first
 * argument is the accumulated result of the reduction so far. On the first
 * call to the function, this first argument is the initial value you passed as
 * the second argument to reduce(). On subsequent calls, it is the
 * value returned by the previous invocation of the function. In the first
 * example, the reduction function is first called with arguments 0 and 1.
 * It adds these and returns 1. It is then called again with arguments 1 and
 * 2 and returns 3. Next, it computes 3+3=6, then 6+4=10, and finally
 * 10+5=15. This final value, 15, becomes the return value of
 * reduce().
 * 
 * You may have noticed that the third call to reduce() in this example
 * has only a single argument: there is no initial value specified. When
 * you invoke reduce() like this with no initial value, it uses the first
 * element of the array as the initial value. This means that the first call to
 * the reduction function will have the first and second array elements as
 * its first and second arguments. In the sum and product examples, we
 * could have omitted the initial value argument.
 * 
 * Calling reduce() on an empty array with no initial value argument
 * causes a TypeError. If you call it with only one value—either an array
 * with one element and no initial value or an empty array and an initial
 * value—it simply returns that one value without ever calling the
 * reduction function
 * 
 * reduceRight() works just like reduce(), except that it
 * processes the array from highest index to lowest (right-to-left), rather
 * than from lowest to highest. You might want to do this if the reduction
 * operation has right-to-left associativity, for example:
 */

// Compute 2^(3^4). Exponentiation has right-to-left precedence
let a = [2, 3, 4];
a.reduceRight((acc,val) => Math.pow(val,acc)) // => 2.4178516392292583e+24

/*
 * Note that neither reduce() nor reduceRight() accepts an
 * optional argument that specifies the this value on which the
 * reduction function is to be invoked. The optional initial value argument
 * takes its place. See the Function.bind() method (§8.7.5) if you
 * need your reduction function invoked as a method of a particular
 * object.
 * 
 * The examples shown so far have been numeric for simplicity, but
 * reduce() and reduceRight() are not intended solely for
 * mathematical computations. Any function that can combine two values
 * (such as two objects) into one value of the same type can be used as a
 * reduction function. On the other hand, algorithms expressed using
 * array reductions can quickly become complex and hard to understand,
 * and you may find that it is easier to read, write, and reason about your
 * code if you use regular looping constructs to process your arrays.
 */