/**
 * Learn APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3900.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LearnApIs);
  }
}(this, function(expect, LearnApIs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LearnApIs.Body44();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Body44', function() {
    it('should create an instance of Body44', function() {
      // uncomment below and update the code to test Body44
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be.a(LearnApIs.Body44);
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property dataSourceId (base name: "dataSourceId")', function() {
      // uncomment below and update the code to test the property dataSourceId
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property allowGuests (base name: "allowGuests")', function() {
      // uncomment below and update the code to test the property allowGuests
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property closedComplete (base name: "closedComplete")', function() {
      // uncomment below and update the code to test the property closedComplete
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property termId (base name: "termId")', function() {
      // uncomment below and update the code to test the property termId
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property availability (base name: "availability")', function() {
      // uncomment below and update the code to test the property availability
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property enrollment (base name: "enrollment")', function() {
      // uncomment below and update the code to test the property enrollment
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new LearnApIs.Body44();
      //expect(instance).to.be();
    });

  });

}));
