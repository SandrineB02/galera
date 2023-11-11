const express = require("express");
const erouter = express.Router();

const eleveCtrl = require("../controllers/c_eleve");

const Guardlimiter = require("../middleware/GuardLimiter");
const GuardPassword = require("../middleware/GuardPasswordValidator");

/**Routage User */

//router.post("/signup", GuardPassword, userCtrl.signup);
//router.post("/login", Guardlimiter, userCtrl.login);

erouter.post("/signup", eleveCtrl.signup);
erouter.post("/login", eleveCtrl.login);

module.exports = erouter;