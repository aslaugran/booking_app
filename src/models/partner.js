var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PartnerSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    logo: String,
    url: String,
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Partner', PartnerSchema);
