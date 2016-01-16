(function() {
  'use strict';

  angular.module('allocMe')
    .controller('ProjectController', ProjectController);

  function ProjectController($state, ProjectResource) {
    var vm = this;

    vm.techList = [
      { name: 'WP' },
      { name: 'Android' },
      { name: 'iOS' }
    ];

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
