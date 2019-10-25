/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function name search
// input: animals, name
// output: animals objects if name exist/ null if no names 
// make a for loop 
// make an if statement
// return animals/ null

function search(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name ){
            return animals[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function name replace
// input: animals, name, replacement
// output: replacment object
// make a loop 
// make an if statement
// return replacement object
function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name ){
            return animals[i] = replacement;
        }
    }
    return null;
    
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name ){
            return animals.shift();
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function named add
// input: animals, animal
// output:
// create a function name create 
// make a for loop
// make an if statement 
// add new object to animals

function add(animals, animal){
    
    for(var i = 0; i < animals.length; i++)
    {
        if(animals[i].name !== animal.name && animal.name.length > 0 && 
        animal.species.length > 0) {
            return animals.push(animal);
            }
         return null;    
    }
   
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
