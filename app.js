var express = require('express');
var logger = require('morgan');
var path = require('path');

var app = express(); 
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


var port = process.env.PORT || '3000';
app.set('port', port);

http.listen(port, () => {
  console.log('listening on ' + port);
});