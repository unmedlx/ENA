const { Roles } = require("../models/index")


module.exports = {
    newRole: async (req, res) => {
        try {
            const { role } = req.body

            // Check if roles is exist
            const checkRole = await Roles.findOne({ where: { role: role } })
            if (checkRole) {
                return res.status(400).send({ "message": "Role already exist" })
            }

            await Roles.create(req.body)
            return res.status(200).send({ role, "message": "Role successfully added" })

        } catch (error) {
            return res.status(400).send(error)
        }

    }
}