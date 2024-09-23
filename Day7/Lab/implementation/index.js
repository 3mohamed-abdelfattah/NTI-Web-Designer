// alert("Welcome to my first site!");


// function exchange(egp) {
//     return egp = egp / 50
// }
// console.log(`${exchange(500)}$`);

// function printNum() {
//     for (var i = 1; i <= 20; i++) {
//         if (i % 2 == 0) {
//             console.log("im even");
//         } else {
//             console.log(i);
//         }
//     }
// }
// // printNum()

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


// document.write(`welcome dear ${userName} \n your age: ${2024 - userBirth} \n your number: ${userNum}`)


// function equalNum(x, y, z) {
//     if (x == z && x == y) return 3
//     if (x == y || x == z) return 2
//     return 0
// }

// console.log(equalNum(3, 4, 3));
// console.log(equalNum(1, 1, 1));
// console.log(equalNum(3, 4, 1));

//! take and sum
var enterNum = prompt("please enter your Numbers to sum")
let sum = +enterNum
while (enterNum > 0) {
    prompt(Number(sum))
}
enterNum = prompt("please enter valid Numbers to sum and less than 50")
