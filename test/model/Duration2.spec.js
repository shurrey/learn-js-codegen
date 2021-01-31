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
    instance = new LearnApIs.Duration2();
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

  describe('Duration2', function() {
    it('should create an instance of Duration2', function() {
      // uncomment below and update the code to test Duration2
      //var instane = new LearnApIs.Duration2();
      //expect(instance).to.be.a(LearnApIs.Duration2);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new LearnApIs.Duration2();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instane = new LearnApIs.Duration2();
      //expect(instance).to.be();
    });

    it('should have the property end (base name: "end")', function() {
      // uncomment below and update the code to test the property end
      //var instane = new LearnApIs.Duration2();
      //expect(instance).to.be();
    });

    it('should have the property daysOfUse (base name: "daysOfUse")', function() {
      // uncomment below and update the code to test the property daysOfUse
      //var instane = new LearnApIs.Duration2();
      //expect(instance).to.be();
    });

  });

}));
