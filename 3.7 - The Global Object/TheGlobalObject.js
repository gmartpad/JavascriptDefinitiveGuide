/*
 * When the JavaScript interpreter starts (or
 * whenever a web browser loads a new page), it creates a new global
 * object and gives it an initial set of properties that define:
 * - Global constants like undefined, Infinity, and NaN
 * - Global functions like isNaN(), parseInt(), and eval()
 * - Constructor functions like Date(), RegExp(), String(),
 * Object(), and Array()
 * - Global objects like Math and JSON
 * 
 * In Node, the global object has a property named global whose value
 * is the global object itself, so you can always refer to the global object
 * by the name global in Node programs.
 * 
 * In web browsers, the Window object serves as the global object for all
 * JavaScript code contained in the browser window it represents. This
 * global Window object has a self-referential window property that can
 * be used to refer to the global object. The Window object defines the
 * core global properties, but it also defines quite a few other globals that
 * are specific to web browsers and client-side JavaScript. Web worker
 * threads have a different global object than the Window with
 * which they are associated. Code in a worker can refer to its global
 * object as self.
 * 
 * ES2020 finally defines globalThis as the standard way to refer to
 * the global object in any context. As of early 2020, this feature has been
 * implemented by all modern browsers and by Node.
 * 
 */