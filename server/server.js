var express = require("express");
var app = express();
var r = require('./modules/randomNumber.js');

app.get('/randomNumber', function(req, res){
  console.log('request for randomNumber');
  //res.send('blah');
  res.send(r(100,1000000).toString());
});

var path = require('path');
app.get('/*', function(request, response){
  console.log('got a request', request.params[0]);

  var file = request.params[0] || "/views/index.html";
  response.sendFile(path.join(__dirname, "/public/", file));


  //cant make more than 1 response.send otherwise ERROR
  //response.send("request received!");//send to DOM
});

app.listen(5000, function(){
  console.log('listening on port 5000');
});
