var express = require('express');
var bodyParser= require("body-parser");
var router = express.Router();


var fs = require('fs');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });  // render is used to display the title in indes.ejs page
});

//create API

// router.get('/rollno', ( req, res, next ) => {

//   var file_path = process.env.HOME + '/registration/public/data.json';
//   var data; 
//   var out_data;

//   fs.readFile( file_path, ( err, data ) => {
//     console.log(out_data);

//     out_data = [
//       {
//         "err": err,
//         "data": JSON.parse(data)
//       }
//     ];
//     res.setHeader( 'Content-Type', 'application/json' );
//     res.send( JSON.stringify( out_data ) );
//     console.log(out_data);
//   } );

// } );

//add data in data.json file
// router.get("/add", function(req,res){
//   // var filepath = process.env.HOME +"/registration/public/data.json";+

//   var filepath = process.cwd() + '/public/data.json';  
//   fs.readFile(filepath,function(err,data){
//   var addData = JSON.parse(data);

//     addData.push( {
//       "rollno": "7254",
//       "name": "testing"
//     } );
    
//     // addData[index] = {
//     //   "rollno": "7254",
//     //   "name": "testing"
//     // };

//     var in_data = JSON.stringify(addData);
//     fs.writeFileSync(filepath, in_data);

//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(in_data));    
//   });
// });


//json filepath
var filepath = process.cwd() + "/public/data.json";

// read json file
router.get("/readjson", function(req,res){
  
  fs.readFile(filepath, function(err,data){
    var outData= JSON.parse(data);
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(outData));
    console.log(outData);
    console.log(err);
  });
});

//write json file
router.get("/writejson", function(req,res){
  fs.readFile(filepath,function(err,data){
  var arrdata= JSON.parse(data)
  arrdata.push({
    "rollno":"101",
    "name":"a"
  },{
      "rollno": "102",
      "name": "b"

  },{
      "rollno": "103",
      "name": "c"
  });
  var outdata= JSON.stringify(arrdata);
  fs.writeFileSync(filepath,outdata)
  res.send(outdata);
  });
});


// update json file
router.get("/updatejson", function(req,res){
  fs.readFile(filepath,function(err,data){
    var a_data= JSON.parse(data);
    console.log(a_data);
    var index= a_data.findIndex(x => x.rollno == "1");
    
    if (index < 0){
      console.log("index is less than 0");
     }else{
     
      a_data[index] = {
        "rollno":"12345",
        "name":"updated name"
      };
      
      var outdata = JSON.stringify(a_data);
      fs.writeFileSync(filepath, outdata);
      res.send(outdata);
    }
  });
});

//delete data in json file
router.get("/deletejson",function(req,res){
fs.readFile(filepath, function(err,data){
  var arraydata= JSON.parse(data);
  var index = arraydata.findIndex(x => x.rollno == "12345");
  
  arraydata.splice( index, 1 );
  
  var out_data= JSON.stringify(arraydata);
  console.log(out_data);
  fs.writeFileSync(filepath,out_data);
  res.send(out_data);

});
});

//dynamically write data in json file

router.get("/deljson", function (req, res) {
  fs.readFile(filepath, function (err, data) {
    var arraydata = JSON.parse(data);
    var rollno = req.query.id;
    var index = arraydata.findIndex(x => x.rollno == rollno);
    console.log(arraydata);
    arraydata.splice(index, 1);
    console.log(index);

    var out_data = JSON.stringify(arraydata);
    console.log(out_data);
    // fs.writeFileSync(filepath, out_data);
    res.send(out_data);

  });
});

module.exports = router;
