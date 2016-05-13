# Simple Node.js HTTP webserver

This is a very simple HTTP webserver, written with Node.js and Express framework.
The aim of this project is to have a lightweight and quick to run HTTP webserver, that can be used to serve static html web pages.

### Requirements

Just [Node.js](http://nodejs.org)

### How to install it

Just run `npm install` on the command line to install the dependencies.

### How to run it

Just execute the following command:

```
node server.js
```

Once the server is running, just open the web browser and go to the address `http://localhost:7999`, put your static files on the `/public` and you are ready to go :-)

### Configuration

By editing the `config` object you can set the **port** and the **address** to listen, and you can redefine what folder to use as a **static** folder for your static files.
If you want to allow other computers on your network to see your webserver, just set the `host` to `0.0.0.0`, as shown on the example:

```
var config = {
  port: 7999,
  host: '0.0.0.0',
  publicRoot: __dirname + '/public'
};
```

So if your computer IP address in the internal network is `192.168.1.25` for example, other users can see the webserver by going to the address `http://192.168.1.25:7999`.