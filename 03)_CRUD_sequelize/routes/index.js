var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//create connection using seueqlize 
const Sequelize= require("sequelize");
const connection =new Sequelize('crud', 'root','',{
  host:"localhost",
  dialect:'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// test  created connection
connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  //create table or we can say create model named std here.
  const std = connection.define('student', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    rollno: {
      type: Sequelize.INTEGER
    },
    approved:{
      type:Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

//insert single record in database using persistent create method. 
//create function create table if not exists and  doesnot need to use save method to save the record in database it automatically saves data .
// and if {force: 'true'}is used then it overwrite the existing table i.e it recreates same table so previous data will get removed. 
// to check inserted record we can write another promise which take result of previous.
connection.sync({force:'true'}).then(()=>{
  std.create({
    firstName: "michael",
    lastName:"peterson",
    rollno: 10
  }).then((insertedRecord)=>{
console.log(insertedRecord.dataValues);
  });
});



//insert single record in database using non persistent build method which use save function to persist the data in database permanently
//build method is helpful when we use many to many assosciation so we can save it in a variable to recognize variables.
  // connection.sync().then(function(){
  //   // Table created if doesnot exist
  //   std.build({
  //     firstName: 'john',
  //     lastName: 'winson',
  //     rollno:1
  //   }).save();
    
  // });

  // //other way of writing build method(build method without chaining the save method)
  // connection.sync().then(()=>{
  //   var stud= std.build({
  //     firstName: "david",
  //     lastName:"warner",
  //     rollno: 12
  //   });
  //   stud.save()
  // });


//push multiple records
// student.bulkCreate([
//   {firstName: 'shilpa',lastName: 'raghav',rollno:1},
//   {firstName: 'sourabh',lastName: 'raghav',rollno:2}
// ]).then(()=>{return std.findAll})
// .then((std)=>{console.log(std)});



//

module.exports = router;
