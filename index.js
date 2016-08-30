'use strict';

const widgetModule = angular.module('mygov.widget.sharedservices.foodsafe', [])
  .config(['$stateProvider', function ($stateProvider, $log) {
    $stateProvider
      .state('foodsafe', {
        url: '/foodsafe',
        template: '<foodsafe></foodsafe>',
        ncyBreadcrumb: {
          label: 'FoodSafe'
        }
      })
  }])
  .component('foodsafe', {
    templateUrl: require('./index.html'),
    controller: ['$scope', 'foodSafeService', function ($scope, foodSafeService) {
      foodSafeService.getStatus().then(function (status) {
        $scope.status = status;
      }).catch(function (error) {
        $scope.error = "FoodSafe Service is currently unavailable.  Some limited functionality still enabled.";
      });
    }]
  });

// Includes
require('./search/index.html');
require('./search/index.js');
require('./search/index.less');
require('./service.js');

require('./status.html');

module.exports = widgetModule;
