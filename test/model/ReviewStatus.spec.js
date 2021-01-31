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
    instance = new LearnApIs.ReviewStatus();
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

  describe('ReviewStatus', function() {
    it('should create an instance of ReviewStatus', function() {
      // uncomment below and update the code to test ReviewStatus
      //var instane = new LearnApIs.ReviewStatus();
      //expect(instance).to.be.a(LearnApIs.ReviewStatus);
    });

    it('should have the property contentId (base name: "contentId")', function() {
      // uncomment below and update the code to test the property contentId
      //var instane = new LearnApIs.ReviewStatus();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new LearnApIs.ReviewStatus();
      //expect(instance).to.be();
    });

    it('should have the property reviewed (base name: "reviewed")', function() {
      // uncomment below and update the code to test the property reviewed
      //var instane = new LearnApIs.ReviewStatus();
      //expect(instance).to.be();
    });

    it('should have the property reviewDate (base name: "reviewDate")', function() {
      // uncomment below and update the code to test the property reviewDate
      //var instane = new LearnApIs.ReviewStatus();
      //expect(instance).to.be();
    });

  });

}));
