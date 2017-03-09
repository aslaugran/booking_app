'use strict';
const express = require('express');
const router = require('express').Router();


router.get('/', function (req, res) {
  res.send('Api home');
});


module.exports = router;
