var mongoose = require('mongoose');

var responseSchema = mongoose.Schema({
  code: String,
  body: String
});

var paramSchema = mongoose.Schema({
  name: String,
  type: String,
  description: String
});

var operationSchema = mongoose.Schema({
  name: String,
  url: String,
  method: String,
  notes: [String],
  params: [paramSchema],
  responses: [responseSchema]
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
    introduction: String,
    services: [serviceSchema]
});

var AppModel = mongoose.model('App', appSchema);

module.exports = AppModel;
