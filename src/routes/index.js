'use strict';

var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();


router.get('/', function(reguest, response){
   response.send("Api home");
});

module.exports = router;
