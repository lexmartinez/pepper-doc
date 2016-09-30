var mongoose = require('mongoose');

var operationSchema = mongoose.Schema({
  name: String,
  url: String,
  method: String
});

var serviceSchema = mongoose.Schema({
  name: String,
  operations: [operationSchema]
});

var appSchema = mongoose.Schema({
    name: String,
    owner: String,
    description: String,
    key: String,
    html_url: String,
    services: [serviceSchema]
});

var AppModel = mongoose.model('App', appSchema);

module.exports = AppModel;
