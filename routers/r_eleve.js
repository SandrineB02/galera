/*** Import used modules */
const express = require("express");
const eleveCtrl = require("../controllers/c_eleve");


/*** Get Expresss's router */
let router = express.Router();




/**Routage User */

//router.post("/signup", GuardPassword, userCtrl.signup);
//router.post("/login", userCtrl.login);

/************************************/
/*** Routes for eleve resource */

router.post('/', eleveCtrl.addEleve);
router.get('/', eleveCtrl.getAllEleves)
router.get('/:id', eleveCtrl.getEleve)
router.put('', eleveCtrl.addEleve)
router.patch('/:id', eleveCtrl.updateEleve)
router.delete('/:id', eleveCtrl.deleteEleve)

module.exports = router;