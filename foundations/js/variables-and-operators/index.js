// "use strict";

let $ = 1;
let num = 5 // still works if we do not put use strict in our js
console.log($ + 1)


// function sayHi() {
//     phrase = "Hello"; // (*)
  
//     if (false) {
//       var phrase;
//     }
  
//     alert(phrase);
//   }
//   sayHi();
  //People also call such behavior “hoisting” (raising), because all var 
  // are “hoisted” (raised) to the top of the function.

const lotsOfDecimal = 1.766584958675746364;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = "74";
myNumber += 3;
console.log(myNumber) //743, not 77

myNumber = Number(myNumber) + 3
console.log(myNumber) // 746

// No effect on numbers UNARY +
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0