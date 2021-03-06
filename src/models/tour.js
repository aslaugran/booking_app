var mongoose = require('mongoose');
var TourSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      adult: { type: String },
      teenagers: { type: String },
      children: { type: String }
    },
    duration: {
      type: String,
    },
    season: {
      type: String,
    },
    tourid: {
      type: String,
      trim: true,
      unique: true
    },
    description: {
      type: String,
    },
    departures: [String],
    photos: [String],
    included: [String],
    guidance: [String],
    availabledays: [String],
    categories: [String],
});

module.exports = mongoose.model('Tour', TourSchema);
