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
    instance = new LearnApIs.CourseAnnouncementsApi();
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

  describe('CourseAnnouncementsApi', function() {
    describe('learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete', function() {
      it('should call learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete
        //instance.learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet', function() {
      it('should call learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet
        //instance.learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch', function() {
      it('should call learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch
        //instance.learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdAnnouncementsGet', function() {
      it('should call learnApiPublicV1CoursesCourseIdAnnouncementsGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdAnnouncementsGet
        //instance.learnApiPublicV1CoursesCourseIdAnnouncementsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdAnnouncementsPost', function() {
      it('should call learnApiPublicV1CoursesCourseIdAnnouncementsPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdAnnouncementsPost
        //instance.learnApiPublicV1CoursesCourseIdAnnouncementsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));