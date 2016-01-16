(function() {
  'use strict';

  angular
    .module('allocMe', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'fusioncharts', 'allocMe.lib'])
    .config(MainRouter)
    .config(ChartRouter)
  ;

  function ChartRouter($stateProvider) {
  $stateProvider
    .state('chart', {
      url: '/chart',
      templateUrl: 'app/modules/chart/chart.html',
      controller: 'ChartController',
      controllerAs: 'chart'
    });
}

})();

