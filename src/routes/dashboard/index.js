'use strict';
const express = require('express');
const router = require('express').Router();
const parser = require('body-parser');
const mongoose = require('mongoose');
const tour = require('../../models/tour');



router.get('/', function (req, res) {
  return res.render('dashboard/pages/dashboard', {title: 'Admin Area'});
});

router.get('/partners', function (req, res) {
  return res.render('dashboard/pages/partners/index', {title: 'Partners'});
});

router.get('/bookings', function (req, res) {
  return res.render('dashboard/pages/bookings/index', {title: 'Bookings'});
});


// TOURS ROUTES
router.get('/tours', function (req, res) {
  return res.render('dashboard/pages/tours/index', {title: 'Tours'});
});

router.get('/tours/golden-circle', function (req, res) {
  return res.render('dashboard/pages/tours/single', {title: 'Golden Circle'});
});


router.get('/bookings', function (req, res) {
  res.send('Bookings home');
});

  router.get('/tours', function(req, res) {
          // use mongoose to get all nerds in the database
          tour.find(function(err, tours) {

              // if there is an error retrieving, send the error.
                              // nothing after res.send(err) will execute
              if (err)
                  res.send(err);

              res.json(tours); // return all nerds in JSON format
          });
});

router.get('/tours/create', function (req, res) {
  return res.render('dashboard/pages/tours/create', {title: 'Create a tour'});
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
