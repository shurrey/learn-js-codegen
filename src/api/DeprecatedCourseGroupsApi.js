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
import Body63 from '../model/Body63';
import Body64 from '../model/Body64';
import Group from '../model/Group';
import InlineResponse20049 from '../model/InlineResponse20049';
import RestException from '../model/RestException';

/**
* DeprecatedCourseGroups service.
* @module api/DeprecatedCourseGroupsApi
* @version 3900.6.0
*/
export default class DeprecatedCourseGroupsApi {

    /**
    * Constructs a new DeprecatedCourseGroupsApi. 
    * @alias module:api/DeprecatedCourseGroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdGroupsGet operation.
     * @callback module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20049} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Groups
     * Callers with the following entitlement can view all groups in the course:  - course.groups.VIEW Callers enrolled in course can view all groups they&#x27;re enrolled in, and all self-enrollment groups  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20049}
     */
    learnApiPublicV1CoursesCourseIdGroupsGet(courseId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      let returnType = InlineResponse20049;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdGroupsGroupIdDelete operation.
     * @callback module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsGroupIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Group
     * Deletes a group from the specified course.  Required entitlements:  - course.group.DELETE  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.
     * @param {module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsGroupIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1CoursesCourseIdGroupsGroupIdDelete(courseId, groupId, callback) {
      let postBody = null;

      let pathParams = {
        'courseId': courseId,
        'groupId': groupId
      };
      let queryParams = {
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
        '/learn/api/public/v1/courses/{courseId}/groups/{groupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdGroupsGroupIdGet operation.
     * @callback module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsGroupIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Group
     * Loads a group in the specified course.  Entitlement and field visibility rules are the same as those when loading the groups collection.  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsGroupIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    learnApiPublicV1CoursesCourseIdGroupsGroupIdGet(courseId, groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'courseId': courseId,
        'groupId': groupId
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
      let returnType = Group;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/groups/{groupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdGroupsGroupIdPatch operation.
     * @callback module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsGroupIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Group
     * Updates a group in the specified course.  Minimal entitlements required:  - course.group.MODIFY  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsGroupIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    learnApiPublicV1CoursesCourseIdGroupsGroupIdPatch(body, courseId, groupId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'courseId': courseId,
        'groupId': groupId
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
      let returnType = Group;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/groups/{groupId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdGroupsPost operation.
     * @callback module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Group
     * Creates a group in the specified course.  Minimal entitlements required:  - course.group.CREATE  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCourseGroupsApi~learnApiPublicV1CoursesCourseIdGroupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    learnApiPublicV1CoursesCourseIdGroupsPost(body, courseId, opts, callback) {
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
      let returnType = Group;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
