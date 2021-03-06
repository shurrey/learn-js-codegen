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
import AdaptiveRelease1 from './AdaptiveRelease1';

/**
* The Availability3 model module.
* @module model/Availability3
* @version 3900.6.0
*/
export default class Availability3 {
    /**
    * Constructs a new <code>Availability3</code>.
    * @alias module:model/Availability3
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Availability3</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Availability3} obj Optional instance to populate.
    * @return {module:model/Availability3} The populated <code>Availability3</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Availability3();
                        
            
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'String');
            }
            if (data.hasOwnProperty('allowGuests')) {
                obj['allowGuests'] = ApiClient.convertToType(data['allowGuests'], 'Boolean');
            }
            if (data.hasOwnProperty('adaptiveRelease')) {
                obj['adaptiveRelease'] = AdaptiveRelease1.constructFromObject(data['adaptiveRelease']);
            }
        }
        return obj;
    }

    /**
    * Whether the created assignment is available to students. Instructors can always access the created assignment. If set to 'PartiallyVisible', the title will be available to students but the body will not. Defaults to Yes.   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | PartiallyVisible |  | 
    * @member {module:model/Availability3.AvailableEnum} available
    */
    'available' = undefined;
    /**
    * Whether the created assignment is available to users with the 'guest' role. Defaults to true.
    * @member {Boolean} allowGuests
    */
    'allowGuests' = undefined;
    /**
    * @member {module:model/AdaptiveRelease1} adaptiveRelease
    */
    'adaptiveRelease' = undefined;



    /**
    * Allowed values for the <code>available</code> property.
    * @enum {String}
    * @readonly
    */
    static AvailableEnum = {
        /**
         * value: "Yes"
         * @const
         */
        "Yes": "Yes",
        /**
         * value: "No"
         * @const
         */
        "No": "No",
        /**
         * value: "PartiallyVisible"
         * @const
         */
        "PartiallyVisible": "PartiallyVisible"    };

}
