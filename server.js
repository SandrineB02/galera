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
/*** Import routers modules */
const auth_router = require('./routers/r_auth')
const eleve_router = require('./routers/r_eleve')
const formateur_router = require('./routers/r_formateur')
const formation_router = require('./routers/r_formation')
const module_router = require('./routers/r_module')
const note_router = require('./routers/r_note')

/*** Main router parameters */

app.get('/', (req, res) => res.send(`I'm online. All is OK !`))

app.use('/auth', auth_router)
app.use('/eleve', eleve_router)
app.use('/formateur', formateur_router)
app.use('/formation', formation_router)
app.use('/module', module_router)
app.use('/note', note_router)

app.get('*', (req, res) => res.status(501).send('What the hell are you doing !?!'))

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



