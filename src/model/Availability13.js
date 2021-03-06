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
* The Availability13 model module.
* @module model/Availability13
* @version 3900.6.0
*/
export default class Availability13 {
    /**
    * Constructs a new <code>Availability13</code>.
    * @alias module:model/Availability13
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Availability13</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Availability13} obj Optional instance to populate.
    * @return {module:model/Availability13} The populated <code>Availability13</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Availability13();
                        
            
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'String');
            }
        }
        return obj;
    }

    /**
    * Whether the course role is currently available to course enrollments, organization enrollments, both or neither.  Valid values are:  - Course: Course Role is available to Course Enrollments - Organization: Course Role is available to Organization Enrollments - Both: Course Role is available to both Course and Organization Enrollments - None: Course Role is not available   | Type      | Description  | --------- | --------- | | Course | Course only | | Organization | Organization only | | CourseAndOrganization | Both Course and Organization | | No | Neither Course nor Organization | 
    * @member {module:model/Availability13.AvailableEnum} available
    */
    'available' = undefined;



    /**
    * Allowed values for the <code>available</code> property.
    * @enum {String}
    * @readonly
    */
    static AvailableEnum = {
        /**
         * value: "Course"
         * @const
         */
        "Course": "Course",
        /**
         * value: "Organization"
         * @const
         */
        "Organization": "Organization",
        /**
         * value: "CourseAndOrganization"
         * @const
         */
        "CourseAndOrganization": "CourseAndOrganization",
        /**
         * value: "No"
         * @const
         */
        "No": "No"    };

}
