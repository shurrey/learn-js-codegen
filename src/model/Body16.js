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
import Availability4 from './Availability4';

/**
* The Body16 model module.
* @module model/Body16
* @version 3900.6.0
*/
export default class Body16 {
    /**
    * Constructs a new <code>Body16</code>.
    * @alias module:model/Body16
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body16</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body16} obj Optional instance to populate.
    * @return {module:model/Body16} The populated <code>Body16</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body16();
                        
            
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability4.constructFromObject(data['availability']);
            }
        }
        return obj;
    }

    /**
    * The title of this Announcement.
    * @member {String} title
    */
    'title' = undefined;
    /**
    * The message body of the Announcement. This field supports BbML; see <a target='_blank' href='https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html'>here</a> for more information.
    * @member {String} body
    */
    'body' = undefined;
    /**
    * An indication of whether or not the Announcement is in draft status.
    * @member {Boolean} draft
    */
    'draft' = undefined;
    /**
    * @member {module:model/Availability4} availability
    */
    'availability' = undefined;




}
