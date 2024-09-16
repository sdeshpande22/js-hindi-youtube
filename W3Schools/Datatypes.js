/*
JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:
objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let z = 16 + 4 + "Volvo";
//Result:20Volvo --> In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

let x1 = "Volvo" + 16 + 4;
//Result:Volvo164 --> In the second example, since the first operand is a string, all operands are treated as strings.

let x2;       // Now x2 is undefined
x2 = 5;       // Now x2 is a Number
x2 = "John";  // Now x2 is a String

// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

//All JavaScript numbers are stored as decimal numbers (floating point).

// Numbers can be written with, or without decimals:

// With decimals:
let xx = 34.00;

// Without decimals:
let xy = 34;


// Booleans can only have two values: true or false.

Example
let p = 5;
let q = 5;
let r = 6;
(p == q)       // Returns true
(p == z)       // Returns false