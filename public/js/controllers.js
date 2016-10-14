'use strict';

angular.module('myApp.controllers', []).
    factory('ChatSocket', ['socketFactory', function(socketFactory){
	return socketFactory();
    }]).

    factory('Messages', ['ChatSocket', function (socket) {
	var messages = [];
	var obj;
	var status = {};
	
	socket.connect();
	socket.on('disconnect', function() {
	    console.error('Disconnect');
	    status.connectionStatus = 'disconnected';
	});
	socket.on('connect', function() {
	    console.log('Connected!');
	    status.connectionStatus = 'connected';
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

	status.connectionStatus = 'connecting';
	

	obj = {
	    messages : messages,
	    send : send,
	    status : status
	};

	return obj;
    }]).

  controller('AppCtrl', ['$scope', 'Messages', function ($scope, messages) {

      var nextMessage = $scope.nextMessage = {};
      var user = $scope.user = {
	  userId : Math.random().toString(36).substring(7)
      };

      // $scope.colors = ['green', 'red', 'orange', 'pink'];
      
      $scope.history = {messages : messages.messages, status : messages.status};
      $scope.send = function() {
	  var msg = {from : user.name};
	  angular.extend(msg, nextMessage);
	  nextMessage = $scope.nextMessage = {};
	  
	  messages.send(msg);
	  $scope.pinnedData = msg;
      };
      $scope.hasTag = function (message, tag) {
	  if(!message.tags) return false;
	  return message.tags.indexOf(tag) !== -1;
      };

      $scope.setHoveredMessage = function(ix) {
	  $scope.hoverIndex = ix;
	  if(ix !== null && ix !== pinnedIndex) {
	      $scope.pinnedIndex = null;
	  }
      };

      $scope.togglePinnedMessage = function(ix) {
	  if($scope.pinnedIndex === ix) {
	      $scope.pinnedIndex = null;
	      $scope.pinnedData = null;
	  }
	  else {
	      $scope.pinnedIndex = ix;
	      $scope.pinnedData = messages.messages[ix];
	  }
      };

      $scope.getTagColor = function(tag) {
	  return 'skyblue';
      };

      $scope.prettyJSON = function(data) {
	  return JSON.stringify(data, null, 2);
      };
  }]).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
