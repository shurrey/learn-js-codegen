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
    instance = new LearnApIs.DataSourcesApi();
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

  describe('DataSourcesApi', function() {
    describe('learnApiPublicV1DataSourcesDataSourceIdDelete', function() {
      it('should call learnApiPublicV1DataSourcesDataSourceIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1DataSourcesDataSourceIdDelete
        //instance.learnApiPublicV1DataSourcesDataSourceIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1DataSourcesDataSourceIdGet', function() {
      it('should call learnApiPublicV1DataSourcesDataSourceIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1DataSourcesDataSourceIdGet
        //instance.learnApiPublicV1DataSourcesDataSourceIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1DataSourcesDataSourceIdPatch', function() {
      it('should call learnApiPublicV1DataSourcesDataSourceIdPatch successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1DataSourcesDataSourceIdPatch
        //instance.learnApiPublicV1DataSourcesDataSourceIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1DataSourcesGet', function() {
      it('should call learnApiPublicV1DataSourcesGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1DataSourcesGet
        //instance.learnApiPublicV1DataSourcesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1DataSourcesPost', function() {
      it('should call learnApiPublicV1DataSourcesPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1DataSourcesPost
        //instance.learnApiPublicV1DataSourcesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
