const activities = require('express').Router();
const all = require('./all');
const single = require('./single');

// activities.param('activityId');

activities.get('/:activityId', single);
activities.get('/', all);

module.exports = activities;
