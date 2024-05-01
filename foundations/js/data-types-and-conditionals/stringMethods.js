const string = "This is my string";
console.log(string.length)
console.log(string[2])
console.log(string[string.length - 1])
console.log(string.includes("perry")) //if it includes this substring or not
console.log(string.startsWith("perry"))
console.log(string.endsWith("This"))
console.log(string.indexOf("This"))
console.log(string.indexOf("King"))
// const firstOccurrence = tagline.indexOf("developers");
// const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

//SLICE - [x) or [x,y)
console.log(string.slice(0,4)) //[0,4)
console.log(string.slice(1)) //from 1
console.log(string.toLowerCase());

//Replace
console.log(string.replace("This", "Nah"))

alert( null == undefined ); // true

alert( null === undefined ); // false

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

// /condition ? run this code : run this code instead

//regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#examples