var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var NationalParkModel = require('../models/NPmodel.js');

//req och res här är request- respektive response-objekten
router.get('/', function(req, res, next) {

//find är Mongoose funktion.
   NationalParkModel.find().then(function(nationalparkerna) {

//Om det inte uppstår fel så skicka bilarna i jsonformat
   res.json(nationalparkerna);
   });

});

module.exports = router;
