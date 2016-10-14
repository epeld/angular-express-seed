var socket = require('socket.io-client').connect('http://localhost:3000');

socket.on('message', function (data) {
    console.log(data);
});

socket.on('connection', function() {
    // Send opening greeting
    socket.emit('message', { 'message': 'Hello!'});
});
