/*
 * JavaScript is the programming language of the web. The overwhelming
 * majority of websites use JavaScript, and all modern web browsers—on
 * desktops, tablets, and phones—include JavaScript interpreters, making
 * JavaScript the most-deployed programming language in history. Over
 * the last decade, Node.js has enabled JavaScript programming outside
 * of web browsers, and the dramatic success of Node means that
 * JavaScript is now also the most-used programming language among
 * software developers. Whether you’re starting from scratch or are
 * already using JavaScript professionally, this book will help you master
 * the language.
 * 
 * If you are already familiar with other programming languages, it may
 * help you to know that JavaScript is a high-level, dynamic, interpreted
 * programming language that is well-suited to object-oriented and
 * functional programming styles. JavaScript’s variables are untyped. Its
 * syntax is loosely based on Java, but the languages are otherwise
 * unrelated. JavaScript derives its first-class functions from Scheme and
 * its prototype-based inheritance from the little-known language Self.
 * 
 * But you do not need to know any of those languages, or be familiar
 * with those terms, to use this book and learn JavaScript.
 * The name “JavaScript” is quite misleading. Except for a superficial
 * syntactic resemblance, JavaScript is completely different from the Java
 * programming language. And JavaScript has long since outgrown its
 * scripting-language roots to become a robust and efficient general purpose 
 * language suitable for serious software engineering and projects with huge 
 * codebases.
 */

/*
 * JAVASCRIPT: NAMES, VERSIONS, AND MODES
 *
 * JavaScript was created at Netscape in the early days of the web, and technically, 
 * “JavaScript” is a trademark licensed from Sun Microsystems (now Oracle) used to 
 * describe Netscape’s (now Mozilla’s) implementation of the language. Netscape submitted the 
 * language for standardization to ECMA—the European Computer Manufacturer’s Association—and 
 * because of trademark issues, the standardized version of the language was stuck with the 
 * awkward name “ECMAScript.” In practice, everyone just calls the language JavaScript. 
 * This book uses the name “ECMAScript” and the abbreviation “ES” to refer to the language 
 * standard and to versions of that standard.
 * 
 * For most of the 2010s, version 5 of the ECMAScript standard has been supported by all 
 * web browsers. This book treats ES5 as the compatibility baseline and no longer discusses 
 * earlier versions of the language. ES6 was released in 2015 and added major new 
 * features—including class and module syntax—that changed JavaScript from a scripting 
 * language into a serious, general-purpose language suitable for large-scale software 
 * engineering. Since ES6, the ECMAScript specification has moved to a yearly release 
 * cadence, and versions of the language—ES2016, ES2017, ES2018, ES2019, and ES2020—are 
 * now identified by year of release.
 * 
 * As JavaScript evolved, the language designers attempted to correct flaws in the early 
 * (pre-ES5) versions. In order to maintain backward compatibility, it is not possible to 
 * remove legacy features, no matter how flawed. But in ES5 and later, programs can opt in 
 * to JavaScript’s strict mode in which a number of early language mistakes have been 
 * corrected. In ES6 and later, the use of new language features often implicitly invokes 
 * strict mode. For example, if you use the ES6 class keyword or create an ES6 module, then
 * all the code within the class or module is automatically strict, and the old, flawed 
 * features are not available in those contexts. This book will cover the legacy features 
 * of JavaScript but is careful to point out that they are not available in strict mode.
 */

/*
 * To be useful, every language must have a platform, or standard library,
 * for performing things like basic input and output. The core JavaScript
 * language defines a minimal API for working with numbers, text,
 * arrays, sets, maps, and so on, but does not include any input or output
 * functionality. Input and output (as well as more sophisticated features,
 * such as networking, storage, and graphics) are the responsibility of the
 * “host environment” within which JavaScript is embedded.
 * 
 * The original host environment for JavaScript was a web browser, and
 * this is still the most common execution environment for JavaScript
 * code. The web browser environment allows JavaScript code to obtain
 * input from the user’s mouse and keyboard and by making HTTP
 * requests. And it allows JavaScript code to display output to the user
 * with HTML and CSS.
 * 
 * Since 2010, another host environment has been available for JavaScript
 * code. Instead of constraining JavaScript to work with the APIs
 * provided by a web browser, Node gives JavaScript access to the entire
 * operating system, allowing JavaScript programs to read and write files,
 * send and receive data over the network, and make and serve HTTP
 * requests. Node is a popular choice for implementing web servers and
 * also a convenient tool for writing simple utility scripts as an alternative
 * to shell scripts.
 * 
 * Most of this book is focused on the JavaScript language itself.
 * Chapter 11 documents the JavaScript standard library, Chapter 15
 * introduces the web browser host environment, and Chapter 16
 * introduces the Node host environment.
 * 
 * This book covers low-level fundamentals first, and then builds on those
 * to more advanced and higher-level abstractions. The chapters are
 * intended to be read more or less in order. But learning a new
 * programming language is never a linear process, and describing a
 * language is not linear either: each language feature is related to other
 * features, and this book is full of cross-references—sometimes
 * backward and sometimes forward—to related material. This
 * introductory chapter makes a quick first pass through the language,
 * introducing key features that will make it easier to understand the indepth treatment 
 * in the chapters that follow. If you are already a practicing JavaScript programmer, 
 * you can probably skip this chapter. (Although you might enjoy reading Example 1-1 
 * at the end of the chapter before you move on.)
 */