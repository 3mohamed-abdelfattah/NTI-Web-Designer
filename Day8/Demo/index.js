//*           debugging

// function display() {
//     var x = 10
//     console.log(x);
// }
// // debugger
// display()

// //////////////////////////
//*        objects
var id = 1
var name = "Muhammad"
var isAny = true

function display() {
    console.log("test");
}

function sum() {
    return 2 + 2
}


// array => index, element
var arr = [1, "Muhammad", true]
// console.log(arr[1]); // bracket notation []



// object => keys, values
var obj = {
    id: 1,
    name: "Muhammad",
    isAny: true,
    display: function display() {
        console.log("test");
    },
    sum: function sum() {
        return 2 + 2
    },
    arr: [1, "Muhammad", true],
    obj1: {
        id: 2,
        name: "ali"
    }
}
// var myName = 'name'
// console.log(obj[myName]);
// console.log(obj['name']);

//? access :
// 1- dot notation
// 2- bracket notation

// console.log(obj.isAny);
// console.log(obj.arr[1]);
// console.log(obj.obj1.name);
// console.log();
// obj.display()
// console.log(obj.sum());


// console.log(obj['arr'][2]);
// console.log(obj['display']());

// console.log(obj['sum']());

//? loop in object

// for (const key in obj) {
//     // console.log(key);
//     console.log(obj[key]);
// }


//*                        String

// literal creation :
// var str = 'ahmed'

// constructor creation :
// var str1 = new String("ali")

// console.log(typeof str, typeof str1);

var str = 'Muhammad Omar'

//? properties :
// console.log(str.length);

//? methods :

//!charAt
// console.log(str.charAt(20));
//!indexOf
// console.log(str.indexOf("a",4));
// console.log(str.indexOf("omar"));

//! split
// console.log(str.split(" "));

// var strQ = '?fname=Muhammad'

// console.log(strQ.split("=")[1]);
// var userName = strQ.split("=")[1]

// document.write("welcome "+userName)
//! slice
// console.log(str.slice(0,8));

//! startsWith endsWith
// console.log(str.startsWith("Mu"));
// console.log(str.endsWith("ar"));

// console.log(str.replace("x","o"));

// console.log(str.trim());

// console.log(str.concat(" in nti"));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));


// console.log(str.toLowerCase().indexOf("o"));


// console.log(str.toUpperCase().includes("A"));

////////////////////////////////////////////////////////////
//*                       Math
// console.log(Math);

//? properties
// console.log(Math.PI);

//? methods

// console.log(Math.floor(10.9));
// console.log(Math.ceil(10.1));
// console.log(Math.round(10.4));
// console.log(Math.round(Math.random()*255));
// var r = Math.round(Math.random()*255)
// var g = Math.round(Math.random()*255)
// var b = Math.round(Math.random()*255)
// document.write(`<h1 style='color: rgb(${r}, ${g}, ${b});'>paragraph</h1>`)

// console.log(Math.max(10,20,30,100));
// console.log(Math.min(10,20,30,100));

//*                         Array
var arr = [
    1,
    "Muhammad",
    true,
    function display() {
        console.log("test");
    },
    function sum(params) {
        return 2 + 2
    },
    {
        id: 1,
        name: "ali"
    },
    [1, 2, 3]
]
// console.log(typeof arr);
//? access => bracket notation

// console.log(arr[5].name);
// console.log(arr[3]());
// console.log(arr[4]());

// console.log(arr[6][2]);

//? loop on array

// for (const element of arr) {
//     console.log(element);
// }

//? properties
// console.log(arr.length);

//? methods

arr[0] = 2

// edit
arr[2] = false

// add
arr[7] = "test"


var arr1 = [1998, 1995, 2000, 1999]

//! add and delete in the last of array
// arr1.pop()
// arr1.push(2004)

//! add and delete in the first of array
// arr1.unshift(2004)
// arr1.shift()

// arr1.splice(start, delete or not , add or not)

arr1.splice(2, 2, 2004, 2001)

