(function() {
  'use strict';

  angular
    .module('allocMe', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
