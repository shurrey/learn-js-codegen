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
import Availability1 from './Availability1';

/**
* The Announcement model module.
* @module model/Announcement
* @version 3900.6.0
*/
export default class Announcement {
    /**
    * Constructs a new <code>Announcement</code>.
    * @alias module:model/Announcement
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Announcement</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Announcement} obj Optional instance to populate.
    * @return {module:model/Announcement} The populated <code>Announcement</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Announcement();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability1.constructFromObject(data['availability']);
            }
            if (data.hasOwnProperty('showAtLogin')) {
                obj['showAtLogin'] = ApiClient.convertToType(data['showAtLogin'], 'Boolean');
            }
            if (data.hasOwnProperty('showInCourses')) {
                obj['showInCourses'] = ApiClient.convertToType(data['showInCourses'], 'Boolean');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Primary key identifier
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The title of this System Announcement.
    * @member {String} title
    */
    'title' = undefined;
    /**
    * The message body of the System Announcement. This field supports BbML; see <a target='_blank' href='https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html'>here</a> for more information.
    * @member {String} body
    */
    'body' = undefined;
    /**
    * @member {module:model/Availability1} availability
    */
    'availability' = undefined;
    /**
    * Whether this System Announcement should be displayed on the login page.
    * @member {Boolean} showAtLogin
    */
    'showAtLogin' = undefined;
    /**
    * Whether this System Announcement should be displayed on courses.
    * @member {Boolean} showInCourses
    */
    'showInCourses' = undefined;
    /**
    * The date that the System Announcement was created.
    * @member {Date} created
    */
    'created' = undefined;
    /**
    * @member {Date} modified
    */
    'modified' = undefined;




}
