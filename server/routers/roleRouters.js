const express = require("express")
const { roleController } = require('../controllers')


const router = express.Router()

router.post("/", roleController.newRole)

module.exports = router
