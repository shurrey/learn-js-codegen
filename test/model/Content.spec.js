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
    instance = new LearnApIs.Content();
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

  describe('Content', function() {
    it('should create an instance of Content', function() {
      // uncomment below and update the code to test Content
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be.a(LearnApIs.Content);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property hasChildren (base name: "hasChildren")', function() {
      // uncomment below and update the code to test the property hasChildren
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property hasGradebookColumns (base name: "hasGradebookColumns")', function() {
      // uncomment below and update the code to test the property hasGradebookColumns
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property hasAssociatedGroups (base name: "hasAssociatedGroups")', function() {
      // uncomment below and update the code to test the property hasAssociatedGroups
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property launchInNewWindow (base name: "launchInNewWindow")', function() {
      // uncomment below and update the code to test the property launchInNewWindow
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property reviewable (base name: "reviewable")', function() {
      // uncomment below and update the code to test the property reviewable
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property availability (base name: "availability")', function() {
      // uncomment below and update the code to test the property availability
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property contentHandler (base name: "contentHandler")', function() {
      // uncomment below and update the code to test the property contentHandler
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new LearnApIs.Content();
      //expect(instance).to.be();
    });

  });

}));
