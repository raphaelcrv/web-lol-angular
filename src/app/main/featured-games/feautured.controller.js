angular
  .module('webLol')
  .controller('FeaturedController', FeaturedController);

/** @ngInject */
function FeaturedController($http, $scope, $uibModal) {
  var vm = this;

  console.log('controller feautured');

}