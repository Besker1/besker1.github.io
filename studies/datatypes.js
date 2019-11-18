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

// There are five types of primitive data types in JavaScript.
 
1. //String	represents sequence of characters surrounded by strings e.g. "hello"
var lastName = "Johnson";
2. //Number	represents numeric values e.g. 100
var length = 16;               console.log(typeof length) // number
let dec = 10.5;                console.log(typeof dec)   // number
let neg = -2;                  console.log(typeof neg)  // number
3. //Boolean	represents boolean value either false or true
//Example
var x = 5;
var y = 5;
var z = 6;
console.log(x === y);       // Returns true
console.log(x ===z);       // Returns false

4. //Undefined	represents undefined value
var x; console.log(x); // undefined
5. // Null	represents null i.e. no value at all
 var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object


// primitive datatypes can be copied value
// for example
 let k = 5;
 let j = k;  // j is copied by value whuch means it can j is based on what k is equal to
 // even if k value changed afterward it will not change the current value of j.

/* The complex datatypes
Object	represents instance through which we can access members
Array	represents group of similar values
*/


// arrays 
// used to store multiple values in a single variable
// can hold more than one value at a time.

let opp = [["a","h"], "a", "u"];



// array access 

// arrays can be accessed using the bracket notation and the index  
console.log(opp[0]); // ["a","h"]
// or any array methods like push, pop, shift, unshift
//use push to add some at the end of the array 
opp.push("y"); // [["a","h"], "a", "u", "y"]
//pop to remove the index at the end of the array
opp.pop(); // [["a","h"], "a", "u"]
//shift to remove the first index from the front of the array
opp.shift(); // [ "a", "u"]
//unshift to add at the 0 index
opp.unshift(["a","h"]); // [["a","h"], "a", "u"]



// 
// arrays are copied by reference which means if anything change in array o even after it's being assigned to e
// the value of e would also be chaged.
let egg = opp;

opp.push(a);

console.log(egg);


// objects 
 // objects are containers for named values called properties or methods.
 // objects can store all tyoe of datatypes.
// also copied by reference

let object = { 
 k: "alo",
 i: "kiki"
};

// object access 
//object can be accessed using bracket or dot notation

let acc = object.k ; 
console.log(acc); // 'alo'

let brac = object['i']; 
console.log(brac); 'kiki'
// copying by reference

let newObject = object;

// if i change anything using newObject it will also be changed 
// inside object.
 newObject.k = "Jva";
console.log(object);// { 
//  k: "Jva",
//  i: "kiki"
// };

// functions

/*A function is designed to perform a particular task. basically make your life easier.

 how do you declare a function?
function func(parameters){
  function body 
   where your code block runs
}*/

/* parameters are usually the names that you create in the function definition

 how do you put a function in use?

 you can only use the function when you call it by its name.
 for example:
func(argument)

 the argument is the value that replace the parameters.
*/

function func(d,c){
  return d + c
}
var newVar = func(1,2);

//console.log(newVar)


var object1 = {
  dog:'bark',
  cat: 'meow',
  lion: 'roar'
};
 // using function example.
function objectTovalues(obj){

  return Object.values(obj);
}

var arr = objectTovalues(object);
//console.log(arr) // ["bark", "meow", "roar"]


// infinity/ - infinity

/*
Infinity is a property of the global object (therefore a global variable) that represents mathematical infinity. 
It is a reference to Number.POSITIVE_INFINITY
It is greater than any other value, and you can get it by dividing by 0 or by evaluating the expression 
of a number that's so big that overflows.
This actually means there is no division by 0 errors in JavaScript, there is Infinity!

There is also -Infinity which is mathematical negative infinity, and it's lower than any other value.

To get -Infinity you negate Infinity, or get a reference to it in Number.NEGATIVE_INFINITY.

- (Infinity); // -Infinity
example:
*/
let maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");// "Let's call it Infinity!"
}

console.log(1 / maxNumber);// 0

