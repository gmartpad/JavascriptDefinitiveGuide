/*
 * As explained in the preceding section, the following two JavaScript
 * expressions have the same value:
 */

object.property
object["property"]

/*
 * The first syntax, using the dot and an identifier, is like the syntax used
 * to access a static field of a struct or object in C or Java. The second
 * syntax, using square brackets and a string, looks like array access, but
 * to an array indexed by strings rather than by numbers. This kind of
 * array is known as an associative array (or hash or map or dictionary).
 * JavaScript objects are associative arrays, and this section explains why
 * that is important.
 * 
 * In C, C++, Java, and similar strongly typed languages, an object can
 * have only a fixed number of properties, and the names of these
 * properties must be defined in advance. Since JavaScript is a loosely
 * typed language, this rule does not apply: a program can create any
 * number of properties in any object. When you use the . operator to
 * access a property of an object, however, the name of the property is
 * expressed as an identifier. Identifiers must be typed literally into your
 * JavaScript program; they are not a datatype, so they cannot be
 * manipulated by the program.
 * 
 * On the other hand, when you access a property of an object with the []
 * array notation, the name of the property is expressed as a string. Strings
 * are JavaScript datatypes, so they can be manipulated and created while
 * a program is running. So, for example, you can write the following
 * code in JavaScript:
 */

let addr = "";

for(let i = 0; i < 4; i++) {
    addr += customer[`address${i}`] + "\n";
}

/*
 * This code reads and concatenates the address0, address1,
 * address2, and address3 properties of the customer object.
 * 
 * This brief example demonstrates the flexibility of using array notation
 * to access properties of an object with string expressions. This code
 * could be rewritten using the dot notation, but there are cases in which
 * only the array notation will do. Suppose, for example, that you are
 * writing a program that uses network resources to compute the current
 * value of the user’s stock market investments. The program allows the
 * user to type in the name of each stock they own as well as the number
 * of shares of each stock. You might use an object named portfolio
 * to hold this information. The object has one property for each stock.
 * The name of the property is the name of the stock, and the property
 * value is the number of shares of that stock. So, for example, if a user
 * holds 50 shares of stock in IBM, the portfolio.ibm property has
 * the value 50.
 * 
 * Part of this program might be a function for adding a new stock to the
 * portfolio:
 */

function addstock(portfolio, stockname, shares) {
    portfolio[stockname] = shares;
}
    
/*
 * Since the user enters stock names at runtime, there is no way that you
 * can know the property names ahead of time. Since you can’t know the
 * property names when you write the program, there is no way you can
 * use the . operator to access the properties of the portfolio object.
 * You can use the [] operator, however, because it uses a string value
 * (which is dynamic and can change at runtime) rather than an identifier
 * (which is static and must be hardcoded in the program) to name the
 * property.
 * 
 * The power of this JavaScript statement becomes clear
 * when you consider its use with associative arrays. Here is how you
 * would use it when computing the total value of a portfolio:
 */

function computeValue(portfolio) {
    let total = 0.0;
    for(let stock in portfolio) { // For each stock in the portfolio:
        let shares = portfolio[stock]; // get the number of shares
        let price = getQuote(stock); // look up share price
        total += shares * price; // add stock value to total value
    }
    return total; // Return total value.
}

/*
 * JavaScript objects are commonly used as associative arrays as shown
 * here, and it is important to understand how this works.
 */ 