/*** Import used modules */
const express = require("express");
const eleveCtrl = require("../controllers/c_eleve");


/*** Get Expresss's router */
let router = express.Router();


const JwtCheck = require("../middleware/jwtCheck")

/**Routage Eleve */

//router.post("/signup", eleveCtrl.signup);
//router.post("/login", JwtCheck, eleveCtrl.login);

/************************************/
/*** Routes for eleve resource */

//router.post('/', eleveCtrl.addEleve);
router.get('/', eleveCtrl.getAllEleve)
router.get('/', eleveCtrl.addEleve)
router.get('/:id', eleveCtrl.getEleve)
router.put('/:id', eleveCtrl.updateEleve)
router.delete('/:id', eleveCtrl.deleteEleve)

module.exports = router;