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
import Grading3 from './Grading3';
import Score2 from './Score2';

/**
* The Body60 model module.
* @module model/Body60
* @version 3900.6.0
*/
export default class Body60 {
    /**
    * Constructs a new <code>Body60</code>.
    * @alias module:model/Body60
    * @class
    * @param name {String} The name of the grade column.
    * @param grading {module:model/Grading3} 
    */

    constructor(name, grading) {
        
        
        this['name'] = name;
        this['grading'] = grading;
        
    }

    /**
    * Constructs a <code>Body60</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body60} obj Optional instance to populate.
    * @return {module:model/Body60} The populated <code>Body60</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body60();
                        
            
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
            if (data.hasOwnProperty('score')) {
                obj['score'] = Score2.constructFromObject(data['score']);
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability5.constructFromObject(data['availability']);
            }
            if (data.hasOwnProperty('grading')) {
                obj['grading'] = Grading3.constructFromObject(data['grading']);
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
    * @member {module:model/Score2} score
    */
    'score' = undefined;
    /**
    * @member {module:model/Availability5} availability
    */
    'availability' = undefined;
    /**
    * @member {module:model/Grading3} grading
    */
    'grading' = undefined;




}
