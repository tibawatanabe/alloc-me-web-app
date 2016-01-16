'use strict';

function MainRouter($stateProvider) {
  $stateProvider
    .state('chart', {
      url: '/chart',
      templateUrl: 'app/modules/chart/chart.html',
      controller: 'ChartController',
      controllerAs: 'chart'
    });
}
