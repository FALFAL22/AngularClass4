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

  $scope.agregar = function(x){
  	ProdSrv.add(x,function(res){
  		$scope.message = "se grabo";
    });
  };
});

app.controller('DetailCtrl', function ($scope, $routeParams, ProdSrv) {
  ProdSrv.detail($routeParams.id, function(p) {
    $scope.producto = p;
  });
});