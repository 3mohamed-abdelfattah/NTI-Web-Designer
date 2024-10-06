// element , indexes
// var arr = [
//     1,
//     "Muhammad",
//     true,
//     function print() {
//         console.log("test");
//     },
//     [1,2,3],
//     {
//         id: 1,
//         name: "ali"
//     }
// ]

// arr[3]()

// arr[4][2]


// arr[0] = 2

// arr[6]= [10,20,30]

// var str = "ali ahmed"
// // console.log(str.split(" "));

// var arr1 = ['karim', 'ahmed', 'ali']

// for (const element of arr1) {
//     console.log(element);

// }

// console.log(arr1.join());


var obj = {
    id: 1,
    name: "ali",
    display: function (params) {
        console.log("test");
    },
    arr: [1, 2, 3],
    obj1: {
        id: 2,
        name: "Muhammad"
    },
    x: 10,
    test: function name(params) {

    }
}
// obj.is = true
// for (const key in obj) {
//     // console.log(key);
//     console.log(obj[key]);

// }

//////////////////////////////////////////////////
//*                Date
// constructor creation
var d = new Date()
// console.log(d);

//! get

// console.log(d.getFullYear());
// console.log(d.getMonth());
// months => jan 0 => dec 11
// console.log(d.getDay());
// day => Mon => sun

//
//! set
d.setFullYear(2000)

d.setMonth(0)

//! to => formatting

// console.log(d.toLocaleDateString());
// console.log(d.toISOString());

///////////////////////////////////////////////////

//*                    RegExp

// var phoneRgx = /^01(0|1|2|5)[0-9]{8}$/

// var phone = prompt("please enter your phone number")

// console.log(phoneRgx.test(phone));

// while (!phoneRgx.test(phone)) {
//     phone = prompt("please enter your phone number")
// }
// alert("your phone is "+ phone)


// do {
//     var phone = prompt("please enter your phone number")

// } while (!phoneRgx.test(phone));
// alert("your phone is "+ phone)

var str = "MuhammAd"

// console.log(str.replace(/a/g,"*")); //global
// console.log(str.replace(/a/ig,"*")); //ignore case sensetive

// search => flags

var weather = 40;
// if (weather > 30) {
//     alert("the weather is hot")
// }else{
//     alert("the weather is cold")
// }

// (weather > 30)?alert("the weather is hot"): alert("the weather is cold")
// console.log((weather > 30)?'hot': 'cold');


// (condition)?true:false


// ////////////////////////////////////////////
//*                      BOM => browser object model
// console.log(window);

// var x = 10

// function test(params) {
//     function d(params) {

//     }
//     d()
// }
// test()

//! properties :
// console.log(innerHeight);
// console.log(outerHeight);
// console.log(innerWidth); //body
// console.log(outerWidth); //window

//! methods :
//                     setTimeout
// higher order function
// setTimeout(function(){},time)

// var timer = setTimeout(function test() {
//     alert("time out")
// }, 3000)

// clearTimeout(timer)


//                     setInterval
// var interval;
// function start() {
//     interval = setInterval(function (params) {
//         alert("interval")
//     }, 3000)
// }

// function stopInterval() {
//     clearInterval(interval)
// }

//                     open close


// var newWin
// function openWin() {
//     newWin =window.open("https://iti.gov.eg/home", "_blank", "width=600; height=600")
// }

// function closeWin(){
//     newWin.close()
// }