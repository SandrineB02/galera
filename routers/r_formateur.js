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


router.get('/', formateurCtrl.getAllFormateurs)
router.get('/:id', formateurCtrl.getFormateur)
router.put('', formateurCtrl.addFormateur)
router.patch('/:id', formateurCtrl.updateFormateur)
router.delete('/:id', formateurCtrl.deleteFormateur)

module.exports = router

