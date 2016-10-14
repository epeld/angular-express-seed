'use strict';

angular.module('myApp.controllers', []).
    factory('ChatSocket', ['socketFactory', function(socketFactory){
	return socketFactory();
    }]).

    factory('Messages', ['ChatSocket', function (socket) {
	var messages = [];
	
	socket.connect();
	socket.on('disconnect', function() {
	    console.error('Disconnect');
	});
	socket.on('connect', function() {
	    console.log('Connected!');
	});
	socket.on('message', function(data) {
	    console.log('Received', data);
	    messages.push(data);
	});

	var send = function(message) {
	    if(message.message === undefined) {
		console.error('Invalid message', message);
		return;
	    }
	    console.log('Going to send', message);
	    socket.emit('message', message);
	};
	

	return {
	    messages : messages,
	    send : send
	};
    }]).

  controller('AppCtrl', ['$scope', 'Messages', function ($scope, messages) {

      var nextMessage = $scope.nextMessage = {};
      var user = $scope.user = {};
      
      $scope.history = {messages : messages.messages};
      $scope.send = function() {
	  var msg = {from : user.name};
	  angular.extend(msg, nextMessage);
	  nextMessage = $scope.nextMessage = {};
	  
	  messages.send(msg);
      };
      $scope.hasTag = function (message, tag) {
	  if(!message.tags) return false;
	  return message.tags.indexOf(tag) !== -1;
      };
  }]).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
