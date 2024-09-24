console.log('%cThis is red, %cthis is yellow, %cthis is normal', 'color: red', 'color: yellow', 'color: inherit');

//* 1.In external js file on your page, show alert for the user that say “Welcome to my first site”.
// alert("Welcome to my first site!");

//*2.Write a currency exchange function that takes one parameter (number of Egyptian pounds) then return it after exchange it to dollar.
// function exchange(egp) {
//     return egp = egp / 50
// }
// console.log(`${exchange(500)}$`);

//*3.Make a button that when clicking it to Print in the browser’s console the numbers between 1-20 but instead of event numbers show “I’m even”.
// function printNum() {
//     for (var i = 1; i <= 20; i++) {
//         if (i % 2 == 0) {
//             console.log("im even");
//         } else {
//             console.log(i);
//         }
//     }
// }
// printNum()

//*4.Ask user to enter his info first name, birth year, and his mobile number

// // ! Check Name
// var userName = prompt("please enter your name")
// while (!isNaN(userName)) {
//     userName = prompt("please enter your name again")
// }

// // ! Check Number
// var userNum = prompt("please enter your Number")
// console.log(userNum);
// while (isNaN(userNum) || userNum.length < 11) {
//     userNum = prompt("please enter valid  Number")
// }

// // ! Check Birth
// var userBirth = prompt("please enter your Birth")
// while (userBirth < 1980) {
//     userBirth = prompt("please enter valid  Birth")
// }

// // ! Check Color
// var userColor = prompt("please enter your Color")
// while (userColor != "red" && userColor != "green" && userColor != "yellow") {
//     userColor = prompt("please enter valid  Color")
// }

//*-display all his info with a welcoming message on the page (HTML) like image bellow using a coloring format according to user’s choice. The user has to choose from (red, green or blue color)
// document.write(
//     `<span style="color:${userColor};">welcome dear ${userName}<br>your age: ${2024 - userBirth}<br>your number: ${userNum}</span>`
// );

//*5.Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.Your function must return 0, 2 or 3. Examples:
// function equalNum(x, y, z) {
//     if (x == z && x == y) return 3
//     if (x == y || x == z) return 2
//     return 0
// }
// console.log(equalNum(3, 4, 3));
// console.log(equalNum(1, 1, 1));
// console.log(equalNum(3, 4, 1));


//*6.Write a script that takes from the user some values and check that the entered data is numeric , stop receiving values from user when he enters 0 or sum exceeds 50, then inform the user with the total sum of the entered values with alert.! take and
// let sum = 0;
// var enterNum = prompt("please enter your Numbers to sum")
// while (sum <= 50 && enterNum > 0) {
//     sum += Number(enterNum)
//     enterNum = prompt(`total is ${sum} enter another to sum (greater than 50 to stop)`);
// }
// alert("total: " + sum);

//*7.Ask the user to enter a message then display it using the different HTML heading tags (from <h1> to <h6>) using Loops. DO NOT write the header tags explicitly in your HTML!
// document.addEventListener("DOMContentLoaded", function () {
//     let something = prompt("add something...");
//     for (let i = 1; i < 7; i++) {
//         let header = document.createElement(`h${i}`);
//         header.textContent = something;
//         document.body.appendChild(header);
//     }
// })