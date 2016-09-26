var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
