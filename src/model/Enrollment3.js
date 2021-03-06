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
* The Enrollment3 model module.
* @module model/Enrollment3
* @version 3900.6.0
*/
export default class Enrollment3 {
    /**
    * Constructs a new <code>Enrollment3</code>.
    * Settings controlling how students may enroll in the course.
    * @alias module:model/Enrollment3
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Enrollment3</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Enrollment3} obj Optional instance to populate.
    * @return {module:model/Enrollment3} The populated <code>Enrollment3</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Enrollment3();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('accessCode')) {
                obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
            }
        }
        return obj;
    }

    /**
    * Specifies the enrollment options for the course. Defaults to InstructorLed.   | Type      | Description  | --------- | --------- | | InstructorLed | Enrollment tasks for the course can only performed by the instructor | | SelfEnrollment | Instructors have the ability to enroll users, and students can also enroll themselves in the course | | EmailEnrollment | Instructors have the ability to enroll users, and students can email requests to the instructor for enrollment | 
    * @member {module:model/Enrollment3.TypeEnum} type
    */
    'type' = undefined;
    /**
    * The date on which enrollments are allowed for the course. May only be set if enrollment.type is SelfEnrollment.
    * @member {Date} start
    */
    'start' = undefined;
    /**
    * The date on which enrollment in this course ends. May only be set if enrollment.type is SelfEnrollment.
    * @member {Date} end
    */
    'end' = undefined;
    /**
    * The enrollment access code associated with this course. May only be set if enrollment.type is SelfEnrollment.
    * @member {String} accessCode
    */
    'accessCode' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "InstructorLed"
         * @const
         */
        "InstructorLed": "InstructorLed",
        /**
         * value: "SelfEnrollment"
         * @const
         */
        "SelfEnrollment": "SelfEnrollment",
        /**
         * value: "EmailEnrollment"
         * @const
         */
        "EmailEnrollment": "EmailEnrollment"    };

}
