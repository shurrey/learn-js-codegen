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
    instance = new LearnApIs.DeprecatedCoursesApi();
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

  describe('DeprecatedCoursesApi', function() {
    describe('learnApiPublicV1CoursesCourseIdCopyPost', function() {
      it('should call learnApiPublicV1CoursesCourseIdCopyPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdCopyPost
        //instance.learnApiPublicV1CoursesCourseIdCopyPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdDelete', function() {
      it('should call learnApiPublicV1CoursesCourseIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdDelete
        //instance.learnApiPublicV1CoursesCourseIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdGet', function() {
      it('should call learnApiPublicV1CoursesCourseIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdGet
        //instance.learnApiPublicV1CoursesCourseIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesCourseIdPatch', function() {
      it('should call learnApiPublicV1CoursesCourseIdPatch successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesCourseIdPatch
        //instance.learnApiPublicV1CoursesCourseIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesGet', function() {
      it('should call learnApiPublicV1CoursesGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesGet
        //instance.learnApiPublicV1CoursesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CoursesPost', function() {
      it('should call learnApiPublicV1CoursesPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CoursesPost
        //instance.learnApiPublicV1CoursesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdDelete', function() {
      it('should call learnApiPublicV2CoursesCourseIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdDelete
        //instance.learnApiPublicV2CoursesCourseIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGet', function() {
      it('should call learnApiPublicV2CoursesCourseIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGet
        //instance.learnApiPublicV2CoursesCourseIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdPatch', function() {
      it('should call learnApiPublicV2CoursesCourseIdPatch successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdPatch
        //instance.learnApiPublicV2CoursesCourseIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesGet', function() {
      it('should call learnApiPublicV2CoursesGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesGet
        //instance.learnApiPublicV2CoursesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesPost', function() {
      it('should call learnApiPublicV2CoursesPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesPost
        //instance.learnApiPublicV2CoursesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
