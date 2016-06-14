var gnServices = angular.module('gnServices', ['ngResource']);

gnServices.factory('comm', ['$http','CNF',
function($http, CNF){
  return {
    get: function (command, param) {
      return $http({
        method: 'GET',
        url: CNF.APIURL + command,
        params: param,
      })
    },
    post: function (command, param) {
      return $http({
        method: 'POST',
        url: CNF.APIURL + command,
        data: param,
        headers: {
          'Content-Type':'application/json'
        }
      })
    }
  }
}])