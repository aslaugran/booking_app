const mongoose = require('mongoose');
// mongodb connection
mongoose.connect("mongodb://localhost:27017/booking-app");
var db = mongoose.connection;
