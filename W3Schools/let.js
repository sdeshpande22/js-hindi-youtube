let x = "John Doe";
// let x = 0; Cannot redeclare block-scoped variable 'x'

{
    let x = 2;
}
// x can NOT be used here

{
    var y = 2;
}
// y CAN be used here

let a = "John Doe";

//let a = 0;  Cannot redeclare block-scoped variable 'a'.

////////////////

let b = 10;
// Here x is 10

{
let b = 2;
// Here b is 2
}

// Here b is 10

/*

let and const have block scope.

let and const can not be redeclared.

With let, redeclaring a variable in the same block is NOT allowed:

Redeclaring a variable with let, in another block, IS allowed:

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

var does not have to be declared.

var is hoisted.

var binds to this.

--------
Hoisting
--------
Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared:

Example(This is OK):

carName = "Volvo";
var carName;

Using a let variable before it is declared will result in a ReferenceError:

Example
carName = "Saab";
let carName = "Volvo";

*/