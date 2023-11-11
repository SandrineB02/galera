/** Les modules */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


/**Connexion de la base de données */

let DB = require('./db.config')

/**Initialisation de l'API */
const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/** Routers */


/** Démarrage de l'API */
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('MONGODB CNX OK')
        DB.sequelize.authenticate()
            .then(() => console.log('MariaDB CNX OK'))
            .then(() => {
                app.listen(process.env.API_PORT, () => {
                    console.log("Oh wonderfull your API is ready...")
                })
            })
            .catch(e => console.log('Database Error', e))
    })
    .catch(e => console.log('Database ERROR -MONGO', e))



