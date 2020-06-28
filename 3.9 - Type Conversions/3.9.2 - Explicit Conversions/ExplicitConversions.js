/*
 * Although JavaScript performs many type conversions automatically,
 * you may sometimes need to perform an explicit conversion, or you
 * may prefer to make the conversions explicit to keep your code clearer.
 * The simplest way to perform an explicit type conversion is to use the
 * Boolean(), Number(), and String() functions:
 */

Number("3") // => 3
String(false) // => "false": Or use false.toString()
Boolean([]) // => true

/*
 * Any value other than null or undefined has a toString()
 * method, and the result of this method is usually the same as that
 * returned by the String() function.
 * 
 * As an aside, note that the Boolean(), Number(), and String()
 * functions can also be invoked with - new — as constructor. If you use
 * them this way, you’ll get a “wrapper” object that behaves just like a
 * primitive boolean, number, or string value. These wrapper objects are a
 * historical leftover from the earliest days of JavaScript, and there is
 * never really any good reason to use them.
 * 
 * Certain JavaScript operators perform implicit type conversions and are
 * sometimes used explicitly for the purpose of type conversion. If one
 * operand of the + operator is a string, it converts the other one to a
 * string. The unary + operator converts its operand to a number. And the
 * unary ! operator converts its operand to a boolean and negates it.
 * These facts lead to the following type conversion idioms that you may
 * see in some code:
 */

x + "" // => String(x)
+x // => Number(x)
x-0 // => Number(x)
!!x // => Boolean(x): Note double !

/*
 * Formatting and parsing numbers are common tasks in computer
 * programs, and JavaScript has specialized functions and methods that
 * provide more precise control over number-to-string and string-tonumber conversions.
 * 
 * The toString() method defined by the Number class accepts an
 * optional argument that specifies a radix, or base, for the conversion. If
 * you do not specify the argument, the conversion is done in base 10.
 * However, you can also convert numbers in other bases (between 2 and
 * 36). 
 * 
 * For example:
 */

let n = 17;
let binary = "0b" + n.toString(2); // binary == "0b10001"
let octal = "0o" + n.toString(8); // octal == "0o21"
let hex = "0x" + n.toString(16); // hex == "0x11"


/*
 * When working with financial or scientific data, you may want to
 * convert numbers to strings in ways that give you control over the
 * number of decimal places or the number of significant digits in the
 * output, or you may want to control whether exponential notation is
 * used. 
 * 
 * The Number class defines three methods for these kinds of
 * number-to-string conversions. toFixed() converts a number to a
 * string with a specified number of digits after the decimal point. It never
 * uses exponential notation. toExponential() converts a number to
 * a string using exponential notation, with one digit before the decimal
 * point and a specified number of digits after the decimal point (which
 * means that the number of significant digits is one larger than the value
 * you specify). toPrecision() converts a number to a string with the
 * number of significant digits you specify. It uses exponential notation if
 * the number of significant digits is not large enough to display the entire
 * integer portion of the number. 
 * 
 * Note that all three methods round the
 * trailing digits or pad with zeros as appropriate. Consider the following
 * examples:
 */

let n = 123456.789;
n.toFixed(0) // => "123457"
n.toFixed(2) // => "123456.79"
n.toFixed(5) // => "123456.78900"
n.toExponential(1) // => "1.2e+5"
n.toExponential(3) // => "1.235e+5"
n.toPrecision(4) // => "1.235e+5"
n.toPrecision(7) // => "123456.8"
n.toPrecision(10) // => "123456.7890"

/*
 * If you pass a string to the Number() conversion function, it attempts
 * to parse that string as an integer or floating-point literal. That function
 * only works for base-10 integers and does not allow trailing characters
 * that are not part of the literal. The parseInt() and
 * parseFloat() functions (these are global functions, not methods of
 * any class) are more flexible. parseInt() parses only integers, while
 * parseFloat() parses both integers and floating-point numbers. If a
 * string begins with “0x” or “0X”, parseInt() interprets it as a
 * hexadecimal number. Both parseInt() and parseFloat() skip
 * leading whitespace, parse as many numeric characters as they can, and
 * ignore anything that follows. If the first nonspace character is not part
 * of a valid numeric literal, they return NaN:
 */

parseInt("3 blind mice") // => 3
parseFloat(" 3.14 meters") // => 3.14
parseInt("-12.34") // => -12
parseInt("0xFF") // => 255
parseInt("0xff") // => 255
parseInt("-0XFF") // => -255
parseFloat(".1") // => 0.1
parseInt("0.1") // => 0
parseInt(".1") // => NaN: integers can't start with "."
parseFloat("$72.47") // => NaN: numbers can't start with "$"

/*
 * parseInt() accepts an optional second argument specifying the
 * radix (base) of the number to be parsed. Legal values are between 2
 * and 36. 
 * 
 * For example:
 */

parseInt("11", 2) // => 3: (1*2 + 1)
parseInt("ff", 16) // => 255: (15*16 + 15)
parseInt("zz", 36) // => 1295: (35*36 + 35)
parseInt("077", 8) // => 63: (7*8 + 7)
parseInt("077", 10) // => 77: (7*10 + 7)