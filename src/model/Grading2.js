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
import AnonymousGrading1 from './AnonymousGrading1';

/**
* The Grading2 model module.
* @module model/Grading2
* @version 3900.6.0
*/
export default class Grading2 {
    /**
    * Constructs a new <code>Grading2</code>.
    * Settings controlling whether numerical and text grade values for this grade column are calculated, determined based on attempts, or manually entered.
    * @alias module:model/Grading2
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Grading2</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Grading2} obj Optional instance to populate.
    * @return {module:model/Grading2} The populated <code>Grading2</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Grading2();
                        
            
            if (data.hasOwnProperty('due')) {
                obj['due'] = ApiClient.convertToType(data['due'], 'Date');
            }
            if (data.hasOwnProperty('attemptsAllowed')) {
                obj['attemptsAllowed'] = ApiClient.convertToType(data['attemptsAllowed'], 'Number');
            }
            if (data.hasOwnProperty('scoringModel')) {
                obj['scoringModel'] = ApiClient.convertToType(data['scoringModel'], 'String');
            }
            if (data.hasOwnProperty('schemaId')) {
                obj['schemaId'] = ApiClient.convertToType(data['schemaId'], 'String');
            }
            if (data.hasOwnProperty('anonymousGrading')) {
                obj['anonymousGrading'] = AnonymousGrading1.constructFromObject(data['anonymousGrading']);
            }
        }
        return obj;
    }

    /**
    * The date on which attempts are due for the grade column.
    * @member {Date} due
    */
    'due' = undefined;
    /**
    * Number of attempts allowed for the grade column.
    * @member {Number} attemptsAllowed
    */
    'attemptsAllowed' = undefined;
    /**
    * The scoring model for the submitted grade column attempts.   | Type      | Description  | --------- | --------- | | Last |  | | Highest |  | | Lowest |  | | First |  | | Average |  | 
    * @member {module:model/Grading2.ScoringModelEnum} scoringModel
    */
    'scoringModel' = undefined;
    /**
    * The ID of the grade schema associated with this grade column. Mutable since 3400.2.0  **Since**: 3200.13.0
    * @member {String} schemaId
    */
    'schemaId' = undefined;
    /**
    * @member {module:model/AnonymousGrading1} anonymousGrading
    */
    'anonymousGrading' = undefined;



    /**
    * Allowed values for the <code>scoringModel</code> property.
    * @enum {String}
    * @readonly
    */
    static ScoringModelEnum = {
        /**
         * value: "Last"
         * @const
         */
        "Last": "Last",
        /**
         * value: "Highest"
         * @const
         */
        "Highest": "Highest",
        /**
         * value: "Lowest"
         * @const
         */
        "Lowest": "Lowest",
        /**
         * value: "First"
         * @const
         */
        "First": "First",
        /**
         * value: "Average"
         * @const
         */
        "Average": "Average"    };

}