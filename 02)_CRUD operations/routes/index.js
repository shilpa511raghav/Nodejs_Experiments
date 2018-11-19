var express = require('express');
var router = express.Router();
var fs= require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//read json file
filepath= process.cwd() + "/public/data.json";
router.get("/readjson",function(req,res){
  fs.readFile(filepath,function(err,data){
    var arr_data= JSON.parse(data);
    res.send(arr_data);
  });
});


// add operation in json file
router.get("/addjson", function(req,res){
  fs.readFile(filepath,function(err,data){
    var arr_data= JSON.parse(data);
    var rollno= req.query.rollno;
    var name= req.query.name;
    if(typeof rollno != 'undefined' & typeof name != 'undefined' ){
      arr_data.push({rollno,name});
      var out= JSON.stringify(arr_data);
      fs.writeFileSync(filepath,out);
      res.send(out);
    }else{
      res.send("missing query parameters");
    }
    
  });
});



module.exports = router;
