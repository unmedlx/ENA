const jwt = require('jsonwebtoken')

module.exports = {
    auth: (req, res, next) => {
        try {
            const token = req.header('authorization').split(" ")[1]
            jwt.verify(token, "splace1412", (err, decode) => {
                if (err) {
                    return res.status(401).send("User not Auth!")
                }
                req.user = decode
                next()
            })
        } catch (error) {
            return res.status(400).send("Token is not genuine")
        }
    }
}