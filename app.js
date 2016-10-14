
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/*
 * Middleware
 */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static('public/'));

var env = process.env.NODE_ENV || 'development';

app.use(errorHandler());

/**
 * Routes
 */

app.post('/api/', api.postMessage);
app.get('*', routes.index);


/**
 * Start Server
 */
var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});


/**
 * Socket IO
 */
var io = require('socket.io')(server);
app.set('io', io);
io.on('connection', function(socket) {
    // Greet all new clients
    socket.emit('message', { 'message': 'Hello from Server', 'from' : 'server', 'tags': ['system'] });
    socket.broadcast.emit('message', { 'message' : 'New User Connected', 'from' : 'server', 'tags': ['system']});
    
    socket.on('message', function(data) {
	console.log('Received message', data);
	
	// Publish all received messages as is
	api.publishMessage(data, io);
    });
});




