const express = require("express");
const frouter = express.Router();

const formateurCtrl = require("../controllers/c_formateur");

const Guardlimiter = require("../middleware/GuardLimiter");
const GuardPassword = require("../middleware/GuardPasswordValidator");

/**Routage User */

//router.post("/signup", GuardPassword, userCtrl.signup);
//router.post("/login", Guardlimiter, userCtrl.login);

frouter.post("/signup", formateurCtrl.signup);
frouter.post("/login", formateurCtrl.login);

module.exports = frouter;