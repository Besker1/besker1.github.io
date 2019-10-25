/////////////////////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // make an empty array to put the values of of objects in
    var newArr = [];
    // make a for in loop to access object
for(var keys in object){
    // push all the keys of the object inside my empty array
    newArr.push(object[keys]);
}
console.log(newArr);
return newArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//make an empty array 
var emptyArr = [];
// make a for in loop to run through object
for( var keys in object){
    // push everything in and make a string with the key variables
    emptyArr.push([keys]);
    emptyArr.toString();
    // make a new variable
    var newArr = emptyArr.join(" ");
    
}
return newArr;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //make an empty array 
var emptyarr = [];
// make a for in loop to run through object
for( var keys in object){
    // if statement to check if the type of each value.
    if(typeof object[keys] === typeof "string" ){
         // push everything in and make a string with the key variables
    emptyarr.push(object[keys]);
    emptyarr.toString();
    // make a new variable
    var newarr = emptyarr.join(" ");
    }
    
   
    
}
return newarr;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // check to see if input collection is an object
      // return string object
     // else 
       // return string array
       //      // make an if statement and return object or array if true
     if (Array.isArray(collection)){
         return 'array';
     }else if(typeof collection  === 'object'){
         return 'object';
     }
 

}


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // use the toUpperCase method to capitalize the returned strings
    return string[0].toUpperCase() + string.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    return string.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // return welcome name property{
    // use the capitalizeWord function to capitalize object.name
       
            return "Welcome " + capitalizeWord(object.name) + "!";

            
        }
    
    
   


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
// add name and species as properties to object using the dot method

var name = object.name ;
var species = object.species;
name = capitalizeWord(name);
species = capitalizeWord(species);
var names = name + ' is a ' + species;
return names;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // should take an object
    // if inside object there are noises
    // return as string separated by space
    // if not return there are no noise
// make a if statement
if(Array.isArray(object.noises) && object.noises.length > 0){
    return object.noises.join(' ');
}else{
   return "there are no noises";
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // Should take a string of words
//return true if that word is included in string of words otherwise false
if(string.includes(word)){
   return true;
} else {
   return false;
}
}



//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//put the name to the object's friends array
// then return the obejct
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//takes a name and object
//make an if statemnt
//if the object has a friends array
//loop through array
// if name is equal to the friends in the object return true;
//otherwise return fslse;
if( object.hasOwnProperty("friends")) {
     for(let i = 0; i < object.friends.length; i++) {
         if(name === object.friends[i]) {
             return true;
         }
     }
 }return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
console.log(name);
   //make an empty array
   // loop through array
   // check if each person name isnt a friend name thats in each persons friends array
   // return the list of the non friends
  let nofriends = [];
   for(let i = 0; i < array.length; i++) {
       // console.log(array[i]);
       if(array[i].name !== name && array[i].friends.includes(name) === false) {
           nofriends.push(array[i].name);
       }
   }
       return nofriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//create if statements
   //check if the porperty of key  is object
   //then reassign key on object to value
   //
if(object.hasOwnProperty(key)) {
     object[key] = value;
 } else {
     object[key] = value;
 }
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// loop through abject
   //loop thorugh array
   //if properties are listed in the array remove them
   //else return object;
   for(let key in object) {
       for(let i = 0; i < array.length; i++) {
           if(key === array[i]) {
               delete object[key];
           }
       }
   } return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//create an empty array named result that will be return at the end
//
//loop through input array;
//use if statement to check if current element does not exist in in result array.
 //push current element in results array.
// return result array;
var result = [];
for(var i = 0; i < array.length; i++){
   var currentElement = array[i];
   if(!result.includes(currentElement)){
   result.push(currentElement);
       }
} return result;

}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}