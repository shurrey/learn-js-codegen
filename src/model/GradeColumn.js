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
import Availability5 from './Availability5';
import Grading5 from './Grading5';
import Score2 from './Score2';

/**
* The GradeColumn model module.
* @module model/GradeColumn
* @version 3900.6.0
*/
export default class GradeColumn {
    /**
    * Constructs a new <code>GradeColumn</code>.
    * @alias module:model/GradeColumn
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GradeColumn</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GradeColumn} obj Optional instance to populate.
    * @return {module:model/GradeColumn} The populated <code>GradeColumn</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GradeColumn();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('externalGrade')) {
                obj['externalGrade'] = ApiClient.convertToType(data['externalGrade'], 'Boolean');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('contentId')) {
                obj['contentId'] = ApiClient.convertToType(data['contentId'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = Score2.constructFromObject(data['score']);
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability5.constructFromObject(data['availability']);
            }
            if (data.hasOwnProperty('grading')) {
                obj['grading'] = Grading5.constructFromObject(data['grading']);
            }
        }
        return obj;
    }

    /**
    * The primary ID of the grade column.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The externalId for this grade column
    * @member {String} externalId
    */
    'externalId' = undefined;
    /**
    * The name of the grade column.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The description of the grade column.
    * @member {String} description
    */
    'description' = undefined;
    /**
    * Whether this grade column is an external grade column.
    * @member {Boolean} externalGrade
    */
    'externalGrade' = undefined;
    /**
    * The date this grade column was created.
    * @member {Date} created
    */
    'created' = undefined;
    /**
    * For grade columns associated with a content item, the ID of the content item.  **Since**: 3000.11.0
    * @member {String} contentId
    */
    'contentId' = undefined;
    /**
    * @member {module:model/Score2} score
    */
    'score' = undefined;
    /**
    * @member {module:model/Availability5} availability
    */
    'availability' = undefined;
    /**
    * @member {module:model/Grading5} grading
    */
    'grading' = undefined;




}
