'use strict';
var API_URL = "http://monprenom.herokuapp.com/"
/* Controllers */

angular.module('monPrenom.controllers', []).
  controller('affichePrenomController', ['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    //alert($routeParams.name);
    if($routeParams.name){
      var currentFirstName = $routeParams.name.capitalize(); 
       //$scope.data = [[[0, 1], [1, 5], [2, 2]]];
       //$scope.data = [[[1905,3],[1913,3],[1915,6],[1917,5],[1919,3],[1920,7],[1922,7],[1923,6],[1924,3],[1925,3],[1926,4],[1927,6],[1928,6],[1929,9],[1930,8],[1931,6],[1932,4],[1933,6],[1934,8],[1935,6],[1936,4],[1937,7],[1938,10],[1939,5],[1940,6],[1941,3],[1942,9],[1943,4],[1944,7],[1945,5],[1946,7],[1947,4],[1948,3],[1949,5],[1950,6],[1951,3],[1953,4],[1954,4],[1956,4],[1960,6],[1964,3],[1966,3]]];
       //$scope.myPoints = [];
      $http.get( API_URL + 'firstName/' + currentFirstName).success(function(data) {
        $scope.currentFirstName = data.prenom; 
        $scope.result = data.annees;

        $scope.myPoints = $.map(data.annees,function(k,v){
          return [[k.annee,k.quantite]];
        });        
        $scope.myPoints = [$scope.myPoints];
      });
    }
    else {
      $location.path( "/" );
    }
    $scope.backToHome = function(){
      //alert("tata");
      $location.path( "/" );
    }
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('HomeController', ['$scope','$http','$location',function($scope,$http,$location) {
    
    $scope.getRandomName = function(){
      $http.get(API_URL + 'random').success(function(data) {
        $scope.result = data;
        $location.path( "/affichePrenom/"+$scope.result.prenom);
      });      
    }

    $scope.search = function(){
      $location.path( "/affichePrenom/" + $scope.query.capitalize() );
    }
  }]);
