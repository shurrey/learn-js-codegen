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
    instance = new LearnApIs.AttemptV2();
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

  describe('AttemptV2', function() {
    it('should create an instance of AttemptV2', function() {
      // uncomment below and update the code to test AttemptV2
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be.a(LearnApIs.AttemptV2);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property groupAttemptId (base name: "groupAttemptId")', function() {
      // uncomment below and update the code to test the property groupAttemptId
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property groupOverride (base name: "groupOverride")', function() {
      // uncomment below and update the code to test the property groupOverride
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property displayGrade (base name: "displayGrade")', function() {
      // uncomment below and update the code to test the property displayGrade
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property reconciliationMode (base name: "reconciliationMode")', function() {
      // uncomment below and update the code to test the property reconciliationMode
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property feedback (base name: "feedback")', function() {
      // uncomment below and update the code to test the property feedback
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property studentComments (base name: "studentComments")', function() {
      // uncomment below and update the code to test the property studentComments
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property studentSubmission (base name: "studentSubmission")', function() {
      // uncomment below and update the code to test the property studentSubmission
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property exempt (base name: "exempt")', function() {
      // uncomment below and update the code to test the property exempt
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property attemptDate (base name: "attemptDate")', function() {
      // uncomment below and update the code to test the property attemptDate
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new LearnApIs.AttemptV2();
      //expect(instance).to.be();
    });

  });

}));
