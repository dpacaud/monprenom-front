'use strict';

/* Controllers */

angular.module('monPrenom.controllers', []).
  controller('MyCtrl1', ['$scope','$http',function($scope,$http) {
  	$scope.testButton = function(){
  		$http.get('http://localhost:8080/random').success(function(data) {
		    $scope.result = data;
		  });
  		//alert("test");
  	}
  }])
  .controller('MyCtrl2', [function() {

  }]);