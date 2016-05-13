var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log(ws);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    wss.clients.forEach(function each(client) {
      client.send(message);
    });
  });
  ws.on('close', function(){
    wss.close();
  });
});