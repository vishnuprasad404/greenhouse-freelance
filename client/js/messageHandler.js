const name = document.getElementById('name-field');
const email = document.getElementById('email-field');
const message = document.getElementById('message-field');


async function sendMessage() {
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

    console.log(await responce.json());

}