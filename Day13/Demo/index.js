// var x ;
// setTimeout(function () {
//     x= 10
//     console.log(x);
// },1000)

//*                  Ajax

// var xhr = new XMLHttpRequest() //0
// // console.log(xhr);

// xhr.open("GET", "https://fakestoreapi.com/users") //1
// xhr.send() //2

// xhr.addEventListener('readystatechange', function () { //4
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var data = xhr.responseText
//         var users = JSON.parse(data)
//         // console.log(users);
//         for (const user of users) {
//             console.log(user.username);
//             var div = document.createElement("div")
//             div.innerHTML = `<h1>${user.username}</h1>`
//             document.body.appendChild(div)
//         }
//     }
// })




// setTimeout(function () {
//     console.log(xhr.responseText);
// },1000)

// var obj = {
//     id: 1,
//     name: "Muhammad"
// }
// console.log(JSON.stringify(obj));

// console.log(JSON.parse('{"id":1,"name":"Muhammad"}'));








// ///////////////////////////////

// var xhr2 = new XMLHttpRequest()
// xhr2.open("get", "https://fakestoreapi.com/products")
// xhr2.send()
// xhr2.addEventListener('readystatechange', function () {
//     if (xhr2.readyState == 4 && xhr2.status == 200) {
//         // console.log(xhr2.responseText);
//         var products  = JSON.parse(xhr2.responseText)
//         // console.log(products);
//         for (const product of products) {
//             console.log(product);
//             var table = document.getElementsByTagName("table")[0]
//             table.innerHTML += `
//             <tr>
//                 <td>${product.id}</td>
//                 <td>${product.title}</td>
//                 <td>${product.price}</td>
//                 <td><img src='${product.image}' style = 'width: 70px'></td>
//             </tr>
//             `
//         }
//     }
// })


var xhr3 = new XMLHttpRequest()
xhr3.open("get","/data.txt")
xhr3.send()
xhr3.addEventListener("readystatechange" ,function () {
    if (xhr3.readyState == 4 && xhr3.status == 200) {
        console.log(xhr3.responseText);
    }
})








// ////////////////////////////////////////////////
//*                           Errors
//! 1- syntax error
// alert())

//! 2- refrence error
// alertt()
// console.log(x);


//! 3- type error
// console.log(document.bodyy);
// console.log(window.alertt());

// 
// function test(params) {
    
// }

// window.testt()

//! 4- range error
// var num = 5
// console.log(num.toFixed(200));


//! 5- uri error

// encodeURI('565656')

//! 6- eval error (deprecated)


// var error = new TypeError()
// throw error

// if (typeof error ) {
    
// }

// *                error handling 

// try {
//     console.logg("test");
// } catch (error) {
//     console.logg(error.message);
    
// }finally{
//     console.logg("data");
// }



