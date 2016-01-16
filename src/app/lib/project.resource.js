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
      GET_ALL : ''
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

    return {
      create : create,
      edit   : edit,
      remove : remove,
      get    : get,
      getAll : getAll
    };
  };

})();
