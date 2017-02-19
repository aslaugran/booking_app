'use strict';

var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();
var Daytours = require('../data/Daytours.json');
var DaytoursCategories = require('../data/DaytoursCategories.json');
var User = require('../models/user');

// GET LIST OF ALL DAYTOURS
router.get('/daytours', function(request, response) {
		response.json(Daytours);
});

router.get('/daytours/categories', function(request, response) {
		response.json(DaytoursCategories);
});


router.get('/', function(reguest, response){
   response.send("Dashboard Home");
});

module.exports = router;
