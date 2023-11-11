/*** Import used modules */
const express = require("express");
const formateurCtrl = require("../controllers/c_formateur");

/*** Get Expresss's router */
const router = express.Router();


/**Routage User */

//router.post("/signup", GuardPassword, userCtrl.signup);
//router.post("/login", Guardlimiter, userCtrl.login);

//router.post("/signup", formateurCtrl.signup);
//router.post("/login", formateurCtrl.login);

/*** Routes for formateur resource */
router.post('/', async (req, res) => {
    try {
        // Récupération des données du corps de la requête
        const { nom, prenom, email, password } = req.body;

        // Validation des données (ajustez selon vos besoins)
        if (!nom || !prenom || !email || !password) {
            return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
        }

        // Création du formateur dans la base de données
        const newFormateur = await Formateur.create({
            nom,
            prenom,
            email,
            password,
        });

        // Réponse avec le formateur créé
        res.status(201).json({ message: 'Formateur créé avec succès', formateur: newFormateur });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la création du formateur.' });
    }
});


router.get('/', formateurCtrl.getAllFormateurs)
router.get('/:id', formateurCtrl.getFormateur)
router.put('', formateurCtrl.addFormateur)
router.patch('/:id', formateurCtrl.updateFormateur)
router.delete('/:id', formateurCtrl.deleteFormateur)

module.exports = router

