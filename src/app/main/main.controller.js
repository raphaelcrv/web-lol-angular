(function () {
  'use strict';

  angular
    .module('webLol')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $scope, $uibModal) {
    var vm = this;

    //Abrindo o Modal
    $scope.openModal = function (hero) {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/main/modal-hero/modal.html',
        controller: 'ModalCtrl',
        resolve: {
          hero: function () {
            return hero
          }
        }
      })}


      //Retornando dados da API
      $scope.error = false;
      $scope.load = true;
      //OLD REQUEST: https://global.api.pvp.net/api/lol/static-data/br/v1.2/champion?api_key=RGAPI-FF7DDCDD-3F7F-4CAD-AFF2-B5E101B37870
      $http.get("https://global.api.pvp.net/api/lol/static-data/br/v1.2/champion?api_key=RGAPI-FF7DDCDD-3F7F-4CAD-AFF2-B5E101B37870")
        .then(function (response) {
          $scope.heroes = response.data.data;
          console.log($scope.heroes);
          $scope.load = false;
        }, function (err) {
          console.log('erroouuuu');
          $scope.load = false;
          $scope.error = true;
        });

    }
  })();
