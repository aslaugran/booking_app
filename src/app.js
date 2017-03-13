'use strict';
const express = require('express');
const parser = require('body-parser');
const router = require('./routes');
const jsonfile = require('jsonfile');
const dashboard = require('./routes/dashboard');
const api = require('./routes/api');
const db = require('./models/db');


const app = express();


// parse incoming requests
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

console.log(__dirname);
// serve static files from /public
app.use(express.static(__dirname + '/../public'));

// view setup
app.set('view engine', 'ejs');


// Routes
app.use('/', router);
app.use('/dashboard', dashboard);
app.use('/api', api);

var port = process.env.PORT || 3001;        // set our port

app.listen(port);
