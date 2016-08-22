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
    controller: ['$scope', function ($scope) {

    }]
  });

// Includes
require('./search/index.html');
require('./search/index.js');
require('./search/index.less');
require('./search/service.js');

module.exports = widgetModule;
