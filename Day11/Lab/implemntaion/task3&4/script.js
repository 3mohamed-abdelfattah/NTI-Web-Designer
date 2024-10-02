
//* 3- Make your own input type number that accepts numbers only and handle that the user can delete from input.
let onlyNum = document.getElementById('tonumber')
function deleteAll() {
    if (isFinite(onlyNum.value)) {
        onlyNum.value = null
    }
    else {
        onlyNum.value = onlyNum.value.toString()
    }
}

function deleteOne() {
    if (isFinite(onlyNum.value)) {
        var b = onlyNum.value.split('').map(Number);
        b.pop()
        lastNum = Number(b.join(''));
        console.log(lastNum);
        onlyNum.value = lastNum
    } else {
        onlyNum.value = onlyNum.value.toString()
    }
}


// * 4- Create a simple form with Add and Reset buttons takes user`s


function submitForm() {
    let nameUser = document.getElementById('name');
    let age = document.getElementById('number');
    let email = document.getElementById('email');
    // var tr = document.createElement("tr")
    // tr.innerHTML = `
    // <tr>
    // <th>${nameUser.value}</th>
    // <th>${age.value}</th>
    // <th>${email.value}</th>
    // </tr>
    // `
    // // h1.innerHTML = `<h1>hello user ${nameUser.value} js1</h1>`
    // document.body.appendChild(tr)
    var h1 = document.createElement("h1")

    h1.innerHTML = `
    <table>
    <tr>
    <th>${nameUser.value}</th>
    <th>${age.value}</th>
    <th>${email.value}</th>
    </tr>
    </table>
`

    document.body.appendChild(h1)
}
