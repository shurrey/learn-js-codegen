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
import Announcement from '../model/Announcement';
import Body from '../model/Body';
import Body1 from '../model/Body1';
import InlineResponse200 from '../model/InlineResponse200';
import RestException from '../model/RestException';

/**
* Announcements service.
* @module api/AnnouncementsApi
* @version 3900.6.0
*/
export default class AnnouncementsApi {

    /**
    * Constructs a new AnnouncementsApi. 
    * @alias module:api/AnnouncementsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the learnApiPublicV1AnnouncementsAnnouncementIdDelete operation.
     * @callback module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsAnnouncementIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Announcement
     * Delete a System Announcement. Users with the &#x27;system.announcements.DELETE&#x27; entitlement can delete System Announcements.  **Since**: 3100.7.0
     * @param {Object} opts Optional parameters
     * @param {module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsAnnouncementIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1AnnouncementsAnnouncementIdDelete(announcementId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'announcementId': announcementId
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
        '/learn/api/public/v1/announcements/{announcementId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1AnnouncementsAnnouncementIdGet operation.
     * @callback module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsAnnouncementIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Announcement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Announcement
     * Get a System Announcement. Users with the &#x27;system.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; System Announcements. Users with the &#x27;system.announcements.admin.VIEW&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; System Announcements.  **Since**: 3100.7.0
     * @param {Object} opts Optional parameters
     * @param {module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsAnnouncementIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Announcement}
     */
    learnApiPublicV1AnnouncementsAnnouncementIdGet(announcementId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'announcementId': announcementId
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
      let returnType = Announcement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/announcements/{announcementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1AnnouncementsAnnouncementIdPatch operation.
     * @callback module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsAnnouncementIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Announcement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Announcement
     * Update a System Announcement. Users with the &#x27;system.announcements.MODIFY&#x27; entitlement can update System Announcements.  **Since**: 3100.7.0
     * @param {Object} opts Optional parameters
     * @param {module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsAnnouncementIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Announcement}
     */
    learnApiPublicV1AnnouncementsAnnouncementIdPatch(body, announcementId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'announcementId': announcementId
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
      let returnType = Announcement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/announcements/{announcementId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1AnnouncementsGet operation.
     * @callback module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Announcements
     * Return a list of System Announcements. Users with the &#x27;system.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; System Announcements. Users with the &#x27;system.announcements.admin.VIEW&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; System Announcements.  **Since**: 3100.7.0
     * @param {Object} opts Optional parameters
     * @param {module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    learnApiPublicV1AnnouncementsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/learn/api/public/v1/announcements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1AnnouncementsPost operation.
     * @callback module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Announcement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Announcement
     * Create a System Announcement. Users with the &#x27;system.announcements.CREATE&#x27; entitlement can create System Announcements.  **Since**: 3100.7.0
     * @param {Object} opts Optional parameters
     * @param {module:api/AnnouncementsApi~learnApiPublicV1AnnouncementsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Announcement}
     */
    learnApiPublicV1AnnouncementsPost(body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
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
      let returnType = Announcement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/announcements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
