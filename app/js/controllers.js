'use strict';

/* Controllers */

angular.module('monPrenom.controllers', []).
  controller('RandomNameController', ['$scope','$http','$location',function($scope,$http,$location) {
    $http.get('http://localhost:8080/random').success(function(data) {
        $scope.result = data;
      });

    $scope.backToHome = function(){
      //alert("tata");
      $location.path( "/" );
    }
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('HomeController', ['$scope','$http','$location',function($scope,$http,$location) {
    $scope.getRandomName = function(){
      $location.path( "/randomName");
    }
  }]);
