//*                  collections
//*                  images
// console.log(document.images[0]);
// console.log(document.image); // document.name
// console.log(document.img); // document.id

// function chageImg() {
//     document.image.src = "../images/2.jpg"
// }
// function returnImg(){
//     document.image.src = "../images/1.jpg"
// }


// function chageImg(_this) {
//     _this.src = "../images/2.jpg"
// }

// function returnImg(e){
//     e.target.src = "../images/1.jpg"
// }

// var i = 0
// var arr = ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg"]
// var timer
// document.image.addEventListener("mouseover", function () {
//     var _this = this
//     timer =setInterval(function () {
//         i++
//         if (i >= 3) {
//             i = 0
//         }
//         _this.src = arr[i]
//     }, 1000)
// })

// document.image.addEventListener("mouseout",function () {
//     clearInterval(timer)
// })



//*                    forms
// console.log(document.forms[0]);
// console.log(document.form1);
//  console.log(document.forms[0].elements[1]);
// console.log(document.forms[0].children[0]);

var form = document.forms[0]
var input1 = document.forms[0][0]
var input2 = document.forms[0][1]

var nameRgx = /^[a-zA-Z]{3,12}$/
var passRgx = /^[0-9]{7}$/

var span1 = document.getElementsByTagName("span")[0]
var span2 = document.getElementsByTagName("span")[1]

form.addEventListener('submit',function (e) {
    
    // console.log(input1.value);

    // console.log(nameRgx.test(input1.value));
    
    if (!nameRgx.test(input1.value)) {
        e.preventDefault()
    }

    if (!passRgx.test(input2.value)) {
        e.preventDefault()
    }

})


input1.addEventListener('input', function () {
    if (!nameRgx.test(input1.value)) {
        span1.innerHTML = "invalid name"
        span1.style.color = "red"
        input1.style.border = "1px solid red"
    }else{
        span1.innerHTML = ""
        span1.style.color = ""
        input1.style.border = ""
    }
})
input2.addEventListener('input', function () {
    if (!passRgx.test(input2.value)) {
        span2.innerHTML = "invalid pass"
        span2.style.color = "red"
        input2.style.border = "1px solid red"
    }else{
        span2.innerHTML = ""
        span2.style.color = ""
        input2.style.border = ""
    }
})