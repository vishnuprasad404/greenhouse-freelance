const mailConfig = require('../configs/mail.config.json')
const nodemailer = require('nodemailer')


const sendMail = async (name, email, message) => {
    const transporter = nodemailer.createTransport({
        host: mailConfig.HOST,
        port: mailConfig.PORT,
        secure: true,
        auth: {
            user: mailConfig.HOST_MAIL,
            pass: mailConfig.APP_PASSWORD
        }
    });
    const mailOptions = {
        to: mailConfig.HOST_MAIL,
        from: mailConfig.HOST_MAIL,
        subject: 'New Message from - ' + name + '' + '(' + email + ')',
        text: message,
        html: `<h3 style='font- family: system-ui, -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif' >Hi I'm ${name}</h3><br><p style='line-height: 30px;'>${message}</p >`
    }

    try {
        const resposnce = await transporter.sendMail(mailOptions)
        if (resposnce) return {
            isError: false,
            message: 'message sented successfully!'
        }
    } catch (error) {
        if (error) {
            return {
                isError: true,
                message: 'something went wrong!!'
            }
        }
    }


}

module.exports = { sendMail }