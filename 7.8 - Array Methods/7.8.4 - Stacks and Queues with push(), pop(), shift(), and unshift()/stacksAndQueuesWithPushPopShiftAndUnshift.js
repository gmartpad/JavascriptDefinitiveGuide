/*
 * The push() and pop() methods allow you to work with arrays as if
 * they were stacks. The push() method appends one or more new 
 * elements to the end of an array and returns the new length of the array.
 * Unlike concat(), push() does not flatten array arguments. The
 * pop() method does the reverse: it deletes the last element of an array,
 * decrements the array length, and returns the value that it removed. Note
 * that both methods modify the array in place. The combination of
 * push() and pop() allows you to use a JavaScript array to
 * implement a first-in, last-out stack. For example:
 */

let stack = []; // stack == []
stack.push(1,2); // stack == [1,2];
stack.pop(); // stack == [1]; returns 2
stack.push(3); // stack == [1,3]
stack.pop(); // stack == [1]; returns 3
stack.push([4,5]); // stack == [1,[4,5]]
stack.pop() // stack == [1]; returns [4,5]
stack.pop(); // stack == []; returns 1

/*
 * The push() method does not flatten an array you pass to it, but if you
 * want to push all of the elements from one array onto another array, you
 * can use the spread operator to flatten it explicitly:
 */

a.push(...values);

/*
 * The unshift() and shift() methods behave much like push()
 * and pop(), except that they insert and remove elements from the
 * beginning of an array rather than from the end. unshift() adds an
 * element or elements to the beginning of the array, shifts the existing
 * array elements up to higher indexes to make room, and returns the new
 * length of the array. shift() removes and returns the first element of
 * the array, shifting all subsequent elements down one place to occupy
 * the newly vacant space at the start of the array. You could use
 * unshift() and shift() to implement a stack, but it would be less
 * efficient than using push() and pop() because the array elements
 * need to be shifted up or down every time an element is added or
 * removed at the start of the array. Instead, though, you can implement a
 * queue data structure by using push() to add elements at the end of an
 * array and shift() to remove them from the start of the array:
 */

let q = []; // q == []
q.push(1,2); // q == [1,2]
q.shift(); // q == [2]; returns 1
q.push(3) // q == [2, 3]
q.shift() // q == [3]; returns 2
q.shift() // q == []; returns 3

/*
 * There is one feature of unshift() that is worth calling out because
 * you may find it surprising. When passing multiple arguments to
 * unshift(), they are inserted all at once, which means that they end
 * up in the array in a different order than they would be if you inserted
 * them one at a time:
 */

let a = []; // a == []
a.unshift(1) // a == [1]
a.unshift(2) // a == [2, 1]
a = []; // a == []
a.unshift(1,2) // a == [1, 2]
