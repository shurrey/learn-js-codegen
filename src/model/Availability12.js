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
import Duration5 from './Duration5';

/**
* The Availability12 model module.
* @module model/Availability12
* @version 3900.6.0
*/
export default class Availability12 {
    /**
    * Constructs a new <code>Availability12</code>.
    * Settings controlling availability of the course to students.
    * @alias module:model/Availability12
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Availability12</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Availability12} obj Optional instance to populate.
    * @return {module:model/Availability12} The populated <code>Availability12</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Availability12();
                        
            
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = Duration5.constructFromObject(data['duration']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Duration5} duration
    */
    'duration' = undefined;




}
