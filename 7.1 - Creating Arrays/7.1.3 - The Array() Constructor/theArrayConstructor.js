/*
 * Another way to create an array is with the Array() constructor. You
 * can invoke this constructor in three distinct ways:
 * 
 *      - Call it with no arguments:
 */

        let a = new Array();

/*
 *      This method creates an empty array with no elements and is
 *      equivalent to the array literal [].
 * 
 *      - Call it with a single numeric argument, which specifies a
 *      length:
 */

        let a = new Array(10);

/*
 *      This technique creates an array with the specified length. This
 *      form of the Array() constructor can be used to preallocate
 *      an array when you know in advance how many elements will
 *      be required. Note that no values are stored in the array, and the
 *      array index properties “0”, “1”, and so on are not even defined
 *      for the array
 * 
 *      - Explicitly specify two or more array elements or a single nonnumeric element for the array:
 */

        let a = new Array(5, 4, 3, 2, 1,
        "testing, testing");

/*
 *      In this form, the constructor arguments become the elements
 *      of the new array. Using an array literal is almost always
 *      simpler than this usage of the Array() constructor.
 */
    