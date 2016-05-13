//var wsUri = 'ws://echo.websocket.org';
var wsUri = 'ws://localhost:8080';
var token = 'hello';
var options = {
  headers: {
      "Authorization" : "JWT " + token
  }
};

var client = new WebSocket(wsUri);
client.onopen = function(evt){
  console.log('connected');
  console.log(evt);
};

client.onmessage = function(evt){
  console.log('new message', evt.data);
  var list = document.getElementById('messages');
  var li = document.createElement('li');
  li.innerHTML = evt.data;
  list.appendChild(li);
};

client.onclose = function(evt){
  console.log(evt);
  console.log('disconnected');
};

client.onerror = function(evt){
  console.log('cannot connect', evt);
};

function sendMessage(){
  var text = document.getElementById('message').value;
  client.send(text);
};

function sayHello(){
  client.send('Hallå Alessio');
}