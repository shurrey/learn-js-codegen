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
* The Avatar1 model module.
* @module model/Avatar1
* @version 3900.6.0
*/
export default class Avatar1 {
    /**
    * Constructs a new <code>Avatar1</code>.
    * The user&#x27;s avatar metadata  **Since**: 3800.13.0
    * @alias module:model/Avatar1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Avatar1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Avatar1} obj Optional instance to populate.
    * @return {module:model/Avatar1} The populated <code>Avatar1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Avatar1();
                        
            
            if (data.hasOwnProperty('viewUrl')) {
                obj['viewUrl'] = ApiClient.convertToType(data['viewUrl'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('uploadId')) {
                obj['uploadId'] = ApiClient.convertToType(data['uploadId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The location for retrieving the user's avatar  **Since**: 3800.13.0
    * @member {String} viewUrl
    */
    'viewUrl' = undefined;
    /**
    * The source of the user's avatar  **Since**: 3800.13.0   | Type      | Description  | --------- | --------- | | Default | The server default avatar | | User | The user set his/her own avatar | | System | A privileged user set the user's avatar to something other than default | 
    * @member {module:model/Avatar1.SourceEnum} source
    */
    'source' = undefined;
    /**
    * The upload id of the avatar image file  **Since**: 3800.13.0
    * @member {String} uploadId
    */
    'uploadId' = undefined;



    /**
    * Allowed values for the <code>source</code> property.
    * @enum {String}
    * @readonly
    */
    static SourceEnum = {
        /**
         * value: "Default"
         * @const
         */
        "Default": "Default",
        /**
         * value: "User"
         * @const
         */
        "User": "User",
        /**
         * value: "System"
         * @const
         */
        "System": "System"    };

}
