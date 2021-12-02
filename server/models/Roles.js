
module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define("Roles", {
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })


    Roles.associate = (models) => {
        Roles.hasMany(models.Users, {
            onDelete: "cascade"
        })

    }

    return Roles
}