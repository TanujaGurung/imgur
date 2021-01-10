var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var feedsRouter= require('./routes/feeds')

var testAPIRouter = require("./routes/testAPI");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb://localhost/Feedsdb',{useNewUrlParser:true}).then(() => {
  console.log("Connected to Database");  // connecting to mongodb database using mangoose
  }).catch((err) => {
      console.log("Not Connected to Databaspe ERROR! ", err);
    });
    app.use(express.json()); // using middlewire to accept json data
app.use(express.urlencoded({extended:false}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
const bodyParser = require("body-parser");
const { urlencoded } = require('express');
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.json());

app.use("/testAPI", testAPIRouter);
app.use('/feeds',feedsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
