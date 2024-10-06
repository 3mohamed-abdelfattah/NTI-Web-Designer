//* 1- Make a button that display the current date and time in local format on the page

function showTime() {
    var time = new Date()
    document.write(`<h1>Date: ${time.toLocaleString()}</h1>`)
}

//* 2- Make a button that on its Click event opens new advertising window after 3 seconds
let newWin
function showWindow() {
    setTimeout(() => {
        newWin = window.open(`https://github.com/3mohamed-abdelfattah`, "_blank", "width=400,height=400")
        newWin.innerWidth = 300
    }, "3000");
}

function closeWindow() {
    newWin.close()
}


//* 3- even regular expression

let evenRgx = /[0,2,4,6,8]$/
console.log(evenRgx.test(112));

//* 4- Write a script that reads from the user his info; validates and displays it with a welcoming

let phoneRgx = /^01(0|1|2|5)[0-9]{8}$/
let mailRgx = /(@gmail.com|@icloud.com|@yahoo.com)$/

function getInfo() {
    let name = prompt("Please enter your name")
    while (name == null || !isNaN(name)) {
        name = prompt("please enter your name again")
    }

    let phone = prompt("Please enter your phone")
    while (phone.length != 8) {
        phone = prompt("please enter your phone again")
    }

    let mobile = prompt("Please enter your mobile")
    while (!phoneRgx.test(mobile)) {
        mobile = prompt("please enter your mobile again")
    }

    let mail = prompt("Please enter your mail")
    while (!mailRgx.test(mail)) {
        mail = prompt("please enter your mail again")
    }
}