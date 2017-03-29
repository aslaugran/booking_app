'use strict';
const express = require('express');
const router = require('express').Router();


router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function (req, res) {
  res.send('Api home');
});


module.exports = router;
