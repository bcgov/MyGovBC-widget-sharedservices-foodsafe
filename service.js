'use strict'

angular.module('mygov.widget.sharedservices.foodsafe')
  .factory('foodSafeService', function ($http, appConstants, $log) {
    'ngInject'

    var service = {
      getStatus: getStatus
    };

    return service;

    ////////////
    function getStatus() {
      return $http.get('/api/moo')
        .then(getStatusComplete)
        .catch(getStatusFailed);

      function getStatusComplete(response) {
        return response.data.results;
      }

      function getStatusFailed(error) {
        $log.error('XHR Failed for getStatus.' + error.data);
        throw(error);
      }
    };
  })
