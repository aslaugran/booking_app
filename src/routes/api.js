const routes = require('express').Router();
const activities = require('./activities');
const cart = require('./cart');

routes.use('/activities', activities);
routes.use('/cart', cart);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
