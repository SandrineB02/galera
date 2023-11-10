/** Les modules */
const express = require('express')
const cors = require('cors')

/**Connexion de la base de données */

/**Initialisation de l'API */
const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
}))

app.use(express.json)
app.use(express.urlencoded({ extended: true }))

/** Routers */


/** Démarrage de l'API */

app.listen(process.env.API_PORT, () => {
    console.log("Oh wonderfull your API is ready...")
})


