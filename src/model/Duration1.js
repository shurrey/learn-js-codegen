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
* The Duration1 model module.
* @module model/Duration1
* @version 3900.6.0
*/
export default class Duration1 {
    /**
    * Constructs a new <code>Duration1</code>.
    * Duration indicates when the System Announcement is Available based on whether it is Permanent or if the date/time of the request falls within its Start &amp; End dates.
    * @alias module:model/Duration1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Duration1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Duration1} obj Optional instance to populate.
    * @return {module:model/Duration1} The populated <code>Duration1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Duration1();
                        
            
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }

    /**
    * The date this Announcement starts being Available.
    * @member {Date} start
    */
    'start' = undefined;
    /**
    * The date this Announcement stops being Available.
    * @member {Date} end
    */
    'end' = undefined;




}