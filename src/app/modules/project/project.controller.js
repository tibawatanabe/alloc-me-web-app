(function() {
  'use strict';

  angular.module('allocMe')
    .controller('ProjectController', ProjectController);

  function ProjectController($state, ProjectResource) {
    var vm = this;

    vm.techList = [
      { name: 'WP' },
      { name: 'Android' },
      { name: 'iOS' },
      { name: 'Angular' }
    ];

    vm.beginDate = new Date();
    vm.endDate   = new Date();

    vm.getSuggestion = function(start, end) {
      ProjectResource.getSuggestion(1, 1452968377885, '569aa44b85fd010300495e72')
        .then(function (response) { vm.users = response.data.data.employees })
    }

    vm.create = function(project) {
      project.techList = _.filter(vm.techList, 'use');

      ProjectResource.create(project)
        .then(function() { $state.go('home'); })
        .catch(function() {
          vm.errorMessage = 'Ocorreu um erro ao criar um novo projeto';
        });
    }
  }
})();
