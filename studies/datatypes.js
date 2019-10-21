/* data types to hold different types of values. There are two types of data types in JavaScript.

Primitive data type
Non-primitive (reference) data type
JavaScript is a dynamic type language,
 means you don't need to specify type of the variable because 
 it is dynamically used by JavaScript engine. You need to use var here to specify the data type. 
 It can hold any type of values such as numbers, strings etc.
 For example:
 */
var a = 40; // a number 
var b = 'Aliana' // a string 

/* There are five types of primitive data types in JavaScript.
 
String	represents sequence of characters e.g. "hello"
Number	represents numeric values e.g. 100
Boolean	represents boolean value either false or true
Undefined	represents undefined value
Null	represents null i.e. no value at all

*/
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

//Booleans can only have two values: true or false.

//Example
var x = 5;
var y = 5;
var z = 6;
console.log(x === y);       // Returns true
console.log(x ===z);       // Returns false



/* The complex datatypes
Object	represents instance through which we can access members
Array	represents group of similar values
*/