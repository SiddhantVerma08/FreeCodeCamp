// Comment Your JavaScript Code

// This is comment

/* This 
is 
multi 
line
comment
*/

// Declare JavaScript Variables
var myName;

// Storing Values with the Assignment Operator
// Setup
var a;

// Only change code below this line

var myVar;
myVar = 5;

a = 7;

// Assigning the Value of One Variable to Another
// Setup
var a;
a = 7;
var b;

// Only change code below this line

b = 7;
a = b;

// Initializing Variables with the Assignment Operator
var a = 9;

// Declare String Variablesvar 
myFirstName = "Siddhant";
var myLastName = "Verma";

// Understanding Uninitialized Variables
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line
a = 5;
b = 10;
c = "I am a"

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Add Two Numbers with JavaScript
const sum = 10 + 10;;

// Subtract One Number from Another with JavaScript
const difference = 45 - 33;

// Multiply Two Numbers with JavaScript
const product = 8 * 10;

// Divide One Number by Another with JavaScript
const quotient = 66 / 33;

// Increment a Number with JavaScript
let myVar = 87;

// Only change code below this line
myVar = ++myVar;

// Decrement a Number with JavaScript
let myVar = 11;

// Only change code below this line
myVar = --myVar;

// Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;

// Only change code below this line

let myDecimal = 5.7;

// Multiply Two Decimals with JavaScript
const products = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript
const quotients = 4.4 / 2.0; // Change this line

// Finding a Remainder in JavaScript
const remainder = 11 % 3;

// Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// Escaping Literal Quotes in Strings
// const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// Quoting Strings with Single Quotes
// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// Concatenating Strings with Plus Operator
// const myStr = "This is the start. " + "This is the end."; // Change this line

// Concatenating Strings with the Plus Equals Operator
let myStrs;

myStrs = "This is the first sentence. "
myStrs += "This is the second sentence."

// Constructing Strings with Variables
// Only change code below this line
const myName = "Siddhant";
const myStr1 = "My name is " + myName + " and I am well!";

// Appending Variables to Strings
// Change code below this line
const someAdjective = "My Fortune is ";
let myStr = "Learning to code is ";

myStr += someAdjective;

// Find the Length of a String
// Setup
// let lastNameLength = 0;
// const lastName = "Lovelace";

// Only change code below this line
// lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
// let myStr = "Jello World";

// Understand String Immutability
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Use Bracket Notation to Find the Nth Character in a String
// Setup
// const lastName = "Lovelace";

// Only change code below this line
// const thirdLetterOfLastName = lastName[2]; // Change this line

// Use Bracket Notation to Find the Last Character in a String
// Setup
// const lastName = "Lovelace";

// Only change code below this line
// const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Use Bracket Notation to Find the Nth-to-Last Character in a Strin
// Setup
// const lastName = "Lovelace";

// Only change code below this line
// const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran"

;
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " "+ myNoun + " "+ myVerb + " "+ myAdverb +"."; // Change this line
// Only change code above this line

// Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
// const myArray = ["Siddhant", 23];

// Nest one Array within Another Array
// Only change code below this line
// const myArray = [["Siddhant", 23],["Ankit", 25]];

// Access Array Data with Indexes
// const myArray = [50, 60, 70];

// const myData = myArray[0];

// Modify Array Data With Indexes
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

// Manipulate Arrays With push Method
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])

// Manipulate Arrays With pop Method
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop()

// Manipulate Arrays With shift Method
// Setup
// const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
// let removedFromMyArray = myArray.shift()

// Manipulate Arrays With unshift Method
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35] )

// Shopping List
const myList = [["Choco Bar", 3], ["Suger", 4], ["Oil", 3], ["Fruit", 3], ["Veg", 2]];

// Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World")
  }

reusableFunction()

// Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2)
  }
  functionWithArgs(9,6)

//   Return a Value from a Function with Return
function timesFive(num){
    return num * 5;
  }
  timesFive(5)

//   Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10;
let oopsGlobal = 5; 
function fun1() {
  // Assign 5 to oopsGlobal here
  
}
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
    // Only change code below this line
    var myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

//   Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Understanding Undefined Value returned from a Function
// Setup
// let sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// // Only change code below this line
// function addFive() {
//   sum = sum + 5;
// }

// // Only change code above this line

// addThree();
// addFive();

// Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7)

