'use strict';
const express = require('express');
const router = require('express').Router();
const parser = require('body-parser');
const mongoose = require('mongoose');
const Partner = require('../../models/partner');


router.get('/', function (req, res) {
  return res.render('dashboard/pages/partners/index', {title: 'Admin Area'});
});

// SINGLE PARTNER
router.route('/partners/:partner_id')

  .get(function(req, res) {
      Partner.findById(req.params.partner_id, function(err, partner) {
          if (err)
            res.send(err);
            res.json(partner);
          })
    })
  .put(function(req, res) {
      Partner.findById(req.params.partner_id, function(err, partner) {
          if (err)
            res.send(err);
            Partner.name = req.body.name;
            partner.save(function(err) {
            if (err)
              res.send(err);
              res.json({ message: 'Partner updated!' });
        })
    })
    .delete(function(req, res) {
        Partner.remove({
            _id: req.params.partner_id
        }, function(err, partner) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        })
  });
});


// PARTNERS
router.route('/partners')

  .post(function(req, res) {
    var partner = new Partner();
         partner.name = req.body.name;
         partner.email = req.body.email;
         partner.phone = req.body.phone;
         partner.logo = req.body.logo;
         partner.url = req.body.url;
         partner.save(function(err) {
             if (err)
                 res.send(err);
             res.json({ message: 'Partner created!' });
   });
})
  .get(function(req, res) {
    Partner.find(function(err, partners) {
     if (err)
         res.send(err);
        return res.render('dashboard/pages/partners/index', {title: 'Admin Area', partners: partners});
   });
});



module.exports = router;
