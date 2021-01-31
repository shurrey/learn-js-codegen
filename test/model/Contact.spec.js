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
    instance = new LearnApIs.Contact();
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

  describe('Contact', function() {
    it('should create an instance of Contact', function() {
      // uncomment below and update the code to test Contact
      //var instane = new LearnApIs.Contact();
      //expect(instance).to.be.a(LearnApIs.Contact);
    });

    it('should have the property homePhone (base name: "homePhone")', function() {
      // uncomment below and update the code to test the property homePhone
      //var instane = new LearnApIs.Contact();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhone (base name: "mobilePhone")', function() {
      // uncomment below and update the code to test the property mobilePhone
      //var instane = new LearnApIs.Contact();
      //expect(instance).to.be();
    });

    it('should have the property businessPhone (base name: "businessPhone")', function() {
      // uncomment below and update the code to test the property businessPhone
      //var instane = new LearnApIs.Contact();
      //expect(instance).to.be();
    });

    it('should have the property businessFax (base name: "businessFax")', function() {
      // uncomment below and update the code to test the property businessFax
      //var instane = new LearnApIs.Contact();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new LearnApIs.Contact();
      //expect(instance).to.be();
    });

    it('should have the property webPage (base name: "webPage")', function() {
      // uncomment below and update the code to test the property webPage
      //var instane = new LearnApIs.Contact();
      //expect(instance).to.be();
    });

  });

}));
