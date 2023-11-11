/**Import module */

const { Sequelize } = require('sequelize')


/**Connexion à la base de données */

let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
}
)
/** Mise en place des modèles et relations */

const db = {}

db.sequelize = sequelize
db.Formation = require('./models/m_formation')(sequelize)
db.Formateur = require('./models/m_formateur')(sequelize)
db.Eleve = require('./models/m_eleve')(sequelize)
db.Module = require('./models/m_module')(sequelize)
db.Note = require('./models/m_note')(sequelize)

db.Formation.hasMany(db.Eleve, { foreignKey: 'id_formation' })
db.Eleve.belongsTo(db.Formation, { foreignKey: 'id_formation' })

/**Synchronisation des modèles */

/**db.sequelize.sync({ alter: true }) */


//après avoir réalisé les tables et connecté ses models mettre en commentaire ligne du dessus
//tu synchronises (crée les tables et les modifie) et tu as les droit de modifier les clés 


module.exports = db