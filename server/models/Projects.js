module.exports = (sequelize, DataTypes) => {
    const Projects = sequelize.define("projects", {
        projectName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        projectLead: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Projects
}