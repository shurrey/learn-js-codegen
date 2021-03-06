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
    instance = new LearnApIs.InstitutionRole();
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

  describe('InstitutionRole', function() {
    it('should create an instance of InstitutionRole', function() {
      // uncomment below and update the code to test InstitutionRole
      //var instane = new LearnApIs.InstitutionRole();
      //expect(instance).to.be.a(LearnApIs.InstitutionRole);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LearnApIs.InstitutionRole();
      //expect(instance).to.be();
    });

    it('should have the property roleId (base name: "roleId")', function() {
      // uncomment below and update the code to test the property roleId
      //var instane = new LearnApIs.InstitutionRole();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LearnApIs.InstitutionRole();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new LearnApIs.InstitutionRole();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function() {
      // uncomment below and update the code to test the property custom
      //var instane = new LearnApIs.InstitutionRole();
      //expect(instance).to.be();
    });

  });

}));
