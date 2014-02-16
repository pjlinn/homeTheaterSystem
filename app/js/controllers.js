'use strict';

/* Controllers */

var homeTheaterApp = angular.module('homeTheaterApp', []);

homeTheaterApp.controller('homeTheaterCtrl', ['$scope', '$http', 
	function($scope, $http){
	$http.get('components/homeTheaterSystemComponents.json').success(function(data) {
		$scope.homeTheaterComponents = data.splice(0,1);
	});
	$scope.orderProp = 'cost';
}]);