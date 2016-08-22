'use strict'

angular.module('mygov.widget.sharedservices.foodsafe')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/foodsafe/search',
        template: '<search></search>',
        ncyBreadcrumb: {
          label: 'Search Foodsafe Certficate'
        }
      })

  }])
  .component('search', {
    templateUrl: require('./index.html'),
    controller: ['$scope', 'foodSafeService', function ($scope, foodSafeService) {
    }]
  })
