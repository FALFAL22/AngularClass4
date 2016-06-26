'use strict';

/**
 * @ngdoc function
 * @name classtwoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classtwoApp
 */

 var app = angular.module('classtwoApp');

app.controller('AddCtrl', function ($scope, $filter, ProdSrv) {
	$scope.d = new Date();
	$scope.n = 10.999;
	$scope.s = 'sadsadasdg asdasdsa sadasd czc cxzc v x v zxc bxz vzx ssd x zasd v x asd vcz zcx vzxc asd xzc bz z xc vcxzxc vzx cxz cxz vzxc vzxc vzxc zxczx  vzxc bxzc zxc zxc';

	$scope.y = new Date();

	$scope.y = $filter('date')($scope.y, 'fullDate');

	$scope.agregar = function(x){
  	ProdSrv.add(x,function(res){
  		$scope.message = "se grabo";
    });
  };

});

app.filter('ellipsis', function(){
	return function(i,cant,s){
		s = s || ' ... ';
		var resultado = i;
		resultado = resultado.split(' ');
		if(resultado.length > cant){
			resultado = resultado.splice(0,cant);
			resultado = resultado.join(' ') + s;
			return resultado;
		}else{
			return resultado.join(' ');
		}
	};
});
