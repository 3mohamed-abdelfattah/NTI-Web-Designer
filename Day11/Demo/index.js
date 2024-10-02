//*                event methods
// document.getElementById("red").addEventListener("click", function (e) {
//     alert("iam red")
//     e.stopPropagation()
// })
// document.getElementById("blue").addEventListener("click", function (e) {
//     alert("iam blue")
//     e.stopPropagation()
// })
// document.getElementById("green").addEventListener("click", function (e) {
//     alert("iam green")
//     e.stopPropagation()
// })


//*                event handler

// 2- object property
// document.getElementById("h1").onclick = function () {
//     console.log("test2");
    
// }

// 3- addEventListner

// document.getElementById("h1").addEventListener("type",function())
// document.getElementById("h1").addEventListener("click",function(){
//     console.log("test3");
    
// })


// function test(){
//     console.log("test4");
// }

// console.log(test);


// document.getElementById("h1").addEventListener("click",test)

// document.getElementById("h1").removeEventListener("click",test )








// var h1 = {
//     onclick : "test1",
//     onclick : "test2",
//     addEventListener : function (x,y) {
//         console.log(x,y);
//     }
// }

// h1.addEventListener(5,6)
// h1.addEventListener(6,8)

//*                DOM => document object model

// console.log(document.body);

//!                       get
// document
// console.log(document.getElementById("h1"));

// console.log(document.getElementsByClassName("myDiv")[0]);


// console.log(document.getElementsByTagName("input")[0]);

// console.log(document.getElementsByName("paragraph")[0]);

// body
// console.log(document.body.getElementsByClassName("myDiv")[0]);

// element
// console.log(document.getElementsByClassName("myDiv")[0].getElementsByTagName("span")[0]);


//!                    css selector

// console.log(document.querySelector("#h1"));

// console.log(document.querySelectorAll(".myDiv")[0]);

//!                     relation

// console.log(document.body.children[0]);

// console.log(document.getElementsByClassName("myDiv")[1].nextElementSibling);
// console.log(document.getElementsByClassName("myDiv")[0].previousElementSibling);

// console.log(document.getElementsByTagName("span")[0].parentElement);

// function test(_this) {
//     // console.log(e.target);
//     console.log(_this);
    
// }


//!                       this  & event.target
// document.getElementById("h1").addEventListener("click", function (e) {
//     // console.log(e.target);
//     console.log(this); // element
//     // var _this = this

//     setTimeout(function () {
//         // console.log(this); // window
//         console.log(_this);
//     },1000)

//     // function test() {
//     //     console.log(this);
//     // }
//     // test()

// })

// function go(_this) {
//     console.log(_this);
    
// }

//!                         create

// var h1 =document.createElement("h1")

// // h1.textContent = "<h1>hello js</h1>"
// // h1.innerText = "<h1>hello js</h1>"
// h1.innerHTML = "<h1>hello js1</h1>"
// h1.innerHTML += `<h1>hello js2</h1>
// <h2>hello js3</h2>
// `

// document.body.appendChild(h1)

// var div1 = document.getElementsByClassName("myDiv")[0]
// var span = document.getElementsByTagName("span")[0]

// div1.insertBefore(h1,span)

// console.log(div1);
