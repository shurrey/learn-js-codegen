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

import ApiClient from '../ApiClient';

/**
* The OAuth2Error model module.
* @module model/OAuth2Error
* @version 3900.6.0
*/
export default class OAuth2Error {
    /**
    * Constructs a new <code>OAuth2Error</code>.
    * @alias module:model/OAuth2Error
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OAuth2Error</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OAuth2Error} obj Optional instance to populate.
    * @return {module:model/OAuth2Error} The populated <code>OAuth2Error</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OAuth2Error();
                        
            
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('error_description')) {
                obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
            }
        }
        return obj;
    }

    /**
    * Error code indicating high level source of error   | Type      | Description  | --------- | --------- | | invalid_request | The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. | | invalid_client | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method).  The authorization server MAY return an HTTP 401 (Unauthorized) status code to indicate which HTTP authentication schemes are supported.  If the client attempted to authenticate via the 'Authorization' request header field, the authorization server MUST respond with an HTTP 401 (Unauthorized) status code and include the 'WWW-Authenticate' response header field matching the authentication scheme used by the client. | | invalid_grant | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client. | | unauthorized_client | The authenticated client is not authorized to use this authorization grant type. | | unsupported_grant_type | The authorization grant type is not supported by the authorization server. | | invalid_scope | The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner. | | unsupported_response_type | The authorization server does not support obtaining an authorization code using this method. | | server_error | The authorization server encountered an unexpected condition that prevented it from fulfilling the request. (This error code is needed because a 500 Internal Server Error HTTP status code cannot be returned to the client via a HTTP redirect.) | 
    * @member {module:model/OAuth2Error.ErrorEnum} error
    */
    'error' = undefined;
    /**
    * Optional text providing additional information about the error condition.
    * @member {String} error_description
    */
    'error_description' = undefined;



    /**
    * Allowed values for the <code>error</code> property.
    * @enum {String}
    * @readonly
    */
    static ErrorEnum = {
        /**
         * value: "invalid_request"
         * @const
         */
        "invalid_request": "invalid_request",
        /**
         * value: "invalid_client"
         * @const
         */
        "invalid_client": "invalid_client",
        /**
         * value: "invalid_grant"
         * @const
         */
        "invalid_grant": "invalid_grant",
        /**
         * value: "unauthorized_client"
         * @const
         */
        "unauthorized_client": "unauthorized_client",
        /**
         * value: "unsupported_grant_type"
         * @const
         */
        "unsupported_grant_type": "unsupported_grant_type",
        /**
         * value: "invalid_scope"
         * @const
         */
        "invalid_scope": "invalid_scope",
        /**
         * value: "unsupported_response_type"
         * @const
         */
        "unsupported_response_type": "unsupported_response_type",
        /**
         * value: "server_error"
         * @const
         */
        "server_error": "server_error"    };

}
