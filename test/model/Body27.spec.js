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
    instance = new LearnApIs.Body27();
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

  describe('Body27', function() {
    it('should create an instance of Body27', function() {
      // uncomment below and update the code to test Body27
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be.a(LearnApIs.Body27);
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property externalToolId (base name: "externalToolId")', function() {
      // uncomment below and update the code to test the property externalToolId
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property externalGrade (base name: "externalGrade")', function() {
      // uncomment below and update the code to test the property externalGrade
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property availability (base name: "availability")', function() {
      // uncomment below and update the code to test the property availability
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property grading (base name: "grading")', function() {
      // uncomment below and update the code to test the property grading
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property gradebookCategoryId (base name: "gradebookCategoryId")', function() {
      // uncomment below and update the code to test the property gradebookCategoryId
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property includeInCalculations (base name: "includeInCalculations")', function() {
      // uncomment below and update the code to test the property includeInCalculations
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

    it('should have the property showStatisticsToStudents (base name: "showStatisticsToStudents")', function() {
      // uncomment below and update the code to test the property showStatisticsToStudents
      //var instane = new LearnApIs.Body27();
      //expect(instance).to.be();
    });

  });

}));