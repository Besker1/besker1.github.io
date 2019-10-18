/*control flow
 with the use of conditional statements allow us keep a control over our application/ our work.
these conditonal statements can be used inside functions and other variables.
there are different conditional statements that can be used: Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed.

for example:
*/
// if-else statement
let age = 18;

if(age < 21){
    console.log('your life sucks')
} else{
    console.log('Enjoy  you life')
}

// if,else if, else

if(age === 18){
    console.log(' still young buddy')
}else if(age > 18 ){
    console.log("how's adulthood?")
}else{
    console.log('need that id bruv')
}

/* There is also the switch statements which is basically a better way to use 'if else if else' statement but cleaner and somewhat less words.
the switch statement start with the word switch followed a case and a break whcih stop the code 
if the conditionsa are true and default if nothing else works just like the else statement

for example:
*/

switch(age){
    case 18:
    console.log('you suck');
    break;
    case age > 18:
    console.log(" do you still live with your parents")
    break;
    case age < 18:
    console.log(" learn to code now!!")
}
