var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var https = require('https');
var request = require('request');

function listRoute() {
  var list = new express.Router();
  list.use(cors());
  list.use(bodyParser());


  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware

  list.get('/', function(req, res) {
     
        var host = 'https://customers-2445581559600.apicast.io';
        var path = '/customers/list/';
        var userKey = '5a8a6c1054a1782d76539beb85162a72';

        request({url: host + path + '?user_key=' + userKey}, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                var parsed = JSON.parse(body);
                res.json({list: parsed.list});
            }
        })
  });

  return list;
}

module.exports = listRoute;
