/*** Import used modules */
const express = require("express");
const formateurCtrl = require("../controllers/c_formateur");
const JwtCheck = require("../middleware/jwtCheck")
/*** Get Expresss's router */
const router = express.Router();


/**Routage User */


//router.post("/signup", formateurCtrl.signup);
//router.post("/login", JwtCheck, formateurCtrl.login);

/*** Routes for formateur resource */

//router.post('/', formateurCtrl.addFormateurs)
router.get('/', formateurCtrl.getAllFormateurs)
router.get('/:id', formateurCtrl.getFormateur)
router.put('/:id', formateurCtrl.updateFormateur)
router.delete('/:id', formateurCtrl.deleteFormateur)

module.exports = router

