(function() {
  'use strict';

  angular
    .module('webLol')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('featured', {
        url: '/featured',
        templateUrl: 'app/main/featured-games/featured.html',
        controller: 'FeaturedController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
