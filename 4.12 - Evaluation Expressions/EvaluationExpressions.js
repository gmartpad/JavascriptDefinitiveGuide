/*
 * Like many interpreted languages, JavaScript has the ability to interpret
 * strings of JavaScript source code, evaluating them to produce a value.
 * JavaScript does this with the global function eval():
 */

eval("3+2") // => 5

/*
 * Dynamic evaluation of strings of source code is a powerful language
 * feature that is almost never necessary in practice. If you find yourself
 * using eval(), you should think carefully about whether you really
 * need to use it. In particular, eval() can be a security hole, and you
 * should never pass any string derived from user input to eval(). With
 * a language as complicated as JavaScript, there is no way to sanitize
 * user input to make it safe to use with eval(). Because of these
 * security issues, some web servers use the HTTP “Content-SecurityPolicy” header to disable eval() for an entire website.
 * 
 * The subsections that follow explain the basic use of eval() and
 * explain two restricted versions of it that have less impact on the
 * optimizer.
 */

/*
 * IS EVAL() A FUNCTION OR AN OPERATOR?
 *
 * eval() is a function, but it is included in this chapter on expressions because it really should have
 * been an operator. The earliest versions of the language defined an eval() function, and ever since
 * then, language designers and interpreter writers have been placing restrictions on it that make it more
 * and more operator-like. Modern JavaScript interpreters perform a lot of code analysis and
 * optimization. Generally speaking, if a function calls eval(), the interpreter cannot optimize that
 * function. The problem with defining eval() as a function is that it can be given other names:
 */

let f = eval;
let g = f;

/*
 * If this is allowed, then the interpreter can’t know for sure which functions call eval(), so it cannot
 * optimize aggressively. This issue could have been avoided if eval() was an operator (and a
 * reserved word). We’ll learn about restrictions placed on eval() to make it
 * more operator-like.
 */