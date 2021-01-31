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
* The GradeNotation model module.
* @module model/GradeNotation
* @version 3900.6.0
*/
export default class GradeNotation {
    /**
    * Constructs a new <code>GradeNotation</code>.
    * @alias module:model/GradeNotation
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GradeNotation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GradeNotation} obj Optional instance to populate.
    * @return {module:model/GradeNotation} The populated <code>GradeNotation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GradeNotation();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * The primary key of the grade notation.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The performance code associated with the grade notation.
    * @member {String} code
    */
    'code' = undefined;
    /**
    * The description of the grade notation.
    * @member {String} description
    */
    'description' = undefined;




}
