// JavaScript operators are symbols that are used to perform operations on operands. For example:

var sum = 10+20; 
 
/*Here, + is the arithmetic operator and = is the assignment operator.

There are following types of operators in JavaScript.


Arithmetic Operators
Comparison (Relational) Operators
Bitwise Operators
Logical Operators
Assignment Operators
Special Operators
*/

/*Arithmetic operators are used to perform 
arithmetic operations on the operands. The following operators are known as JavaScript arithmetic operators.
*/
//+	Addition	
console.log(10+20)
//-	Subtraction
	console.log(20-10)
//*	Multiplication
	console.log(10*20)
///	Division	
console.log(20/10)
//%	Modulus (Remainder)	
console.log(20 % 10)
//++	Increment
	var a = 10; a++;// Now a = 11
//--	Decrement	
var a=10; a--; 
//Now a = 9


//comparison operator compares the two operands.

//==	Is equal to	
10==20 // = false
//===	Identical (equal and of same type)	
10===20 //= false
//!=	Not equal to	
10!=20 //= true
//!==	Not Identical
	20!==20 //= false
//>	Greater than	
20>10 //= true
//>=	Greater than or equal to
	20>=10 //= true
//<	Less than	
20<10 //= false
//<=	Less than or equal to	
20<=10 //= false

// The following operators are known as JavaScript assignment operators.

//=	Assign	
10+10 //= 20
//+=	Add and assign	
var a=10; a+=20; //Now a = 30
//-=	Subtract and assign
	var a=20; a-=10; //Now a = 10
// *=	Multiply and assign	
var a=10; a*=20; //Now a = 200
// /=	Divide and assign	
var a=10; a/=2; 
//Now a = 5
// %=	Modulus and assign
	var a=10; a%=2;
	//Now a = 0
	
/*Bitwise operators
A bitwise operator treats their operands as a 
set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.
For example, the decimal number nine has a binary representation of 1001.
Bitwise operators perform their operations on such binary representations, 
but they return standard JavaScript numerical values.
*/

/*The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )


Logical Operators :
There are various Logical Operators in JavaScript –

&& (Logical AND) :
It checks whether two operands are non-zero 
(0, false, undefined, null or “” are considered as zero), if yes then return 1 otherwise 0.
Example :
*/
let y = 5;
let x = 6;

if(x === 5 && y === 6){
	console.log('Hey')
}           else{
	console.log('pi')
}


/*|| (Logical OR) :
It checks whether any one of the two operands is non-zero 
(0, false, undefined, null or “” is considered as zero). Thus || returns true 
if either operand is true and if both are false it returns false.
Example :
*/

if(x === 5 || y === 6){
	console.log('Hey')
}           else{
	console.log('pi')
}
             
/*! (Logical NOT) :
It reverses the boolean result of the operand (or condition).
Example :*/

if(x !== 2 || y !== 4){
	console.log('Hey');
}           else{
	console.log('pi');
}    

// Ternary operators are usually used as a short if and else statement

// for example:

 x === y ? console.log('hey'): console.log("hi");
 
 
 