/*
 * Strict mode imposes further restrictions on the behavior of
 * the eval() function and even on the use of the identifier “eval”.
 * When eval() is called from strict-mode code, or when the string of
 * code to be evaluated itself begins with a “use strict” directive, then
 * eval() does a local eval with a private variable environment. This
 * means that in strict mode, evaluated code can query and set local
 * variables, but it cannot define new variables or functions in the local
 * scope.
 * 
 * Furthermore, strict mode makes eval() even more operator-like by
 * effectively making “eval” into a reserved word. You are not allowed to
 * overwrite the eval() function with a new value. And you are not
 * allowed to declare a variable, function, function parameter, or catch
 * block parameter with the name “eval”.
 */