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
    instance = new LearnApIs.CourseGroupsApi();
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

  describe('CourseGroupsApi', function() {
    describe('learnApiPublicV2CoursesCourseIdGroupsGet', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsGet
        //instance.learnApiPublicV2CoursesCourseIdGroupsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete
        //instance.learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsGroupIdGet', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsGroupIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsGroupIdGet
        //instance.learnApiPublicV2CoursesCourseIdGroupsGroupIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch
        //instance.learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsPost', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsPost
        //instance.learnApiPublicV2CoursesCourseIdGroupsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsSetsGet', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsSetsGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsSetsGet
        //instance.learnApiPublicV2CoursesCourseIdGroupsSetsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete
        //instance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet
        //instance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet
        //instance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost
        //instance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch
        //instance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV2CoursesCourseIdGroupsSetsPost', function() {
      it('should call learnApiPublicV2CoursesCourseIdGroupsSetsPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV2CoursesCourseIdGroupsSetsPost
        //instance.learnApiPublicV2CoursesCourseIdGroupsSetsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));