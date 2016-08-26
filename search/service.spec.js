'use strict'

describe("FoodSafe Service", function() {
  var service;

  // Load module
  beforeEach(function() {
    module('myGov-core-client');
  });
  beforeEach(inject(function(foodSafeService) {
    service = foodSafeService;
  }));

  it('should contain a service', function () {
      expect(service).not.toBeNull();
  });
});