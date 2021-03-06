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
    instance = new LearnApIs.CourseGradeAttemptsApi();
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

  describe('CourseGradeAttemptsApi', function() {
    describe('learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete', function() {
      it('should call learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete
        //instance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet', function() {
      it('should call learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet
        //instance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet', function() {
      it('should call learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet
        //instance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet', function() {
      it('should call learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet
        //instance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost', function() {
      it('should call learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost
        //instance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
