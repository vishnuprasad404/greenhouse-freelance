const name = document.getElementById('name-field');
const email = document.getElementById('email-field');
const message = document.getElementById('message-field');


function sendMessage() {
    let params = {
        name: name?.value,
        email: email?.value,
        subject: 'New Contact',
        message: message?.value
    }

    emailjs.send("service_rl1243l","template_piroqx8",params).then(()=>{
        alert("sented")
    })

}