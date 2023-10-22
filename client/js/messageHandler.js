const name = document.getElementById('name-field');
const email = document.getElementById('email-field');
const message = document.getElementById('message-field');
const btn = document.getElementById('submit-btn');

window.addEventListener('load', checkBtnStatus)

function checkBtnStatus() {
    if (!name?.value || !email?.value || !message?.value) {
        btn.classList.add('disabled')
    } else {
        btn.classList.remove('disabled')
    }
}

async function sendMessage() {
    btn.classList.add('disabled')

    let params = {
        name: name?.value,
        email: email?.value,
        message: message?.value
    }

    const responce = await fetch('http://localhost:3000/mail', {
        method: "POST",
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params)
    })




    const { isError, message: msg } = await responce.json();

    console.log(isError, msg);


    if (isError) {
        alert(msg)
        btn.classList.remove('disabled')

    } else {
        alert(msg)
        btn.classList.remove('disabled')
    }

}