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
    instance = new LearnApIs.RestException();
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

  describe('RestException', function() {
    it('should create an instance of RestException', function() {
      // uncomment below and update the code to test RestException
      //var instane = new LearnApIs.RestException();
      //expect(instance).to.be.a(LearnApIs.RestException);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new LearnApIs.RestException();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new LearnApIs.RestException();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new LearnApIs.RestException();
      //expect(instance).to.be();
    });

    it('should have the property developerMessage (base name: "developerMessage")', function() {
      // uncomment below and update the code to test the property developerMessage
      //var instane = new LearnApIs.RestException();
      //expect(instance).to.be();
    });

    it('should have the property extraInfo (base name: "extraInfo")', function() {
      // uncomment below and update the code to test the property extraInfo
      //var instane = new LearnApIs.RestException();
      //expect(instance).to.be();
    });

  });

}));
