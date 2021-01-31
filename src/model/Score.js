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
* The Score model module.
* @module model/Score
* @version 3900.6.0
*/
export default class Score {
    /**
    * Constructs a new <code>Score</code>.
    * @alias module:model/Score
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Score</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Score} obj Optional instance to populate.
    * @return {module:model/Score} The populated <code>Score</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Score();
                        
            
            if (data.hasOwnProperty('possible')) {
                obj['possible'] = ApiClient.convertToType(data['possible'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The number of points possible for the created assignment. Defaults to 100.
    * @member {Number} possible
    */
    'possible' = undefined;




}