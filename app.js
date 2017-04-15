/**
 * Created by jaythe20 on 15/04/17.
 */
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var mongoose = require('mongoose');
var mongoURI = "mongodb://jaythe2012:kernel2012@localhost:27017/optingz";
var mongoDB = mongoose.connect(mongoURI).connection;
mongoDB.on('error', function (err) {
    console.log(err.message);
});
mongoDB.once('open', function () {
    console.log("mongodb connection open");
});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

//error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//Export app
module.exports = app;







