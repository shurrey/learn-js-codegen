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
import Availability6 from './Availability6';
import Enrollment1 from './Enrollment1';

/**
* The Body37 model module.
* @module model/Body37
* @version 3900.6.0
*/
export default class Body37 {
    /**
    * Constructs a new <code>Body37</code>.
    * @alias module:model/Body37
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body37</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body37} obj Optional instance to populate.
    * @return {module:model/Body37} The populated <code>Body37</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body37();
                        
            
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability6.constructFromObject(data['availability']);
            }
            if (data.hasOwnProperty('enrollment')) {
                obj['enrollment'] = Enrollment1.constructFromObject(data['enrollment']);
            }
        }
        return obj;
    }

    /**
    * An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create.
    * @member {String} externalId
    */
    'externalId' = undefined;
    /**
    * The title of the group.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html'>here</a> for more information.
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {module:model/Availability6} availability
    */
    'availability' = undefined;
    /**
    * @member {module:model/Enrollment1} enrollment
    */
    'enrollment' = undefined;




}
