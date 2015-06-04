'use strict';

/**
 * @ngdoc function
 * @name yoDoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoDoApp
 */
angular.module('yoDoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
