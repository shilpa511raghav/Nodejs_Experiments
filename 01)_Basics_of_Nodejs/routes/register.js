var express = require("express");
var router= express.Router();

router.get("/", function(req,res,next){
    res.render("register",{registeruser:"register in this page"});
});

var app = express();

//get register/login page 
app.get("/", function (req, res) {
    res.render("register", { title: "Form data" });
});

module.exports= router;