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
import Availability13 from './Availability13';

/**
* The CourseRole model module.
* @module model/CourseRole
* @version 3900.6.0
*/
export default class CourseRole {
    /**
    * Constructs a new <code>CourseRole</code>.
    * @alias module:model/CourseRole
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CourseRole</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CourseRole} obj Optional instance to populate.
    * @return {module:model/CourseRole} The populated <code>CourseRole</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CourseRole();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('roleId')) {
                obj['roleId'] = ApiClient.convertToType(data['roleId'], 'String');
            }
            if (data.hasOwnProperty('nameForCourses')) {
                obj['nameForCourses'] = ApiClient.convertToType(data['nameForCourses'], 'String');
            }
            if (data.hasOwnProperty('nameForOrganizations')) {
                obj['nameForOrganizations'] = ApiClient.convertToType(data['nameForOrganizations'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('custom')) {
                obj['custom'] = ApiClient.convertToType(data['custom'], 'Boolean');
            }
            if (data.hasOwnProperty('actAsInstructor')) {
                obj['actAsInstructor'] = ApiClient.convertToType(data['actAsInstructor'], 'Boolean');
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability13.constructFromObject(data['availability']);
            }
        }
        return obj;
    }

    /**
    * The primary ID of the course role
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The identifier used to assign the course role to a course enrollment.  For system defined course roles, this value will be one of Student, Instructor, TeachingAssistant, CourseBuilder, Grader or Guest  For custom course roles, this will be the roleId entered during the creation of the role. Allowed characters for the custom course roleId's are any letter, number, period, underscore and dash.
    * @member {String} roleId
    */
    'roleId' = undefined;
    /**
    * The role name presented to users when the course role is associated with a course.
    * @member {String} nameForCourses
    */
    'nameForCourses' = undefined;
    /**
    * The role name presented to users when the course role is associated with an organization.
    * @member {String} nameForOrganizations
    */
    'nameForOrganizations' = undefined;
    /**
    * Optional description of the course role
    * @member {String} description
    */
    'description' = undefined;
    /**
    * False if the course role exists as a system generated course role. True if the course role was created by an admin user.  Both custom and system generated course roles can be modified, but only custom course roles can be deleted.
    * @member {Boolean} custom
    */
    'custom' = undefined;
    /**
    * Implies access to unavailable courses, display in the Course catalog, and receiving email enrollment requests
    * @member {Boolean} actAsInstructor
    */
    'actAsInstructor' = undefined;
    /**
    * @member {module:model/Availability13} availability
    */
    'availability' = undefined;




}