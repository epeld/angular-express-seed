'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

      $scope.name = 'you';
      $scope.nextMessage = {};

      $scope.history = {
	  messages : [{
	      message : 'Test message'
	  }]
      };

      $scope.send = function() {
	  $http({
	      method: 'POST',
	      url: '/api/'
	  }).
	  error(function (data, status, headers, config) {
	      console.error(data, status, headers, config);
	  });
      };

      /*
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
    */

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
