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
import InlineResponse20042 from '../model/InlineResponse20042';
import RestException from '../model/RestException';

/**
* Sessions service.
* @module api/SessionsApi
* @version 3900.6.0
*/
export default class SessionsApi {

    /**
    * Constructs a new SessionsApi. 
    * @alias module:api/SessionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the learnApiPublicV1SessionsGet operation.
     * @callback module:api/SessionsApi~learnApiPublicV1SessionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20042} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Active Sessions
     * List active user sessions in Learn.  Users with the following entitlement can view others session:  - system.user.sessions.VIEW &lt;/p&gt;  Also with users with any of the following entitlements can view the users information using the expand param:  - system.user.VIEW - user.VIEW &lt;/p&gt;  **Since**: 3800.4.0
     * @param {Object} opts Optional parameters
     * @param {module:api/SessionsApi~learnApiPublicV1SessionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20042}
     */
    learnApiPublicV1SessionsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'fields': opts['fields'],
        'expand': opts['expand']
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
        '/learn/api/public/v1/sessions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
