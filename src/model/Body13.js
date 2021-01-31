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
* The Body13 model module.
* @module model/Body13
* @version 3900.6.0
*/
export default class Body13 {
    /**
    * Constructs a new <code>Body13</code>.
    * @alias module:model/Body13
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body13</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body13} obj Optional instance to populate.
    * @return {module:model/Body13} The populated <code>Body13</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body13();
                        
            
            if (data.hasOwnProperty('contentId')) {
                obj['contentId'] = ApiClient.convertToType(data['contentId'], 'String');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The ID of the associated content.
    * @member {String} contentId
    */
    'contentId' = undefined;
    /**
    * The ID of the association of content and group.
    * @member {String} groupId
    */
    'groupId' = undefined;




}