/*
 * eval() expects one argument. If you pass any value other than a
 * string, it simply returns that value. If you pass a string, it attempts to
 * parse the string as JavaScript code, throwing a SyntaxError if it fails. If
 * it successfully parses the string, then it evaluates the code and returns
 * the value of the last expression or statement in the string or
 * undefined if the last expression or statement had no value. If the
 * evaluated string throws an exception, that exception propogates from
 * the call to eval().
 * 
 * The key thing about eval() (when invoked like this) is that it uses
 * the variable environment of the code that calls it. That is, it looks up
 * the values of variables and defines new variables and functions in the
 * same way that local code does. If a function defines a local variable x
 * and then calls eval("x"), it will obtain the value of the local
 * variable. If it calls eval("x=1"), it changes the value of the local
 * variable. And if the function calls eval("var y = 3;"), it
 * declares a new local variable y. On the other hand, if the evaluated
 * string uses let or const, the variable or constant declared will be
 * local to the evaluation and will not be defined in the calling
 * environment.
 * 
 * Similarly, a function can declare a local function with code like this:
 */

eval("function f() { return x+1; }");

/*
 * If you call eval() from top-level code, it operates on global variables
 * and global functions, of course.
 * 
 * Note that the string of code you pass to eval() must make syntactic
 * sense on its own: you cannot use it to paste code fragments into a
 * function. It makes no sense to write eval("return;"), for
 * example, because return is only legal within functions, and the fact
 * that the evaluated string uses the same variable environment as the
 * calling function does not make it part of that function. If your string
 * would make sense as a standalone script (even a very short one like
 * x=0 ), it is legal to pass to eval(). Otherwise, eval() will throw a
 * SyntaxError.

 */