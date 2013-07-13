'use strict';


var monPrenom = angular.module('monPrenom', ['monPrenom.filters', 'monPrenom.services', 'monPrenom.directives', 'monPrenom.controllers']);


monPrenom.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);


monPrenom.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/randomName', {templateUrl: 'partials/random.html', controller: 'RandomNameController'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({templateUrl: 'partials/home.html', controller: 'HomeController'});
  }]);
