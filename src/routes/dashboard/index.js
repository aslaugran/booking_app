'use strict';
const express = require('express');
const router = require('express').Router();


router.get('/', function (req, res) {
  res.send('Dashboard home');
});


router.get('/bookings', function (req, res) {
  res.send('Bookings home');
});

router.get('/tours', function (req, res) {
  res.send('Tours home');
});





module.exports = router;

///////// 1.BOOKINGS

// 1.BOOKINGS INDEX (LIST OF BOOKINGS)

// 1.1 BOOKING SINGLE


///////// TOURS

// 1.TOURS INDEX (LIST OF TOURS)

// 1.1 TOUR SINGLE

// 1.2 TOUR CREATE



///////// PARTNERS

// 1.PARTNERS INDEX (LIST OF PARTNERS)

// 1.1 PARTNERS SINGLE

// 1.2 PARTNERS CREATE
