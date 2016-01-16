(function() {
 'use strict';

 angular
   .module('allocMe.lib')
   .service('AllocationResource', AllocationResource)
 ;

 function AllocationResource($http) {
   var Endpoints = {
     GET_ALL : 'http://alloc-me.herokuapp.com/v1/allocation/get-all'
   };

   function getAll() {
     return $http.get(Endpoints.GET_ALL);
   }

   return {
     getAll : getAll
   };
 };

})();
