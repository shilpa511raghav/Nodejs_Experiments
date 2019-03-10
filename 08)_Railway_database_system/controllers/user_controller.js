var User = require("../models/User");



module.exports = class RegisterUser {
    constructor(){
        
    }
    insert(req,res,next){
        var firstname = req.body.firstname;
        var lastname = req.body.lastname
        var email= req.body.email;
        var gender = req.body.gender;
        var age = req.body.age;
        var security_quest= req.body.ques;
        var security_ans = req.body.ans;
        var password = req.body.password;
        var confirm_pass = req.body.confirm_pass;

    }

}