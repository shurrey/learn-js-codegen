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
    instance = new LearnApIs.Body53();
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

  describe('Body53', function() {
    it('should create an instance of Body53', function() {
      // uncomment below and update the code to test Body53
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be.a(LearnApIs.Body53);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property iconUrl (base name: "iconUrl")', function() {
      // uncomment below and update the code to test the property iconUrl
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property authorId (base name: "authorId")', function() {
      // uncomment below and update the code to test the property authorId
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property instructorCreated (base name: "instructorCreated")', function() {
      // uncomment below and update the code to test the property instructorCreated
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property allowStudents (base name: "allowStudents")', function() {
      // uncomment below and update the code to test the property allowStudents
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property allowGrading (base name: "allowGrading")', function() {
      // uncomment below and update the code to test the property allowGrading
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property availability (base name: "availability")', function() {
      // uncomment below and update the code to test the property availability
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property launchInNewWindow (base name: "launchInNewWindow")', function() {
      // uncomment below and update the code to test the property launchInNewWindow
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

    it('should have the property customParameters (base name: "customParameters")', function() {
      // uncomment below and update the code to test the property customParameters
      //var instane = new LearnApIs.Body53();
      //expect(instance).to.be();
    });

  });

}));
