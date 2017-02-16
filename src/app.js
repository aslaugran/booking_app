'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./routes');
var jsonfile = require('jsonfile');

var app = express();



// Use public
app.use('/', express.static('public'));
app.use(parser.json());


// Routes
app.use('/', router);

var port = process.env.PORT || 3000;        // set our port

app.listen(port);
