'use strict';

/**
 * @ngdoc function
 * @name classtwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the classtwoApp
 */
 
var app = angular.module('classtwoApp');

app.controller('MainCtrl', function ($scope, $rootScope ,ProdSrv) {

  this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

ProdSrv.list(function(prds) {
    $rootScope.data = prds;
    console.log('abour' + prds);
  });

  $scope.venta = [];
 	$scope.agregar = function(x) {
 		console.log(x);
    var exist = false;

    for(var i=0;i<$scope.venta.length;i++){
        if ($scope.venta[i]._id==x._id){
          exist = true;
          break;
        }
    }
console.log(exist);
    if(exist){
      console.log(exist);
      x.cantidad++;
    }else{
      x.cantidad = 1;
      $scope.venta.push(x);
    }
    console.log(x.cantidad);

 		
 	}

  });



