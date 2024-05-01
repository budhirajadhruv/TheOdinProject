//https://javascript.info/types#bigint-type

//In JavaScript, null is not a “reference to a non-existing object” 
//or a “null pointer” like in some other languages.

/*
The object type is special.
All other types are called “primitive” because their values can contain only a single thing 
(be it a string or a number or whatever). 
In contrast, objects are used to store collections of data and more complex entities.
*/

//8 data types in JS:

// let n = 5 //number
//   n = "king" //string
//   n = 5n //Bigint
//   n = true //boolean
//   n = Symbol(5) //symbol
//   n = undefined //undefined
//   n = null  //null
//   typeof Math //object
//   typeof alert //function
//   typeof null //object //actually, it's JS' fault
//   typeof Object()

  /*Template literals (Template strings) 
Template literals are literals delimited with backtick (`) characters, allowing for multi-line 
strings, string interpolation with embedded expressions, and special constructs
 called tagged templates. 
  */
 const bigmouth = 'I\'ve got no right to take my place…';
 console.log(bigmouth);