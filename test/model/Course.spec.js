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
    instance = new LearnApIs.Course();
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

  describe('Course', function() {
    it('should create an instance of Course', function() {
      // uncomment below and update the code to test Course
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be.a(LearnApIs.Course);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property dataSourceId (base name: "dataSourceId")', function() {
      // uncomment below and update the code to test the property dataSourceId
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property courseId (base name: "courseId")', function() {
      // uncomment below and update the code to test the property courseId
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property ultraStatus (base name: "ultraStatus")', function() {
      // uncomment below and update the code to test the property ultraStatus
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property allowGuests (base name: "allowGuests")', function() {
      // uncomment below and update the code to test the property allowGuests
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property readOnly (base name: "readOnly")', function() {
      // uncomment below and update the code to test the property readOnly
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property termId (base name: "termId")', function() {
      // uncomment below and update the code to test the property termId
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property availability (base name: "availability")', function() {
      // uncomment below and update the code to test the property availability
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property enrollment (base name: "enrollment")', function() {
      // uncomment below and update the code to test the property enrollment
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property hasChildren (base name: "hasChildren")', function() {
      // uncomment below and update the code to test the property hasChildren
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property externalAccessUrl (base name: "externalAccessUrl")', function() {
      // uncomment below and update the code to test the property externalAccessUrl
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

    it('should have the property guestAccessUrl (base name: "guestAccessUrl")', function() {
      // uncomment below and update the code to test the property guestAccessUrl
      //var instane = new LearnApIs.Course();
      //expect(instance).to.be();
    });

  });

}));
