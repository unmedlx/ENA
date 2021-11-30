const jwt = require('jsonwebtoken')

module.exports = {
    createToken: (payload) => {
        return jwt.sign(payload, "splace1412", {
            expiresIn: '1h'
        })
    }
}