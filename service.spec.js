'use strict'

describe("FoodSafe Service", function() {
  var service;
  var $httpBackend;
  var $rootScope;

  // Load module and service
  beforeEach(function() {
    module('myGov-core-client');
  });
  beforeEach(inject(function(foodSafeService) {
    service = foodSafeService;
  }));

  it('should contain a service', function () {
      expect(service).not.toBeNull();
  });

  it ('should throw an exception - and eventually not', function () {
     expect(function() { server.getStatus() }).toThrow();
  });

  // Add mock service
  beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
    // backend definition common for all tests
    $httpBackend.when('GET', '/api/moo')
      .respond({scope: 'something'});

    // Get hold of a scope (i.e. the root scope)
    $rootScope = $injector.get('$rootScope');
  }));

  it ('should respond with any data', function () {
    var success = function (data) {
      expect(data).not.toBeNull();
      expect(data.scope).not.toBeNull();
    }
    var error = function (error) {
      expect(error).toBeUndefined();
    }
    service.getStatus()
      .then(success)
      .catch(error);
  });
});