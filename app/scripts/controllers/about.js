'use strict';

/**
 * @ngdoc function
 * @name classtwoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classtwoApp
 */

 var app = angular.module('classtwoApp');

app.controller('AboutCtrl', function ($scope, ProdSrv) {
  
  ProdSrv.list(function(prds) {
    $scope.productos = prds;
    console.log('about' + prds);
  });

});

app.controller('DetailCtrl', function ($scope, $routeParams, $location, ProdSrv) {
  ProdSrv.detail($routeParams.id, function(p) {
    $scope.producto = p;
  });

  $scope.remove = function(id) {
    ProdSrv.rm(id, function(res) {
      $location.path('/about');
    });
  };

});