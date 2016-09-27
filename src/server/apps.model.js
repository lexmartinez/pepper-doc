var mongoose = require('mongoose');

var appSchema = mongoose.Schema({
    name: String,
    owner: String,
    description: String,
    key: String,
    html_url: String
});

var AppModel = mongoose.model('App', appSchema);

module.exports = AppModel;
