/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;

myVariable = "someString";

// the var variable is function blocked which means once declare inside of a function scope
// it can't be used outside of that scope
// the var variable get hoisted. means the dclartion get hoisted to the top after the hoited function declaration
// since function get hoisted first.

// there is also the let and const variables, similar to the var variable they declare and initialise datatypes
// let is not hoisted as the varibale variable, it's code blocked and reassignable. 

// but const on the other hand can't be reassigned, it is code blocekd just like the let variable and can't be hoisted

// examples:

let aliana = " female";

//reassign Aliana
aliana = " Cute";

console.log(aliana); // cute

// code blocked example

let liliP = function(str){
    let nana = "life";
    return str;
}
console.log(nana); // error

for(let i = 0; i < 0; i++){
    let john = "male";
}
console.log(john);//  error
// const examples
const nana = "female";

nana = "male";

console.log(nana);// error

