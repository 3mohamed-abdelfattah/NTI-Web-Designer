//*                output
//1 - alert
// alert("hello js from external")

// 2- document.write
// var num = 20
// document.write("<h1>Hello js 1</h1>")

// console.log(num)


////////////////////////////////////////////////////////

//* primitive datatype (string - num -boolean - null - symbol - undefined - bigint)
//! string
// var myName = ""
// var myName = 'Muhammad'
// console.log(typeof myName);

// var myName = 20
// console.log(typeof myName);
// console.log(typeof myName);

//! num
// var num1 = 20.5
// console.log(typeof num1);

//! boolean
// var isFired = false
// console.log(typeof isFired);

//! null
// var x = null
// console.log(typeof x);

//! undefined
// var z;
// var z = undefined
// console.log(z);
// console.log(typeof z);

//! symbol

// var z = Symbol()
// console.log(z);
// console.log(typeof z);

// var y = Symbol()


// console.log(z==y);


//!bigint

// var num = 11n
// console.log(num);
// console.log(typeof num);


//---------------------------------------------
//*                var, let, const 
//? 1- initialization :

// var empName;

// let empAge;

// const x;         //error

//? 2- reassign :

// var myName = "Muhammad"
// myName = "ali"

// let empName = "omar"
// empName = "ranim"

// const empAge = 30    //error
// empAge = 25


//? 3- redeclaration :

// var myName = "Muhammad"
// var myName = "ali"

// let empName = "Maivel"    //error
// let empName = "hossam"

// const empAge = 25         //error
// const empAge = 28


//? 4- hoisting

// console.log(myName);

// var myName = "Muhammad"
// console.log(myName);

// print()

// function print(){ //function body
//     console.log("test");
// }
// print() //function call

//? - scope
//! global scope
// const x = 10

//! local scope (functional) var, let, const

// function display() {
//     var x= 10
// }
// display()
// console.log(x);


//! block scope (let, const)

// {
//     var x = 10
//     // let z = 10
// }
// console.log(x);


var arr = [1, 2, 3, 4, 5]
// console.log(arr);

// console.log(arr[1]);

for (let i = 0; i < 5; i++) {
    // console.log(i)
}

console.log(i);
