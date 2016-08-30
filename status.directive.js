'use strict';

import statusTpl from './status.html';

function statusComponent($log) {
  'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: statusTpl,
    controller: StatusController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function StatusController ($scope, foodSafeService) {
    'ngInject'
    foodSafeService.getStatus()
      .then(function (status) {
        $scope.status;
      })
      .catch(function (error) {
        $scope.error = error;
      });
  }

}

export default statusComponent;
