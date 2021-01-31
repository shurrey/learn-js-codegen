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
* The Grading model module.
* @module model/Grading
* @version 3900.6.0
*/
export default class Grading {
    /**
    * Constructs a new <code>Grading</code>.
    * @alias module:model/Grading
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Grading</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Grading} obj Optional instance to populate.
    * @return {module:model/Grading} The populated <code>Grading</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Grading();
                        
            
            if (data.hasOwnProperty('due')) {
                obj['due'] = ApiClient.convertToType(data['due'], 'Date');
            }
            if (data.hasOwnProperty('attemptsAllowed')) {
                obj['attemptsAllowed'] = ApiClient.convertToType(data['attemptsAllowed'], 'Number');
            }
            if (data.hasOwnProperty('gradeSchemaId')) {
                obj['gradeSchemaId'] = ApiClient.convertToType(data['gradeSchemaId'], 'String');
            }
            if (data.hasOwnProperty('isUnlimitedAttemptsAllowed')) {
                obj['isUnlimitedAttemptsAllowed'] = ApiClient.convertToType(data['isUnlimitedAttemptsAllowed'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Date and time that the created assignment will be due. If not specified, this will default to the specified \"availability.adaptiveRelease.end\" date. If that is also not specified, due date defaults to null.
    * @member {Date} due
    */
    'due' = undefined;
    /**
    * The number of attempts allowed on the created assignment. Defaults to 1. Maximum allowed is 10 for an Ultra Assignment. Value will be ignored if isUnlimitedAttemptsAllowed is set to true.
    * @member {Number} attemptsAllowed
    */
    'attemptsAllowed' = undefined;
    /**
    * The grading schema to use for the created assignment. Defaults to Score.
    * @member {String} gradeSchemaId
    */
    'gradeSchemaId' = undefined;
    /**
    * Determines if the assignment has unlimited number of attempts.  **Since**: 3400.8.0
    * @member {Boolean} isUnlimitedAttemptsAllowed
    */
    'isUnlimitedAttemptsAllowed' = undefined;




}
