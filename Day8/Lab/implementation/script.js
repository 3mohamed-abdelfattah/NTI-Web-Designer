//* 1. Write a script that accepts a string from user through prompt and count the number of ‘e’ characters in it.
// const count = prompt("enter string")
// console.log(count.split('e'));
// console.log(count.split('e').length - 1);

// * Write a script to determine whether the entered string is palindrome or not.Request the string to be entered via prompt
// const string = "MO"
// //  prompt("Enter Your String");

// let withCaseSense = string.split("").reverse().join("")
// let toUpperCase = string.toUpperCase().split("").reverse().join("")

// console.log(withCaseSense == string);
// console.log(toUpperCase == string.toUpperCase());

//*3. Fill an array of 3 elements from the user, and apply each of the following mathematical operations on it (+, *, /).
// const input = prompt("Enter three Number")
// console.log(input);
// const arr = [...input];

// let sum = 0;
// arr.forEach(element => {
//     return sum += Number(element)
// });

// let multi = 1
// arr.forEach(element => {
//     return multi *= Number(element)
// });
// let dived = 1
// arr.forEach(element => {
//     return dived /= Number(element)
// });

// document.write(`<h1 style='color:red'>Sum:${arr[0]}+${arr[1]}+${arr[2]}= ${sum}</h1>`)
// document.write(`<h1 style='color:green'>Sum:${arr[0]}*${arr[1]}*${arr[2]}= ${multi}</h1>`)
// document.write(`<h1 style='color:blue'>Sum:${arr[0]}/${arr[1]}/${arr[2]}= ${dived}</h1>`)

//*4. Fill an array (5 numerical values) from the user, Sort it in descending and ascending
// const input = prompt("Enter Number").slice('')
// const arr = [...input];

// document.write(`<h1 style='color:red'>ascending:${arr.sort()}</h1>`)
// document.write(`<h1 style='color:green'>descending:${arr.sort().reverse()}</h1>`)

//*5.Write a script that ask the user to Enter the value of a circle’s radius
// let input = prompt("Enter Radius")
// input = input * 2 * Math.PI

// document.write(`<h1 style='color:red'>Circle Radius:${input}</h1>`)

//*6.Enter another value to calculate its square root and alert the result
// let input = prompt("Enter Square Root")
// input = input * 4

// document.write(`<h1 style='color:red'> Square Root:${input}</h1>`)

//*7.Enter an angle to calculate its cos value then display the output as

// let input = prompt("Enter angle")
// input = Math.cos(input)

// document.write(`<h1 style='color:red'> angle:${input}</h1>`)