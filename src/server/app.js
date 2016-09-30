var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://pepper-doc:pepper-doc-123@ds041536.mlab.com:41536/pepper-doc');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var Profile = require('./profiles.model.js');
var AppModel = require('./apps.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  // APIs

  // search
  app.get('/api/search/:key', function(req, res) {
    Profile.find({$or: [{name: new RegExp('.*'+req.params.key+'.*', "i")},
    {login: new RegExp('.*'+req.params.key+'.*', "i")}]}, function(err, obj) {
      if(err) return console.error(err);

      AppModel.find({$or: [{name: new RegExp('.*'+req.params.key+'.*', "i")},
      {description: new RegExp('.*'+req.params.key+'.*', "i")}]}
      , function(err2, obj2) {
        if(err2) return console.error(err2);

        var all = {"users":obj, "apps":obj2};
        res.json(all);
      })
    })
  });

  //explore

  app.get('/api/apps/explore/:size', function(req, res) {
    AppModel.aggregate({$sample:{size:Number(req.params.size)}}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
    });
  });

  // find by login
  app.get('/api/profiles/:login', function(req, res) {
    Profile.findOne({"login": req.params.login}, function(err, obj) {
      if(err) return console.error(err);

      AppModel.find({owner:req.params.login}, function(err2, obj2) {
        if(err2) return console.error(err2);
        var profile = {"profile":obj, "apps":obj2};
        res.json(profile);
      })
    });
  });

  //get App by id
  app.get('/api/apps/:profile/:id', function(req, res) {
    AppModel.findOne({id:req.params.id, owner:req.params.profile}, function(err, obj) {
      if(err) return console.error(err);
      res.json(obj);
    });
  });

  // select all
  app.get('/profiles', function(req, res) {
    Profile.find({}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
    });
  });

  // count all
  app.get('/profiles/count', function(req, res) {
    Profile.count(function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });

  // create
  app.post('/profiles', function(req, res) {
    var obj = new Profile(req.body);
    obj.save(function(err, obj) {
      if(err) return console.error(err);
      res.status(200).json(obj);
    });
  });

  // update by id
  app.put('/profiles/:id', function(req, res) {
    Profile.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });

  // delete by id
  app.delete('/profiles/:id', function(req, res) {
    Profile.findOneAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });


  // all other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('pepper-doc backend listening on port '+app.get('port'));
  });
});

module.exports = app;
