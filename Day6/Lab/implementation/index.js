//! QS 1
// var y;
// console.log(y);
//* undefined

//! QS 2
// console.log(y);
//* not defined

//! QS 3
// var x = 10;
// var y = 20;
// console.log(y - x * 2);
//* zero

//! QS 4
var y;
console.log(typeof y);
//* undefined

//! QS 5
var x = "1";
var y = 2;
console.log(x + y);
//* 12

//! QS 6
var x = 1;
var y = true;
console.log(x + y);
//* 2

//! QS 7
// var x = 12;
// var y = "6";
// console.log(x / y);
//* 2

//! QS 8
console.log(15 + 3 + "number");
console.log("number" + 15 + 3);
//* 18number
//*  number153

//! QS 9
// var x = false;
// var y = !!x;
// console.log(y);
//* false

//! QS 10
// var x = false;
// console.log(typeof x == 0)
//* false

//! QS 11 Write a JavaScript code to display in console the odd numbers from 1 to 9 (use loop)
for (let index = 1; index <= 10; index = index + 2) {
    console.log(index);
}

//! QS 12
alert("Welcome to my site");
let name = prompt("enter your name");
let textNode = document.createTextNode("Hello " + name)
document.body.appendChild(textNode)