/*
 * Another category of JavaScript statements are jump statements. As the
 * name implies, these cause the JavaScript interpreter to jump to a new
 * location in the source code. The break statement makes the
 * interpreter jump to the end of a loop or other statement. continue
 * makes the interpreter skip the rest of the body of a loop and jump back
 * to the top of a loop to begin a new iteration. JavaScript allows
 * statements to be named, or labeled, and break and continue can
 * identify the target loop or other statement label.
 *
 * The return statement makes the interpreter jump from a function
 * invocation back to the code that invoked it and also supplies the value
 * for the invocation. The throw statement is a kind of interim return
 * from a generator function. The throw statement raises, or throws, an
 * exception and is designed to work with the try/catch/finally
 * statement, which establishes a block of exception-handling code. This
 * is a complicated kind of jump statement: when an exception is thrown,
 * the interpreter jumps to the nearest enclosing exception handler, which 
 * may be in the same function or up the call stack in an invoking
 * function.
 * 
 * Details about each of these jump statements are in the sections that
 * follow.
 */