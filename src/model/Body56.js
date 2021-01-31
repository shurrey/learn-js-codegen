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
import Availability9 from './Availability9';

/**
* The Body56 model module.
* @module model/Body56
* @version 3900.6.0
*/
export default class Body56 {
    /**
    * Constructs a new <code>Body56</code>.
    * @alias module:model/Body56
    * @class
    * @param externalId {String} An externally-defined unique ID for the term.  Formerly known as 'sourcedidId'.
    * @param name {String} The name of the term.
    */

    constructor(externalId, name) {
        
        
        this['externalId'] = externalId;
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>Body56</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body56} obj Optional instance to populate.
    * @return {module:model/Body56} The populated <code>Body56</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body56();
                        
            
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('dataSourceId')) {
                obj['dataSourceId'] = ApiClient.convertToType(data['dataSourceId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability9.constructFromObject(data['availability']);
            }
        }
        return obj;
    }

    /**
    * An externally-defined unique ID for the term.  Formerly known as 'sourcedidId'.
    * @member {String} externalId
    */
    'externalId' = undefined;
    /**
    * The ID of the data source associated with this term.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".
    * @member {String} dataSourceId
    */
    'dataSourceId' = undefined;
    /**
    * The name of the term.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The description of the term. This field supports BbML; see <a target='_blank' href='https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html'>here</a> for more information.
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {module:model/Availability9} availability
    */
    'availability' = undefined;




}