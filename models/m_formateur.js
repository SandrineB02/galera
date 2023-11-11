/**Import module */

const { DataTypes } = require('sequelize')
const sequelize = require('../db.config')

/**Modèle Formateur */
module.exports = (sequelize) => {
    const Formateur = sequelize.define('Formateur', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            Validate: {
                isEmail: true, // Ici une validation de données
                allowNull: false
            }
        },
        password: {
            type: DataTypes.STRING(64),
            is: /^[0-9a-f]{64}$/i,   //Ici une contrainte
            allowNull: false
        },

    })

    return Formateur
}