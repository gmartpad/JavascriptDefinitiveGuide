/*
 * "use strict" is a directive introduced in ES5. Directives are not
 * statements (but are close enough that "use strict" is documented
 * here). There are two important differences between the "use
 * strict" directive and regular statements:
 * 
 *      - It does not include any language keywords: the directive is
 *      just an expression statement that consists of a special string
 *      literal (in single or double quotes).
 * 
 *      - It can appear only at the start of a script or at the start of a
 *      function body, before any real statements have appeared.
 *
 * The purpose of a "use strict" directive is to indicate that the code
 * that follows (in the script or function) is strict code. The top-level
 * (nonfunction) code of a script is strict code if the script has a "use
 * strict" directive. A function body is strict code if it is defined
 * within strict code or if it has a "use strict" directive. Code passed
 * to the eval() method is strict code if eval() is called from strict
 * code or if the string of code includes a "use strict" directive. In
 * addition to code explicitly declared to be strict, any code in a class
 * body or in an ES6 module is automatically strict
 * code. This means that if all of your JavaScript code is written as
 * modules, then it is all automatically strict, and you will never need to
 * use an explicit "use strict" directive.
 *
 * Strict code is executed in strict mode. Strict mode is a restricted subset
 * of the language that fixes important language deficiencies and provides
 * stronger error checking and increased security. Because strict mode is
 * not the default, old JavaScript code that still uses the deficient legacy
 * features of the language will continue to run correctly. The differences
 * between strict mode and non-strict mode are the following (the first
 * three are particularly important):
 *
 *      - The with statement is not allowed in strict mode.
 *      
 *      - In strict mode, all variables must be declared: a
 *      ReferenceError is thrown if you assign a value to an identifier
 *      that is not a declared variable, function, function parameter,
 *      catch clause parameter, or property of the global object. (In
 *      non-strict mode, this implicitly declares a global variable by
 *      adding a new property to the global object.)
 *      
 *      - In strict mode, functions invoked as functions (rather than as
 *      methods) have a this value of undefined. (In non-strict
 *      mode, functions invoked as functions are always passed the
 *      global object as their this value.) Also, in strict mode, when
 *      a function is invoked with call() or apply(), the
 *      this value is exactly the value passed as the first argument to
 *      call() or apply(). (In non-strict mode, null and
 *      undefined values are replaced with the global object and
 *      nonobject values are converted to objects.)
 *      
 *      - In strict mode, assignments to nonwritable properties and
 *      attempts to create new properties on non-extensible objects
 *      throw a TypeError. (In non-strict mode, these attempts fail
 *      silently.)
 *      
 *      - In strict mode, code passed to eval() cannot declare
 *      variables or define functions in the caller’s scope as it can in
 *      non-strict mode. Instead, variable and function definitions live
 *      in a new scope created for the eval(). This scope is
 *      discarded when the eval() returns.
 *      
 *      - In strict mode, the Arguments object in a function
 *      holds a static copy of the values passed to the function. In nonstrict mode, the Arguments object has “magical” behavior in
 *      which elements of the array and named function parameters
 *      both refer to the same value.
 *      
 *      - In strict mode, a SyntaxError is thrown if the delete
 *      operator is followed by an unqualified identifier such as a
 *      variable, function, or function parameter. (In nonstrict mode,
 *      such a delete expression does nothing and evaluates to
 *      false.)
 *      
 *      - In strict mode, an attempt to delete a nonconfigurable property
 *      throws a TypeError. (In non-strict mode, the attempt fails and
 *      the delete expression evaluates to false.)
 *      
 *      - In strict mode, it is a syntax error for an object literal to define
 *      two or more properties by the same name. (In non-strict mode,
 *      no error occurs.)
 *      
 *      - In strict mode, it is a syntax error for a function declaration to
 *      have two or more parameters with the same name. (In nonstrict mode, no error occurs.)
 *      
 *      - In strict mode, octal integer literals (beginning with a 0 that is
 *      not followed by an x) are not allowed. (In non-strict mode,
 *      some implementations allow octal literals.)
 *      
 *      - In strict mode, the identifiers eval and arguments are
 *      treated like keywords, and you are not allowed to change their
 *      value. You cannot assign a value to these identifiers, declare
 *      them as variables, use them as function names, use them as
 *      function parameter names, or use them as the identifier of a
 *      catch block.
 *      
 *      In strict mode, the ability to examine the call stack is
 *      restricted. arguments.caller and
 *      arguments.callee both throw a TypeError within a strict
 *      mode function. Strict mode functions also have caller and
 *      arguments properties that throw TypeError when read.
 *      (Some implementations define these nonstandard properties
 *      on non-strict functions.) 
 */