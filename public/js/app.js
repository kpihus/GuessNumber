var gn = angular.module('gn',[
  'gnController',
  'gnServices'
]).constant('CNF',{
  'APIURL':'http://localhost:3000'
}).config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
})