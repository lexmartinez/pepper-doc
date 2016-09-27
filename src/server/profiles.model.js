var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    name: String,
    login: String
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
