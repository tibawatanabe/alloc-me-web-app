(function() {
  'use strict';

  angular
    .module('allocMe', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'fusioncharts', 'allocMe.lib'])
    .config(MainRouter)
    .config(ChartRouter)
    .config(ProjectRouter)
  ;

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/chart/chart.html',
        controller: 'ChartController',
        controllerAs: 'chartCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

  function ChartRouter($stateProvider) {
    // $stateProvider
    //   .state('home', {
    //     url: '/',
    //     templateUrl: 'app/modules/chart/chart.html',
    //     controller: 'ChartController',
    //     controllerAs: 'chartCtrl'
    //   });
  }

  function ProjectRouter($stateProvider) {
    $stateProvider
      .state('project', {
        abstract     : true,
        url          : '/project',
        templateUrl  : 'app/modules/project/project.html',
        controller   : 'ProjectController',
        controllerAs : 'projectCtrl'
      })
      .state('project.list', {
        url         : '/list',
        templateUrl : 'app/modules/project/project.list.html',
      })
      .state('project.new', {
        url         : '/new',
        templateUrl : 'app/modules/project/project.new.html',
      })
    ;
  }
})();
