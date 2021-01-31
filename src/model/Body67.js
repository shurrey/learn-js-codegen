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
* The Body67 model module.
* @module model/Body67
* @version 3900.6.0
*/
export default class Body67 {
    /**
    * Constructs a new <code>Body67</code>.
    * @alias module:model/Body67
    * @class
    * @param courseId {String} The Course ID to copy into.
    */

    constructor(courseId) {
        
        
        this['courseId'] = courseId;
        
    }

    /**
    * Constructs a <code>Body67</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body67} obj Optional instance to populate.
    * @return {module:model/Body67} The populated <code>Body67</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body67();
                        
            
            if (data.hasOwnProperty('courseId')) {
                obj['courseId'] = ApiClient.convertToType(data['courseId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The Course ID to copy into.
    * @member {String} courseId
    */
    'courseId' = undefined;




}