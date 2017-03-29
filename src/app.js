'use strict';
const express = require('express');
const parser = require('body-parser');
const jsonfile = require('jsonfile');
const dashboard = require('./routes/dashboard');
const api = require('./routes/api');
var mongoose = require('mongoose');
mongoose.connect('mongodb://main:1504942309@ds137530.mlab.com:37530/bogo');
mongoose.Promise = global.Promise;

const app = express();


// parse incoming requests
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

console.log(__dirname);
// serve static files from /public
app.use(express.static(__dirname + '/../public'));

// view setup
app.set('view engine', 'ejs');


// Routes
app.use('/', dashboard);
app.use('/api', api);

var port = process.env.PORT || 3001;        // set our port

app.listen(port);
