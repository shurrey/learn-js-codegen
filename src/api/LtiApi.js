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
import Body52 from '../model/Body52';
import Body53 from '../model/Body53';
import Body54 from '../model/Body54';
import Body55 from '../model/Body55';
import InlineResponse20035 from '../model/InlineResponse20035';
import InlineResponse20036 from '../model/InlineResponse20036';
import LTIDomainConfig from '../model/LTIDomainConfig';
import LTIPlacement from '../model/LTIPlacement';
import RestException from '../model/RestException';

/**
* Lti service.
* @module api/LtiApi
* @version 3900.6.0
*/
export default class LtiApi {

    /**
    * Constructs a new LtiApi. 
    * @alias module:api/LtiApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the learnApiPublicV1LtiPlacementsGet operation.
     * @callback module:api/LtiApi~learnApiPublicV1LtiPlacementsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20035} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Placements
     * Returns a list of LTI placements  Supports the standard paging and sorting query parameters, with a maximum page size of 1000.  **Since**: 3300.0.0
     * @param {Object} opts Optional parameters
     * @param {module:api/LtiApi~learnApiPublicV1LtiPlacementsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20035}
     */
    learnApiPublicV1LtiPlacementsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'handle': opts['handle'],
        'name': opts['name'],
        'type': opts['type'],
        'authorId': opts['authorId'],
        'courseId': opts['courseId'],
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
      let returnType = InlineResponse20035;

      return this.apiClient.callApi(
        '/learn/api/public/v1/lti/placements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1LtiPlacementsPlacementIdDelete operation.
     * @callback module:api/LtiApi~learnApiPublicV1LtiPlacementsPlacementIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Placement
     * Deletes an LTI placement with the specified Id  The &#x27;system.administration.VIEW&#x27; entitlement is required to delete placements  **Since**: 3300.0.0
     * @param {Object} opts Optional parameters
     * @param {module:api/LtiApi~learnApiPublicV1LtiPlacementsPlacementIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1LtiPlacementsPlacementIdDelete(placementId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'placementId': placementId
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
        '/learn/api/public/v1/lti/placements/{placementId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1LtiPlacementsPlacementIdGet operation.
     * @callback module:api/LtiApi~learnApiPublicV1LtiPlacementsPlacementIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LTIPlacement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Placement
     * Returns the LTI placement with the specified Id  **Since**: 3300.0.0
     * @param {Object} opts Optional parameters
     * @param {module:api/LtiApi~learnApiPublicV1LtiPlacementsPlacementIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LTIPlacement}
     */
    learnApiPublicV1LtiPlacementsPlacementIdGet(placementId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'placementId': placementId
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
      let returnType = LTIPlacement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/lti/placements/{placementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1LtiPlacementsPlacementIdPatch operation.
     * @callback module:api/LtiApi~learnApiPublicV1LtiPlacementsPlacementIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LTIPlacement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Placement
     * Updates an LTI placement with the given Id  The &#x27;system.administration.VIEW&#x27; entitlement is required to update placements  **Since**: 3300.0.0
     * @param {Object} opts Optional parameters
     * @param {module:api/LtiApi~learnApiPublicV1LtiPlacementsPlacementIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LTIPlacement}
     */
    learnApiPublicV1LtiPlacementsPlacementIdPatch(body, placementId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'placementId': placementId
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
      let returnType = LTIPlacement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/lti/placements/{placementId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1LtiPlacementsPost operation.
     * @callback module:api/LtiApi~learnApiPublicV1LtiPlacementsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LTIPlacement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Placement
     * Creates an LTI placement  The &#x27;system.administration.VIEW&#x27; entitlement is required to create placements  **Since**: 3300.0.0
     * @param {module:api/LtiApi~learnApiPublicV1LtiPlacementsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LTIPlacement}
     */
    learnApiPublicV1LtiPlacementsPost(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LTIPlacement;

      return this.apiClient.callApi(
        '/learn/api/public/v1/lti/placements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApipublicV1LtiDomainsDomainIdDelete operation.
     * @callback module:api/LtiApi~learnApipublicV1LtiDomainsDomainIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Domain Config
     * Deletes an LTI Domain Config.  The &#x27;system.administration.VIEW&#x27; entitlement is needed to delete a domain.  **Since**: 3300.9.0
     * @param {Object} opts Optional parameters
     * @param {module:api/LtiApi~learnApipublicV1LtiDomainsDomainIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApipublicV1LtiDomainsDomainIdDelete(domainId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'domainId': domainId
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
        '/learn/apipublic/v1/lti/domains/{domainId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApipublicV1LtiDomainsDomainIdGet operation.
     * @callback module:api/LtiApi~learnApipublicV1LtiDomainsDomainIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LTIDomainConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Domain Config
     * This endpoint returns the LTI domain config with the specified Id  The &#x27;system.administration.VIEW&#x27; entitlement is needed to get a domain.  **Since**: 3300.9.0
     * @param {Object} opts Optional parameters
     * @param {module:api/LtiApi~learnApipublicV1LtiDomainsDomainIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LTIDomainConfig}
     */
    learnApipublicV1LtiDomainsDomainIdGet(domainId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'domainId': domainId
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
      let returnType = LTIDomainConfig;

      return this.apiClient.callApi(
        '/learn/apipublic/v1/lti/domains/{domainId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApipublicV1LtiDomainsDomainIdPatch operation.
     * @callback module:api/LtiApi~learnApipublicV1LtiDomainsDomainIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LTIDomainConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Domain Config
     * Updates an LTI Domain Config.  The &#x27;system.administration.VIEW&#x27; entitlement is needed to update a domain.  **Since**: 3300.9.0
     * @param {Object} opts Optional parameters
     * @param {module:api/LtiApi~learnApipublicV1LtiDomainsDomainIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LTIDomainConfig}
     */
    learnApipublicV1LtiDomainsDomainIdPatch(body, domainId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'domainId': domainId
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
      let returnType = LTIDomainConfig;

      return this.apiClient.callApi(
        '/learn/apipublic/v1/lti/domains/{domainId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApipublicV1LtiDomainsGet operation.
     * @callback module:api/LtiApi~learnApipublicV1LtiDomainsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20036} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Domain Configs
     * This endpoint returns the list of LTI domain configs  The &#x27;system.administration.VIEW&#x27; entitlement is needed to list domains.  **Since**: 3300.9.0
     * @param {Object} opts Optional parameters
     * @param {module:api/LtiApi~learnApipublicV1LtiDomainsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20036}
     */
    learnApipublicV1LtiDomainsGet(opts, callback) {
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
      let returnType = InlineResponse20036;

      return this.apiClient.callApi(
        '/learn/apipublic/v1/lti/domains', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApipublicV1LtiDomainsPost operation.
     * @callback module:api/LtiApi~learnApipublicV1LtiDomainsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LTIDomainConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Domain Config
     * Creates an LTI Domain Config.  The &#x27;system.administration.VIEW&#x27; entitlement is needed to create a domain.  **Since**: 3300.9.0
     * @param {module:api/LtiApi~learnApipublicV1LtiDomainsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LTIDomainConfig}
     */
    learnApipublicV1LtiDomainsPost(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LTIDomainConfig;

      return this.apiClient.callApi(
        '/learn/apipublic/v1/lti/domains', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}