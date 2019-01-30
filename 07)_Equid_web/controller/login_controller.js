var Login = require('../model/Login');
var url="https://mw1g0fofc8.execute-api.us-east-2.amazonaws.com/eQuidProAPI/AdminUser?UserId="
var loginInstance=new Login(url);

module.exports.renderloginpage = function (req, res) {
  
  loginInstance.renderloginpage();  
};

