var express = require('express'),
app = express();

var config = {
  port: 8001,
  host: '127.0.0.1',
  publicRoot: __dirname + '/public'
};

// set static files location
// used for requests that our frontend will make
app.use(express.static(config.publicRoot));

//start the server
app.listen(config.port, config.host, function(){
  console.log('Listening at the address ' + config.host + ':' + config.port);
});

