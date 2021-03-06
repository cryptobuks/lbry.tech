// server.js

var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

// enable ssl redirect
app.use(sslRedirect(['other','development', 'staging', 'production']));

var port = process.env.PORT || 8080;
app.listen(port);

console.log('server started '+ port);
