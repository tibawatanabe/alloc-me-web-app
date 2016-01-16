(function() {
  'use strict';

  angular
    .module('allocMe.lib')
    .service('ProjectResource', ProjectResource)
  ;

  function ProjectResource($http) {
    var Endpoints = {
      CREATE  : '',
      EDIT    : '',
      DELETE  : '',
      GET     : '',
      GET_ALL : '',
      GET_SUGGESTION : 'http://alloc-me.herokuapp.com/v1/employees/get-employees-to-alloc?startDate=1&endDate=1452968377885&technologies=569aa44b85fd010300495e72'
    };

    function create(project) {
      return $http.post(Endpoints.CREATE, project);
    }

    function edit(project) {
      return $http.put(Endpoints.EDIT, project);
    }

    function remove(id) {
      return $http.delete(Endpoints.DELETE, { data: { id: id } });
    }

    function getAll() {
      return $http.get(Endpoints.GET_ALL);
    }

    function get(id) {
      return $http.get(Endpoints.GET, { data: { id: id } });
    }

    function getSuggestion(start, end, tech) {
      return $http.get(Endpoints.GET_SUGGESTION, { data: { startDate: start, endDate: end, technologies: tech } });
    }

    return {
      create : create,
      edit   : edit,
      remove : remove,
      get    : get,
      getAll : getAll,
      getSuggestion : getSuggestion
    };
  };

})();
