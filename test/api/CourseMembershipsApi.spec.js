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
    instance = new LearnApIs.CourseMembershipsApi();
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

  describe('CourseMembershipsApi', function() {
    describe('learnApiPublicV1CoursesCourseIdUsersGet', function() {
      it('should call learnApiPublicV1CoursesCourseIdUsersGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdUsersGet
        //instance.learnApiPublicV1CoursesCourseIdUsersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdUsersUserIdDelete', function() {
      it('should call learnApiPublicV1CoursesCourseIdUsersUserIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdUsersUserIdDelete
        //instance.learnApiPublicV1CoursesCourseIdUsersUserIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdUsersUserIdGet', function() {
      it('should call learnApiPublicV1CoursesCourseIdUsersUserIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdUsersUserIdGet
        //instance.learnApiPublicV1CoursesCourseIdUsersUserIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdUsersUserIdPatch', function() {
      it('should call learnApiPublicV1CoursesCourseIdUsersUserIdPatch successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdUsersUserIdPatch
        //instance.learnApiPublicV1CoursesCourseIdUsersUserIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdUsersUserIdPut', function() {
      it('should call learnApiPublicV1CoursesCourseIdUsersUserIdPut successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdUsersUserIdPut
        //instance.learnApiPublicV1CoursesCourseIdUsersUserIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1UsersUserIdCoursesGet', function() {
      it('should call learnApiPublicV1UsersUserIdCoursesGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1UsersUserIdCoursesGet
        //instance.learnApiPublicV1UsersUserIdCoursesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));