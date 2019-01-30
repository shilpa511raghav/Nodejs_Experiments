module.exports = class Login{
    constructor(url){
        this.url= url;
    }

    renderloginpage(req,res,next){
        res.render("login",{title:"express"});
    }
};   
       
