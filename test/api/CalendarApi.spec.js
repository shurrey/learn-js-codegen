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
    instance = new LearnApIs.CalendarApi();
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

  describe('CalendarApi', function() {
    describe('learnApiPublicV1CalendarsGet', function() {
      it('should call learnApiPublicV1CalendarsGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CalendarsGet
        //instance.learnApiPublicV1CalendarsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete', function() {
      it('should call learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete
        //instance.learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet', function() {
      it('should call learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet
        //instance.learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch', function() {
      it('should call learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch
        //instance.learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CalendarsItemsGet', function() {
      it('should call learnApiPublicV1CalendarsItemsGet successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CalendarsItemsGet
        //instance.learnApiPublicV1CalendarsItemsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnApiPublicV1CalendarsItemsPost', function() {
      it('should call learnApiPublicV1CalendarsItemsPost successfully', function(done) {
        //uncomment below and update the code to test learnApiPublicV1CalendarsItemsPost
        //instance.learnApiPublicV1CalendarsItemsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
