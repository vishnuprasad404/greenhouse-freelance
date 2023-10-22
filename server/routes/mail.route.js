const express = require('express')
// const nodemailer = require('nodemailer')
const router = express.Router();
const mailService = require('../services/mail.service')
// const mailConfig = require('../configs/mail.config.json')


router.get('/mail', (req, res) => {
    res.json({ isError: true })
})

router.post('/mail', async (req, res) => {
    const { name, email, message } = req?.body
    if (!(name && email && message)) return;
    const mailRes = await mailService.sendMail(name, email, message);
    res.json(mailRes)
})


module.exports = router