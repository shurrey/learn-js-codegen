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
    instance = new LearnApIs.Grading();
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

  describe('Grading', function() {
    it('should create an instance of Grading', function() {
      // uncomment below and update the code to test Grading
      //var instane = new LearnApIs.Grading();
      //expect(instance).to.be.a(LearnApIs.Grading);
    });

    it('should have the property due (base name: "due")', function() {
      // uncomment below and update the code to test the property due
      //var instane = new LearnApIs.Grading();
      //expect(instance).to.be();
    });

    it('should have the property attemptsAllowed (base name: "attemptsAllowed")', function() {
      // uncomment below and update the code to test the property attemptsAllowed
      //var instane = new LearnApIs.Grading();
      //expect(instance).to.be();
    });

    it('should have the property gradeSchemaId (base name: "gradeSchemaId")', function() {
      // uncomment below and update the code to test the property gradeSchemaId
      //var instane = new LearnApIs.Grading();
      //expect(instance).to.be();
    });

    it('should have the property isUnlimitedAttemptsAllowed (base name: "isUnlimitedAttemptsAllowed")', function() {
      // uncomment below and update the code to test the property isUnlimitedAttemptsAllowed
      //var instane = new LearnApIs.Grading();
      //expect(instance).to.be();
    });

  });

}));
