(function() {
  'use strict';

  angular
    .module('allocMe', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'allocMe.lib'])
    .config(MainRouter)
    .config(ChartRouter)
  ;
})();

