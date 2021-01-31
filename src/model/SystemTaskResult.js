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
* The SystemTaskResult model module.
* @module model/SystemTaskResult
* @version 3900.6.0
*/
export default class SystemTaskResult {
    /**
    * Constructs a new <code>SystemTaskResult</code>.
    * @alias module:model/SystemTaskResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SystemTaskResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SystemTaskResult} obj Optional instance to populate.
    * @return {module:model/SystemTaskResult} The populated <code>SystemTaskResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemTaskResult();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
    * The identifier used to determine type of the system task result.
    * @member {String} id
    */
    'id' = undefined;




}