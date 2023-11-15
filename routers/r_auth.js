/*************************/
/*** Import used modules */
const express = require('express')
const authCtrl = require('../controllers/c_auth')

/***************************/
/*** Get Expresss's router */
let router = express.Router()

/*********************************************/
/*** Middleware to log date for each request */
router.use((req, res, next) => {
    const event = new Date()
    console.log('AUTH Time:', event.toString())
    next()
})

/**********************************/
/*** Routes for auth resource */
// Route pour l'inscription
router.post('/signup', authCtrl.signup)

// Route pour la connexion
router.post('/login', authCtrl.login)

module.exports = router