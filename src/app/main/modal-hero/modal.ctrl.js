(function () {
  'use strict';

  angular
    .module('webLol')
    .controller('ModalCtrl', ModalCtrl);

  /** @ngInject */
  function ModalCtrl($scope, hero, $uibModalInstance) {
    var vm = this;

    console.log('entrou modal ctrl')

    //Acesso dados API
    $scope.hero = hero;

    console.log('hero', $scope.hero);

    //function fechar modal 
    $scope.exit = function () {
      $uibModalInstance.dismiss('sair');
    };

  }

})();