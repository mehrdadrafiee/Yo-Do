'use strict';

/**
 * @ngdoc function
 * @name yoDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoDoApp
 */
angular.module('yoDoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];
    $scope.$watch('todos', function () {
    	localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
    	if ($scope.todo != "") {
    	console.log("Enter something");
    	$scope.todos.push($scope.todo);
    }
    	$scope.todo = '';
    }
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };
  });