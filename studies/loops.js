/* Loops
 are used to iterate the piece of code using for, while,
 do while or for-in loops. It makes the code compact. It is mostly used in array.

There are four types of loops in JavaScript.

for loop
while loop
do-while loop
for-in loop
*/

// for Loop example
// for loops itirate over arrays 
// take starting condition let i = 0; a stopping condition i< array length/numb
// an increment or decrement
for (let i=0; i<=5; i++)  {
    console.log(i); // 1,2,3,4,5
}

// can also loop backward over an array 
let array = ["a", "n", "d"];
for(let i = array.length-1; i >= 0; i-- ){
   console.log(array[i]); // "d", "n", "a"
    
}
// while loop example
// take starting condition let i = 11 || whatever the condition is ;
//a stopping condition i< array length/numb
// an increment ++ or decrement --
let i = 11;  
while (i<=15)  
{  
console.log(i);  // 11,12,13,14,15
i++;  
}  


// do while loop example
var k =21;  
do{  
console.log(i);  //21,24,25
i++;  
}while (i<=25);  


// the for key in loop
// 'the fo in loops" itirate over objects 
// example:
let objects = {
    i : "lady",
    k : " caroline"
};

for(let key in objects){
    console.log(objects[key]);// 'lady', 'caroline'
}