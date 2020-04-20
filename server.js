//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
if(process.env.NODE_ENV==='production'){
  const port =  process.env.PORT_PRODUCTION || 8080;}
else {
  const port =  process.env.PORT || 8080;
}
const app = express();
app.use(favicon(__dirname + '/build/icon.png'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);