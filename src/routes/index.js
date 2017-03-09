'use strict';
const express = require('express');
const router = require('express').Router();


router.get('/', function(req, res, next) {
  return res.render('landingpage/index', {title: 'Bogo is a start to the perfect day!'});
});


router.get('/login', function(req, res, next) {
  return res.render('landingpage/login', {title: 'Login to Bógó'});
});



module.exports = router;
