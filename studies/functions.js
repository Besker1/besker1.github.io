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