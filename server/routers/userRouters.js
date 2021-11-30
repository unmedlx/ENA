const express = require("express")
const { userController } = require('../controllers')
const { auth } = require("../helper/authToken")


const router = express.Router()

router.post("/register", userController.register)
router.post("/verification", auth, userController.verification)
router.post("/resend", userController.resend)
router.post("/login", userController.login)
// router.post("/", auth, userController.getDataUser)

module.exports = router
