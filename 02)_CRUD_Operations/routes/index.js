var express = require('express');
var router = express.Router();
var fs= require("fs");
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//read json file
var filepath= process.cwd() + "/public/data.json";

router.get("/readjson",function(req,res){
  fs.readFile(filepath,function(err,data){
    var arr_data= JSON.parse(data);
    res.send(arr_data);
  });
});


// add data in json file
router.post("/addjson", function(req,res){
  fs.readFile(filepath,function(err,data){
    var arr_data= JSON.parse(data);
    var rollno= req.query.rollno;
    var name= req.query.name;
    if(typeof rollno != 'undefined' & typeof name != 'undefined' ){
      arr_data.push({rollno:rollno,name:name});
      var out= JSON.stringify(arr_data);
      fs.writeFileSync(filepath,out);
      res.send(out);
    }else{
      res.send("missing query parameters");
    }
    
  });
});


//update json file
router.get("/updatejson",function(req,res){
  fs.readFile(filepath,function(err,data){
    var arr_data= JSON.parse(data);
    var rollno= req.query.rollno;
    var name= req.query.name;
    var index= arr_data.findIndex(x => x.rollno== rollno);
    arr_data[index]= {rollno: rollno,name:name};
    console.log(arr_data);
    fs.writeFileSync(filepath,arr_data);
    res.send(arr_data);
  });
});

//get single record
router.get("/singlerecord", function(req,res){
  fs.readFile(filepath,function(err,data){
    var array_data= JSON.parse(data);
    var rollno= req.query.rollno;
    var name= req.query.name;
    var index= array_data.findIndex(x => x.rollno == rollno);
    res.send(array_data[index]);
  });
});



//add data
router.get("/rollno/:rollno/name/:name", function(req,res)
{
  fs.readFile(filepath,function(err,data){
    var ar_data= JSON.parse(data);
    var qry= req.params;
    var rollno = qry.rollno;
    var name= qry.name;
    ar_data.push({rollno:rollno, name:name});
    fs.writeFile(filepath,JSON.stringify(ar_data));
    res.send(ar_data);
  });
});


//http request to get data from other API
router.get("/posts",function(req,res){
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then(function(response){ 
    res.send(response.data);
  }).catch(function(error){ 
  });
  
});


module.exports = router;
