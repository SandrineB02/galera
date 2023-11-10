/** Les modules */
const express = require('express')
const cors = require('cors')

require('dotenv').config()

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
DB.authenticate()
    .then(() => console.log('MariaDB CNX OK'))
    .then(() => {
        app.listen(process.env.API_PORT, () => {
            console.log("Oh wonderfull your API is ready...")
        })
    })
    .catch(e => console.log('Database Error', e))


