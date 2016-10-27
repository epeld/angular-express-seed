'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'ui.router'
]).
config(['$stateProvider', function ($stateProvider) {

    var states = [
        {
            name: 'sites',
            url: 'sites',
            templateUrl: 'partials/partial1',
            controller: 'MyCtrl1'
        },
        {
            name: 'stock',
            url: 'stock',
            templateUrl: 'partials/partial2',
            controller: 'MyCtrl2'

        }
    ];

    states.map(s => $stateProvider.state(s));

    /*
  $routeProvider.
    when('/sites', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
  */

}]);
