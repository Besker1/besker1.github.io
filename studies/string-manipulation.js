/* string manipulation
working with string values is one of the most popular. Strings are objects within the JavaScript language. They are not stored as character arrays, so built-in functions must be used to manipulate their values. The functions provide various ways to access the contents of a string variable. Let's take a closer look at these functions.

Everything included
Manipulating string values is a common developer chore. 
This ranges from extracting portions of a string to determining if a string 
contains a specific character. The following JavaScript functions provide 
developers with everything they need:

concat() - Combines the text of two or more strings and returns a new string.

example:*/ let arr = ['a','b','b'];
         let att = ['d','c','f'];
         
         console.log(arr.concat(att));

/*indexOf() – Returns the starting index of a substring within another string. 
A –1 is returned if no match is found.

example:*/ console.log("How are you?".indexOf("are"));

/*charAt() – Returns the character at the specified location.

example: */ console.log("How are you?".charAt(5));

/*lastIndexOf() - Returns the index within the string of the last occurrence 
of the specified value, or -1 if not found.

example:*/ console.log("How are you?".lastIndexOf("o"));
 
/*slice() - Extracts a section of a string and returns a new string.

example:*/ console.log("How are you?".slice(8, 11));

/*split() - Splits a string into an array of strings by separating the string into substrings.

example:*/ let originalString = "How are you?";

// Split string by whitespace character
let splitString = originalString.split(" ");

console.log(splitString);

/*length() – The length of the string is returned as the count of the number 
of characters it contains.

example:*/ console.log("How are you?".length);

/*toLowerCase() – Converts the entire string to lower case.

example:*/ console.log("How are you?".toLowerCase());

/*toUpperCase() – Converts the entire string to upper case.

example: */console.log("How are you?".toUpperCase());

