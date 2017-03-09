'use strict';
const express = require('express');
const router = require('express').Router();


router.get('/', function(req, res, next) {
  return res.render('landingpage/index');
});


router.get('/login', function(req, res, next) {
  return res.render('dashboard/index');
});



module.exports = router;
