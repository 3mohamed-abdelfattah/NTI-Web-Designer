//*        strict mode
// 'use strict'
// function display() {
//     empAge = 25
// }
// display()

// console.log(empAge);

// var interface = 5
// console.log(interface);

//*         concat
// var myName = "Muhammad"

// document.write("Hello " + myName)
// document.write("Hello "+myName+ " in my js file")
document.write("<br>")
//! template literal :
// document.write(`Hello ${myName} in my js file`)

//*       Naming convention
// empAge => camel case
var _id
var $id

//*      type coersion
// console.log(1+'21');
// console.log(1+21);
// console.log(2*'21');
// console.log(2/'21');

//! undefined + string = concat
// console.log(undefined + "2");
//! undefined + any = NaN
// console.log(undefined + 2);
// console.log(undefined + undefined);

// console.log(null + null);
// console.log(true+1);
// console.log(false+1);

//? explicity casting
// Number
// console.log(1+Number("112.5"));
// parseInt
// console.log(1+parseInt("112.5m"));
// parseFloat
// console.log(1+parseFloat("112.5m"));

// console.log(typeof NaN);

//*            check number
// console.log(isNaN('5'));
// console.log(isFinite("1"));




//*           function declaration
function display(x = 1, y = 1) { //default parameter
    console.log(x + y);
}
// var d =display()
// console.log(d);


// display(6)
// display(2,3) //argument
// display(2,5) //argument
// display(8,3) //argument
// display(1,3) //argument














// var test =display()
// console.log(test);

function sum(x, y) {
    return x + y
}

// var sum1 = sum(2,3)
// console.log(sum1);
// var sum2 = sum(5,4)

// console.log(sum(4,3));
////////////////////////////////////
//*             input

//! if condition
// var myName = prompt("please enter your name")

// if (myName == null) {
//     alert("invalid name")
// } else {
//     alert("welcome " + myName)
// }

//! while loop
// var myName = prompt("please enter your name")
// while (myName == null || myName == "") {
//     myName = prompt("please enter your name again")
// }
// alert("welcome "+myName)

//! do while loop
// do {
//     var myName = prompt("please enter your name")
// } while (myName == null);

// alert("welcome "+myName)


///////////////////////////////
// ||  &&  =   ==  === + - / * ++ ! +=
// == value
// console.log(6=='6');
// === value, type
// console.log(6==='6');


// var num1 = 2
// num1++ // +1
// num1-- // -1

// postfix => assign then increment
// var num2 = num1++
// console.log(num2, num1);
// prefix => increment then assign
// var num2 = ++num1
// console.log(num2, num1);

// var num = 0

// num += 2 //num +2





