var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//for parsing application/json
app.use(bodyParser.json());

//for parsing application/xwww
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));  
app.use(express.json());  //handle get method and create jsons and send back jsons from server.
app.use(express.urlencoded({ extended: false })); //handle all post delete put etc methods except get method.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/login",loginRouter);
app.use("/register",registerRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(410));
});

// error handler or error handling middleware
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.post("/",function(req,res){
  console.log(req.body);
  res.send("received your request!");
});


module.exports = app;
