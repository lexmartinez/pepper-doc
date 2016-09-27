var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    name: String,
    login: String,
    avatar_url: String,
    html_url: String
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
