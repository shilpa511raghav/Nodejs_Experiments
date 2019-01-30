var express = require("express");
var router = express.Router;

var Login= require("../model/login");
var url="https://mw1g0fofc8.execute-api.us-east-2.amazonaws.com/eQuidProAPI/AdminUser?UserId=ronfi@equidPro.com";

var loginInstance= new Login(url);


router.get("/",[loginInstance.renderloginpage]);

module.exports = router;