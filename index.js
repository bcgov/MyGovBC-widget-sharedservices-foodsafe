'use strict';

const widgetModule = angular.module('mygov.widget.sharedservices.foodsafe', [])
  .config(['$stateProvider', function ($stateProvider, $log) {
    $stateProvider
      .state('foodsafe', {
        url: '/foodsafe',
        template: '<foodsafe></foodsafe>',
        ncyBreadcrumb: {
          label: 'Foodsafe'
        }
      })
   
  }])
  .component('foodsafe', {
    templateUrl: require('./index.html'),
    controller: ['$scope', function ($scope) {

    }]
  });

module.exports = widgetModule;
