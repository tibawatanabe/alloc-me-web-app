(function() {
  'use strict';

  angular
    .module('allocMe', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'allocMe.lib'])
    .config(MainRouter)

    // .state('chart', {
    //     url: '/chart',
    //     templateUrl: 'app/chart/chart.html',
    //     controller: 'ChartController',
    //     controllerAs: 'chart'
    //   })
  ;
})();

