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
    instance = new LearnApIs.RolesApi();
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

  describe('RolesApi', function() {
    describe('learnApiPublicV1CourseRolesGet', function() {
      it('should call learnApiPublicV1CourseRolesGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CourseRolesGet
        //instance.learnApiPublicV1CourseRolesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CourseRolesRoleIdGet', function() {
      it('should call learnApiPublicV1CourseRolesRoleIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CourseRolesRoleIdGet
        //instance.learnApiPublicV1CourseRolesRoleIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1InstitutionRolesGet', function() {
      it('should call learnApiPublicV1InstitutionRolesGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1InstitutionRolesGet
        //instance.learnApiPublicV1InstitutionRolesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1InstitutionRolesRoleIdGet', function() {
      it('should call learnApiPublicV1InstitutionRolesRoleIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1InstitutionRolesRoleIdGet
        //instance.learnApiPublicV1InstitutionRolesRoleIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1SystemRolesGet', function() {
      it('should call learnApiPublicV1SystemRolesGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1SystemRolesGet
        //instance.learnApiPublicV1SystemRolesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1SystemRolesRoleIdGet', function() {
      it('should call learnApiPublicV1SystemRolesRoleIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1SystemRolesRoleIdGet
        //instance.learnApiPublicV1SystemRolesRoleIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
