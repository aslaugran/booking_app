'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./routes');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var jsonfile = require('jsonfile');

var app = express();

// Mongodb connection
mongoose.connect("mongodb://localhost:27017/booking-app");
var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));


// Use public
app.use('/', express.static('public'));
app.use(parser.json());


// Routes
app.use('/', router);

var port = process.env.PORT || 3001;        // set our port

app.listen(port);
