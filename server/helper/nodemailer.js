const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'adibedule@gmail.com',
        pass: 'dgcqwzduagcmhokb'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter