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
import Grading1 from './Grading1';
import Score1 from './Score1';

/**
* The Body26 model module.
* @module model/Body26
* @version 3900.6.0
*/
export default class Body26 {
    /**
    * Constructs a new <code>Body26</code>.
    * @alias module:model/Body26
    * @class
    * @param name {String} The name of the grade column.
    * @param grading {module:model/Grading1} 
    */

    constructor(name, grading) {
        
        
        this['name'] = name;
        this['grading'] = grading;
        
    }

    /**
    * Constructs a <code>Body26</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body26} obj Optional instance to populate.
    * @return {module:model/Body26} The populated <code>Body26</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body26();
                        
            
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('externalToolId')) {
                obj['externalToolId'] = ApiClient.convertToType(data['externalToolId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('externalGrade')) {
                obj['externalGrade'] = ApiClient.convertToType(data['externalGrade'], 'Boolean');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = Score1.constructFromObject(data['score']);
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability5.constructFromObject(data['availability']);
            }
            if (data.hasOwnProperty('grading')) {
                obj['grading'] = Grading1.constructFromObject(data['grading']);
            }
            if (data.hasOwnProperty('gradebookCategoryId')) {
                obj['gradebookCategoryId'] = ApiClient.convertToType(data['gradebookCategoryId'], 'String');
            }
            if (data.hasOwnProperty('includeInCalculations')) {
                obj['includeInCalculations'] = ApiClient.convertToType(data['includeInCalculations'], 'Boolean');
            }
            if (data.hasOwnProperty('showStatisticsToStudents')) {
                obj['showStatisticsToStudents'] = ApiClient.convertToType(data['showStatisticsToStudents'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The externalId for this grade column
    * @member {String} externalId
    */
    'externalId' = undefined;
    /**
    * The externalId for this grade column  **Since**: 3500.2.0
    * @member {String} externalToolId
    */
    'externalToolId' = undefined;
    /**
    * The name of the grade column.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The display name of the grade column. Only applicable for Classic courses. Ultra courses will simply use the `name` field.  **Since**: 3300.2.0
    * @member {String} displayName
    */
    'displayName' = undefined;
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
    * @member {module:model/Score1} score
    */
    'score' = undefined;
    /**
    * @member {module:model/Availability5} availability
    */
    'availability' = undefined;
    /**
    * @member {module:model/Grading1} grading
    */
    'grading' = undefined;
    /**
    * The gradebook category ID for the grade column.  **Since**: 3400.2.0
    * @member {String} gradebookCategoryId
    */
    'gradebookCategoryId' = undefined;
    /**
    * Indicates whether or not this column is included in gradebook calculations. Cannot be set for Ultra courses. Default: true  **Since**: 3800.4.0
    * @member {Boolean} includeInCalculations
    */
    'includeInCalculations' = undefined;
    /**
    * Indicates whether or not column statistics are shown to students. Read-only for Ultra courses. Default: false  **Since**: 3800.4.0
    * @member {Boolean} showStatisticsToStudents
    */
    'showStatisticsToStudents' = undefined;




}