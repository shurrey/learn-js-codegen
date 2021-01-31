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
import Body58 from '../model/Body58';
import Body59 from '../model/Body59';
import InlineResponse20042 from '../model/InlineResponse20042';
import InlineResponse20045 from '../model/InlineResponse20045';
import RestException from '../model/RestException';
import User from '../model/User';

/**
* Users service.
* @module api/UsersApi
* @version 3900.6.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the learnApiPublicV1UsersGet operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Users
     * Returns a list of users.  At least one of the entitlements &#x27;system.user.VIEW&#x27; or &#x27;user.VIEW&#x27; are needed.  Note: Users with the &#x27;SystemAdmin&#x27; role are only included in the results if the logged on user also has this role.  **Since**: 3000.1.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20045}
     */
    learnApiPublicV1UsersGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'userName': opts['userName'],
        'externalId': opts['externalId'],
        'created': opts['created'],
        'modified': opts['modified'],
        'createdCompare': opts['createdCompare'],
        'modifiedCompare': opts['modifiedCompare'],
        'dataSourceId': opts['dataSourceId'],
        'name.family': opts['nameFamily'],
        'availability.available': opts['availabilityAvailable'],
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
      let returnType = InlineResponse20045;

      return this.apiClient.callApi(
        '/learn/api/public/v1/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersPost operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create User
     * Creates a user.  The &#x27;system.user.CREATE&#x27; entitlement is needed.  **Since**: 2015.11.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    learnApiPublicV1UsersPost(body, opts, callback) {
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
      let returnType = User;

      return this.apiClient.callApi(
        '/learn/api/public/v1/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdAvatarGet operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdAvatarGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Avatar
     * Gets a user&#x27;s avatar image.  The response is an HTTP redirect rather then image raw data. It is up to the caller of the api to follow the redirect and download the image.  The redirect link returned is signed on behalf of the user of the API. It is expiring, so it is not recommended for bookmarking. The caller of this API is checked for permissions to see the requested user&#x27;s resource.  **Since**: 3800.10.0
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdAvatarGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1UsersUserIdAvatarGet(userId, callback) {
      let postBody = null;

      let pathParams = {
        'userId': userId
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
        '/learn/api/public/v1/users/{userId}/avatar', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdDelete operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User
     * Deletes a user.  The &#x27;system.user.DELETE&#x27; entitlement is needed.  **Since**: 2015.11.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1UsersUserIdDelete(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'userId': userId
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
        '/learn/api/public/v1/users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdGet operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User
     * Loads a user.  Properties returned will depend on the caller&#x27;s entitlements.  Callers with the entitlement &#x27;user.VIEW&#x27; will always get a minimal set of core properties:  - id - name.given - name.family - name.middle - systemRoleIds  Depending on the Learn administrator customizable user field display settings, as well as the target user&#x27;s personal visibility settings, the following fields might also be included:  - userName - educationLevel - gender - birthDate - name.other - name.suffix - name.title - job.* - contact.* - address.*  Callers asking for their own user record get all fields listed above, plus:  - locale.*  All user properties are provided to callers with one of the entitlements &#x27;system.user.properties.MODIFY&#x27;, &#x27;system.useradmin.generic.VIEW&#x27;, or &#x27;system.user.VIEW&#x27;.  **Since**: 2015.11.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    learnApiPublicV1UsersUserIdGet(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'userId': userId
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
      let returnType = User;

      return this.apiClient.callApi(
        '/learn/api/public/v1/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdObserveesGet operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdObserveesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Observees
     * Returns a list of users being observed by a given user.  The &#x27;observer.associations.VIEW&#x27; entitlement is needed as well as being able to view the provided user.  **Since**: 3500.5.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdObserveesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20045}
     */
    learnApiPublicV1UsersUserIdObserveesGet(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'userId': userId
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
      let returnType = InlineResponse20045;

      return this.apiClient.callApi(
        '/learn/api/public/v1/users/{userId}/observees', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdObserversGet operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdObserversGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Observers
     * Returns a list of users observing a given user.  The &#x27;observer.associations.VIEW&#x27; entitlement is needed as well as being able to view the provided user.  **Since**: 3500.5.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdObserversGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20045}
     */
    learnApiPublicV1UsersUserIdObserversGet(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'userId': userId
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
      let returnType = InlineResponse20045;

      return this.apiClient.callApi(
        '/learn/api/public/v1/users/{userId}/observers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdObserversObserverIdDelete operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdObserversObserverIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Observer
     * Removes an observer/observee association.  The &#x27;system.observer_user.DELETE&#x27; entitlement is needed as well as being able to view the provided users.  **Since**: 3500.5.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdObserversObserverIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1UsersUserIdObserversObserverIdDelete(userId, observerId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'userId': userId,
        'observerId': observerId
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
        '/learn/api/public/v1/users/{userId}/observers/{observerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdObserversObserverIdPut operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdObserversObserverIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Observer
     * Creates an observer/observee association. The user identified by userId must not have the OBSERVER system role. Similarly, the user identified by observerId must have the OBSERVER system role.  The &#x27;system.observer_user.CREATE&#x27; entitlement is needed as well as being able to view the provided users.  **Since**: 3500.5.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdObserversObserverIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    learnApiPublicV1UsersUserIdObserversObserverIdPut(userId, observerId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'userId': userId,
        'observerId': observerId
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
      let returnType = User;

      return this.apiClient.callApi(
        '/learn/api/public/v1/users/{userId}/observers/{observerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdPatch operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User
     * Updates a user.  Callers may update their own user record if they have the &#x27;self.user.MODIFY&#x27; entitlement.  Updating other users requires the &#x27;system.user.properties.MODIFY&#x27; entitlement.  Certain properties may be edited by callers with more finely grained entitlements:    | Field                  | Entitlements Required                               |  |------------------------|-----------------------------------------------------|  | systemRoleIds          | system.user.MODIFY, system.user-system-role.MODIFY  |  | availability.available | system.user.MODIFY, system.user.availability.MODIFY |  | password               | system.user.MODIFY, system.user-password.MODIFY     |    **Since**: 2015.11.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    learnApiPublicV1UsersUserIdPatch(body, userId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'userId': userId
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
      let returnType = User;

      return this.apiClient.callApi(
        '/learn/api/public/v1/users/{userId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1UsersUserIdSessionsGet operation.
     * @callback module:api/UsersApi~learnApiPublicV1UsersUserIdSessionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20042} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Current Active User By Id
     * Displays active session information for a specific user.  The entitlement system.user.sessions.VIEW is needed to request a user&#x27;s active sessions.  **Since**: 3800.4.0
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~learnApiPublicV1UsersUserIdSessionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20042}
     */
    learnApiPublicV1UsersUserIdSessionsGet(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'userId': userId
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
      let returnType = InlineResponse20042;

      return this.apiClient.callApi(
        '/learn/api/public/v1/users/{userId}/sessions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}