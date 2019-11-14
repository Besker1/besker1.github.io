/* string manipulation
working with string values is one of the most popular. Strings are objects within the JavaScript language. They are not stored as character arrays, so built-in functions must be used to manipulate their values. The functions provide various ways to access the contents of a string variable. Let's take a closer look at these functions.

Everything included
Manipulating string values is a common developer chore. 
This ranges from extracting portions of a string to determining if a string 
contains a specific character. The following JavaScript functions provide 
developers with everything they need:

concat() - Combines the text of two or more strings and returns a new string.

example:*/
         
         let string = "Aliana";
         let newString = "Cherie";
         let strings = string.concat(" ", newString);
         console.log(strings); // "Aliana Cherie"
         

/*indexOf() – Returns the starting index of a substring within another string. 
A –1 is returned if no match is found.

example:*/ console.log("How are you?".indexOf("are")); // 4

/*charAt() – Returns the character at the specified location.

example: */ console.log("How are you?".charAt(5)); // 'r'

/*lastIndexOf() - Returns the index within the string of the last occurrence 
of the specified value, or -1 if not found.

example:*/ console.log("How are you?".lastIndexOf("o")); // 10
 
/*slice() - Extracts a section of a string and returns a new string.

example:*/ console.log("How are you?".slice(8, 11)); // 'you'

/*split() - Splits a string into an array of strings by separating the string into substrings.

example:*/ let originalString = "How are you?";

// Split string by whitespace character
let splitString = originalString.split(" ");

console.log(splitString); // ["How", "are", "you"]

/*length() – The length of the string is returned as the count of the number 
of characters it contains.

example:*/ console.log("How are you?".length); // 3

/*toLowerCase() – Converts the entire string to lower case.

example:*/ console.log("How are you?".toLowerCase());// "how are you?"

/*toUpperCase() – Converts the entire string to upper case.

example: */console.log("how are you?".toUpperCase()); // "HOW ARE YOU?"

// using operators


let pop = "popsicles";

let newPop = "perfection";


let popo = pop + newPop;

console.log(popo); // "popdiclesperfection"

let newPopo = popo +=  " " + pop;

console.log(newPopo); // popsiclesperfection popsicles



