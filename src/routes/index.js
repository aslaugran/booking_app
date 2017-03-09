'use strict';
const express = require('express');
const jsonfile = require('jsonfile');
const router = require('express').Router();
const Daytours = require('../data/Daytours.json');
const DaytoursCategories = require('../data/DaytoursCategories.json');
var Tour = require('../models/tour');


router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.get('/admin-area', function(req, res, next) {
  return res.render('/dashboard/pages/index', { title: 'Home' });
});

router.route('/api/tours')





    // create a tour (accessed at POST http://localhost:3001/api/tours)
    .post(function(req, res) {

        var tour = new Tour();      // create a new instance of the Tour model
        tour.name = req.body.name;  // set the tour name (comes from the request)

        // save the tour and check for errors
        tour.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'tour created!' });
        });

    });

module.exports = router;
