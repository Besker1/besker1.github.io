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

function Func(d,c){
  return d + c
}
var newVar = Func(1,2);

//console.log(newVar)


var object = {
  dog:'bark',
  cat: 'meow',
  lion: 'roar'
}
// let's make a new function

function objectTovalues(obj){

  return Object.values(obj)
}

var arr = objectTovalues(object)
//console.log(arr)

/* hoisted 
Function Expressions are not hoisted, and therefore cannot be used before they are defined.
But When using function declarations, the function definition is hoisted, 
thus allowing the function to be used before it is defined.
*/

function name(parameters){
  //statements
}

// scope

// a function have a scope called local scope which is declare inside the function code block
// and can only be used inside that function it is declare in.
// for example:

function newFunc(){
    let dat = " funcky"// only available here!!
}

// a function also have A GLOBAL scope which is available everywhere outside the function
// the golbal scope can also be used and be modified inside the function ass well

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); // John before the function call

showMessage();

console.log( userName ); // Bob, the value was modified by the function

/*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
(the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
*/

function foo(outerarg) { 
  
    function inner(innerarg) { 
        return outerarg + innerarg; 
    } 
    return inner; 
} 
var newFun = foo(5);

console.log(newFun);

