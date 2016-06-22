
var app = angular.module('classtwoApp');

app.factory('ProdSrv', function($http){

  function list(callback) {
    $http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst', {})
      .success(function(data){
        callback(data);
      });
  }

  function detail(id, callback) {
    $http.get('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/get?_id='+id)
      .success(function(data){
        callback(data);
      });
  }

function add(o, callback) {
    $http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/put?',{data:o})
      .success(function(data){
        callback(data);
      });
  }
  return {
    list : list,
    detail : detail,
    add : add
  }
});