'use strict';
const express = require('express');
const jsonfile = require('jsonfile');
const router = require('express').Router();
let Tour = require('../models/tour');


router.get('/', function(req, res, next) {
  return res.send('Front landing page');
});



module.exports = router;
