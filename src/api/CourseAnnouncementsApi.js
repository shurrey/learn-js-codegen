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

import ApiClient from "../ApiClient";
import Body15 from '../model/Body15';
import Body16 from '../model/Body16';
import CourseAnnouncement from '../model/CourseAnnouncement';
import InlineResponse2009 from '../model/InlineResponse2009';
import RestException from '../model/RestException';

/**
* CourseAnnouncements service.
* @module api/CourseAnnouncementsApi
* @version 3900.6.0
*/
export default class CourseAnnouncementsApi {

    /**
    * Constructs a new CourseAnnouncementsApi. 
    * @alias module:api/CourseAnnouncementsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete operation.
     * @callback module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Announcement
     * Delete a Course Announcement. Users with the &#x27;course.announcements.DELETE&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can delete Course Announcements.  **Since**: 3500.3.0
     * @param {Object} opts Optional parameters
     * @param {module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete(announcementId, courseId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'announcementId': announcementId,
        'courseId': courseId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet operation.
     * @callback module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CourseAnnouncement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Announcement
     * Get a Course Announcement. Users with the &#x27;course.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; &amp; &#x27;course.announcements.MODIFY&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; Course Announcements.  **Since**: 3500.3.0
     * @param {Object} opts Optional parameters
     * @param {module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CourseAnnouncement}
     */
    learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet(announcementId, courseId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'announcementId': announcementId,
        'courseId': courseId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CourseAnnouncement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch operation.
     * @callback module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CourseAnnouncement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Announcement
     * Update a Course Announcement. Users with the &#x27;course.announcements.MODIFY&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can update Course Announcements.  **Since**: 3500.3.0
     * @param {Object} opts Optional parameters
     * @param {module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CourseAnnouncement}
     */
    learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch(body, announcementId, courseId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'announcementId': announcementId,
        'courseId': courseId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CourseAnnouncement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdAnnouncementsGet operation.
     * @callback module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Announcements
     * Return a list of Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; &amp; &#x27;course.announcements.MODIFY&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; Course Announcements.  **Since**: 3500.3.0
     * @param {Object} opts Optional parameters
     * @param {module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    learnApiPublicV1CoursesCourseIdAnnouncementsGet(courseId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'created': opts['created'],
        'createdCompare': opts['createdCompare'],
        'modified': opts['modified'],
        'modifiedCompare': opts['modifiedCompare'],
        'title': opts['title'],
        'sort': opts['sort'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/announcements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdAnnouncementsPost operation.
     * @callback module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CourseAnnouncement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Announcement
     * Create a Course Announcement. Users with the &#x27;course.announcements.CREATE&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can create Course Announcements.  **Since**: 3500.3.0
     * @param {Object} opts Optional parameters
     * @param {module:api/CourseAnnouncementsApi~learnApiPublicV1CoursesCourseIdAnnouncementsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CourseAnnouncement}
     */
    learnApiPublicV1CoursesCourseIdAnnouncementsPost(body, courseId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CourseAnnouncement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/announcements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
