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
* The Locale model module.
* @module model/Locale
* @version 3900.6.0
*/
export default class Locale {
    /**
    * Constructs a new <code>Locale</code>.
    * Settings controlling localization within the course.
    * @alias module:model/Locale
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Locale</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Locale} obj Optional instance to populate.
    * @return {module:model/Locale} The populated <code>Locale</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Locale();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('force')) {
                obj['force'] = ApiClient.convertToType(data['force'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The locale of this course.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * Whether students are forced to use the course's specified locale.
    * @member {Boolean} force
    */
    'force' = undefined;




}
