/*************************/
/*** Import used modules */
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { DataTypes } = require('sequelize')
const { Eleve } = require('../db.config')


/**********************************/
/*** Routage de la ressource Auth */


exports.login = async (req, res) => {
    const { email, password } = req.body

    // Validation des données reçues
    if (!email || !password) {
        return res.status(400).json({ message: 'Mauvais email ou password' })
    }

    try {
        // Password check  
       // let test = await bcrypt.compare(password, '')
       // if (!test) {
       ///     return res.status(401).json({ message: 'Mauvais password' })
       // }

       // Recherche de l'élève par e-mail
       let eleve = await Eleve.findOne({ where: { email: email }, raw: true });

        if (eleve === null) {
            return res.status(401).json({ message: 'Cet élève n\'existe pas' });
        }

         // Validation du mot de passe
         let isPasswordValid = await bcrypt.compare(password, eleve.password);

         if (!isPasswordValid) {
             return res.status(401).json({ message: 'Mauvais mot de passe' });
         }

        // JWT generation
        const token = jwt.sign({
            payload: 'YOUR PAYLOAD'
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURING })

        return res.json({ access_token: token })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Erreur lors de la connexion', details: err.message });
    }
}




exports.signup = async (req, res) => {
    const { email, password } = req.body

    // Validation des données reçues
    if (!email || !password) {
        return res.status(400).json({ message: 'Mauvais email ou password' })
    }

    try {
        //Vérification si l'élève existe
        let eleve = await Eleve.findOne({ where : {email: email}, raw:true})
        if(eleve !== null){
            return res.status(401).json({message: `Ce compte élève n'existe pas`})
        }
        
        // Password Hash
        let hash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND))
        req.body.password = hash

        // Enregistrement de l'élève dans la base de données
        const nouvelEleve = await Eleve.create(req.body);

        // Réponse réussie
        return res.status(201).json({ message: 'Inscription réussie', eleve: nouvelEleve });


    } catch (err) {
        console.log({message : 'err'})
        return res.status(500).json({ error: 'Erreur lors de l\'inscription', details: err.message });
    }
}
