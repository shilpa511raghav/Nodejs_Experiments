var express = require("express");
var router = express.Router;

var login = require("../controller/login_controller");
var loginCntrl= new login();


router.get("/",[loginCntrl.renderloginpage]);

module.exports = router;