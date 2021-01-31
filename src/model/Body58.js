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
import Address from './Address';
import Availability10 from './Availability10';
import Avatar from './Avatar';
import Contact from './Contact';
import Job from './Job';
import Locale1 from './Locale1';
import Name from './Name';
import SystemRoleEnum from './SystemRoleEnum';

/**
* The Body58 model module.
* @module model/Body58
* @version 3900.6.0
*/
export default class Body58 {
    /**
    * Constructs a new <code>Body58</code>.
    * @alias module:model/Body58
    * @class
    * @param userName {String} The userName property, shown in the UI.
    * @param password {String} The user's login password.
    * @param name {module:model/Name} 
    */

    constructor(userName, password, name) {
        
        
        this['userName'] = userName;
        this['password'] = password;
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>Body58</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body58} obj Optional instance to populate.
    * @return {module:model/Body58} The populated <code>Body58</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body58();
                        
            
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('dataSourceId')) {
                obj['dataSourceId'] = ApiClient.convertToType(data['dataSourceId'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('studentId')) {
                obj['studentId'] = ApiClient.convertToType(data['studentId'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('educationLevel')) {
                obj['educationLevel'] = ApiClient.convertToType(data['educationLevel'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('birthDate')) {
                obj['birthDate'] = ApiClient.convertToType(data['birthDate'], 'Date');
            }
            if (data.hasOwnProperty('institutionRoleIds')) {
                obj['institutionRoleIds'] = ApiClient.convertToType(data['institutionRoleIds'], ['String']);
            }
            if (data.hasOwnProperty('systemRoleIds')) {
                obj['systemRoleIds'] = ApiClient.convertToType(data['systemRoleIds'], [SystemRoleEnum]);
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability10.constructFromObject(data['availability']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = Name.constructFromObject(data['name']);
            }
            if (data.hasOwnProperty('job')) {
                obj['job'] = Job.constructFromObject(data['job']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = Locale1.constructFromObject(data['locale']);
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = Avatar.constructFromObject(data['avatar']);
            }
        }
        return obj;
    }

    /**
    * An optional externally-defined unique ID for the user.  Defaults to the userName.  Formerly known as 'batchUid'.
    * @member {String} externalId
    */
    'externalId' = undefined;
    /**
    * The ID of the data source associated with this user.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".
    * @member {String} dataSourceId
    */
    'dataSourceId' = undefined;
    /**
    * The userName property, shown in the UI.
    * @member {String} userName
    */
    'userName' = undefined;
    /**
    * The user's student ID name or number as defined by the school or institution.
    * @member {String} studentId
    */
    'studentId' = undefined;
    /**
    * The user's login password.
    * @member {String} password
    */
    'password' = undefined;
    /**
    * The education level of this user.   | Type      | Description  | --------- | --------- | | K8 | Kindergarten through 8th grade | | HighSchool | Grades 9 through 12. | | Freshman | College or university freshman. | | Sophomore | College or university sophomore. | | Junior | College or university junior. | | Senior | College or university senior. | | GraduateSchool | Graduate school student. | | PostGraduateSchool | Post-graduate school student. | | Unknown | Education Level is not known, or not specified. | 
    * @member {module:model/Body58.EducationLevelEnum} educationLevel
    */
    'educationLevel' = undefined;
    /**
    * The gender of this user.   | Type      | Description  | --------- | --------- | | Female | Female | | Male | Male | | Unknown | Gender is not known, or not specified. | 
    * @member {module:model/Body58.GenderEnum} gender
    */
    'gender' = undefined;
    /**
    * The birth date of this user.
    * @member {Date} birthDate
    */
    'birthDate' = undefined;
    /**
    * The primary and secondary institution roles assigned to this user. The primary institution role is the first item in the list, followed by all secondary institution roles sorted alphabetically.  **Since**: 3300.3.0
    * @member {Array.<String>} institutionRoleIds
    */
    'institutionRoleIds' = undefined;
    /**
    * The system roles (the administrative user roles in the UI) for this user.  The first role in this list is the user's primary system role, while the remaining are secondary system roles.
    * @member {Array.<module:model/SystemRoleEnum>} systemRoleIds
    */
    'systemRoleIds' = undefined;
    /**
    * @member {module:model/Availability10} availability
    */
    'availability' = undefined;
    /**
    * @member {module:model/Name} name
    */
    'name' = undefined;
    /**
    * @member {module:model/Job} job
    */
    'job' = undefined;
    /**
    * @member {module:model/Contact} contact
    */
    'contact' = undefined;
    /**
    * @member {module:model/Address} address
    */
    'address' = undefined;
    /**
    * @member {module:model/Locale1} locale
    */
    'locale' = undefined;
    /**
    * @member {module:model/Avatar} avatar
    */
    'avatar' = undefined;



    /**
    * Allowed values for the <code>educationLevel</code> property.
    * @enum {String}
    * @readonly
    */
    static EducationLevelEnum = {
        /**
         * value: "K8"
         * @const
         */
        "K8": "K8",
        /**
         * value: "HighSchool"
         * @const
         */
        "HighSchool": "HighSchool",
        /**
         * value: "Freshman"
         * @const
         */
        "Freshman": "Freshman",
        /**
         * value: "Sophomore"
         * @const
         */
        "Sophomore": "Sophomore",
        /**
         * value: "Junior"
         * @const
         */
        "Junior": "Junior",
        /**
         * value: "Senior"
         * @const
         */
        "Senior": "Senior",
        /**
         * value: "GraduateSchool"
         * @const
         */
        "GraduateSchool": "GraduateSchool",
        /**
         * value: "PostGraduateSchool"
         * @const
         */
        "PostGraduateSchool": "PostGraduateSchool",
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown": "Unknown"    };
    /**
    * Allowed values for the <code>gender</code> property.
    * @enum {String}
    * @readonly
    */
    static GenderEnum = {
        /**
         * value: "Female"
         * @const
         */
        "Female": "Female",
        /**
         * value: "Male"
         * @const
         */
        "Male": "Male",
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown": "Unknown"    };

}
