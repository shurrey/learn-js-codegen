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
* The Body49 model module.
* @module model/Body49
* @version 3900.6.0
*/
export default class Body49 {
    /**
    * Constructs a new <code>Body49</code>.
    * @alias module:model/Body49
    * @class
    * @param title {String} Node display name
    */

    constructor(title) {
        
        
        this['title'] = title;
        
    }

    /**
    * Constructs a <code>Body49</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body49} obj Optional instance to populate.
    * @return {module:model/Body49} The populated <code>Body49</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body49();
                        
            
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * Node unique identifier
    * @member {String} externalId
    */
    'externalId' = undefined;
    /**
    * Node display name
    * @member {String} title
    */
    'title' = undefined;
    /**
    * Node description
    * @member {String} description
    */
    'description' = undefined;




}
