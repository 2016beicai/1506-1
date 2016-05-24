'use strict';

/**
 * @ngdoc overview
 * @name j5App
 * @description
 * # j5App
 *
 * Main module of the application.
 */
angular
  .module('j5App', [
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
