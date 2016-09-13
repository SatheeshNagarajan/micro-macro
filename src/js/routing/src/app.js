
var express = require('express');
var util = require('util')
var app = express();
var reqCount = 0;


app.get('/', function(req, res) {

  var looping = function looping() {

    for (var index = 0; index<100; index++){
      console.log(index);
    }

  }

  console.log(looping());

  res.status(200).send({"result":"Function Executed"});
  console.log(++reqCount);
});
app.listen(3000, function () {
  console.log('listening on port 3000!');
});

process.on('uncaughtException', function(err) {
  console.info(util.inspect(err, {colors: true}));
});