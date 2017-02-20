const carts = require('express').Router();
const all = require('./all');
const single = require('./single');

// activities.param('activityId');

carts.get('/:sessionId', single);
// carts.get('/', all);

module.exports = activities;
